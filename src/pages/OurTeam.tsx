import React from 'react';

const OurTeam = () => {
  const teamMembers = [
    { name: 'Ananya Banerjee', role: 'Director', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' },
    { name: 'Sanjoli Banerjee', role: 'Director', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' },
    { name: 'A', role: 'Outreach Coordinator', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' },
    { name: 'B', role: 'Education Specialist', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' },
    { name: 'C', role: 'Mental Health Advocate', image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' },
    { name: 'D', role: 'Volunteer Coordinator', image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' },
  ];

  return (
    <div className="bg-gradient-to-b from-yellow-100 to-white">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-center mb-12 text-yellow-800">Our Team</h1>
          <p className="text-xl text-center mb-16 max-w-3xl mx-auto text-gray-700">
            Meet the passionate individuals behind Sarthi. Our diverse team brings together expertise from various fields, united by a common goal of empowering youth and creating positive change.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
                <img src={member.image} alt={member.name} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2 text-yellow-800">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-yellow-800">Join Our Team</h2>
          <p className="text-xl text-center mb-8 max-w-3xl mx-auto text-gray-700">
            We're always looking for passionate individuals to join our mission. If you're dedicated to making a difference in the lives of youth, we'd love to hear from you!
          </p>
          <div className="text-center">
            <a href="#" className="inline-block bg-yellow-600 text-white font-bold py-3 px-8 rounded-full hover:bg-yellow-700 transition duration-300">
              View Open Positions
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurTeam;