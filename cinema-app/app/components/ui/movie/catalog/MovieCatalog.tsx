import { FC } from 'react'
import { Text, View } from 'react-native'

import { useTypedNavigation } from '@/hooks/useTypedNavigation'

import { IMovieCatalog } from './movie-catalog.interface'

const MovieCatalog: FC<IMovieCatalog> = ({
	description,
	isBackButton,
	movies,
	title
}) => {
	const { goBack } = useTypedNavigation()
	return (
		<View>
			<Text>MovieCatalog</Text>
		</View>
	)
}
export default MovieCatalog
