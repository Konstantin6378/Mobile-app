import { FC } from 'react'
import { ListRenderItemInfo, Pressable } from 'react-native'

import HorizontalList from '@/components/ui/HorizontalList'

import { useTypedNavigation } from '@/hooks/useTypedNavigation'

import { IActor } from '@/shared/types/actor.interface'

const ActorCarousel: FC<{ actors: IActor[] }> = ({ actors }) => {
	const { navigate } = useTypedNavigation()

	return (
		<HorizontalList
			data={actors}
			// @ts-ignore
			renderItem={({ item: actor }: ListRenderItemInfo<IActor>) => (
				<Pressable
					onPress={() =>
						navigate('Actor', {
							slug: actor.slug
						})
					}
					className='flex-row items-center rounded-xl overflow-hidden w-48 mr-4'
					style={{ height: 72, backgroundColor: 'rgba(255, 255, 255, 0.07' }}
				></Pressable>
			)}
		/>
	)
}
export default ActorCarousel
