import { FC } from 'react'

import { AdminNavigation, Layout } from '@/components/ui'
import AdminTableHeader from '@/components/ui/admin/table-header/AdminHeader'
import AdminTable from '@/components/ui/admin/table/AdminTable'

import { useGenres } from './useGenres'

const GenresList: FC = () => {
	const { control, deleteAsync, isLoading, data } = useGenres()
	return (
		<Layout isHasPadding>
			<AdminNavigation title='Genres' />
			<AdminTableHeader control={control} />
			<AdminTable
				tableItems={data}
				isLoading={isLoading}
				headerItems={['Title', 'Main genre', 'Rating']}
				removeHandler={deleteAsync}
			/>
		</Layout>
	)
}
export default GenresList
