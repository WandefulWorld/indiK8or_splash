import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import ProductDemo from './pages/ProductDemo';
import Team from './pages/Team';

export default function App() {
  return (
    <Router>
      <main className='overflow-auto bg-black'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/productDemo" element={<ProductDemo />} />
          <Route path="/team" element={<Team />} />
        </Routes>
      </main>
    </Router>
  );
}
