import { FC } from 'react'
import { Pressable, Text, View } from 'react-native'

import { useTypedNavigation } from '@/hooks/useTypedNavigation'

import { IMovie } from '@/shared/types/movie.interface'

const CarouselItem: FC<{ movie: IMovie }> = ({ movie }) => {
	const { navigate } = useTypedNavigation()

	return (
		<View>
			<Pressable
				onPress={() => navigate('Movie', { slug: movie.slug })}
			></Pressable>
		</View>
	)
}
export default CarouselItem
