import { FC } from 'react'
import { Text, View } from 'react-native'

import { useTypedNavigation } from '@/hooks/useTypedNavigation'
import { useTypedRoute } from '@/hooks/useTypedRoute'

const MovieItem: FC = () => {
	const { navigate } = useTypedNavigation()
	const { name } = useTypedRoute()

	const isFavoritePage = name === 'Favorites'

	return (
		<View>
			<Text>MovieItem</Text>
		</View>
	)
}
export default MovieItem
