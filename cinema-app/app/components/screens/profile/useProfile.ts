import { useQuery } from '@tanstack/react-query'
import { UseFormSetValue } from 'react-hook-form'

import { IAuthFormData } from '@/shared/types/auth.interface'

import { UserService } from '@/services/user.service'

export const useProfile = (setValue: UseFormSetValue<IAuthFormData>) => {
	const { isLoading } = useQuery(['profile'], () => UserService.getProfile(), {
		onSuccess({ email }) {
			setValue('email', email)
		}
	})
}
