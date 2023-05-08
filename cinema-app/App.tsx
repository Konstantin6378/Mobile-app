import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

import AuthProvider from '@/components/providers/auth/AuthProvider'
import { Toast } from '@/components/ui'

import Navigation from '@/navigation/Navigation'

export default function App() {
	return (
		<>
			<AuthProvider>
				<SafeAreaProvider>
					<Navigation />
				</SafeAreaProvider>
			</AuthProvider>
			<StatusBar style='light' />
			<Toast />
		</>
	)
}
