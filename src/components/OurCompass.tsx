import Lottie from "lottie-react";
import animationData from "../assets/anim2.json"; 

function OurCompass() {
  return (
    <div className="mx-auto p-6 w-lvw flex justify-around">
      <div className="text-right w-1/2">
        <h1
          className="text-4xl font-bold text-gray-800 relative"
          data-shadow="Mission"
        >
          <h3 className="title text-xl font-medium text-gray-600">
            Lending a Helping Hand Across India
          </h3>
           Our {" "}
          <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-green-400 inline-block text-transparent bg-clip-text">Compass</span>
        </h1>
        <div className="text-left border-l-blue-500 border-l-2 px-10 bg-blue-100 rounded-lg">
          <ul className="text-lg text-gray-700 mt-4 space-y-4 list-disc">
            <li>
              As per the Union Education Ministry, <strong>15 crore</strong>{" "}
              children are studying in 15 lakh schools in the country. They can
              be served through this project. <br />
              <span>
                This project aims to make a difference in the education sector.
              </span>
            </li>
            <li>
              The United Nations has set the global goal of inclusive and
              quality education for all by <strong>2030</strong> as part of the
              Sustainable Development Goals.
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </li>
          </ul>
        </div>

        <button className="button bg-blue-600 text-white px-6 py-2 mt-2 rounded-lg shadow-md hover:bg-blue-700">
          Learn More
        </button>
      </div> 
      <div className="w-1/2 max-w-md flex justify-center items-center">
        <Lottie className="h-[600px] -m-40" animationData={animationData} loop={true}/>
      </div>
    </div>
  );
}

export default OurCompass;
