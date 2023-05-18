import { FC } from 'react'
import { Pressable, Text, View } from 'react-native'
import Animated from 'react-native-reanimated'

import { useTypedNavigation } from '@/hooks/useTypedNavigation'
import { useTypedRoute } from '@/hooks/useTypedRoute'

import { IMovie } from '@/shared/types/movie.interface'

import { useMovieItemAnimation } from './useMovieItemAnimation'

const ReanimatedPressable = Animated.createAnimatedComponent(Pressable)

interface IMovieItem {
	index: number
	className?: string
	movie: IMovie
}

const MovieItem: FC<IMovieItem> = ({ index, movie, className }) => {
	const { navigate } = useTypedNavigation()
	const { name } = useTypedRoute()

	const isFavoritePage = name === 'Favorites'

	const { styleAnimation } = useMovieItemAnimation(index)
	// Animations

	return (
		<ReanimatedPressable>
			<Text>MovieItem</Text>
		</ReanimatedPressable>
	)
}
export default MovieItem
