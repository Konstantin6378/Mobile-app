import { FC } from 'react'

import { AdminNavigation, Layout } from '@/components/ui'
import AdminTableHeader from '@/components/ui/admin/table-header/AdminHeader'
import AdminTable from '@/components/ui/admin/table/AdminTable'

import { useMovies } from './useMovies'

const MoviesList: FC = () => {
	const { control, deleteAsync, isLoading, data } = useMovies()
	return (
		<Layout isHasPadding>
			<AdminNavigation title='Movies' />
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
export default MoviesList
