import { useMemo } from 'react'
import { useForm } from 'react-hook-form'

import { ISearchFormData } from './search.interface'
import { useDebounced } from './useDebounced'

export const useSearchForm = () => {
	const { control, watch } = useForm<ISearchFormData>({
		mode: 'onChange'
	})

	const searchTerm = watch('searchTerm')
	const debouncedSearch = useDebounced(searchTerm, 500)

	return useMemo(() => ({ debouncedSearch, searchTerm, control }), [searchTerm])
}
