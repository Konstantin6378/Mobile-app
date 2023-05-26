import { FC } from 'react'
import { Pressable, Text, View } from 'react-native'

import { useTypedNavigation } from '@/hooks/useTypedNavigation'
import { useTypedRoute } from '@/hooks/useTypedRoute'

import { INavItem } from './admin-navigation.interface'

const AdminNavItem: FC<{ item: INavItem }> = ({
	item: { routeName, title, icon }
}) => {
	const { navigate } = useTypedNavigation()
	const { name } = useTypedRoute()
	return (
		<Pressable
			//@ts-ignore
			onPress={() => navigate(routeName)}
			className='flex-row items-center mb-1'
		>
			<Text>AdminNavItem</Text>
		</Pressable>
	)
}
export default AdminNavItem
