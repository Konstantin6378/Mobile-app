import {FC, PropsWithChildren} from 'react'
import {View, Text} from 'react-native'

const SlugWrapper: FC<PropsWithChildren<{generate: () => void}>> = ({children}) => {
  return <View>{children}</View>
  
}
export default SlugWrapper