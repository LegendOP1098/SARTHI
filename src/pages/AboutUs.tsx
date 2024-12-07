import React from 'react';
import { Target, Heart, BookOpen } from 'lucide-react';
import Achievements from '../components/Achievements_about';
import image6 from "../assets/photo6.png";

const AboutUs = () => {
  const focusAreas = [
    { name: 'Quality Education', icon: BookOpen },
    { name: 'Health', icon: Heart },
    { name: 'Youth Empowerment', icon: Target },
  ];

  return (
    <div className="bg-white">
      {/* About Section */}
      <section className="py-20">
        <div className="sm:flex items-center max-w-screen-xl mx-auto px-4">
          <div className="sm:w-1/2 p-10">
            <div className="image object-center text-center">
              <img src="https://i.imgur.com/WbQnbas.png" alt="About Us" className="w-full h-auto rounded-lg " />
            </div>
          </div>
          <div className="sm:w-1/2 p-5">
            <div className="text">
              <span className="text-gray-500 text-4xl border-b-2 hover:border-b-4 border-indigo-600 uppercase">About Us</span>
              <h2 className="my-4 font-bold text-3xl sm:text-4xl">
                About <span className="text-indigo-600">Sarthi</span>
              </h2>
              <p className="text-gray-700 text-lg">
                Sarthi is a youth-led non-governmental organisation dedicated to empowering youth through education, awareness, and action. We believe in the potential of young people to create positive change in their communities and beyond.
              </p>
              <p className="text-gray-700 mt-4 text-lg">
                Founded in 2014, Sarthi has grown from a small group of passionate volunteers to a dynamic organization making a significant impact across multiple communities. Our approach combines grassroots activism with innovative programs to address the most pressing issues facing youth today.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-green-800">Our Mission</h2>
          <p className="text-2xl text-center max-w-3xl mx-auto text-gray-700">
            To empower youth through education, awareness, and action, creating a society where every young person has the opportunity to reach their full potential and contribute positively to their community.
          </p>
        </div>
      </section>

      <section className="py-0">
        <Achievements />
      </section>


      {/* Core Focus Areas Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-green-800">Our Core Focus Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {focusAreas.map((area, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 text-center">
                <area.icon className="w-16 h-16 text-green-600 mx-auto mb-6" />
                <h3 className="text-2xl font-semibold mb-4 text-green-800">{area.name}</h3>
                <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            ))}
          </div>
        </div>
      </section>
     

      {/* Values Section */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-green-800">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-2 text-green-800">Integrity</h3>
              <p className="text-gray-600">We act with honesty and transparency in all our endeavors.</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-2 text-green-800">Innovation</h3>
              <p className="text-gray-600">We embrace creative solutions to address complex challenges.</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-2 text-green-800">Collaboration</h3>
              <p className="text-gray-600">We believe in the power of partnerships and teamwork.</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-2 text-green-800">Empathy</h3>
              <p className="text-gray-600">We approach our work with compassion and understanding.</p>
            </div>
          </div>
        </div>
      </section>

      <section>
      <div id="about" className="relative bg-white overflow-hidden mt-16">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100"></polygon>
          </svg>

          <div className="pt-1"></div>

          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h2 className="my-6 text-2xl tracking-tight font-extrabold text-green-800 sm:text-3xl md:text-4xl">
                About Us
              </h2>

              <p className="text-xl mb-8 text-gray-700">
                Sarthi is a youth-led non-governmental organisation dedicated to empowering youth through education, awareness, and action. We believe in the potential of young people to create positive change in their communities and beyond.
              </p>
              <p className="text-xl mb-8 text-gray-700">
                Founded in 2014, Sarthi has grown from a small group of passionate volunteers to a dynamic organization making a significant impact across multiple communities. Our approach combines grassroots activism with innovative programs to address the most pressing issues facing youth today.
              </p>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-top sm:h-72 md:h-96 lg:w-full lg:h-full"
          src={image6} 
          alt="Sarthi Organization"
        />
      </div>
    </div>
      </section>
    </div>
  );
};

export default AboutUs;
