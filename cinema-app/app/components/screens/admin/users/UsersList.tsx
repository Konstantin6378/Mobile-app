import { AdminNavigation, Layout } from '@/components/ui'
import AdminTableHeader from '@/components/ui/admin/table-header/AdminTableHeader'
import { FC } from 'react'
import { Text, View } from 'react-native'
import { useUsers } from './useUsers'

const UsersList: FC = () => {
	const {control, deleteItemAsync, isLoading, data} = useUsers()
	return (
		<Layout isHasPadding>
			<AdminNavigation title='UserList'/>
			<AdminTableHeader control={control}/>
		</Layout>
	)
}
export default UsersList
