import { Link } from 'react-router-dom';
import './Header.css';

function Header({ page }) {

  return (
    <header>
      <section className='fake-buttons'>
        <div className='dot purple'></div>
        <div className='dot blue'></div>
        <div className='dot pink'></div>
      </section>
      <nav>
        <Link to='/'>
          <div className={page === "home" ? "active" : null}>
            <p id="first">Home</p>
          </div>
        </Link>
        <Link to='/projects'>
          <div className={page === "projects" ? "active" : null}>
            <p>Projects</p>
          </div>
        </Link>
        <Link to='/about'>
          <div className={page === "about" ? "active" : null}>
            <p>About</p>
          </div>
        </Link>
        <Link to='/contact'>
          <div className={page === "contact" ? "active" : null}>
            <p id="last">Contact</p>
          </div>
        </Link>
      </nav>
    </header>
  );
}

export default Header;