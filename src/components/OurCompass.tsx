import Lottie from "lottie-react";
import animationData from "../assets/anim2.json"; 

function OurCompass() {
  return (
    <div className="mx-auto p-6 flex items-start justify-center space-y-6">
      <div className="text-center">
        <h1
          className="text-4xl font-bold text-gray-800 relative"
          data-shadow="Mission"
        >
          <h3 className="title text-xl font-medium text-gray-600">
          Lending a Helping Hand Across India
          </h3>
          <br />
           Our 
          <span className="text-blue-600"> Compass</span>
        </h1>
        <p className="text-lg text-gray-700 mt-4 space-y-4">
        <span>
              As per the Union Education Ministry, <strong>15 crore</strong>{" "}
              children are studying in 15 lakh schools in the country. They can
              be served through this project. <br />
              <span>
                This project aims to make a difference in the education sector.
              </span>
            </span>
            <span>
              The United Nations has set the global goal of inclusive and
              quality education for all by <strong>2030</strong> as part of the
              Sustainable Development Goals.
            </span>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt
            </span>
        </p>

        {/* Button */}
        <button className="button bg-blue-600 text-white px-6 py-2 mt-6 rounded-lg shadow-md hover:bg-blue-700">
          Learn More
        </button>
      </div> 
      <div className="w-[12000px] max-w-md">
        <Lottie animationData={animationData} loop={true}/>
      </div>
    </div>
  );
}

export default OurCompass;