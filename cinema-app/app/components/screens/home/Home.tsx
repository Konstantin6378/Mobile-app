import { FC } from 'react'
import { Pressable, Text, View } from 'react-native'

import { Heading } from '@/components/ui'

import { useTypedNavigation } from '@/hooks/useTypedNavigation'

const Home: FC = () => {
	const { navigate } = useTypedNavigation()
	return (
		<View className='mt-20 px-3'>
			<Heading title={'Home'} />

			<Pressable
				onPress={() => navigate('Auth')}
				className='opacity-40 items-center flex-row justify-end'
			>
				<Text className='text-white text-lg ml-2' style={{ color: 'white' }}>
					Go to login
				</Text>
			</Pressable>
		</View>
	)
}
export default Home
