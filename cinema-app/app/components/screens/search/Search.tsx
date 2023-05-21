import { FC } from 'react'
import { Text, View } from 'react-native'

import { Field, Heading, Layout } from '@/components/ui'

import { ISearchFormData } from './search.interface'
import { useSearch } from './useSearch'

const Search: FC = () => {
	const { searchTerm, movies, isLoading, control } = useSearch()
	return (
		<Layout isHasPadding>
			<Heading title={'Search'} />
			<View className='mt-3'>
				<Field<ISearchFormData>
					placeholder='Type something...'
					control={control}
					name='searchTerm'
					rules={{
						required: 'Search term is required!'
					}}
					keyboardType='web-search'
				/>
			</View>
		</Layout>
	)
}
export default Search
