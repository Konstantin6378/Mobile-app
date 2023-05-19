import { useQuery } from '@tanstack/react-query'

import { useTypedRoute } from '@/hooks/useTypedRoute'

import { GenreService } from '@/services/genre.service'
import { MovieService } from '@/services/movie.service'

export const useGenre = () => {
	const { params } = useTypedRoute<'Genre'>()
	const { isLoading, data: movies } = useQuery(
		['get genre by slug', params.slug],
		() => GenreService.getBySlug(params.slug)
	)
	return { movies, isLoading }
}
