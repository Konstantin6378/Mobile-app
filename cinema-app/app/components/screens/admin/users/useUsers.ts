import { useTypedNavigation } from "@/hooks/useTypedNavigation"
import { useSearchForm } from "../../search/useSearchForm"
import { useQuery } from "@tanstack/react-query"
import { UserService } from "@/services/user.service"

export const useUsers = () => {
    const {control, debouncedSearch} = useSearchForm()

    const {navigate} = useTypedNavigation()

    const queryData = useQuery(
        ['search users', debouncedSearch],
        () => UserService.getAll(debouncedSearch),
        {
            enabled: !!debouncedSearch,
            select: data => 
        }
    )
 }