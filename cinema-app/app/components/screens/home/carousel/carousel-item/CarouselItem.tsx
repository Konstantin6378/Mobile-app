import { FC } from 'react'
import { Text, View } from 'react-native'

import { IMovie } from '@/shared/types/movie.interface'

const CarouselItem: FC<{ movie: IMovie }> = () => {
	return (
		<View>
			<Text>CarouselItem</Text>
		</View>
	)
}
export default CarouselItem
