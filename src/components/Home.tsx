import React from 'react';
import { Users } from 'lucide-react';

const Home = () => {
  return (
    <section id="home" className="py-20 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <Users className="w-16 h-16 mx-auto mb-6" />
        <h1 className="text-5xl font-bold mb-4">Welcome to Sarthi</h1>
        <p className="text-xl mb-8">Empowering Youth, Transforming Lives</p>
        <p className="text-lg max-w-2xl mx-auto">
          Sarthi is a youth-led non-governmental organisation that strives to build a society where empowered and educated youth improve their and others' lives. We believe that awareness is the first step towards change.
        </p>
        <a href="#get-involved" className="mt-8 inline-block bg-white text-blue-600 font-bold py-3 px-6 rounded-full hover:bg-blue-100 transition duration-300">
          Get Involved
        </a>
      </div>
    </section>
  );
};

export default Home;