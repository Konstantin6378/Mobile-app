import { FC } from 'react'
import { Text } from 'react-native'

interface IHeading {
	title: string
	className?: string
}

const Heading: FC<IHeading> = ({ title, className = '' }) => {
	return (
		<Text
			className={`text-white text-opacity-80 font-semibold ${
				className?.includes('xl') ? '' : 'text-3xl'
			}${className}`}
		>
			{title}
		</Text>
	)
}

export default Heading
