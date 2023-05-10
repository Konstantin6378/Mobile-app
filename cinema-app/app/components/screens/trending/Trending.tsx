import { FC } from 'react'
import { Text, View } from 'react-native'

import { Heading, Layout } from '@/components/ui'

const Trending: FC = () => {
	return (
		<Layout isHasPadding>
			<Heading title={'Trending'} />
			<Text>Trending</Text>
		</Layout>
	)
}
export default Trending
