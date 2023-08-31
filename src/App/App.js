import './App.css';

// IMPORT COMPONENTS
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';

// IMPORT PAGES
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Projects from '../pages/Projects/Projects';

function App() {
  const [page, setPage] = useState('home')

  return (
    <div className='App'>
      <Header page={page} />
      <main>
      <Routes>
        <Route path='/' element={<Home page={page} setPage={setPage} />} name='home' />
        <Route path='/about' element={<About page={page} setPage={setPage} />} name='about' />
        <Route path='/projects' element={<Projects page={page} setPage={setPage} />} name='projects' />
      </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;