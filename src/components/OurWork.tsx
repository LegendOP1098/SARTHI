import React from 'react';
import { Brain, Droplet, BookOpen } from 'lucide-react';

const OurWork = () => {
  const projects = [
    { name: 'Project Abhivyakti', description: 'Mental health awareness', icon: Brain },
    { name: 'Project Buland', description: 'Menstrual hygiene awareness', icon: Droplet },
    { name: 'Project Sushiksha', description: 'Free weekend school', icon: BookOpen },
  ];

  return (
    <section id="our-work" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
              <project.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-semibold mb-2">{project.name}</h3>
              <p className="text-gray-600">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurWork;