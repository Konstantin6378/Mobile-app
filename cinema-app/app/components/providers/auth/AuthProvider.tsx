import { FC, PropsWithChildren } from 'react'
import { View } from 'react-native'

const AuthProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
	return <View>{children}</View>
}
export default AuthProvider
