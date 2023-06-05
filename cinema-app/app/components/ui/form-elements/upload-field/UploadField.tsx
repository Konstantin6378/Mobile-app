import { FC } from 'react'
import { Text, View } from 'react-native'

import { IUploadField } from './upload-field.interface'
import { useUploadMedia } from './useUploadMedia'
import cn from 'clsx';

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
    const {isLoading, uploadFile} = useUploadMedia(onChange, folder)

	return (
		<View
            className={cn(
                'bg-[#232323] w-full border rounded-lg py-2.5 px-4 my-1.5',
                error ? 'border-red' : 'border-transparent'
            )}
        >
			<Text>UploadField</Text>
		</View>
	)
}
export default UploadField
