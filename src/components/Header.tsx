import logo from '../assets/images/Logo.png';

const Header = () => {
  return (
    <header>
      <img src={logo} alt="logo" />
      <h1>Little Lemon</h1>
      <p>Welcome to our restaurant!</p>
    </header>
  )
}

export default Header