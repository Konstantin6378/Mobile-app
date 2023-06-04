import { AdminNavigation, Layout, Loader, Button } from '@/components/ui';
import { useGenreEdit } from '@/components/screens/admin/genre/useGenreEdit'
import { IGenreEditInput } from '@/shared/types/genre.interface'
import { FC } from 'react'
import { useForm } from 'react-hook-form'
import {  View } from 'react-native'

const GenreEdit: FC = () => {
	const {control, setValue, handleSubmit} = useForm<IGenreEditInput>({
		mode: 'onChange'
	})

	const {isLoading, onSubmit} = useGenreEdit(setValue)

	return (
		<Layout isHasPadding>
			<AdminNavigation title='Edit genre' isBackButton />
			<View>
				{isLoading ? <Loader/> : <>
				<Button onPress={handleSubmit(onSubmit)} icon='pen-tool'>
					Update
				</Button>
				</>}
			</View>
		</Layout>
	)
}
export default GenreEdit
