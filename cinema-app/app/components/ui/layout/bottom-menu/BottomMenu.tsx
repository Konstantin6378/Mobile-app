import { FC } from 'react'
import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { TypeNavigate } from './menu.interface'

interface IBottomMenu {
	nav: TypeNavigate
	currentRoute?: string
}

const BottomMenu: FC<IBottomMenu> = ({ nav, currentRoute }) => {
	const { bottom } = useSafeAreaInsets()

	return (
		<View
			className='pt-5 px-2 flex-row justify-between items-center w-full border-t border-t-solid border-t-[#929292] bg-[#090909]'
			style={{ paddingBottom: bottom + 5 }}
		>
			<Text>BottomMenu</Text>
		</View>
	)
}
export default BottomMenu
