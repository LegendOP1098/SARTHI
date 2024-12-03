import { Users, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { FeatureCard } from '../components/mini/Featproj';
import MissionComponent from '../components/OurMission';

const Home = () => {
  const navigate=useNavigate();
  return (
    <div className="bg-gradient-to-b from-blue-100 to-white">
      <section className="py-20 text-center">
        <div className="container mx-auto px-4">
          <Users className="w-20 h-20 mx-auto mb-6 text-blue-600" />
          <h1 className="text-5xl font-bold mb-4 text-blue-800">Welcome to Sarthi</h1>
          <p className="text-2xl mb-8 text-blue-600">Empowering Youth, Transforming Lives</p>
          <p className="text-lg max-w-2xl mx-auto mb-12 text-gray-700">
            Sarthi is a youth-led non-governmental organisation that strives to build a society where empowered and educated youth improve their and others' lives. We believe that awareness is the first step towards change.
          </p>
          <button onClick={()=>navigate("/get-involved")} className="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition duration-300">
            Get Involved <ArrowRight className="inline ml-2" />
          </button>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-blue-800">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <p className="text-5xl font-bold text-blue-600 mb-2">1000+</p>
              <p className="text-xl text-gray-700">Youth Empowered</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold text-blue-600 mb-2">50+</p>
              <p className="text-xl text-gray-700">Communities Served</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold text-blue-600 mb-2">10+</p>
              <p className="text-xl text-gray-700">Years of Impact</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <MissionComponent/>
      </section>

      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-blue-800">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              title="Project Abhivyakti" 
              tagline="Mental health awareness initiative for youth." 
              imgsrc="https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            />
            <FeatureCard 
              title="Project Buland" 
              tagline="Menstrual hygiene awareness campaign."
              imgsrc="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"  
            />
            <FeatureCard 
              title="Project Sushiksha" 
              tagline="Free school for underprivileged children."
              imgsrc="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;