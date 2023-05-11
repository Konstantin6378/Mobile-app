import { IAuthFormData } from '@/shared/types/auth.interface'

import { getMovieIMoviesUrl } from '@/config/api.config'

import { IMovie } from './../shared/types/movie.interface'
import { request } from './api/request.api'

export const MovieIMovieService = {
	async getAll(searchTerm?: string) {
		return request<IMovie[]>({
			url: getMovieIMoviesUrl(''),
			method: 'GET',
			params: searchTerm
				? {
						searchTerm
				  }
				: {}
		})
	},
	async getProfile() {
		return request<IMovie>({
			url: getMovieIMoviesUrl('/profile'),
			method: 'GET'
		})
	},
	// async getFavorites() {
	// 	return request<IMovie[]>({
	// 		url: getMovieIMoviesUrl('/profile/favorites'),
	// 		method: 'GET'
	// 	})
	// },
	async getById(_id: string) {
		return request<IMovie>({
			url: getMovieIMoviesUrl(`/${_id}`),
			method: 'GET'
		})
	},
	async updateProfile(data: IAuthFormData) {
		return request<IMovie>({
			url: getMovieIMoviesUrl(`/profile`),
			method: 'PUT',
			data
		})
	},
	async deleteMovieIMovie(_id: string) {
		return request<string>({
			url: getMovieIMoviesUrl(`/${_id}`),
			method: 'DELETE'
		})
	},
	async update(_id: string, data: IAuthFormData) {
		return request<string>({
			url: getMovieIMoviesUrl(`/${_id}`),

			method: 'PUT',
			data
		})
	}
}
