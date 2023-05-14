import { MaterialCommunityIcons } from '@expo/vector-icons'
import cn from 'clsx'
import { FC } from 'react'
import { StyleSheet, View } from 'react-native'
import Animated, { withSpring } from 'react-native-reanimated'

import BlurButton from '@/components/ui/blur-button/BlurButton'

import { useFavoriteAnimation } from './useFavoriteAnimation'

interface IFavoriteButton {
	movieId: string
	isSmall?: boolean
}

const FavoriteButton: FC<IFavoriteButton> = ({ isSmall, movieId }) => {
	const { outlineStyle, fillStyle, liked } = useFavoriteAnimation()
	return (
		<BlurButton
			className={cn({ 'w-8 h-8 rounded-lg': isSmall })}
			onPress={() => {
				liked.value = withSpring(liked.value === 1 ? 0 : 1)
			}}
		>
			<Animated.View
				style={[StyleSheet.absoluteFill, outlineStyle]}
				className='items-center justify-center'
			>
				<MaterialCommunityIcons
					name={'heart-outline'}
					size={isSmall ? 19 : 22}
					color={'white'}
				/>
			</Animated.View>
			<Animated.View style={fillStyle}>
				<MaterialCommunityIcons
					name={'heart'}
					size={isSmall ? 19 : 22}
					color={'#dc3f41'}
				/>
			</Animated.View>
		</BlurButton>
	)
}
export default FavoriteButton
