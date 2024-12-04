import React from "react";
import Lottie from "lottie-react";
import animationData from "../assets/anim1.json";
import { Facebook,Linkedin,Zap } from "lucide-react"

const MissionComponent: React.FC = () => {
  return (
    <div className="mx-auto p-6 w-lvw flex item justify-around">
      <div className="w-1/2 max-w-md flex justify-center items-center">
        <Lottie animationData={animationData} loop={true}/>
      </div>
      <div className="w-1/2">
        <h1
          className="text-4xl font-bold text-gray-800 relative"
          data-shadow="Mission"
        >
          <h3 className="title text-xl font-medium text-gray-600">
            NGO FOR CHILDREN'S
          </h3>
          Mission: An NGO For{" "}
          <span className="text-blue-600">Education</span>
        </h1>
        <ul className="text-lg text-gray-700 mt-4 space-y-4 list-disc	">
          <li className="">
            As per the Union Education Ministry,<b>15 crore</b> children are currently out of the school system in India.
          </li>
          <li>
            The United Nations has set the global goal of inclusive and quality
            education for all by <b>2030</b> as part of the
            Sustainable Development Goals.
          </li>
          <li>
            To achieve this target, our <b>NGO in Delhi</b> is
            providing quality education, free of cost!
            So far, more than <b>1000</b> underprivileged students
            have been taught by our diligent volunteers.
          </li>
          <span>Click below to contribute!</span>
        </ul>
        <button className="button bg-blue-600 text-white px-6 py-2 mt-6 rounded-lg shadow-md hover:bg-blue-700">
          Create a change
        </button>

        <div className="social-links flex items-center mt-6 space-x-4">
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
            className="text-gray-600 hover:text-green-600 text-xl transition"
          >
            <Zap/>
          </a>
        </div>

        {/* Footer */}
        <p className="footer text-sm text-gray-500 mt-2">
          Or you can also help by spreading awareness of our mission
        </p>
      </div>
    </div>
  );
};

export default MissionComponent;
