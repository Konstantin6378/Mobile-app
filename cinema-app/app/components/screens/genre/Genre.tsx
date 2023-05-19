import { FC } from 'react'

import { Heading, Layout, Loader, MovieCatalog } from '@/components/ui'
import NotFound from '@/components/ui/NotFound'

import { useGenre } from './useGenre'

const Genre: FC = () => {
	const { isLoading, movies, genre } = useGenre()
	if (isLoading) return <Loader />
	return (
		<Layout isHasPadding>
			<Heading title={'Genre'} />
			{genre ? (
				<MovieCatalog
					title={genre.name}
					movies={movies}
					description={genre.description}
					isBackButton
				/>
			) : (
				<NotFound />
			)}
		</Layout>
	)
}
export default Genre
