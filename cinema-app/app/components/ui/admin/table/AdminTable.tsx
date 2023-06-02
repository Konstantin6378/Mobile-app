import {FC} from 'react'
import {View, Text, ScrollView} from 'react-native'
import { IAdminTable } from './admin-table.interface'
import AdminTableHeader from './AdminTableHeader'

const AdminTable: FC<IAdminTable> = ({isLoading, headerItems, removeHandler, tableItems}) => {
  return (
     <ScrollView showsHorizontalScrollIndicator={false} horizontal>
      <View className='pb-6'>
        <AdminTableHeader headerItems={headerItems}/>

      </View>

     </ScrollView>
  )
}
export default AdminTable