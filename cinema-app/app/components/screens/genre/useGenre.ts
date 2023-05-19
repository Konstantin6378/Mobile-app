import { useQuery } from '@tanstack/react-query'

import { useTypedRoute } from '@/hooks/useTypedRoute'

import { MovieService } from '@/services/movie.service'

export const useGenre = () => {
	const { params } = useTypedRoute<''>()
	const { isLoading, data: movies } = useQuery(['get genre movies'], () =>
		MovieService.getMostPopularMovies()
	)
	return { movies, isLoading }
}
