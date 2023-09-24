import './App.css';

// IMPORT TOOLS
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';

// IMPORT COMPONENTS
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

// IMPORT PAGES
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Projects from '../pages/Projects/Projects';
import Contact from '../pages/Contact/Contact'
import Error from '../pages/Error/Error';

function App() {
  const [page, setPage] = useState('home')

  return (
    <div className='App'>
      <Header page={page} />
      <main>
      <Routes>
        <Route path='/' element={<Home setPage={setPage} />} name='home' />
        <Route path='/about' element={<About setPage={setPage} />} name='about' />
        <Route path='/projects' element={<Projects setPage={setPage} />} name='projects' />
        <Route path='/contact' element={<Contact setPage={setPage} />} name='error' />
        <Route path='/*' element={<Error setPage={setPage} />} name='error' />
      </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;