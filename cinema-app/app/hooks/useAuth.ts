import { useContext } from 'react'

import { AuthContext } from '@/components/providers/auth/AuthProvider'

export const useAuth = () => useContext(AuthContext)
