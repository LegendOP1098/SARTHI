import React from 'react';
import { Handshake, DollarSign, MessageCircle, Calendar } from 'lucide-react';

const GetInvolved = () => {
  const involvementOptions = [
    { title: 'Volunteer', description: 'Join our team and make a difference in your community.', icon: Handshake },
    { title: 'Donate', description: 'Support our projects financially and help us reach more youth.', icon: DollarSign },
    { title: 'Spread the Word', description: 'Share our mission with others and help us grow our impact.', icon: MessageCircle },
    { title: 'Attend Events', description: 'Participate in our workshops, seminars, and fundraisers.', icon: Calendar },
  ];

  return (
    <div className="bg-gradient-to-b from-red-100 to-yellow">
      <section className="pt-60">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-center mb-12 text-red-800">Get Involved</h1>
          <p className="text-xl text-center mb-16 max-w-3xl mx-auto text-gray-700">
            There are many ways to support Sarthi's mission and make a difference in the lives of youth. Choose the option that best suits your interests and availability.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {involvementOptions.map((option, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center text-center transform hover:scale-105 transition duration-300">
                <option.icon className="w-16 h-16 text-red-600 mb-6" />
                <h3 className="text-2xl font-semibold mb-4 text-red-800">{option.title}</h3>
                <p className="text-gray-600 mb-6">{option.description}</p>
                <button className="mt-auto bg-red-600 text-white font-bold py-3 px-6 rounded-full hover:bg-red-700 transition duration-300">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-red-800">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-red-50 rounded-lg p-6">
              <h3 className="text-2xl font-semibold mb-2 text-red-800">Youth Leadership Workshop</h3>
              <p className="text-gray-600 mb-4">Date: June 15, 2024</p>
              <p className="text-gray-600">Join us for a day of interactive sessions on leadership skills and community engagement.</p>
            </div>
            <div className="bg-red-50 rounded-lg p-6">
              <h3 className="text-2xl font-semibold mb-2 text-red-800">Annual Fundraising Gala</h3>
              <p className="text-gray-600 mb-4">Date: September 22, 2024</p>
              <p className="text-gray-600">An evening of celebration and support for Sarthi's ongoing projects.</p>
            </div>
            <div className="bg-red-50 rounded-lg p-6">
              <h3 className="text-2xl font-semibold mb-2 text-red-800">Community Health Fair</h3>
              <p className="text-gray-600 mb-4">Date: October 8, 2024</p>
              <p className="text-gray-600">Free health check-ups and awareness sessions for local communities.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-red-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8 text-red-800">Ready to Make a Difference?</h2>
          <p className="text-xl mb-12 text-gray-700">
            Join us in our mission to empower youth and create positive change in communities.
          </p>
          <a href="#" className="inline-block bg-red-600 text-white font-bold py-3 px-8 rounded-full hover:bg-red-700 transition duration-300">
            Contact Us Today
          </a>
        </div>
      </section>
    </div>
  );
};

export default GetInvolved;