import { useContext } from 'react'
import { AuthContext } from '@/context/AuthContext'

// Paso 3. Crear al consumidor del contexto
export const useAuthContext = () => {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuthContext debe estar dentro del proveedor AuthProvider')
  }

  return context
}
