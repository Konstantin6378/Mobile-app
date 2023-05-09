import { FC } from 'react'
import { Text, View } from 'react-native'

import Heading from '@/components/ui/heading/Heading'

const Favorites: FC = () => {
	return (
		<View className='mt-20 px-3'>
			<Heading title={'Favorite'} />

			<Text>Favorites</Text>
		</View>
	)
}
export default Favorites
