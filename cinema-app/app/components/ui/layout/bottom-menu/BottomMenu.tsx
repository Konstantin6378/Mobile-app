import { FC } from 'react'
import { Text, View } from 'react-native'

import { TypeNavigate } from './menu.interface'

interface IBottomMenu {
	nav: TypeNavigate
	currentRoute?: string
}

const BottomMenu: FC<IBottomMenu> = ({ nav, currentRoute }) => {
	return (
		<View>
			<Text>BottomMenu</Text>
		</View>
	)
}
export default BottomMenu
