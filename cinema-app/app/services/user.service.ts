import { IUser } from '@/shared/types/user.interface'

import { getUsersUrl } from '@/config/api.config'

import { request } from './api/request.api'

export const UserService = {
	async getAll(searchTerm?: string) {
		return request<IUser[]>({
			url: getUsersUrl(''),
			method: 'GET',
			params: searchTerm
				? {
						searchTerm
				  }
				: {}
		})
	},
	async getProfile() {
		return request<IUser[]>({
			url: getUsersUrl('/profile'),
			method: 'GET'
		})
	},
	// async getFavorites() {
	// 	return request<IMovie[]>({
	// 		url: getUsersUrl('/profile/favorites'),
	// 		method: 'GET'
	// 	})
	// },
	async getById(_id: string) {
		return request<IUser>({
			url: getUsersUrl(`/${_id}`),
			method: 'GET'
		})
	}
}
