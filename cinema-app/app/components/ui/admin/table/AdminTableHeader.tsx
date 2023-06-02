import {FC} from 'react'
import {View, Text} from 'react-native'

const AdminTableHeader: FC<{headerItems: string[]}> = ({headerItems}) => {
  return (
      <View className='flex-row items-center px-3 rounded-lg bg-primary mt-2'>
         <Text>AdminTableHeader</Text>
      </View>
  )
}
export default AdminTableHeader