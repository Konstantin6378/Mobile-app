import { FC } from 'react'
import { Pressable, Text, View } from 'react-native'

import { useTypedNavigation } from '@/hooks/useTypedNavigation'
import { useTypedRoute } from '@/hooks/useTypedRoute'

const MovieItem: FC = () => {
	const { navigate } = useTypedNavigation()
	const { name } = useTypedRoute()

	const isFavoritePage = name === 'Favorites'

	// Animations

	return (
		<Pressable>
			<Text>MovieItem</Text>
		</Pressable>
	)
}
export default MovieItem
