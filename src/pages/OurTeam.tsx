import React from "react";
import image1 from "../assets/photo1.png";
import image2 from "../assets/photo2.png";
import image3 from "../assets/photo3.png";
import image4 from "../assets/photo4.png";
import image5 from "../assets/photo5.png";
import image6 from "../assets/photo6.png";
import image7 from "../assets/AnanyaB.avif";
import image8 from "../assets/SanjoliB.avif"
import { Linkedin } from "lucide-react";;

const OurTeam = () => {
  const members = [
    { job: "Manager", name: "Vasudev Singh", img: image3 },
    { job: "Manager", name: "Ananya Sachdeva", img: image4 },
    { job: "Chief Advisor", name: "Gagan Banerjee", img: image5 },
    { job: "Tech Head", name: "YXZ ", img: image6 },
    { job: "Tech Head", name: "XYZ", img: image6 },
    { job: "Project Head", name: "Gargi Vashishta", img: image6 },
    { job: "Delhi Head", name: "Kamya Verma", img: image6 },
    { job: "POR", name: "idk", img: image1 },
    { job: "POR", name: "why", img: image2 },
  ];

  const directors = [
    {
      job: "Director",
      name: "Ananya Banerjee",
      img: image7,
      description: "Ananya Banerjee is a visionary leader with a passion for empowering communities and fostering innovation.",
      linkedin: "https://www.linkedin.com/in/ananya-banerjee",
    },
    {
      job: "Director",
      name: "Sanjoli Banerjee",
      img: image8,
      description: "Sanjoli Banerjee is dedicated to driving impactful change through strategic leadership and collaboration.",
      linkedin: "https://www.linkedin.com/in/sanjoli-banerjee",
    },
  ];

  return (
    <div className="bg-white">
      <section className="mt-28">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-5">MEET THE TEAM</h1>
          <h3 className="text-xl font-semibold ">Who We Are</h3>
          <p className="text-gray-600 max-w-2xl mx-auto my-2">
            We are a team of creatively diverse, driven, and innovative individuals
            working in various locations around the world.
          </p>
        </div>
        </section>
        <section className="mt-8">
        <div className="flex flex-wrap justify-center gap-20">
          {directors.map((director, index) => (
            <div key={index} className="text-center">
              <span className="relative top-12 left-20 text-lg bg-gray-800 text-white font-bold py-1 px-2 z-10 rounded-lg">
                {director.job}
              </span>
              <div className="relative overflow-hidden rounded-full shadow-lg group bg-gradient-to-r from-[#00ffd0] via-[#4451c7] to-[#60a0c5] bg-[length:400%_400%] p-1 animate-border">
                <img
                  src={director.img}
                  alt={director.name}
                  className="w-80 h-80 object-cover transform group-hover:scale-105 transition duration-300 rounded-full"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="flex items-center justify-center">
              <p className="mt-4 text-lg font-medium">{director.name}</p>
                <a
                  href={director.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-blue-600 hover:text-blue-800 transition"
                >
                  <Linkedin className="w-6 h-6 inline-block ml-3" />
                </a>
              </div>
              <p className="mt-2 text-gray-700 text-sm max-w-xs mx-auto">{director.description}</p>
            </div>
          ))}
        </div>
      </section>

        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-2/3 mx-auto">
            {members.map((member, index) => (
              <div key={index} className="mt-6 flex flex-col justify-center items-center">
                <span className=" text-center relative top-12 left-20 text-lg bg-gray-800 text-white font-bold py-1 px-1 z-10 rounded-lg max-w-44 text-wrap">
                  {member.job}
                </span>
                <div className="relative w-60 overflow-hidden rounded-full shadow-lg group bg-gradient-to-r from-[#00ffd0] via-[#4451c7] to-[#60a0c5] bg-[length:400%_400%] p-1 animate-border">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-80 object-cover transform group-hover:scale-105 transition duration-300 rounded-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <p className="mt-4 text-lg font-medium">{member.name}</p>
              </div>
            ))}
          </div>
        </section>
        <section>
          <div className="flex flex-wrap justify-center gap-8">
            {directors.map((member, index) => (
              <div key={index} className="text-center">
                <span className="relative top-12 left-20 text-lg bg-gray-800 text-white font-bold py-1 px-2 z-10 rounded-lg">
                  {member.job}
                </span>
                <div className="relative overflow-hidden rounded-full shadow-lg group bg-gradient-to-r from-[#00ffd0] via-[#4451c7] to-[#60a0c5] bg-[length:400%_400%] p-1 animate-border">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-60 h-80 object-cover transform group-hover:scale-105 transition duration-300 rounded-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                </div>
                <p className="mt-4 text-lg font-medium">{member.name}</p>
              </div>
            ))}
          </div>
        </section>

          {/* <div className="mt-20 text-center">
            <h2 className="text-4xl font-bold mb-6">Join Our Team</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
              We're always looking for passionate individuals to join our mission.
              If you're dedicated to making a difference in the lives of youth,
              we'd love to hear from you!
            </p>
            <a
              href="#"
              className="bg-black text-white py-3 px-6 rounded-full font-bold hover:bg-gray-800 transition"
            >
              View Open Positions
            </a>
          </div> */}
        
    </div>
  );
};

export default OurTeam;
