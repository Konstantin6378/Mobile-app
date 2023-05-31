import { useQuery } from '@tanstack/react-query'
import { FC } from 'react'
import { Text, View } from 'react-native'
import Animated from 'react-native-reanimated'

import { Loader } from '@/components/ui'

import { useScaleOnMount } from '@/hooks/useScaleOnMount'

import { AdminService } from '@/services/admin.service'
import { UserService } from '@/services/user.service'

const CountUsers: FC = () => {
	const { isLoading, data } = useQuery(['get count users'], () =>
		AdminService.getCountUsers()
	)

	const { styleAnimation } = useScaleOnMount()
	return (
		<View className='items-center justify-center text-center w-full border border-2 border-gray-500 rounded-2xl p-5'>
			{isLoading ? (
				<Loader />
			) : (
				<Animated.Text
					className='text-7xl mb-1 font-medium text-white'
					style={styleAnimation}
				>
					{data}
				</Animated.Text>
			)}
		</View>
	)
}
export default CountUsers
