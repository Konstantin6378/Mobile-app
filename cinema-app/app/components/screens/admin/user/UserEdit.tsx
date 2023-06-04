import { FC } from 'react'
import { Control, Controller, useForm } from 'react-hook-form'
import { Pressable, Text, View } from 'react-native'

import { useUserEdit } from '@/components/screens/admin/user/useUserEdit'
import { AdminNavigation, Button, Layout, Loader } from '@/components/ui'

import { IAuthFormData } from '@/shared/types/auth.interface'
import { IUserEditInput } from '@/shared/types/user.interface'

import AuthFields from '../../auth/AuthFields'

const UserEdit: FC = () => {
	const { control, setValue, handleSubmit } = useForm<IUserEditInput>({
		mode: 'onChange'
	})

	const { isLoading, onSubmit } = useUserEdit(setValue)

	return (
		<Layout isHasPadding>
			<AdminNavigation title='Edit user' isBackButton />
			<View>
				{isLoading ? (
					<Loader />
				) : (
					<>
						<AuthFields
							control={control as unknown as Control<IAuthFormData>}
						/>
						<Controller
							control={control}
							name='isAdmin'
							render={({ field: { onChange, value } }) => (
								<Pressable
									onPress={() => onChange(!value)}
									className='my-5 w-40'
								>
									<CheckBox />
									<Text className='underline text-white text-base'>
										{value ? 'Make it regular user' : 'Make it admin'}
									</Text>
								</Pressable>
							)}
						/>
						<Button onPress={handleSubmit(onSubmit)} icon='pen-tool'>
							Update
						</Button>
					</>
				)}
			</View>
		</Layout>
	)
}
export default UserEdit
