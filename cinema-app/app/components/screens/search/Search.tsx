import { FC } from 'react'
import { Text, View } from 'react-native'

import { Heading } from '@/components/ui'

const Search: FC = () => {
	return (
		<View className='mt-20 px-3'>
			<Heading title={'Search'} />
			<Text>Search</Text>
		</View>
	)
}
export default Search
