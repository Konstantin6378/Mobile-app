import { FC, useRef } from 'react'

import { Heading, Layout, Loader, MovieCatalog } from '@/components/ui'
import NotFound from '@/components/ui/NotFound'

import { useGenre } from './useGenre'
import { ScrollView, Animated } from 'react-native';
import { useScrollToTop } from '@react-navigation/native'

const Genre: FC = () => {
	const { isLoading, movies, genre } = useGenre()
	const ref = useRef<ScrollView>(null)
	useScrollToTop(ref)
	if (isLoading) return <Loader />
	return (
		<Layout isHasPadding>
			<Heading title={'Genre'} />
			<Animated.ScrollView ref={ref}
			showsVerticalScrollIndicator={false}
			scrollEventThrottle={16}>
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
			</Animated.ScrollView>
		</Layout>
	)
}
export default Genre
