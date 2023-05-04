import { FC, PropsWithChildren } from 'react';
import { Pressable, Text } from 'react-native'
import { IButton } from './button.interface';
import cn from 'clsx';



const Button: FC<PropsWithChildren<IButton>> = ({className, icon, children,  ...rest}) => {
	return (
		<Pressable className={cn('self-center mt-3.5' , className)} onPress={}>
			<Text>{children}</Text>
		</Pressable>
	)
}
export default Button