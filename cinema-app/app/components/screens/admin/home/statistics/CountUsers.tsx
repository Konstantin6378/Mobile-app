import { UserService } from '@/services/user.service'
import { useQuery } from '@tanstack/react-query'
import {FC} from 'react'
import {View, Text} from 'react-native'

const CountUsers: FC = () => {
    const {isLoading, data} = useQuery(['get count users'], () => UserService.get)
  return (
      <View>
         <Text>CountUsers</Text>
      </View>
  )
}
export default CountUsers