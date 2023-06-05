import cn from 'clsx'
import { FC, useRef } from 'react'
import { Text, View } from 'react-native'
import { RichEditor } from 'react-native-pell-rich-editor'

import { ITextEditor } from './text-editor.interface'

const TextEditor: FC<ITextEditor> = ({
	value,
	onChange,
	placeholder = 'Write your cool content here 😊',
	error
}) => {
	const richEditor = useRef<RichEditor>(null)
	return (
		<View>
			<View
				className={cn(
					'my-4 border flex-col-reverse w-full border-solid border-transparent rounded-xl overflow-hidden',
					{
						'border-red': !!error
					}
				)}
			></View>
            {error && <Text className='text-red'>{error.message}</Text>}
		</View>
	)
}
export default TextEditor
