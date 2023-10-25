import './header.scss'

const Header = () => {
  return (
    <nav className='header'>
      <a className='header__logo' href='/'>LOGO</a>
      <ul className='header__nav-list'>
        <li className='header__list-item'>
          <a href='/' className='header__item-link header__item-link--is-active'>Home</a>
        </li>
        <li className='header__list-item'>
          <a href='/dashboard' className='header__item-link'>Dashboard</a>
        </li>
        <li className='header__list-item'>
          <a href='/secret' className='header__item-link'>Secret</a>
        </li>
        <li className='header__list-item'>
          <a href='/login' className='header__item-link'>Login</a>
        </li>
        <li className='header__list-item'>
          <a href='/signup' className='header__item-link'>Signup</a>
        </li>
      </ul>
    </nav>
  )
}
export default Header
