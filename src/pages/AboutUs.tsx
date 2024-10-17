import React from 'react';
import { Target, Heart, BookOpen } from 'lucide-react';

const AboutUs = () => {
  const focusAreas = [
    { name: 'Quality Education', icon: BookOpen },
    { name: 'Health', icon: Heart },
    { name: 'Youth Empowerment', icon: Target },
  ];

  return (
    <div className="bg-gradient-to-b from-green-100 to-white">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-center mb-12 text-green-800">About Us</h1>
          <div className="max-w-3xl mx-auto">
            <p className="text-xl mb-8 text-gray-700">
              Sarthi is a youth-led non-governmental organisation dedicated to empowering youth through education, awareness, and action. We believe in the potential of young people to create positive change in their communities and beyond.
            </p>
            <p className="text-xl mb-8 text-gray-700">
              Founded in 2014, Sarthi has grown from a small group of passionate volunteers to a dynamic organization making a significant impact across multiple communities. Our approach combines grassroots activism with innovative programs to address the most pressing issues facing youth today.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-green-800">Our Mission</h2>
          <p className="text-2xl text-center max-w-3xl mx-auto text-gray-700">
            To empower youth through education, awareness, and action, creating a society where every young person has the opportunity to reach their full potential and contribute positively to their community.
          </p>
        </div>
      </section>

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
    </div>
  );
};

export default AboutUs;