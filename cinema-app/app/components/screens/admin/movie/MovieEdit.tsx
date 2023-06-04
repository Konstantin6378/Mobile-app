import { AdminNavigation, Layout, Loader } from '@/components/ui'
import { useMovieEdit } from '@/components/screens/admin/movie/useMovieEdit'
import { IMovieEditInput } from '@/shared/types/movie.interface'
import { FC } from 'react'
import { useForm } from 'react-hook-form'
import {  View } from 'react-native'

const MovieEdit: FC = () => {
	const {control, setValue, handleSubmit} = useForm<IMovieEditInput>({
		mode: 'onChange'
	})

	const {isLoading, onSubmit} = useMovieEdit(setValue)

	return (
		<Layout isHasPadding>
			<AdminNavigation title='Edit movie' isBackButton />
			<View>
				{isLoading ? <Loader/> : <></>}
			</View>
		</Layout>
	)
}
export default MovieEdit
