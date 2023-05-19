import { FC } from 'react'
import { Text, View } from 'react-native'

import { Heading, Layout, Loader, MovieCatalog } from '@/components/ui'

import { useTrending } from './useTrending'

const Trending: FC = () => {
	const { isLoading, movies } = useTrending()
	if (isLoading) return <Loader />
	return (
		<Layout isHasPadding>
			<Heading title={'Trending'} />
			<MovieCatalog
				title='Trending'
				movies={movies}
				description='Trending movies in excellent quality: legal, safe, without ads'
			/>
		</Layout>
	)
}
export default Trending
