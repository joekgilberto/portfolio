import { Link } from 'react-router-dom';
import './Header.css';

function Header({page}) {

  return (
    <header>
      <section className='fake-buttons'>
        <div className='dot pink'></div>
        <div className='dot blue'></div>
        <div className='dot green'></div>
      </section>
      <nav>
        <Link to='/'>
          <div className={page==="home"?"active":null}>Home</div>
        </Link>
        <Link to='/about'>
          <div className={page==="about"?"active":null}>About</div>
        </Link>
        <Link to='/projects'>
          <div className={page==="projects"?"active":null} id="projects">Projects</div>
        </Link>
        <Link to='/contact'>
          <div className={page==="contact"?"active":null} id="projects">Contact</div>
        </Link>
      </nav>
    </header>
  );
}

export default Header;