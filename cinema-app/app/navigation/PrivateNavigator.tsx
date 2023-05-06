import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { FC } from 'react'

import { useAuth } from '@/hooks/useAuth'

import { TypeRootStackParamList } from './navigation.types'
import { userRoutes } from './user.routes'

const Stack = createNativeStackNavigator<TypeRootStackParamList>()

const PrivateNavigator: FC = () => {
	const { user } = useAuth()
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
				contentStyle: {
					backgroundColor: '#090909'
				}
			}}
		>
			{userRoutes.map(route => (
				<Stack.Screen key={route.name} {...route} />
			))}
		</Stack.Navigator>
	)
}
export default PrivateNavigator
