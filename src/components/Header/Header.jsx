import { Link } from 'react-router-dom';
import './Header.css';

function Header() {

  return (
    <header>
      <h1>My Portfolio Page</h1>
      <nav>
        <Link to='/'>
          <div>HOME</div>
        </Link>
        <Link to='/about'>
          <div>ABOUT</div>
        </Link>
        <Link to='/projects'>
          <div>PROJECTS</div>
        </Link>
      </nav>
    </header>
  );
}

export default Header;