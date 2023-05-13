import { FC, useRef } from 'react'
import { Animated, View } from 'react-native'

import { IMovie } from '@/shared/types/movie.interface'

import CarouselItem from './carousel-item/CarouselItem'

const Carousel: FC<{ movies: IMovie[] }> = ({ movies }) => {
	const scrollX = useRef(new Animated.Value(0)).current
	return (
		<View>
			{movies.map((movie, index) => (
				<CarouselItem
					movie={movie}
					key={movie._id}
					index={index}
					scrollX={scrollX}
				/>
			))}
		</View>
	)
}
export default Carousel
