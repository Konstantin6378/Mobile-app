import { useMemo } from 'react'
import { Animated } from 'react-native'

import { ITEM_SIZE } from '../carousel.constants'

export const useItemAnimation = (index: number, scrollX: Animated.Value) => {
	const inputRange = useMemo(
		() => [(index - 2) * ITEM_SIZE, (index - 1) * ITEM_SIZE, index * ITEM_SIZE],
		[index]
	)
}
