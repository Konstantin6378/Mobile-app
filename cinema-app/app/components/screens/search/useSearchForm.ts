import { useForm } from 'react-hook-form'

import { ISearchFormData } from './search.interface'

export const useSearchForm = () => {
	const { control, watch } = useForm<ISearchFormData>({
		mode: 'onChange'
	})
}
