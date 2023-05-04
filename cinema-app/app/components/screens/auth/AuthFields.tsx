import { FC } from 'react'
import { Control } from 'react-hook-form'
import { Text, View } from 'react-native'

import Field from '@/components/ui/form-elements/field/Field'

import { IAuthFormData } from '@/shared/types/auth.interface'

interface IAuthFields {
	control: Control<IAuthFormData>
	isPassRequired?: boolean
}

const AuthFields: FC<IAuthFields> = ({ control, isPassRequired }) => {
	return (
		<>
			<Field<IAuthFormData>
				control={control}
				name='email'
				rules={{
					required: 'Email'
				}}
			/>
		</>
	)
}
export default AuthFields
