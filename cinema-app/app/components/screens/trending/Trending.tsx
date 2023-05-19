import { FC } from 'react'
import { Text, View } from 'react-native'

import { Heading, Layout, MovieCatalog } from '@/components/ui'

const Trending: FC = () => {
	return (
		<Layout isHasPadding>
			<Heading title={'Trending'} />
			<MovieCatalog title='Trending' />
		</Layout>
	)
}
export default Trending
