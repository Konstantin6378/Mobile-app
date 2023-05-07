import { FC } from 'react';
import { Pressable, Text, View } from 'react-native';



import { IMenuItem } from './menu.interface';
import { TypeRootStackParamList } from '@/navigation/navigation.types';
import { Feather } from '@expo/vector-icons';


interface IMenuItemProps {
	item: IMenuItem
  nav: (screenName: keyof TypeRootStackParamList) => void
  currentRoute?: string
}

const MenuItem: FC<IMenuItemProps> = ({ item, nav, currentRoute }) => {
  const isActive = currentRoute === item.path
	return (
		<Pressable className='items-center w-[20%]' onPress={() => nav(item.path)}>
			<Feather name={item.iconName} size={26} color={isActive ? } />
		</Pressable>
	)
}
export default MenuItem