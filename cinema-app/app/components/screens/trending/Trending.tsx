import { FC } from 'react'
import { Text, View } from 'react-native'

import { Heading } from '@/components/ui'

const Trending: FC = () => {
	return (
		<View className='mt-20 px-3'>
			<Heading title={'Trending'} />
			<Text>Trending</Text>
		</View>
	)
}
export default Trending
