import { FC } from 'react'
import { Pressable, Text, View } from 'react-native'

import { useTypedNavigation } from '@/hooks/useTypedNavigation'

import { IMovie } from '@/shared/types/movie.interface'

const CarouselItem: FC<{ movie: IMovie }> = () => {
	const { navigate } = useTypedNavigation()

	return (
		<View>
			<Pressable onPress={() => navigate('Movie', {})}></Pressable>
		</View>
	)
}
export default CarouselItem
