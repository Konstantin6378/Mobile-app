import cn from 'clsx'
import { FC } from 'react'
import { Text } from 'react-native'

interface IHeading {
	title: string
	className?: string
}

const Heading: FC<IHeading> = ({ title, className = '' }) => {
	return (
		<Text
			className={cn(`text-white text-opacity-80 font-semibold`, className)}
			numberOfLines={1}
		>
			{title}
		</Text>
	)
}

export default Heading
