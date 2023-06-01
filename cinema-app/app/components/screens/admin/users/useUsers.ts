import { useMutation, useQuery } from '@tanstack/react-query'

import { ITableItem } from '@/components/ui/admin/table/admin-table.interface'

import { useTypedNavigation } from '@/hooks/useTypedNavigation'

import { UserService } from '@/services/user.service'

import { useSearchForm } from '../../search/useSearchForm'
import { Toast } from 'react-native-toast-message/lib/src/Toast'
import { useMemo } from 'react'
import { Control } from 'react-hook-form';
import { deleteItemAsync } from 'expo-secure-store';

export const useUsers = () => {
	const { control, debouncedSearch } = useSearchForm()

	const { navigate } = useTypedNavigation()

	const queryData = useQuery(
		['search users', debouncedSearch],
		() => UserService.getAll(debouncedSearch),
		{
			enabled: !!debouncedSearch,
			select: data =>
				data.map(
					(user): ITableItem => ({
						_id: user._id,
						editNavigate: () =>
							navigate('UserEdit', {
								id: user._id
							}),
						items: [
							user.email,
							new Date(user.createdAt).toLocaleDateString('ru')
						]
					})
				)
		}
	)
    const {mutateAsync: deleteAsync } = useMutation(['delete user'], (userId: string) => 
        UserService.deleteUser(userId), {
            onSuccess: async () => {
                Toast.show({
                    type: 'success',
                    text1: 'Delete user',
                    text2: 'delete was successful'
                })
                await queryData.refetch()
            }
        }

    )

    return useMemo(() => ({...queryData, control, deleteItemAsync}), [queryData,deleteAsync])
}
