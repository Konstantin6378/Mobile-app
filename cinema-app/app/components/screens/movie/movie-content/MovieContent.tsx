import { useScrollToTop } from '@react-navigation/native'
import { FC, useRef } from 'react'
import { Animated, ScrollView, Text } from 'react-native'

import { IMovie } from '@/shared/types/movie.interface'

import MovieInfo from './MovieInfo'

interface IMovieContent {
	movie: IMovie
}

const MovieContent: FC = () => {
	const ref = useRef<ScrollView>(null)
	useScrollToTop(ref)

	return (
		<Animated.ScrollView
			ref={ref}
			showsVerticalScrollIndicator={false}
			scrollEventThrottle={16}
		>
			<MovieInfo movie={movie} />
		</Animated.ScrollView>
	)
}
export default MovieContent
