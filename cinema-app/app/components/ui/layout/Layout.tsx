import cn from 'clsx'
import { FC, PropsWithChildren } from 'react'
import { Platform, View, ViewStyle } from 'react-native'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'

interface ILayout {
	className?: string
	style?: ViewStyle
	isHasPadding?: boolean
}

const Layout: FC<PropsWithChildren<ILayout>> = ({
	children,
	className,
	style,
	isHasPadding
}) => {
	const { top } = useSafeAreaInsets()
	return (
		<SafeAreaView className='flex-1'>
			<View
				className={cn('flex-1', className, {
					'px-6': isHasPadding
				})}
				style={{
					paddingTop: Platform.OS === 'ios' ? top / 6 : top * 2,
					...style
				}}
			>
				{children}
			</View>
			<AdmimButton />
		</SafeAreaView>
	)
}
export default Layout
