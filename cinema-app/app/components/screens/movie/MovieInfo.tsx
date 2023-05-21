import { FC } from 'react'
import { Animated, Text, View } from 'react-native'

import { IMovie } from '@/shared/types/movie.interface'

interface IMovieInfo {
	movie: IMovie
}

const MovieInfo: FC<IMovieInfo> = ({ movie }) => {
	return (
		<Animated.View className='px-6 mb-3'>
			<Text
				className='text-5xl font-semibold text-[#f9fcfc] mb-2 pr-2'
				numberOfLines={2}
			>
				{movie.title}
			</Text>
		</Animated.View>
	)
}
export default MovieInfo
