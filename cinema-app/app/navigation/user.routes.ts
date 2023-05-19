import Genre from '@/components/screens/genre/Genre'
import {
	Auth,
	Favorites,
	Home,
	Profile,
	Search,
	Trending
} from '@/components/ui'

import { adminRoutes } from './admin.routes'
import { IRoute } from './navigation.types'

export const userRoutes: IRoute[] = [
	{
		name: 'Home',
		component: Home
	},
	// {
	// 	name: 'Auth',
	// 	component: Auth
	// },
	{
		name: 'Trending',
		component: Trending
	},
	{
		name: 'Search',
		component: Search
	},
	{
		name: 'Favorites',
		component: Favorites
	},
	{
		name: 'Profile',
		component: Profile
	},
	{
		name: 'Genre',
		component: Genre
	}
]

export const routes = [...userRoutes, ...adminRoutes]
