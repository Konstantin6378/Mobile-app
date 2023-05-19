import { FC } from 'react'

import { Heading, Layout, Loader, MovieCatalog } from '@/components/ui'

import { useGenre } from './useGenre'

const Genre: FC = () => {
	const { isLoading, movies } = useGenre()
	if (isLoading) return <Loader />
	return (
		<Layout isHasPadding>
			<Heading title={'Genre'} />
			<MovieCatalog
				title='Genre'
				movies={movies}
				description='Genre movies in excellent quality: legal, safe, without ads'
			/>
		</Layout>
	)
}
export default Genre
