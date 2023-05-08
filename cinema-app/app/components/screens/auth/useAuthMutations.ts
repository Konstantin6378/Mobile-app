import { useMutation } from '@tanstack/react-query'
import { UseFormReset } from 'react-hook-form'

import { useAuth } from '@/hooks/useAuth'

import { IAuthFormData } from '@/shared/types/auth.interface'

import { AuthService } from '@/services/auth/auth.service'

export const useAuthMutations = (reset: UseFormReset<IAuthFormData>) => {
	const { setUser } = useAuth()

	const {} = useMutation(
		['login'],
		({ email, password }: IAuthFormData) =>
			AuthService.main('login', email, password),
		{
			onSuccess(data) {
				reset()
				setUser(data.user)
			}
		}
	)
}
