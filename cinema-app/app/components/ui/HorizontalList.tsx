import { FC } from 'react'
import { FlatList, FlatListProps, Platform } from 'react-native'

const HorizontalList: FC = (props: FlatListProps<any>) => {
	return (
		<FlatList
			horizontal
			renderToHardwareTextureAndroid
			showsHorizontalScrollIndicator={false}
			scrollEventThrottle={16}
			decelerationRate={Platform.OS === 'ios' ? 0 : 0.98}
			{...props}
		/>
	)
}
export default HorizontalList
