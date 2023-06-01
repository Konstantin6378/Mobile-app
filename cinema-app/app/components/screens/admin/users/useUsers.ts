import { useTypedNavigation } from "@/hooks/useTypedNavigation"
import { useSearchForm } from "../../search/useSearchForm"

export const useUsers = () => {
    const {control, debouncedSearch} = useSearchForm()

    const {navigate} = useTypedNavigation()
 }