import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Pressable, Text, View } from 'react-native'

import { Button, Loader } from '@/components/ui'
import DismissKeyboard from '@/components/ui/form-elements/field/DismissKeyboard'

import { IAuthFormData } from '@/shared/types/auth.interface'

import AuthFields from './AuthFields'

const Auth: FC = () => {
	const [isReg, setIsReg] = useState(false)

	const { handleSubmit, reset, control } = useForm<IAuthFormData>({
		mode: 'onChange'
	})

	const onSubmit: SubmitHandler<IAuthFormData> = ({ email, password }) => {}

	const isLoading = false
	return (
		<DismissKeyboard>
			<View className='mx-2 items-center justify-center'>
				<View className='w-9/12'>
					<Text className='text-center text-white text-4xl font-bold mb-2.5'>
						{isReg ? 'Register' : 'Login'}
					</Text>

					{isLoading ? (
						<Loader />
					) : (
						<>
							<AuthFields control={control} isPassRequired />
							<Button onPress={handleSubmit(onSubmit)} icon={'film'}>
								Go to watch
							</Button>
							<Pressable onPress={() => setIsReg(!isReg)}>
								<Text className='text-white opacity-30 text-right text-base mt-3'>
									{isReg ? 'Login' : 'Register'}
								</Text>
							</Pressable>
						</>
					)}
				</View>
			</View>
		</DismissKeyboard>
	)
}
export default Auth
