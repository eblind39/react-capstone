import logo from '../assets/images/Logo.png';
import Nav from './Nav';

const Header = () => {
  return (
    <header className="grid grid-cols-12 grid-rows-1 gap-4">
      <div className="grid grid-cols-2 grid-rows-1 gap-4"></div>
      <div className="grid grid-cols-2 grid-rows-1 gap-4">
        <img src={logo} alt="logo" />
      </div>
      <div className="grid grid-cols-6 grid-rows-1 gap-4">
        <Nav />
      </div>
    </header>
  )
}

export default Header