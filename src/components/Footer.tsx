import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Sarthi</h3>
            <p className="text-gray-400">Empowering Youth, Transforming Lives</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white">Home</Link></li>
              <li><Link to="/our-work" className="text-gray-400 hover:text-white">Our Work</Link></li>
              <li><Link to="/about-us" className="text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link to="/our-team" className="text-gray-400 hover:text-white">Our Team</Link></li>
              <li><Link to="/get-involved" className="text-gray-400 hover:text-white">Get Involved</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p className="text-gray-400">123 NGO Street, City, Country</p>
            <p className="text-gray-400">contact@sarthi.org</p>
            <p className="text-gray-400">+1 234 567 8900</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#"className="text-gray-400 hover:text-blue-600"><Facebook /></a>
              <a href="#" className="text-gray-400 hover:text-blue-300"><Twitter /></a>
              <a href="#" className="text-gray-400 hover:text-red-400"><Instagram /></a>
              <a href="#" className="text-gray-400 hover:text-yellow-200"><Mail /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; 2024 Sarthi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;