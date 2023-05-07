import {
	NavigationContainer,
	useNavigationContainerRef
} from '@react-navigation/native'
import { FC, useState } from 'react'

import BottomMenu from '@/components/ui/layout/bottom-menu/BottomMenu'

import { useAuth } from '@/hooks/useAuth'

import PrivateNavigator from './PrivateNavigator'

const Navigation: FC = () => {
	const { user } = useAuth()
	const [currentRoute, setCurrentRoute] = useState(undefined)

	const navRef = useNavigationContainerRef()
	return (
		<>
			<NavigationContainer>
				<PrivateNavigator />
			</NavigationContainer>
			{user && currentRoute && (
				<BottomMenu nav={navRef.navigate} currentRoute={currentRoute} />
			)}
		</>
	)
}
export default Navigation
