import { FC, useState, useEffect } from 'react';
import { Text, View, ActivityIndicator } from 'react-native';

import { IDropdown } from './dropdown.interface'
import DropDownPicker from 'react-native-dropdown-picker';

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
		<View className='z-10' style={style}>
			<DropDownPicker 
                open={isOpen}
                setOpen={setIsOpen}
                items={items}
                setItems={setItems}
                value={value}
                setValue={setValue}
                onChangeValue={(value: any) => {
                    if(value) field.onChange(value)
                }}
                multiple={isMulti}
                loading={isLoading}
                mode='BADGE'
                activityIndicatorColor='#bf3335'
                style={{
                    backgroundColor: '#232323',
                    borderColor: error ? 'red' : 'transparent',
                    paddingHorizontal: 16,
                    marginVertical: 6
                }}
                textStyle={{
                    fontSize: 16
                }}
                placeholderStyle={{
                    color: '#5a595d'
                }}
                dropDownContainerStyle={{
                    backgroundColor: '#232323',
                }}
                showBadgeDot={false}
            />
            {error && <Text className='text-red'>{error.message}</Text>}
		</View>
	)
}
export default Dropdown
