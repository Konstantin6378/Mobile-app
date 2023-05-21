import { FC } from 'react'
import { Text, View } from 'react-native'

import { Layout, Loader } from '@/components/ui'

import { useMovie } from './useMovie'

const Movie: FC = () => {
	const { movie, isLoading } = useMovie()
	if (isLoading) return <Loader />
	if (!movie) return null
	return (
		<Layout style={{ paddingTop: 0 }}>
			<Text>Movie</Text>
		</Layout>
	)
}
export default Movie
