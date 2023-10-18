import { useState } from 'react'
import logo from '../assets/react.svg'

const SimpleForm = () => {
// Paso #2 Crear los estados donde se guardaran los valores de los inputs
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // Paso #4: Crear la funcion que se ejecutara al enviar el formulario
  const handleSubmit = (event) => {
    event.preventDefault() // evita que se recargue la pagina y rompa el SPA
    const submittedData = JSON.stringify({ email, password })
    console.log(submittedData)
  }

  // Paso #1 Crear el formulario base con JSX
  return (
    <div className='login'>
      <div className='login-container'>
        <img src={logo} alt='logo' />

        <form onSubmit={handleSubmit}>
          {/* Paso #3: Guardar cada cambio del input en su estado */}
          <label htmlFor='email'>Email</label>
          <input
            type='text'
            name='email'
            placeholder='correo@mail.com'
            id='simple-email'
            onChange={(event) => setEmail(event.target.value)}
            value={email}
          />

          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            id='simple-password'
            onChange={(event) => setPassword(event.target.value)}
            value={password}
          />

          <button type='submit'>
            Iniciar Sesion
          </button>

        </form>
      </div>
    </div>
  )
}

export default SimpleForm
