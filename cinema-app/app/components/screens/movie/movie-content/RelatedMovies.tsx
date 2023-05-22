import { FC } from 'react'
import { Text, View } from 'react-native'

interface IRelatedMovies {
	genreIds: string[]
	currentMovieId: string
}

const RelatedMovies: FC<IRelatedMovies> = ({ currentMovieId, genreIds }) => {
	return (
		<View>
			<Text>RelatedMovies</Text>
		</View>
	)
}
export default RelatedMovies
