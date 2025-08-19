const Nav =() => {
  const ulStyle = {
    listStyleType: 'none',
    display: 'flex',
    gap: '1rem',
    margin: 0,
    padding: 0,
  };

  return (
    <nav>
      <ul style={ulStyle}>
        <li>Home</li>
        <li>About</li>
        <li>Menu</li>
        <li>Reservations</li>
        <li>Order Online</li>
        <li>Login</li>
      </ul>
    </nav>
  )
}

export default Nav