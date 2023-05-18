import { useEffect } from 'react'
import { useAnimatedStyle, useSharedValue } from 'react-native-reanimated'

export const useMovieItemAnimation = () => {
	const scale = useSharedValue(0.4)
	const opacity = useSharedValue(0)

	useEffect(() => {}, [])

	const styleAnimation = useAnimatedStyle(() => ({
		transform: [{ scale: scale.value }],
		opacity: opacity.value
	}))
	return { styleAnimation }
}
