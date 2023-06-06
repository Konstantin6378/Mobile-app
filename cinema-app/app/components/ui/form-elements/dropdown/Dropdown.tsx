import { FC, useState, useEffect } from 'react';
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
	const [isOpen, setIsOpen] = useState(false)
	const [value, setValue] = useState<string[] | null>(null)
	const [items, setItems] = useState(options)

	const getValue = (): string[] | null => {
		if (field.value) {
			return isMulti
				? items.filter(option => field.value.indexOf(option.value) >= 0)
				: items.find(option => option.value === field.value)?.value
		} else return null
	}

    useEffect(() => {
        if(!value) setValue(getValue())
    }, [field.value])

	return (
		<View>
			<Text>Dropdown</Text>
		</View>
	)
}
export default Dropdown
