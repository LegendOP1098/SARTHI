import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import OurWork from './pages/OurWork';
import AboutUs from './pages/AboutUs';
import OurTeam from './pages/OurTeam';
import GetInvolved from './pages/GetInvolved';

function App() {
  return (
    <Router>
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/our-work" element={<OurWork />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/our-team" element={<OurTeam />} />
            <Route path="/get-involved" element={<GetInvolved />} />
          </Routes>
        <Footer />
    </Router>
  );
}

export default App;