import { FC } from 'react'
import { ScrollView, Text, View } from 'react-native'

import AdminTableHeader from './AdminTableHeader'
import { IAdminTable } from './admin-table.interface'
import Loader from '../../Loader'

const AdminTable: FC<IAdminTable> = ({
	isLoading,
	headerItems ,
	removeHandler,
	tableItems = []
}) => {
	return (
		<ScrollView showsHorizontalScrollIndicator={false} horizontal>
			<View className='pb-6'>
				<AdminTableHeader headerItems={headerItems} />
        {isLoading ? <Loader /> : tableItems?.length ? tableItems.map(tableItem => (
          <AdminTableItem 
            key={tableItem._id}
            removeHandler={() => removeHandler(tableItem._id)}
            tableItem={tableItem}
          />
        )): <Text className='text-white text-lg'>Elements not found</Text>}
			</View>
		</ScrollView>
	)
}
export default AdminTable
