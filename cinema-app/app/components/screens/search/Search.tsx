import { FC } from 'react'
import { Text, View } from 'react-native'

import { Heading, Layout } from '@/components/ui'

const Search: FC = () => {
	return (
		<Layout isHasPadding>
			<Heading title={'Search'} />
			<Text>Search</Text>
		</Layout>
	)
}
export default Search
