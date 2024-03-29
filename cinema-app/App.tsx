import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import AuthProvider from '@/components/providers/auth/AuthProvider'
import { Toast } from '@/components/ui'

import Navigation from '@/navigation/Navigation'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false
		}
	}
})

export default function App() {
	return (
		<>
			<QueryClientProvider client={queryClient}>
				<AuthProvider>
					<SafeAreaProvider>
						<Navigation />
					</SafeAreaProvider>
				</AuthProvider>
				<StatusBar style='light' />
				<Toast />
			</QueryClientProvider>
		</>
	)
}
