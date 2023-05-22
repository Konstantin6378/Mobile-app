import { useScrollToTop } from '@react-navigation/native'
import { FC, useRef } from 'react'
import { Animated, ScrollView, Text } from 'react-native'

import { IMovie } from '@/shared/types/movie.interface'

import { IMovieComponent } from '../movie-page.interface'

import MovieInfo from './MovieInfo'

const MovieContent: FC<IMovieComponent> = ({ movie }) => {
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
