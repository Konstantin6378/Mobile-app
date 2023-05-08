import { getItemAsync } from 'expo-secure-store'
import { useEffect } from 'react'

import { useAuth } from '@/hooks/useAuth'

import { EnumSecureStore } from '@/shared/types/auth.interface'

import { errorCatch, getNewTokens } from '@/services/api/helper.auth'
import { AuthService } from '@/services/auth/auth.service'

import { getAccessToken } from './../../../services/auth/auth.helper'

export const useCheckAuth = (routeName?: string) => {
	const { user, setUser } = useAuth()

	useEffect(() => {
		const checkAccessToken = async () => {
			const accessToken = await getAccessToken()
			if (accessToken) {
				try {
					await getNewTokens()
				} catch (error) {
					if (errorCatch(error) === 'jwt expired') {
						await AuthService.logout()
						setUser(null)
					}
				}
			}
		}
	}, [])

	useEffect(() => {
		const checkRefreshToken = async () => {
			const refreshToken = await getItemAsync(EnumSecureStore.REFRESH_TOKEN)
			if (!refreshToken && user) {
				await AuthService.logout()
				setUser(null)
			}
		}
	}, [routeName])
}
