import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Curriculum from './components/Curriculum';
import Footer from './components/Footer';

// analtics

import { inject } from '@vercel/analytics';
inject();

function App() {
  return (
    <Router>
      <Navbar />
      <div className="transition-all duration-500 ease-in-out">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/curriculum" element={<Curriculum />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;