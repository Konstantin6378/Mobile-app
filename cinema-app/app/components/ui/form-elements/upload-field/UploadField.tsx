import { Feather } from '@expo/vector-icons'
import cn from 'clsx'
import { LinearGradient } from 'expo-linear-gradient'
import { FC } from 'react'
import { Image, Pressable, Text, View } from 'react-native'

import { getMediaSource } from '@/utils/getMediaSource'

import Loader from '../../Loader'

import { IUploadField } from './upload-field.interface'
import { useUploadMedia } from './useUploadMedia'

const UploadField: FC<IUploadField> = ({
	onChange,
	placeholder,
	error,
	folder,
	isNoImage,
	style,
	value,
	gradient = ['#1db052', '#178d42']
}) => {
	const { isLoading, uploadFile } = useUploadMedia(onChange, folder)

	return (
		<View
			className={cn(
				'bg-[#232323] w-full border rounded-lg py-2.5 px-4 my-1.5',
				error ? 'border-red' : 'border-transparent'
			)}
			style={style}
		>
			<View className='flex-row justify-between items-center'>
				<View className='flex-row justify-between items-center'>
					<View>
						<Text className='font-medium to-white text-base'>
							{placeholder}
						</Text>
						<Pressable className='mt-2.5' onPress={uploadFile}>
							<LinearGradient
                                start={{x: 0, y: 0.75}}
                                end={{x:1, y: 0.25}}
                                className='w-full py-1.5 px-3 rounded-xl items-center flex-row'
                                colors={gradient}
                            >
								<Feather name='upload' size={18} color='#fff'/>
								<Text className='text-white text-base ml-2'>Click for upload file</Text>
							</LinearGradient>
						</Pressable>
					</View>
				</View>
				{!isNoImage && (
					<View className='w-24 h-24 rounded-2xl overflow-hidden ml-5'>
						{isLoading ? (
							<Loader />
						) : (
							!!value && (
								<Image
									source={getMediaSource(value)}
									className='w-full h-full'
								/>
							)
						)}
					</View>
				)}
			</View>
		</View>
	)
}
export default UploadField
