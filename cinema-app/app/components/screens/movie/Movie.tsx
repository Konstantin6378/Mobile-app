import { FC } from 'react'
import { Text, View } from 'react-native'

import { Layout, Loader } from '@/components/ui'

import MovieHeader from './MovieHeader'
import MovieInfo from './MovieInfo'
import { useMovie } from './useMovie'

const Movie: FC = () => {
	const { movie, isLoading } = useMovie()
	if (isLoading) return <Loader />
	if (!movie) return null
	return (
		<Layout style={{ paddingTop: 0 }}>
			<MovieHeader movie={movie} />
			<MovieInfo movie={movie} />
		</Layout>
	)
}
export default Movie
