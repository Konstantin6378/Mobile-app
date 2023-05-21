import { FC } from 'react'
import { Animated, Image, StyleSheet, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { IMovie } from '@/shared/types/movie.interface'

import { getMediaSource } from '@/utils/getMediaSource'

interface IMovieBackground {
	movie: IMovie
}

const MovieBackground: FC<IMovieBackground> = ({ movie }) => {
	const { top } = useSafeAreaInsets()
	return (
		<Animated.View style={StyleSheet.absoluteFillObject}>
			<Image
				style={StyleSheet.absoluteFill}
				resizeMode='cover'
				source={getMediaSource(movie.poster)}
			/>
		</Animated.View>
	)
}
export default MovieBackground
