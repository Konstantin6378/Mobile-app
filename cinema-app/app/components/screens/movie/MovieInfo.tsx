import { FC } from 'react'
import { Text, View } from 'react-native'

import { IMovie } from '@/shared/types/movie.interface'

interface IMovieInfo {
	movie: IMovie
}

const MovieInfo: FC<IMovieInfo> = ({ movie }) => {
	return (
		<View>
			<Text>MovieInfo</Text>
		</View>
	)
}
export default MovieInfo
