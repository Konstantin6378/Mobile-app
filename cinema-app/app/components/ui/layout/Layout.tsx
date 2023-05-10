import { FC, PropsWithChildren } from 'react'
import { StyleProp, View, ViewStyle } from 'react-native'

interface ILayout {
	className?: string
	style?: StyleProp<ViewStyle>
	isHasPadding?: boolean
}

const Layout: FC<PropsWithChildren<ILayout>> = ({
	children,
	className,
	style,
	isHasPadding
}) => {
	return <View>{children}</View>
}
export default Layout
