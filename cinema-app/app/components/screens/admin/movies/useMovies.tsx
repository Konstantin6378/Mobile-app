import { useMutation, useQuery } from '@tanstack/react-query'
import { useMemo } from 'react'
import { Toast } from 'react-native-toast-message/lib/src/Toast'

import { ITableItem } from '@/components/ui/admin/table/admin-table.interface'

import { useTypedNavigation } from '@/hooks/useTypedNavigation'

import {MovieService } from '@/services/movie.service'

import { useSearchForm } from '../../search/useSearchForm'

export const useMovies = () => {
	const { control, debouncedSearch } = useSearchForm()

	const { navigate } = useTypedNavigation()

	const queryData = useQuery(
		['search movies', debouncedSearch],
		() =>MovieService.getAll(debouncedSearch),
		{
			select: data =>
				data.map(
					(movie): ITableItem => ({
						_id: movie._id,
						editNavigate: () =>
							navigate('MovieEdit', {
								id: movie._id
							}),
						items: [
							movie.title,
                            `${movie.genres[0].name} ${movie.genres.length > 1 ? '...' : ''}`,
                            String(movie.rating)
                        ]
					})
				)
		}
	)
	const { mutateAsync: createAsync } = useMutation(
		['create movie'],
		() =>MovieService.create(),
		{
			onSuccess: async (_id) => {
				Toast.show({
					type: 'success',
					text1: 'Delete movie',
					text2: 'delete was successful'
				})
				navigate('MovieEdit', {
                    id: _id
                })
			}
		}
	)
	const { mutateAsync: deleteAsync } = useMutation(
		['delete movie'],
		(movieId: string) =>MovieService.delete(movieId),
		{
			onSuccess: async () => {
				Toast.show({
					type: 'success',
					text1: 'Delete movie',
					text2: 'delete was successful'
				})
				await queryData.refetch()
			}
		}
	)

	return useMemo(
		() => ({ ...queryData, control, deleteAsync, createAsync }),
		[queryData, deleteAsync, createAsync]
	)
}
