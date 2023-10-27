import { Routes, Route } from 'react-router-dom'
import { Dashboard, Home, Login, Secret, Signup } from '@/pages'

const RoutesIndex = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/secret' element={<Secret />} />
    </Routes>
  )
}
export default RoutesIndex
