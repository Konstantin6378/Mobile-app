import { FC } from 'react'
import { Pressable, Text, View } from 'react-native'

import { useTypedNavigation } from '@/hooks/useTypedNavigation'

const AdminButton: FC = () => {
	const { navigate } = useTypedNavigation()

	return (
		<Pressable
			onPress={() => navigate('Admin')}
			className='bg-[#090909] absolute -right-2.5 bottom-14 z-10 py-2 px-3.5 rounded-tl-2xl rounded-bl-2xl border-solid border-gray-500'
		>
			<Text>AdminButton</Text>
		</Pressable>
	)
}
export default AdminButton
