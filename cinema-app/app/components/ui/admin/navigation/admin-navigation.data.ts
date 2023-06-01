import { INavItem } from './admin-navigation.interface'

export const navItems: INavItem[] = [
	{
		icon: 'insert-chart-outlined',
		title: 'Statistics',
		routeName: 'Admin'
	},
	{
		icon: 'group',
		title: 'Users',
		routeName: 'UsersList'
	},
	{
		icon: 'movie-filter',
		title: 'Movies',
		routeName: 'MoviesList'
	},
	{
		icon: 'recent-actors',
		title: 'Actors',
		routeName: 'ActorsList'
	},
	{
		icon: 'category',
		title: 'Genres',
		routeName: 'GenresList'
	}
]
