import React from "react";
import Lottie from "lottie-react";
import animationData from "../assets/anim1.json";
import { Facebook,Linkedin,Zap } from "lucide-react"

const MissionComponent: React.FC = () => {
  return (
    <div className="container mx-auto p-6 flex items-start justify-center space-y-6">
      <div className="w-full max-w-md">
        <Lottie animationData={animationData} loop={true}/>
      </div>
      <div className="text-center">
        <h1
          className="text-4xl font-bold text-gray-800 relative"
          data-shadow="Mission"
        >
          <h3 className="title text-xl font-medium text-gray-600">
            NGO FOR CHILDREN'S
          </h3>
          <br />
          Mission: An NGO For{" "}
          <span className="text-blue-600">Education</span>
        </h1>
        <p className="text-lg text-gray-700 mt-4 space-y-4">
          <div className="flex flex-col">
            As per the Union Education Ministry, 15 crore children are currently out of the school system in India.
          </div>
          <span>
            The United Nations has set the global goal of inclusive and quality
            education for all by <strong>2030</strong> as part of the
            Sustainable Development Goals.
          </span>
          <br />
          <span>
            To achieve this target, our <strong>NGO in Delhi</strong> is
            providing quality education, free of cost!
          </span>
          <br />
          <span>
            So far, more than <strong>1000</strong> underprivileged students
            have been taught by our diligent volunteers.
          </span>
          <br />
          <span>Click below to contribute!</span>
        </p>

        {/* Button */}
        <button className="button bg-blue-600 text-white px-6 py-2 mt-6 rounded-lg shadow-md hover:bg-blue-700">
          Create a change
        </button>

        {/* Social Links */}
        <div className="social-links flex items-center justify-center mt-6 space-x-4">
          <a
            href="#"
            className="text-gray-600 hover:text-blue-600 text-xl transition"
          >
            <Facebook/>
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-blue-600 text-xl transition"
          >
            <Linkedin/>
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-blue-600 text-xl transition"
          >
            <Zap/>
          </a>
        </div>

        {/* Footer */}
        <p className="footer text-sm text-gray-500 mt-4">
          Or you can also help by spreading awareness of our mission
        </p>
      </div>
    </div>
  );
};

export default MissionComponent;
