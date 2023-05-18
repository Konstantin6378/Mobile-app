import { Ionicons } from '@expo/vector-icons'
import { FC } from 'react'
import { Pressable, Text, View } from 'react-native'

import { useTypedNavigation } from '@/hooks/useTypedNavigation'

import Heading from '../../heading/Heading'

import { IMovieCatalog } from './movie-catalog.interface'

const MovieCatalog: FC<IMovieCatalog> = ({
	description,
	isBackButton,
	movies,
	title
}) => {
	const { goBack } = useTypedNavigation()
	return (
		<View>
			<View className='flex-row items-center justify-between'>
				<Heading title={title} className='mb-3' />
				{isBackButton && (
					<Pressable onPress={goBack}>
						<Ionicons
							name='arrow-back-circle-outline'
							size={32}
							color='white'
						/>
					</Pressable>
				)}
				<Text>MovieCatalog</Text>
			</View>
		</View>
	)
}
export default MovieCatalog
