import { useQuery } from '@tanstack/react-query'

import { ITableItem } from '@/components/ui/admin/table/admin-table.interface'

import { useTypedNavigation } from '@/hooks/useTypedNavigation'

import { UserService } from '@/services/user.service'

import { useSearchForm } from '../../search/useSearchForm'

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
}
