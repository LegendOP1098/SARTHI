import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import OurWork from './pages/OurWork';
import AboutUs from './pages/AboutUs';
import OurTeam from './pages/OurTeam';
import GetInvolved from './pages/GetInvolved';
import { ProjectPage } from './pages/Project';

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
            {/* <Route path="/in-news" element={<div className='pt-60' />} /> */}
            <Route 
              path="/our-work/proj-abhivyakti" 
              element={
                <ProjectPage 
                  title="Project Abhivyakti" 
                  info={["An initiative of Sarthi to create awareness on menstrual hygiene and to address period poverty through distribution of free sanitary pads. Project Buland aims to encourage habit formation in early years by introducing them to hygienic practices, and reducing risks of cancers and other diseases due to poor sanitary hygiene. So far, more than 6,500 pads have been distributed among 1,100+ adolescent girls from low-income private schools and 12 awareness drives conducted across Karnal, Delhi & Jaipur. "]}
                />
              } 
            />
            <Route 
              path="/our-work/proj-buland" 
              element={
                <ProjectPage 
                  title="Project Buland" 
                  info={["An initiative of Sarthi to create awareness on menstrual hygiene and to address period poverty through distribution of free sanitary pads. Project Buland aims to encourage habit formation in early years by introducing them to hygienic practices, and reducing risks of cancers and other diseases due to poor sanitary hygiene. So far, more than 6,500 pads have been distributed among 1,100+ adolescent girls from low-income private schools and 12 awareness drives conducted across Karnal, Delhi & Jaipur. "]}
                />
              } 
            />
            <Route 
              path="/our-work/proj-sushiksha" 
              element={
                <ProjectPage 
                  title="Project Sushiksha" 
                  info={["Sushiksha, founded in 2019 by Ananya and Sanjoli Banerjee, is a free mobile school for children from all backgrounds, especially the marginalised ones including girls, economically underprivileged and Dalits. The program aims to plug the gap between rural and urban students and make the young self-reliant, politically and socially aware and responsible citizens. Sushiksha's objective is to give the deprived an equal access to quality education through a holistic development model.","This is done through creative means where different fields of study such as Math, Science, Social Science and General Knowledge are taught alongside Public Speaking, Dance, Sports, Fitness, Self Defence and Art, all programs entirely run by youth. The pedagogy majorly employed is recreational learning. This program is part of the Empowerment through Education initiative, currently operating in Karnal (Haryana) & Delhi ."]}
                />
              } 
            />
          </Routes>
        <Footer />
    </Router>
  );
}

export default App;