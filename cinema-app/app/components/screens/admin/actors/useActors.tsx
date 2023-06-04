import { useMutation, useQuery } from '@tanstack/react-query'
import { useMemo } from 'react'
import { Toast } from 'react-native-toast-message/lib/src/Toast'

import { ITableItem } from '@/components/ui/admin/table/admin-table.interface'

import { useTypedNavigation } from '@/hooks/useTypedNavigation'

import {ActorService } from '@/services/actor.service'

import { useSearchForm } from '../../search/useSearchForm'

export const useUsers = () => {
	const { control, debouncedSearch } = useSearchForm()

	const { navigate } = useTypedNavigation()

	const queryData = useQuery(
		['search actors', debouncedSearch],
		() =>ActorService.getAll(debouncedSearch),
		{
			select: data =>
				data.map(
					(actor): ITableItem => ({
						_id: actor._id,
						editNavigate: () =>
							navigate('UserEdit', {
								id: actor._id
							}),
						items: [
							actor.title,
                            `${actor.genres[0].name} ${actor.genres.length > 1 ? '...' : ''}`,
                            String(actor.rating)
                        ]
					})
				)
		}
	)
	const { mutateAsync: createAsync } = useMutation(
		['create actor'],
		() =>ActorService.create(),
		{
			onSuccess: async (_id) => {
				Toast.show({
					type: 'success',
					text1: 'Delete actor',
					text2: 'delete was successful'
				})
				navigate('ActorEdit', {
                    id: _id
                })
			}
		}
	)
	const { mutateAsync: deleteAsync } = useMutation(
		['delete actor'],
		(actorId: string) =>ActorService.delete(actorId),
		{
			onSuccess: async () => {
				Toast.show({
					type: 'success',
					text1: 'Delete actor',
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
