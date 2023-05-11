import { FC } from 'react'
import { Text, View } from 'react-native'

import { IMovie } from '@/shared/types/movie.interface'

const Carousel: FC<{ movies: IMovie[] }> = ({ movies }) => {
	return (
		<View>
			<Text>Carousel</Text>
		</View>
	)
}
export default Carousel
