import {FC, PropsWithChildren} from 'react'
import { View, Text, Pressable } from 'react-native';

const SlugWrapper: FC<PropsWithChildren<{generate: () => void}>> = ({children}) => {
  return <View>
    {children}
        <Pressable>
            <Text>
                generate
            </Text>
        </Pressable>
    </View>
  
}
export default SlugWrapper