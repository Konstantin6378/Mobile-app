import { FC } from 'react'

import { AdminNavigation, Layout } from '@/components/ui'
import AdminTableHeader from '@/components/ui/admin/table-header/AdminHeader'
import AdminTable from '@/components/ui/admin/table/AdminTable'

import { useGenres } from './useGenres'

const GenresList: FC = () => {
	const { control, deleteAsync, isLoading, data, createAsync } = useGenres()
	return (
		<Layout isHasPadding>
			<AdminNavigation title='Genres' />
			<AdminTableHeader control={control} onPress={createAsync}/>
			<AdminTable
				tableItems={data}
				isLoading={isLoading}
				headerItems={['Name',  'Slug']}
				removeHandler={deleteAsync}
			/>
		</Layout>
	)
}
export default GenresList
