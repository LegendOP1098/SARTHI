import React from 'react';
import { Handshake, DollarSign, MessageCircle } from 'lucide-react';

const GetInvolved = () => {
  const involvementOptions = [
    { title: 'Volunteer', description: 'Join our team and make a difference', icon: Handshake },
    { title: 'Donate', description: 'Support our projects financially', icon: DollarSign },
    { title: 'Spread the Word', description: 'Share our mission with others', icon: MessageCircle },
  ];

  return (
    <section id="get-involved" className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Get Involved</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {involvementOptions.map((option, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition duration-300">
              <option.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-2">{option.title}</h3>
              <p className="text-gray-600 mb-4">{option.description}</p>
              <button className="bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;