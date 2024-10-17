import React from 'react';
import { Target, Heart, BookOpen } from 'lucide-react';

const AboutUs = () => {
  const focusAreas = [
    { name: 'Quality Education', icon: BookOpen },
    { name: 'Health', icon: Heart },
    { name: 'Gender Equality', icon: Target },
  ];

  return (
    <section id="about-us" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">About Us</h2>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg mb-8">
            Sarthi is dedicated to empowering youth through education, awareness, and action. We believe in the potential of young people to create positive change in their communities and beyond.
          </p>
          <h3 className="text-2xl font-semibold mb-6">Our Core Focus Areas</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {focusAreas.map((area, index) => (
              <div key={index} className="flex flex-col items-center">
                <area.icon className="w-12 h-12 text-blue-600 mb-4" />
                <h4 className="text-xl font-semibold">{area.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;