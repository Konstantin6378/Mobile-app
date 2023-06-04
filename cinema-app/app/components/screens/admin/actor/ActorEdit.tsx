import { AdminNavigation, Button, Layout, Loader } from '@/components/ui'
import { useActorEdit } from '@/components/screens/admin/actor/useActorEdit'
import { IActorEditInput } from '@/shared/types/actor.interface'
import { FC } from 'react'
import { useForm } from 'react-hook-form'
import {  View } from 'react-native'

const ActorEdit: FC = () => {
	const {control, setValue, handleSubmit} = useForm<IActorEditInput>({
		mode: 'onChange'
	})

	const {isLoading, onSubmit} = useActorEdit(setValue)

	return (
		<Layout isHasPadding>
			<AdminNavigation title='Edit actor' isBackButton />
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
export default ActorEdit
