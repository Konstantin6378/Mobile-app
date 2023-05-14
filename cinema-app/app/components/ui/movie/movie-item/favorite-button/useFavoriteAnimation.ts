import {
	Extrapolate,
	interpolate,
	useAnimatedStyle,
	useSharedValue
} from 'react-native-reanimated'

export const useFavoriteAnimation = () => {
	const liked = useSharedValue(0)

	const outlineStyle = useAnimatedStyle(() => ({
		transform: [
			{
				scale: interpolate(liked.value, [0, 1], [1, 0], Extrapolate.CLAMP)
			}
		]
	}))
	const fillStyle = useAnimatedStyle(() => ({
		transform: [
			{
				scale: liked.value
			}
		],
		opacity: liked.value
	}))

	return { liked, fillStyle, outlineStyle }
}
