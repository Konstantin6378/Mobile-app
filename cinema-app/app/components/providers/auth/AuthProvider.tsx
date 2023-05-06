import {
	FC,
	PropsWithChildren,
	createContext,
	useEffect,
	useState
} from 'react'
import { View } from 'react-native'

import { IContext, TypeUserState } from './auth-provider.interface'

export const AuthContext = createContext({} as IContext)

const AuthProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
	const [user, setUser] = useState<TypeUserState>(null)

	useEffect(() => {
		let mounted = true

		const checkAccessToken = async () => {
			try {
			} catch (error) {
			} finally {
			}
		}

		return () => {
			mounted = false
		}
	}, [])

	return <View>{children}</View>
}
export default AuthProvider
