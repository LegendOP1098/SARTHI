import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex flex-wrap justify-between items-center">
        <Link to="/" className="flex items-center">
          <Heart className="w-8 h-8 mr-2" />
          <span className="text-2xl font-bold">Sarthi</span>
        </Link>
        <nav className="mt-4 w-full md:w-auto md:mt-0">
          <ul className="flex flex-wrap justify-center md:space-x-6">
            <li><Link to="/" className="hover:text-blue-200 py-2 px-3 rounded-full hover:bg-white hover:bg-opacity-20 transition duration-300">Home</Link></li>
            <li><Link to="/our-work" className="hover:text-blue-200 py-2 px-3 rounded-full hover:bg-white hover:bg-opacity-20 transition duration-300">Our Work</Link></li>
            <li><Link to="/about-us" className="hover:text-blue-200 py-2 px-3 rounded-full hover:bg-white hover:bg-opacity-20 transition duration-300">About Us</Link></li>
            <li><Link to="/our-team" className="hover:text-blue-200 py-2 px-3 rounded-full hover:bg-white hover:bg-opacity-20 transition duration-300">Our Team</Link></li>
            <li><Link to="/get-involved" className="hover:text-blue-200 py-2 px-3 rounded-full hover:bg-white hover:bg-opacity-20 transition duration-300">Get Involved</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;