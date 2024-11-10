import biglogo from '../assets/biglogo.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={styles.header}>
      <nav style={styles.nav}>
        <Link to="/">
          <img src={biglogo} className='w-64' alt="Logo" />
        </Link>
        <Link to="/about" style={styles.link}>ABOUT</Link>
        {/* <Link to="/productDemo" style={styles.link}>Product Demo</Link>
        <Link to="/team" style={styles.link}>Team</Link> */}
      </nav>
    </header>
  );
};

const styles = {
  header: {
    background: 'linear-gradient(to bottom, #bdc3c7, #000000)', 
    padding: '20px 20px 60px 20px', 
    textAlign: 'center',
  },
  nav: {
    marginTop: '4px',
    display: 'flex',
    justifyContent: 'flex-start', 
    alignItems: 'center',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  link: {
    color: 'black',
    margin: '45px 50px 0 50px',
    textAlign: 'center',
    fontSize: '1.8em',
    fontWeight: 'bold'
  },
};

export default Header;