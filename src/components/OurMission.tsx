import React from "react";
import Lottie from "lottie-react";
import animationData from "../assets/anim1.json";

const MissionComponent: React.FC = () => {
  return (
    <div className="mx-auto p-6 w-lvw flex justify-around">
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
          <span className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">Education</span>
        </h1>
        <div className="border-l-blue-500 border-l-2 px-10 py-3 bg-blue-100 rounded-lg">
          <ul className="text-lg text-gray-700 space-y-4 list-disc">
            <li>
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
          </ul>
        </div>
        <div className="py-2">Click below to contribute!</div>
        <button className="button bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700">
          Create a change
        </button>


        {/* Footer */}
        <p className="footer text-sm text-gray-500 mt-2">
          Or you can also help by spreading awareness of our mission
        </p>
      </div>
    </div>
  );
};

export default MissionComponent;
