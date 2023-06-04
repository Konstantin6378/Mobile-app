import { FC } from 'react'
import { Control } from 'react-hook-form'
import { View } from 'react-native'

import { ISearchFormData } from '@/components/screens/search/search.interface'

import Field from '../../form-elements/field/Field'

import AdminCreateButton from './AdminCreateButton'

interface IAdminTableHeader {
	onPress?: () => void
	control: Control<ISearchFormData>
}

const AdminTableHeader: FC<IAdminTableHeader> = ({ control, onPress }) => {
	return (
		<View className='flex-row items-center justify-between mb-3'>
			<View
				style={{
					width: onPress ? '82%' : '100%'
				}}
			>
				<Field<ISearchFormData>
					placeholder='Type something...'
					control={control}
					name='searchTerm'
					keyboardType='web-search'
				/>
				{onPress && <AdminCreateButton onPress={onPress} />}
			</View>
		</View>
	)
}
export default AdminTableHeader
