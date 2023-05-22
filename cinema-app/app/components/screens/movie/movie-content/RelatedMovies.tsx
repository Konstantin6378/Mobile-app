import { FC } from 'react'
import { Text, View } from 'react-native'

import { Loader } from '@/components/ui'

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
		</View>
	)
}
export default RelatedMovies
