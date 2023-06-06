import { FC } from 'react'
import { Text, View } from 'react-native'

import { IDropdown } from './dropdown.interface'

const Dropdown: FC<IDropdown> = ({
	isLoading,
	isMulti,
	field,
	error,
	options,
	style
}) => {
	return (
		<View>
			<Text>Dropdown</Text>
		</View>
	)
}
export default Dropdown
