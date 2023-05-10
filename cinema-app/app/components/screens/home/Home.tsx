import { FC } from 'react'
import { Pressable, Text, View } from 'react-native'

import { Heading, Layout } from '@/components/ui'

import { useTypedNavigation } from '@/hooks/useTypedNavigation'

const Home: FC = () => {
	const { navigate } = useTypedNavigation()
	return (
		<Layout isHasPadding>
			<Heading title={'Home'} />

			<Pressable
				onPress={() => navigate('Auth')}
				className='opacity-40 items-center flex-row justify-end'
			>
				<Text className='text-white text-lg ml-2' style={{ color: 'white' }}>
					Go to login
				</Text>
			</Pressable>
		</Layout>
	)
}
export default Home
