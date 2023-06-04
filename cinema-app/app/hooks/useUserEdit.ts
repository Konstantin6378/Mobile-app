import { IUserEditInput } from "@/shared/types/user.interface";
import { UseFormSetValue } from "react-hook-form";
import { useTypedRoute } from "./useTypedRoute";
import { useMutation, useQuery } from "@tanstack/react-query";
import { UserService } from "@/services/user.service";
import { Toast } from "react-native-toast-message/lib/src/Toast";

export const useUserEdit = (setValue: UseFormSetValue<IUserEditInput>) => {
    const {params} = useTypedRoute<'UserEdit'>()
    const userId= params.id

    const {isLoading} = useQuery(['get user', userId], () => UserService.getById(userId), {
        onSuccess(data){
            setValue('email', data.email)
            setValue('isAdmin', data.isAdmin)
        },
        enabled: !!userId
    })

    const {} = useMutation(['update user'], (data:IUserEditInput) => UserService.update(userId,data), 
    {
        onSuccess() {
            Toast.show({
                type: 'success',
                text1: 'Updated user',
                text2: 'update was successful'
            })
        }
    })
}