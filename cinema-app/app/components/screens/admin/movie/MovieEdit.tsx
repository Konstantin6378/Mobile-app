import { FC } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { ScrollView, View } from 'react-native'

import { useMovieEdit } from '@/components/screens/admin/movie/useMovieEdit'
import {
	AdminNavigation,
	Button,
	Field,
	Layout,
	Loader,
	SlugWrapper
} from '@/components/ui'
import Dropdown from '@/components/ui/form-elements/dropdown/Dropdown'
import UploadField from '@/components/ui/form-elements/upload-field/UploadField'

import { IMovieEditInput } from '@/shared/types/movie.interface'

import { generateSlug } from '@/utils/generateSlug'

import { useAdminActors } from './useAdminActors'
import { useAdminGenres } from './useAdminGenres'

const MovieEdit: FC = () => {
	const { control, setValue, handleSubmit, getValues } =
		useForm<IMovieEditInput>({
			mode: 'onChange'
		})

	const { isLoading, onSubmit } = useMovieEdit(setValue)

	const { isLoading: isGenresLoading, data: genres } = useAdminGenres()
	const { isLoading: isActorsLoading, data: actors } = useAdminActors()

	return (
		<Layout isHasPadding>
			<AdminNavigation title='Edit movie' isBackButton />
			<View>
				{isLoading ? (
					<Loader />
				) : (
					<ScrollView showsVerticalScrollIndicator={false}>
						<Field<IMovieEditInput>
							control={control}
							name='title'
							placeholder='Enter name'
							rules={{
								required: 'Name is required'
							}}
						/>
						<SlugWrapper
							generate={() => {
								setValue('slug', generateSlug(getValues('title')))
							}}
						>
							<Field<IMovieEditInput>
								control={control}
								name='slug'
								placeholder='Enter slug'
								rules={{
									required: 'Slug is required'
								}}
							/>
						</SlugWrapper>
						<Field<IMovieEditInput>
							control={control}
							name='parameters.country'
							placeholder='Enter country'
							rules={{
								required: 'Country is required'
							}}
						/>
						<View className='flex-row flex-wrap justify-between'>
							<View style={{ width: '56%' }}>
								<Field<IMovieEditInput>
									control={control}
									name='parameters.duration'
									placeholder='Enter duration (min.)'
									rules={{
										required: 'Duration is required'
									}}
								/>
							</View>
							<View style={{ width: '40%' }}>
								<Field<IMovieEditInput>
									control={control}
									name='parameters.year'
									placeholder='Enter year '
									rules={{
										required: 'Year is required'
									}}
									keyboardType='number-pad'
								/>
							</View>
						</View>

						<Controller
							control={control}
							name='genres'
							render={({ field, fieldState: { error } }) => (
								<Dropdown
									field={field}
									options={genres}
									isLoading={isGenresLoading}
									isMulti
									error={error}
									style={{
										zIndex: 11
									}}
								/>
							)}
							rules={{
								required: 'Please select at least one genre!'
							}}
						/>
						<Controller
							control={control}
							name='actors'
							render={({ field, fieldState: { error } }) => (
								<Dropdown
									field={field}
									options={actors}
									isLoading={isActorsLoading}
									isMulti
									error={error}
								/>
							)}
							rules={{
								required: 'Please select at least one actor!'
							}}
						/>

						<Controller
							control={control}
							name='poster'
							defaultValue=''
							render={({
								field: { value, onChange },
								fieldState: { error }
							}) => (
								<UploadField
									onChange={onChange}
									value={value}
									error={error}
									folder='movies'
									placeholder='Poster'
								/>
							)}
							rules={{
								required: 'Poster is required'
							}}
						/>
						<Controller
							control={control}
							name='videoUrl'
							defaultValue=''
							render={({
								field: { value, onChange },
								fieldState: { error }
							}) => (
								<UploadField
									onChange={onChange}
									value={value}
									error={error}
									folder='movies'
									placeholder='Video'
									isNoImage
									gradient={['#4361a6', '#253584']}
								/>
							)}
							rules={{
								required: 'Video is required'
							}}
						/>
						<Button onPress={handleSubmit(onSubmit)} icon='pen-tool'>
							Update
						</Button>
					</ScrollView>
				)}
			</View>
		</Layout>
	)
}
export default MovieEdit
