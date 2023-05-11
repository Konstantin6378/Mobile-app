import { AntDesign } from '@expo/vector-icons'
import { FC } from 'react'
import { Text, View } from 'react-native'

import { getColor } from '@/config/colors.config'

interface IRating {
	size?: number
	rating: number
}

const Rating: FC<IRating> = ({ size = 20, rating }) => {
	return (
		<View className='flex-row items-center'>
			<AntDesign name='star' size={size} color={getColor('yellow')} />
			<Text>Rating</Text>
		</View>
	)
}
export default Rating
