import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import logo from '@/assets/react.svg'
import { loginUserService } from '@/services/userServices'
import { useAuthContext } from '@/hooks/useAuthContext'
import '@/styles/form.css'

const Login = () => {
  const navigate = useNavigate()
  const { login } = useAuthContext()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = async (data) => {
    try {
      const response = await loginUserService(data)
      if (response.status === 200) {
        // console.log('Usuario ha iniciado sesión exitosamente', response.data.token)
        login(response.data.token)
        navigate('/')
      }
    } catch (error) {
      console.log('Ocurrio un error en Login', error.message)
    }
  }

  return (
    <main className='form-signin w-100 m-auto'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <img
          className='mb-4'
          src={logo}
          alt=''
          width={72}
          height={57}
        />
        <h1 className='h3 mb-3 fw-normal'>Please sign in</h1>
        <div className='form-floating'>
          <input
            type='email'
            className='form-control'
            id='floatingInput'
            placeholder='name@example.com'
            name='email'
            {...register('email', { required: true })}
          />
          <label htmlFor='floatingInput'>Email address</label>
        </div>
        {errors.email && <span>This field is required</span>}

        <div className='form-floating'>
          <input
            type='password'
            className='form-control'
            id='floatingPassword'
            placeholder='Password'
            name='password'
            {...register('password', { required: true })}
          />
          <label htmlFor='floatingPassword'>Password</label>
        </div>
        {errors.password && <span>This field is required</span>}

        <button className='btn btn-primary w-100 py-2' type='submit'>
          Sign in
        </button>
        <p className='mt-5 mb-3 text-body-secondary'>© 2017–2023</p>
      </form>
    </main>

  )
}
export default Login
