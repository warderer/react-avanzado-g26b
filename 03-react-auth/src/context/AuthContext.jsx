import { createContext, useState, useEffect } from 'react'
import { jwtDecode } from 'jwt-decode'

// #1 Crear el contexto
const AuthContext = createContext()

// #2 Crear el proveedor
const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false) // ¿Estoy autenticado?
  const [userPayload, setUserPayload] = useState(null) // Datos del usuario sacados del JWT decodificado (payload)

  const login = (token) => {
    // setItem guarda el token en el localStorage
    localStorage.setItem('token', token)
    const decoded = jwtDecode(token) // Decodifico el token y obtengo el payload
    setUserPayload(decoded)
    setIsAuth(true)
  }

  const logout = () => {
    // removeItem elimina el token del localStorage
    localStorage.removeItem('token')
    setUserPayload(null) // No hay datos del usuario
    setIsAuth(false) // Estoy desautenticado
  }

  useEffect(() => {
    // Recuperar el token del localStorage, si no existe devolvera null
    const token = localStorage.getItem('token')
    if (token) {
      const decoded = jwtDecode(token) // Decodifico el token y obtengo el payload
      setUserPayload(decoded)
      setIsAuth(true)
    }
  }, [])

  const data = {
    isAuth,
    userPayload,
    login,
    logout
  }

  return (
    <AuthContext.Provider value={data}>
      {children}
    </AuthContext.Provider>
  )
}

export {
  AuthContext,
  AuthProvider
}
