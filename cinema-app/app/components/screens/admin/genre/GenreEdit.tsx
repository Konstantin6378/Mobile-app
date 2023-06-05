import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { ScrollView, View } from 'react-native'

import { useGenreEdit } from '@/components/screens/admin/genre/useGenreEdit'
import { AdminNavigation, Button, Field, Layout, Loader } from '@/components/ui'

import { IGenreEditInput } from '@/shared/types/genre.interface'
import SlugWrapper from '@/components/ui/form-elements/field/SlugWrapper'
import { generateSlug } from '@/utils/generateSlug'

const GenreEdit: FC = () => {
	const { control, setValue, handleSubmit, getValues } =
		useForm<IGenreEditInput>({
			mode: 'onChange'
		})

	const { isLoading, onSubmit } = useGenreEdit(setValue)

	return (
		<Layout isHasPadding>
			<AdminNavigation title='Edit genre' isBackButton />
			<View>
				{isLoading ? (
					<Loader />
				) : (
					<ScrollView showsVerticalScrollIndicator={false}>
						<Field<IGenreEditInput>
							control={control}
							name='name'
							placeholder='Enter name'
							rules={{ 
								required: 'Name is required' 
							}}
						/>
						<SlugWrapper generate={() => {setValue('slug', generateSlug(getValues('name')))}}>
						<Field<IGenreEditInput>
							control={control}
							name='slug'
							placeholder='Enter slug'
							rules={{ 
								required: 'Slug is required' 
							}}
						/>
						</SlugWrapper>
						<Button onPress={handleSubmit(onSubmit)} icon='pen-tool'>
							Update
						</Button>
					</ScrollView>
				)}
			</View>
		</Layout>
	)
}
export default GenreEdit
