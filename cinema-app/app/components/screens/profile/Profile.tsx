import { AntDesign } from '@expo/vector-icons'
import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { Image, Pressable, Text, View } from 'react-native'

import { Button, Heading, Loader } from '@/components/ui'

import { useAuth } from '@/hooks/useAuth'

import { IAuthFormData } from '@/shared/types/auth.interface'

import { AuthService } from '@/services/auth/auth.service'

import AuthFields from '../auth/AuthFields'

import { useProfile } from './useProfile'

const Profile: FC = () => {
	const { setUser } = useAuth()

	const { handleSubmit, setValue, control } = useForm<IAuthFormData>({
		mode: 'onChange'
	})

	const { isLoading, onSubmit } = useProfile(setValue)

	return (
		<View className='mt-20 px-3'>
			<Heading title={'Profile'} />
			{/* Picture user */}
			<Image
				source={require('@/assets/avatar-guest.jpg')}
				style={{ width: 200, height: 200 }}
				className='self-center mt-3 rounded-2xl'
			/>
			{isLoading ? (
				<Loader />
			) : (
				<View className='mt-10'>
					<AuthFields control={control} />
					<Button onPress={handleSubmit(onSubmit)} icon={'edit'}>
						Update profile
					</Button>
				</View>
			)}
			<Pressable
				onPress={() => AuthService.logout().then(() => setUser(null))}
				className='opacity-40 items-center flex-row justify-end'
			>
				<AntDesign name={'logout'} size={18} color='white' />
				<Text className='text-white text-lg ml-2'>Logout</Text>
			</Pressable>
		</View>
	)
}
export default Profile
