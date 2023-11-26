import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Curriculum from './components/Curriculum';
import Setup from './components/Setup';
import FutureGoals from './components/FutureGoals';

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
          <Route path="/setup" element={<Setup />} />
          <Route path="/future-goals" element={<FutureGoals />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;