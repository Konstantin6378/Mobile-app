import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Text, View } from 'react-native'

const Auth: FC = () => {
	const [isReg, setIsReg] = useState(false)

	const { handleSubmit, reset, control } = useForm({
		mode: 'onChange'
	})

	const onSubmit: SubmitHandler<any> = data => {}
	return (
		<View>
			<Text>Auth</Text>
		</View>
	)
}
export default Auth
