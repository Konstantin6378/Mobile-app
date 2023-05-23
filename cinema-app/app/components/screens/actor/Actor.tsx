import { FC } from 'react'

import { Heading, Layout, Loader, MovieCatalog } from '@/components/ui'
import NotFound from '@/components/ui/NotFound'

import { useActor } from './useActor'

const Actor: FC = () => {
	const { isLoading, movies, actor } = useActor()
	if (isLoading) return <Loader />
	return (
		<Layout isHasPadding>
			<Heading title={'Actor'} />
			{actor ? (
				<MovieCatalog title={actor.name} movies={movies} isBackButton />
			) : (
				<NotFound />
			)}
		</Layout>
	)
}
export default Actor
