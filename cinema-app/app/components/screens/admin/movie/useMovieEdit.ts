import { QueryClient, useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { SubmitHandler, UseFormSetValue } from "react-hook-form";
import { Toast } from "react-native-toast-message/lib/src/Toast";



import { useTypedRoute } from "@/hooks/useTypedRoute";



import { IMovieEditInput } from "@/shared/types/movie.interface";



import { MovieService } from "@/services/movie.service";
import { getKeys } from '@/utils/getKeys';


export const useMovieEdit = (setValue: UseFormSetValue<IMovieEditInput>) => {
    const {params} = useTypedRoute<'MovieEdit'>()
    const movieId= params.id

    const { isLoading } = useQuery(
			['get movie', movieId],
			() => MovieService.getById(movieId),
			{
				onSuccess(data) {
                    // Object.entries<string>(data).find(([key, value]) => {})
                    getKeys(data).forEach(key => {
                        setValue(key, data[key])
                    })
                },
				enabled: !!movieId
			}
		)

    const {invalidateQueries} = useQueryClient()

    const {mutateAsync} = useMutation(['update movie'], (data:IMovieEditInput) => MovieService.update(movieId, data), 
    {
        async onSuccess() {
            Toast.show({
                type: 'success',
                text1: 'Updated movie',
                text2: 'update was successful'
            })

            await invalidateQueries(['search movies'])
        }
    })
    const onSubmit: SubmitHandler<IMovieEditInput> = async data => {
        await mutateAsync(data)
    }
    return{onSubmit, isLoading}
}