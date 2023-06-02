import { FC } from 'react'
import { ScrollView, Text, View } from 'react-native'

import AdminTableHeader from './AdminTableHeader'
import { IAdminTable } from './admin-table.interface'

const AdminTable: FC<IAdminTable> = ({
	isLoading,
	headerItems = [],
	removeHandler,
	tableItems
}) => {
	return (
		<ScrollView showsHorizontalScrollIndicator={false} horizontal>
			<View className='pb-6'>
				<AdminTableHeader headerItems={headerItems} />
			</View>
		</ScrollView>
	)
}
export default AdminTable
