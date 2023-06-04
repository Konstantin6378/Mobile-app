import { AdminNavigation, Layout, Loader } from '@/components/ui'
import { useACtorEdit } from '@/components/screens/admin/actor/useACtorEdit'
import { IACtorEditInput } from '@/shared/types/actor.interface'
import { FC } from 'react'
import { useForm } from 'react-hook-form'
import {  View } from 'react-native'

const ACtorEdit: FC = () => {
	const {control, setValue, handleSubmit} = useForm<IACtorEditInput>({
		mode: 'onChange'
	})

	const {isLoading, onSubmit} = useACtorEdit(setValue)

	return (
		<Layout isHasPadding>
			<AdminNavigation title='Edit actor' isBackButton />
			<View>
				{isLoading ? <Loader/> : <></>}
			</View>
		</Layout>
	)
}
export default ACtorEdit
