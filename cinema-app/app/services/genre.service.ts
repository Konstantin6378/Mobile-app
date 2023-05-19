import { IGenre, IGenreEditInput } from '@/shared/types/movie.interface'

import { getGenresUrl } from '@/config/api.config'

import { request } from './api/request.api'

export const GenreService = {
	async getAll(searchTerm?: string) {
		return request<IGenre[]>({
			url: getGenresUrl(''),
			method: 'GET',
			params: searchTerm
				? {
						searchTerm
				  }
				: {}
		})
	},

	async getBySlug(slug: string) {
		return request<IGenre>({
			url: getGenresUrl(`/by-slug/${slug}`),
			method: 'GET'
		})
	},

	async getById(_id: string) {
		return request<IGenreEditInput>({
			url: getGenresUrl(`/${_id}`),
			method: 'GET'
		})
	},

	async create() {
		return request<string>({
			url: getGenresUrl('/'),
			method: 'POST'
		})
	},

	async delete(_id: string) {
		return request<string>({
			url: getGenresUrl(`/${_id}`),
			method: 'DELETE'
		})
	},

	async update(_id: string, data: IGenreEditInput) {
		return request<string>({
			url: getGenresUrl(`/${_id}`),
			method: 'PUT',
			data
		})
	}
}
