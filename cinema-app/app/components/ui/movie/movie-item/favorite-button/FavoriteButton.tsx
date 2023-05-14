import { MaterialCommunityIcons } from '@expo/vector-icons'
import cn from 'clsx'
import { FC } from 'react'
import { Text, View } from 'react-native'

import BlurButton from '@/components/ui/blur-button/BlurButton'

interface IFavoriteButton {
	movieId: string
	isSmall?: boolean
}

const FavoriteButton: FC<IFavoriteButton> = ({ isSmall, movieId }) => {
	return (
		<BlurButton className={cn({ 'w-8 h-8 rounded-lg': isSmall })}>
			<View className='items-center justify-center'>
				<MaterialCommunityIcons
					name={'heart-outline'}
					size={isSmall ? 19 : 22}
					color={'white'}
				/>
			</View>
		</BlurButton>
	)
}
export default FavoriteButton
