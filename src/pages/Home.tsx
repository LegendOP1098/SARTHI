import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { FeatureCard } from '../components/mini/Featproj';
import MissionComponent from '../components/OurMission';
import OurCompass from '../components/OurCompass';
import { Achievements } from '../components/Achievements_home';
import Carousel from '../components/mini/Carousel';
import FadeInFromDown from '../components/mini/FadeEffect';

const Home = () => {
  const navigate=useNavigate();
  return (
    <div className="bg-white overflow-x-hidden">
      <FadeInFromDown>
        <section className="py-20 text-center border-b-1 border-black h-screen">
          <div className="flex justify-around items-center mx-auto px-4 h-full pt-20">
            <div>
              <h1 className="text-5xl font-bold mb-4 text-blue-800">Welcome to Sarthi</h1>
              <p className="text-2xl mb-8 text-blue-600">Empowering Youth, Transforming Lives</p>
              <p className="text-lg max-w-2xl mx-auto mb-12 text-gray-700">
                Sarthi is a youth-led non-governmental organisation that strives to build a society where empowered and educated youth improve their and others' lives. We believe that awareness is the first step towards change.
              </p>
              <button 
                onClick={()=>navigate("/get-involved")} 
                className="m-auto w-60 group transition duration-300 inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700"
              >
                Get Involved <ArrowRight className="inline ml-2 hover:translate-x-1 transfrom transition-all duration-500 ease-in-out">Get Started</ArrowRight>
              </button>
            </div>
            
            <div className="h-5/6 w-1/2 bg-white rounded-lg">
              <Carousel/>
            </div>
          </div>
        </section>
      </FadeInFromDown>
      <hr className="w-2/3 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"></hr>
      <section className="bg-white">
        <Achievements/>
      </section>

      <section className='mt-20'>
        <MissionComponent/>
      </section>

      <section className='my-20'>
        <OurCompass/>
      </section>

      <section className="py-20 bg-white-50">
        <div className="container mx-auto px-4">
          <h2 className="group text-blue-800 transition-all font-bold mb-12 text-center text-4xl duration-300 ease-in-out" >
            <span className="bg-left-bottom bg-gradient-to-r from-blue-100 to-blue-800 group-hover:bg-[length:0%_2px] bg-no-repeat bg-[length:100%_2px] transition-all duration-500 ease-out">
              Featured Projects
            </span>
          </h2>
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