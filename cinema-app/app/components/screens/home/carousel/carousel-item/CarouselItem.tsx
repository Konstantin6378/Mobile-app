import { FC } from 'react'
import { Image, Pressable, Text, View } from 'react-native'

import { useTypedNavigation } from '@/hooks/useTypedNavigation'

import { IMovie } from '@/shared/types/movie.interface'

const CarouselItem: FC<{ movie: IMovie }> = ({ movie }) => {
	const { navigate } = useTypedNavigation()

	return (
		<View className='w-48'>
			<Pressable onPress={() => navigate('Movie', { slug: movie.slug })}>
				<View className='absolute z-1 right-2 top-2'></View>
				<Image
					style={{
						height: 300,
						resizeMode: 'cover',
						borderWidth: 1,
						borderColor: 'white'
					}}
					className='w-full rounded-xl mb-2.5'
				/>
			</Pressable>
		</View>
	)
}
export default CarouselItem
