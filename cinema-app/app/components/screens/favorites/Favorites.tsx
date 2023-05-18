import { FC } from 'react'
import { Text, View } from 'react-native'

import { Layout, Loader, MovieCatalog } from '@/components/ui'
import Heading from '@/components/ui/heading/Heading'

import { useFavorites } from './useFavorites'

const Favorites: FC = () => {
	const { isLoading, favoriteMovies } = useFavorites()

	if (isLoading) return <Loader />

	return (
		<Layout isHasPadding>
			<MovieCatalog title='Favorites' movies={favoriteMovies} />
		</Layout>
	)
}
export default Favorites
