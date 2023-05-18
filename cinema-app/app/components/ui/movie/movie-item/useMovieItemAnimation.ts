import { useEffect } from 'react'
import { useSharedValue } from 'react-native-reanimated'

export const useMovieItemAnimation = () => {
	const scale = useSharedValue(0.4)
	const opacity = useSharedValue(0)

	useEffect(() => {}, [])
}
