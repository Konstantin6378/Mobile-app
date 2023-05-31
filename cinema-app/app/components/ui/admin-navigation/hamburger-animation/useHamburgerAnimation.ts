import { useAnimatedStyle, useDerivedValue, withTiming } from 'react-native-reanimated'

export const useHamburgerAnimation = (isShow: boolean) => {
	const widthSecondLineAnimation = useAnimatedStyle(
		() => ({
			width: withTiming(isShow ? 0 : 24)
		}),
		[isShow]
	)

	const rotate = useDerivedValue(() => withTiming(isShow ? 45 : 0), [isShow])

	const transformFirstLineAnimation = useAnimatedStyle(
		() => ({
			transform: [
        {
          rotate: `${rotate.value}deg`
        }
      ]
		}),
		[isShow]
	)

	const widthSecondLineAnimation = useAnimatedStyle(
		() => ({
			width: withTiming(isShow ? 0 : 24)
		}),
		[isShow]
	)
}
