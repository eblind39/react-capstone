import logo from '../assets/images/Logo.png';
import Nav from './Nav';

const Header = () => {
  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '1rem',
    backgroundColor: '#f8f9fa',
  };

  return (
    <header style={headerStyle}>
      <img src={logo} alt="logo" />
      <Nav />
    </header>
  )
}

export default Header