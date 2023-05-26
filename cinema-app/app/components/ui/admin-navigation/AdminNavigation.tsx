import { FC } from 'react'
import { Text, View } from 'react-native'

import Heading from '../heading/Heading'

interface IAdminNavigation {
	title: string
	isBackButton?: boolean
}
const AdminNavigation: FC<IAdminNavigation> = ({ title, isBackButton }) => {
	return (
		<View>
			<Heading title={title} />
		</View>
	)
}
export default AdminNavigation
