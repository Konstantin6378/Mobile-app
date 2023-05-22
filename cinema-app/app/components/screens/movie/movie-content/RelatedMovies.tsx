import { FC } from 'react'
import { ListRenderItemInfo, Text, View } from 'react-native'

import { Loader, MovieItem } from '@/components/ui'
import HorizontalList from '@/components/ui/HorizontalList'

import { IMovie } from '@/shared/types/movie.interface'

import { useGetRelatedMovies } from './useRelatedMovies'

interface IRelatedMovies {
	genreIds: string[]
	currentMovieId: string
}

const RelatedMovies: FC<IRelatedMovies> = ({ currentMovieId, genreIds }) => {
	const { data, isLoading } = useGetRelatedMovies(genreIds, currentMovieId)

	if (isLoading) return <Loader />
	if (!data?.length) return null
	return (
		<View className='my-8'>
			<Text className='text-white text-2xl font-semibold mb-5'>
				Related movies
			</Text>
			<HorizontalList
				data={data}
				renderItem={({ item: movie, index }: ListRenderItemInfo<IMovie>) => (
					<MovieItem
						index={index}
						movie={movie}
						key={movie._id}
						className='w-36 mr-4'
					/>
				)}
			/>
		</View>
	)
}
export default RelatedMovies
