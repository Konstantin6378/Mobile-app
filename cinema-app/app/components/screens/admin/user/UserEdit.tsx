import { AdminNavigation, Layout, Loader } from '@/components/ui'
import { useUserEdit } from '@/hooks/useUserEdit'
import { IUserEditInput } from '@/shared/types/user.interface'
import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { Text, View } from 'react-native'

const UserEdit: FC = () => {
	const {control, setValue, handleSubmit} = useForm<IUserEditInput>({
		mode: 'onChange'
	})

	const {isLoading, onSubmit} = useUserEdit(setValue)

	return (
		<Layout isHasPadding>
			<AdminNavigation title='Edit user' isBackButton />
			<View>
				{isLoading ? <Loader/> : <></>}
			</View>
		</Layout>
	)
}
export default UserEdit
