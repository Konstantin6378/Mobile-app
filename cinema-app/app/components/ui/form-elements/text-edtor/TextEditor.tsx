import {FC} from 'react'
import {View, Text} from 'react-native'
import { ITextEditor } from './text-editor.interface'

const TextEditor: FC<ITextEditor> = ({
    value,
    onChange,
    placeholder = 'Write your cool content here 😊',
    error
}) => {
  return (
      <View>
         <Text>TextEditor</Text>
      </View>
  )
}
export default TextEditor