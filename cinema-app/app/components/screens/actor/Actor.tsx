import { FC } from 'react'
import { Text, View } from 'react-native'

const Actor: FC = () => {
	const { isLoading, movies, genre } = useGenre()
	if (isLoading) return <Loader />
	return (
		<Layout isHasPadding>
			<Heading title={'Genre'} />
			{genre ? (
				<MovieCatalog
					title={genre.name}
					movies={movies}
					description={genre.description}
					isBackButton
				/>
			) : (
				<NotFound />
			)}
		</Layout>
	)
}
export default Actor
