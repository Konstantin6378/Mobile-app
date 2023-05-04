import cn from 'clsx'
import { LinearGradient } from 'expo-linear-gradient'
import { FC, PropsWithChildren } from 'react'
import { Pressable, Text } from 'react-native'

import { IButton } from './button.interface'

const Button: FC<PropsWithChildren<IButton>> = ({
	className,
	icon,
	children,
	...rest
}) => {
	return (
		<Pressable className={cn('self-center mt-3.5', className)}>
			<LinearGradient
				className={cn('w-full py-3 px-8 rounded-2xl items-center', {
					'flex-row': !!icon
				})}
				colors={['#DC3F41', '#A6282B']}
			>
				<Text>{children}</Text>
			</LinearGradient>
		</Pressable>
	)
}
export default Button
