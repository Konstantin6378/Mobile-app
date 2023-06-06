import { FC } from 'react'

import { Heading, Layout, Loader, MovieCatalog } from '@/components/ui'

import { useTrending } from './useTrending'

const Trending: FC = () => {
	const { isLoading, movies } = useTrending()
	if (isLoading) return <Loader />
	return (
		<Layout isHasPadding>
			{<Heading title={'Trending'} /> ? (
				<MovieCatalog
					title='Trending'
					movies={movies}
					description='Trending movies in excellent quality: legal, safe, without ads'
				/>
			) : (
				<Loader />
			)}
		</Layout>
	)
}
export default Trending
