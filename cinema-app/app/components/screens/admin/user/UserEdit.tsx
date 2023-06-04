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
		<View>
			<Text>UserEdit</Text>
		</View>
	)
}
export default UserEdit
