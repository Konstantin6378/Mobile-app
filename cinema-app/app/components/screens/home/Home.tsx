import { FC } from 'react'

import { Layout, Loader } from '@/components/ui'

import { useTypedNavigation } from '@/hooks/useTypedNavigation'

import { useGetAllMovies } from './useGetAllMovies'

const Home: FC = () => {
	const { navigate } = useTypedNavigation()

	const { movies, isLoading } = useGetAllMovies()

	return (
		<Layout>
			{isLoading ? <Loader /> : movies?.length && <Carusel movies={movies} />}
		</Layout>
	)
}
export default Home
