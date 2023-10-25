import './App.css'
import Header from './components/Header'
import { Dashboard, Home, Login, Secret, Signup } from '@/pages'

function App () {
  return (
    <>
      <Header />
      <Home />
      <Dashboard />
      <Secret />
      <Login />
      <Signup />
    </>
  )
}

export default App
