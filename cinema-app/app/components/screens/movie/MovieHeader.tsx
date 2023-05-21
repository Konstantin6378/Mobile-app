import { FC } from 'react'
import { Text, View } from 'react-native'

import { useTypedNavigation } from '@/hooks/useTypedNavigation'

import { IMovie } from '@/shared/types/movie.interface'

interface IMovieHeader {
	movie: IMovie
}

const MovieHeader: FC<IMovieHeader> = ({ movie }) => {
	const { goBack } = useTypedNavigation()
	return (
		<View>
			<Text>MovieHeader</Text>
		</View>
	)
}
export default MovieHeader
