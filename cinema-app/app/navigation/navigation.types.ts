import { ComponentType } from 'react'

export type TypeRootStackParamList = {
	Auth: undefined
	Home: undefined
	Trending: undefined
	Movie: {
		slug: string
	}
	Genre: {
		slug: string
	}
	Actor: {
		slug: string
	}
	Search: undefined
	Favorites: undefined
	Profile: undefined
	Screen404: undefined
} & TypeRootStackAdminList

type TypeRootStackAdminList = {
	Admin: undefined
	ActorEdit: { id: string }
	ActorsList: undefined
	GenreEdit: { id: string }
	GenresList: undefined
	MovieEdit: { id: string }
	MoviesList: undefined
	UserEdit: { id: string }
	UsersList: undefined
}

export interface IRoute {
	name: keyof TypeRootStackParamList
	component: ComponentType
	isAdmin?: boolean
}
