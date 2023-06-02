import { AdminNavigation, Layout } from '@/components/ui'
import AdminTableHeader from '@/components/ui/admin/table-header/AdminHeader'
import { FC } from 'react'

import { useUsers } from './useUsers'
import AdminTable from '@/components/ui/admin/table/AdminTable'

const UsersList: FC = () => {
	const {control, deleteAsync, isLoading, data} = useUsers()
	return (
		<Layout isHasPadding>
			<AdminNavigation title='UserList'/>
			<AdminTableHeader control={control}/>
			<AdminTable tableItems={data} isLoading={isLoading} headerItems={['Email', 'Date register']} removeHandler={deleteAsync} />
		</Layout>
	)
}
export default UsersList
