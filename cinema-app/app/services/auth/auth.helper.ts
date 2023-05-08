import AsyncStorage from '@react-native-async-storage/async-storage'
import { getItemAsync } from 'expo-secure-store'

import {
	EnumAsyncStorage,
	EnumSecureStore
} from '@/shared/types/auth.interface'

export const getAccessToken = async () => {
	const accessToken = await getItemAsync(EnumSecureStore.ACCESS_TOKEN)
	return accessToken || null
}

export const getUserFromStorage = async () => {
	try {
		return JSON.parse(
			(await AsyncStorage.getItem(EnumAsyncStorage.USER)) || '{}'
		)
	} catch (error) {
		return null
	}
}
