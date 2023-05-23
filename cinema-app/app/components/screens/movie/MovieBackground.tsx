import { LinearGradient } from 'expo-linear-gradient'
import { FC } from 'react'
import { Animated, Image, StyleSheet, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { getMediaSource } from '@/utils/getMediaSource'

import { IMovieComponent } from './movie-page.interface'
import { inputRange } from './movie.constant'

const MovieBackground: FC<IMovieComponent> = ({ movie, y }) => {
	const { top } = useSafeAreaInsets()
	const scale = y.interpolate({
		inputRange,
		outputRange: []
	})
	return (
		<Animated.View style={StyleSheet.absoluteFillObject}>
			<Image
				style={StyleSheet.absoluteFill}
				resizeMode='cover'
				source={getMediaSource(movie.poster)}
			/>
			<LinearGradient
				style={StyleSheet.absoluteFill}
				start={[0, 0.3]}
				end={[0, 0.8]}
				colors={['transparent', 'rgba(0,0,0,0.2', '#090909']}
			/>
		</Animated.View>
	)
}
export default MovieBackground
