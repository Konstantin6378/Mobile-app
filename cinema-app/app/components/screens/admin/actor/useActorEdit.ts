import { IActorEditInput } from "@/shared/types/actor.interface";
import { SubmitHandler, UseFormSetValue } from "react-hook-form";
import { useTypedRoute } from "@/hooks/useTypedRoute";
import { useMutation, useQuery,  useQueryClient } from '@tanstack/react-query';
import { ActorService } from "@/services/actor.service";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import { getKeys } from "@/utils/getKeys";

export const useActorEdit = (setValue: UseFormSetValue<IActorEditInput>) => {
    const {params} = useTypedRoute<'ActorEdit'>()
    const actorId= params.id

    const {isLoading} = useQuery(['get actor', actorId], () => ActorService.getById(actorId), {
        onSuccess(data) {
            // Object.entries<string>(data).find(([key, value]) => {})
            getKeys(data).forEach(key => {
                setValue(key, data[key])
            })
        },
        enabled: !!actorId
    })

    const queryClient = useQueryClient()

    const {mutateAsync} = useMutation(['update actor'], (data:IActorEditInput) => ActorService.update(actorId, data), 
    {
        async onSuccess() {
            Toast.show({
                type: 'success',
                text1: 'Updated actor',
                text2: 'update was successful'
            })

            await queryClient.invalidateQueries(['search actors'])
        }
    })
    const onSubmit: SubmitHandler<IActorEditInput> = async data => {
        await mutateAsync(data)
    }
    return{onSubmit, isLoading}
}