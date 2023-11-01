import { useAuthContext } from '@/hooks/useAuthContext'

const Secret = () => {
  const { userPayload } = useAuthContext()

  return (
    <>
      <h1>Secret</h1>
      {userPayload?.role === 'ADMIN'
        ? <h2>Hola Admin</h2>
        : <h2>Hola Customer</h2>}

      {userPayload?.role === 'ADMIN' && <h4>Bienvenido Admin</h4>}

      {userPayload?.role === 'CUSTOMER' && <h4>Bienvenido Customer</h4>}
    </>
  )
}
export default Secret
