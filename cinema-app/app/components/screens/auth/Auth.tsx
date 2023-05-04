import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Text, View } from 'react-native'

import { IAuthFormData } from '@/shared/types/auth.interface'

const Auth: FC = () => {
	const [isReg, setIsReg] = useState(false)

	const { handleSubmit, reset, control } = useForm<IAuthFormData>({
		mode: 'onChange'
	})

	const onSubmit: SubmitHandler<IAuthFormData> = ({ email, password }) => {}

	const isLoading = false
	return (
		<View className='mx-2 items-center justify-center'>
			<View className='w-9/12'>
				<Text className='text-center text-white text-4xl font-bold mb-2.5'>
					{isReg ? 'Register' : 'Login'}
				</Text>

				{isLoading}
			</View>
		</View>
	)
}
export default Auth
