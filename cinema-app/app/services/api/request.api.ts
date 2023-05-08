import { AxiosError, AxiosResponse } from 'axios'
import { Toast } from 'react-native-toast-message/lib/src/Toast'

import { errorCath } from './error.api'

export const request = async <T>() => {
	const onSuccess = (response: AxiosResponse<T>) => response.data
	const onError = (error: AxiosError<T>) => {
		Toast.show({
			type: 'error',
			text1: 'Request error',
			text2: errorCath(error)
		})

		return Promise.reject(error)
	}
}
