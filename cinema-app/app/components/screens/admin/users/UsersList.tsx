import { AdminNavigation, Layout } from '@/components/ui'
import { FC } from 'react'
import { Text, View } from 'react-native'

const UsersList: FC = () => {
	return (
		<Layout isHasPadding>
			<AdminNavigation title='UserList'/>
		</Layout>
	)
}
export default UsersList
