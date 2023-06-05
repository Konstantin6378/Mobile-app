import { FC, useRef } from 'react';
import {View, Text} from 'react-native'
import { ITextEditor } from './text-editor.interface'

const TextEditor: FC<ITextEditor> = ({
    value,
    onChange,
    placeholder = 'Write your cool content here 😊',
    error
}) => {
    const richEditor = useRef(null)
  return (
      <View>
         <Text>TextEditor</Text>
      </View>
  )
}
export default TextEditor