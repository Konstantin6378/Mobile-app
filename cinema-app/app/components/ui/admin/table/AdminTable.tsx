import {FC} from 'react'
import {View, Text, ScrollView} from 'react-native'
import { IAdminTable } from './admin-table.interface'

const AdminTable: FC<IAdminTable> = ({isLoading, headerItems, removeHandler, tableItems}) => {
  return (
     <ScrollView showsHorizontalScrollIndicator={false} horizontal>
      <View className='pb-6'>
        <AdminTab

      </View>

     </ScrollView>
  )
}
export default AdminTable