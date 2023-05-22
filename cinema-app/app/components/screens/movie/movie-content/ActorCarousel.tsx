import { useNavigation } from '@react-navigation/native'
import { FC } from 'react'
import { Text, View } from 'react-native'

import { IActor } from '@/shared/types/actor.interface'

const ActorCarousel: FC<{ actors: IActor[] }> = ({ actors }) => {
	const { navigate } = useNavigation()

	return (
		<View>
			<Text>ActorCarousel</Text>
		</View>
	)
}
export default ActorCarousel
