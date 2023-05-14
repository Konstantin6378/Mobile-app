import { FC } from 'react'
import { Text, View } from 'react-native'

interface IFavoriteButton {
	movieId: string
	isSmall?: boolean
}

const FavoriteButton: FC<IFavoriteButton> = ({ isSmall, movieId }) => {
	return (
		<View>
			<Text>FavoriteButton</Text>
		</View>
	)
}
export default FavoriteButton
