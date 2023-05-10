import { FC } from 'react'
import { Text, View } from 'react-native'

import { Layout } from '@/components/ui'
import Heading from '@/components/ui/heading/Heading'

const Favorites: FC = () => {
	return (
		<Layout isHasPadding>
			<Heading title={'Favorite'} />

			<Text>Favorites</Text>
		</Layout>
	)
}
export default Favorites
