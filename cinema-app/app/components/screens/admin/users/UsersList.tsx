import { AdminNavigation, Layout } from '@/components/ui'
import AdminTableHeader from '@/components/ui/admin/table-header/AdminTableHeader'
import { FC } from 'react'
import { Text, View } from 'react-native'

const UsersList: FC = () => {
	const {} = useUsers()
	return (
		<Layout isHasPadding>
			<AdminNavigation title='UserList'/>
			<AdminTableHeader control={contol}/>
		</Layout>
	)
}
export default UsersList
