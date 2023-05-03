import { FC } from 'react'
import { Pressable, Text, View } from 'react-native'

import { useTypedNavigation } from '@/hooks/useTypedNavigation'

const Home: FC = () => {
	const { navigate } = useTypedNavigation()
	return (
		<View>
			<Pressable onPress={() => navigate('Auth')}>
				<Text style={{ color: 'white' }}>Go to login</Text>
			</Pressable>
		</View>
	)
}
export default Home
