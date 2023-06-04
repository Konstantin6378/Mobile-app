import { IUserEditInput } from "@/shared/types/user.interface";
import { UseFormSetValue } from "react-hook-form";
import { useTypedRoute } from "./useTypedRoute";
import { useQuery } from "@tanstack/react-query";
import { UserService } from "@/services/user.service";

export const useUserEdit = (setValue: UseFormSetValue<IUserEditInput>) => {
    const {params} = useTypedRoute<'UserEdit'>()
    const userId= params.id

    const {isLoading} = useQuery(['get user', userId], () => UserService.getById(userId), {
        onSuccess(data){
            setValue('email', data.email)
            setValue('isAdmin', data.isAdmin)
        }
    })
}