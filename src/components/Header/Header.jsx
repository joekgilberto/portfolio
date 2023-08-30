import { Link } from 'react-router-dom';
import './Header.css';

function Header() {

  return (
    <header>
      <section className='fake-buttons'>
        <div className='dot pink'></div>
        <div className='dot blue'></div>
        <div className='dot green'></div>
      </section>
      <nav>
        <Link to='/'>
          <div className='active'>Home</div>
        </Link>
        <Link to='/about'>
          <div>About</div>
        </Link>
        <Link to='/projects'>
          <div className='projects'>Projects</div>
        </Link>
      </nav>
    </header>
  );
}

export default Header;