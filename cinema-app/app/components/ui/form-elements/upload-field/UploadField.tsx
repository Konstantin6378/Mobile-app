import { FC } from 'react'
import { Text, View } from 'react-native'

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
    const {isLoading, uploadFile} = useUploadMedia(onChange, folder)
	return (
		<View>
			<Text>UploadField</Text>
		</View>
	)
}
export default UploadField
