import React from "react";
import "./OurTeam.css";
import image1 from "../assets/photo1.png";
import image2 from "../assets/photo2.png";
import image3 from "../assets/photo3.png";
import image4 from "../assets/photo4.png";
import image5 from "../assets/photo5.png";
import image6 from "../assets/photo6.png";

const OurTeam = () => {
  const members = [
    { job: "Product Owner", name: "Bill Mahoney", img: image1 },
    { job: "Art Director", name: "Saba Cabrera", img: image2 },
    { job: "Tech Lead", name: "Shae Le", img: image3 },
    { job: "UX Designer", name: "Sklyah Lu", img: image4 },
    { job: "Developer", name: "Griff Richards", img: image5 },
    { job: "Developer", name: "Stan John", img: image6 },
    { job: "Developer", name: "Stan John", img: image6 },
    { job: "Developer", name: "Stan John", img: image6 },
    { job: "Developer", name: "Stan John", img: image6 },
  ];

  const dir1 = [
    { job: "Art Director", name: "Saba Cabrera", img: image2 },
   
  ];
  const dir2 = [
    { job: "Product Owner", name: "Bill Mahoney", img: image1 },
    
   
  ];
 
  return (
    <div className="bg-white">
    <section className="pt-60">
    <div className="container mx-auto px-4">
    <div className="our-team-container">
      <div className="container">
        <div className="first-col-container">
          <div className="left-header">
            <h1>The Creative Crew</h1>
          </div>
          <div className="right-header">
            <div className="header-col">
              <h3>Who We Are</h3>
            </div>
            <div className="text-col">
              <p>
                We are a team of creatively diverse, driven, and innovative individuals working in various locations around the world.
              </p>
            </div>
          </div>
        </div>

        <div className="img-container">
          {dir1.map((member, index) => (
            <div key={index} className="member">
              <div className="member-img ">
                <p className="member-job">{member.job}</p>
                <img src={member.img} alt={member.name} />
              </div>
              <p className="member-name">{member.name}</p>
              
            </div>
            
          ))}
       
          <div className="member">
            </div>
            {dir2.map((member, index) => (
            <div key={index} className="member">
              <div className="member-img ">
                <p className="member-job">{member.job}</p>
                <img src={member.img} alt={member.name} />
              </div>
              <p className="member-name">{member.name}</p>
              
            </div>
            
          ))}
          {members.map((member, index) => (
            <div key={index} className="member">
              <center>
              <div className="member-img">
                <p className="member-job">{member.job}</p>
                <img src={member.img} alt={member.name} />
              </div>
              <p className="member-name">{member.name}</p>
              </center>
            </div>
          ))}
          {dir1.map((member, index) => (
            <div key={index} className="member">
              <div className="member-img ">
                <p className="member-job">{member.job}</p>
                <img src={member.img} alt={member.name} />
              </div>
              <p className="member-name">{member.name}</p>
              
            </div>
            
          ))}
       
          <div className="member">
            </div>
            {dir2.map((member, index) => (
            <div key={index} className="member">
              <div className="member-img ">
                <p className="member-job">{member.job}</p>
                <img src={member.img} alt={member.name} />
              </div>
              <p className="member-name">{member.name}</p>
              
            </div>
            ))}
            
          
        </div>
        {/* Join Our Team Section */}
        <div className="mt-20 my-20">
          <h2 className="text-4xl font-bold text-center mb-8">Join Our Team</h2>
          <p className="text-xl text-center mb-8 max-w-3xl mx-auto">
            We're always looking for passionate individuals to join our mission. If
            you're dedicated to making a difference in the lives of youth, we'd love to
            hear from you!
          </p>
          <div className="text-center">
            <a
              href="#"
              className="bg-black text-white py-3 px-6 rounded-full font-bold hover:bg-gray-800 transition"
            >
              View Open Positions
            </a>
          </div>
        </div>
      
      </div>
      
    </div>
    </div>
    </section>
    </div>
  );
};

export default OurTeam;
