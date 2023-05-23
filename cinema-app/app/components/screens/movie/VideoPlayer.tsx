import { Video } from 'expo-av'
import { FC, useRef } from 'react'
import { Text, View } from 'react-native'

import { Button } from '@/components/ui'

import { getMediaSource } from '@/utils/getMediaSource'

const VideoPlayer: FC<{ video: string }> = ({ video }) => {
	const videoRef = useRef<Video>(null)

	return (
		<>
			<Button icon='play' className='mb-6'>
				Watch movie
			</Button>
			<View>
				<Video
					ref={videoRef}
					source={getMediaSource(video)}
					style={{ height: 180 }}
					className='mb-5 w-full hidden'
				/>
			</View>
		</>
	)
}
export default VideoPlayer
