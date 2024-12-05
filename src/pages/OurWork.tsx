import React from 'react';
import { Brain, Droplet, BookOpen, Heart, Target } from 'lucide-react';

const OurWork = () => {
  const projects = [
    { name: 'Project Abhivyakti', description: 'Mental health awareness initiative for youth.', icon: Brain, image: 'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
    { name: 'Project Buland', description: 'Menstrual hygiene awareness and education campaign.', icon: Droplet, image: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
    { name: 'Project Sushiksha', description: 'Free weekend school for underprivileged children.', icon: BookOpen, image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
  ];

  return (
    <div className="bg-gradient-to-b from-purple-100 to-white">
      <section className="pt-60">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-center mb-12 text-purple-800">Our Work</h1>
          <p className="text-xl text-center mb-16 max-w-3xl mx-auto text-gray-700">
            At Sarthi, we focus on three core areas: mental health, hygiene awareness, and education. Our projects are designed to empower youth and create lasting change in communities.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
                <img src={project.image} alt={project.name} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <project.icon className="w-12 h-12 text-purple-600 mb-4" />
                  <h3 className="text-2xl font-semibold mb-2 text-purple-800">{project.name}</h3>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-purple-800">Our Impact Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Heart className="w-16 h-16 mx-auto mb-4 text-purple-600" />
              <h3 className="text-2xl font-semibold mb-2 text-purple-800">Health</h3>
              <p className="text-gray-600">Promoting physical and mental well-being among youth.</p>
            </div>
            <div className="text-center">
              <BookOpen className="w-16 h-16 mx-auto mb-4 text-purple-600" />
              <h3 className="text-2xl font-semibold mb-2 text-purple-800">Education</h3>
              <p className="text-gray-600">Providing quality education and learning opportunities.</p>
            </div>
            <div className="text-center">
              <Target className="w-16 h-16 mx-auto mb-4 text-purple-600" />
              <h3 className="text-2xl font-semibold mb-2 text-purple-800">Empowerment</h3>
              <p className="text-gray-600">Empowering youth to become agents of change.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurWork;