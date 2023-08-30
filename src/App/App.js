import './App.css';

// IMPORT COMPONENTS
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';

// IMPORT PAGES
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Projects from '../pages/Projects';

function App() {

  return (
    <div className='App'>
      <Header />
      <main>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/about' element={<About />} />
        
      </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;