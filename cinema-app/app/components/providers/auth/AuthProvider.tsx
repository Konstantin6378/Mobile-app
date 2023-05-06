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

	useEffect(() => {}, [])

	return <View>{children}</View>
}
export default AuthProvider
