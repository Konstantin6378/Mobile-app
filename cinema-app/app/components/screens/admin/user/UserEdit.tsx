import { AdminNavigation, Layout, Loader } from '@/components/ui'
import { useUserEdit } from '@/components/screens/admin/user/useUserEdit'
import { IUserEditInput } from '@/shared/types/user.interface'
import { FC } from 'react'
import { useForm, Control } from 'react-hook-form'
import {  View } from 'react-native'
import AuthFields from '../../auth/AuthFields'
import { IAuthFormData } from '@/shared/types/auth.interface'

const UserEdit: FC = () => {
	const {control, setValue, handleSubmit} = useForm<IUserEditInput>({
		mode: 'onChange'
	})

	const {isLoading, onSubmit} = useUserEdit(setValue)

	return (
		<Layout isHasPadding>
			<AdminNavigation title='Edit user' isBackButton />
			<View>
				{isLoading ? <Loader/> : <>
				<AuthFields control={control as unknown as Control<IAuthFormData>} />
				</>}
			</View>
		</Layout>
	)
}
export default UserEdit
