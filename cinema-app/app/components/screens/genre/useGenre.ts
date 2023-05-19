import { useQuery } from '@tanstack/react-query'

import { useTypedRoute } from '@/hooks/useTypedRoute'

import { MovieService } from '@/services/movie.service'

export const useGenre = () => {
	const { params } = useTypedRoute<'Genre'>()
	const { isLoading, data: movies } = useQuery(['get genre by slug'], () =>
		MovieService.getMostPopularMovies()
	)
	return { movies, isLoading }
}
