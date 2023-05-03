import Header from '@/components/Header'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

export default function App() {
  return (<>

    <SafeAreaProvider >
      <SafeAreaView>
      </SafeAreaView>
    </SafeAreaProvider>
    <StatusBar style='light' />
  </>
  )
}

