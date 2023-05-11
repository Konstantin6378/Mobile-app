export interface IActor {
	_id: string
	name: string
	slug: string
	photo: string
	countMovies: number
}

export interface IParameters {
	year: number
	duration: number
	country: string
}

export interface IMovie {
	_id: string
	poster: string
	title: string
	parameters: IParameters
	genres: IGenre[]
	actors: IActor[]
	countOpened: number
	videoUrl: string
	rating: number
	slug: string
}
