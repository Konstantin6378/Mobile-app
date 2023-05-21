import { Entypo } from '@expo/vector-icons'
import { FC } from 'react'
import { Animated, Text, View } from 'react-native'

import { Rating } from '@/components/ui'

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
			<View className='mb-4 flex-row items-center opacity-70'>
				<Rating rating={movie.rating} size={18} />
				<Entypo
					name='dot-single'
					size={18}
					color='rgba(255,255,255,.5)'
					style={{ marginLeft: 4 }}
				/>
			</View>
		</Animated.View>
	)
}
export default MovieInfo
