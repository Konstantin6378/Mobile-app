import { FC } from 'react'
import { Text, View } from 'react-native'

import { useTypedNavigation } from '@/hooks/useTypedNavigation'

import BlurButton from '../blur-button/BlurButton'
import Heading from '../heading/Heading'

interface IAdminNavigation {
	title: string
	isBackButton?: boolean
}
const AdminNavigation: FC<IAdminNavigation> = ({ title, isBackButton }) => {
	const { goBack } = useTypedNavigation()
	return (
		<View className='flex-row justify-between items-center z-10 mb-5'>
			<Heading title={title} />
			<View className='relative flex-row'>
				{isBackButton && (
					<BlurButton
						icon={'chevron-left'}
						iconSize={24}
						className='w-12 h-12 mr-3'
						onPress={goBack}
					/>
				)}
				<BlurButton iconSize={24} className='w-12 h-12'>
					OPEN
				</BlurButton>
			</View>
		</View>
	)
}
export default AdminNavigation
