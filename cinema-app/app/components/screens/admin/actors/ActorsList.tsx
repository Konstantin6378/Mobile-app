import { FC } from 'react'

import { AdminNavigation, Layout } from '@/components/ui'
import AdminTableHeader from '@/components/ui/admin/table-header/AdminHeader'
import AdminTable from '@/components/ui/admin/table/AdminTable'

import { useActors } from './useActors'

const ActorsList: FC = () => {
	const { control, deleteAsync, isLoading, data, createAsync } = useActors()
	return (
		<Layout isHasPadding>
			<AdminNavigation title='Actors' />
			<AdminTableHeader control={control} onPress={createAsync}/>
			<AdminTable
				tableItems={data}
				isLoading={isLoading}
				headerItems={['Name',  'Count movies']}
				removeHandler={deleteAsync}
			/>
		</Layout>
	)
}
export default ActorsList
