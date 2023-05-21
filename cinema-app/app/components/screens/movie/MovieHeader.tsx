import { FC } from 'react'
import { Animated, StyleSheet, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { BlurButton } from '@/components/ui'

import { useTypedNavigation } from '@/hooks/useTypedNavigation'

import { IMovie } from '@/shared/types/movie.interface'

interface IMovieHeader {
	movie: IMovie
}

const MovieHeader: FC<IMovieHeader> = ({ movie }) => {
	const { goBack } = useTypedNavigation()

	const { top } = useSafeAreaInsets()
	return (
		<View
			className='absolute left-0 top-0 w-full z-1 flex-row justify-between items-center px-6 pb-4'
			style={{ marginTop: -top, paddingTop: top + 6 }}
		>
			<Animated.View
				style={{ ...StyleSheet.absoluteFillObject }}
				className='bg-[#0D0404]'
			>
				<BlurButton icon={'chevron-left'} iconSize={23} onPress={goBack} />
			</Animated.View>
		</View>
	)
}
export default MovieHeader
