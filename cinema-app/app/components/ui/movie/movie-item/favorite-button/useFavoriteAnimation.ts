import {
	Extrapolate,
	interpolate,
	useAnimatedStyle,
	useSharedValue
} from 'react-native-reanimated'

export const useFavoriteAnimation = () => {
	const liked = useSharedValue(0)

	const outlineStele = useAnimatedStyle(() => ({
		transform: [
			{
				scale: interpolate(liked.value, [0, 1], [1, 0], Extrapolate.CLAMP)
			}
		]
	}))
}
