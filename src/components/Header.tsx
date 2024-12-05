import { useNavigate } from "react-router-dom";
import mainlogo from "../assets/main-logo.png"

const Header = () => {
  const navigate=useNavigate();

  return (
    // <div className="absolute bg-gradient-to-t from-blue-200 to-blue-600 flex justify-between w-full h-50 items-center">
    <div className="absolute  bg-gray-400 py-4 backdrop-filter backdrop-blur-sm top-0 bg-opacity-20 flex justify-between w-full h-16 items-center">
      <div className="flex items-center mx-4 mt-10 h-30 border-[#11304c] border-4 p-2 rounded-b-lg bg-white">
        <img src={mainlogo} alt="" />
        <h1 className="text-5xl font-bold text-[#11304c]">SARTHI</h1>
      </div>
      <div className="px-2">
        <ul className="flex items-center px-3 justify-around mx-4 h-20 rounded-2xl  py-4" >
          <li className="text-xl px-2 cursor-pointer mx-1 inline-block py-3 border border-transparent rounded-2xl bg-opacity-0 bg-white backdrop-filter font-semibold hover:bg-opacity-20 text-[11304c]" onClick={()=>navigate("/")}>Home</li>
          <li className="text-xl px-2 cursor-pointer mx-1 inline-block py-3 border border-transparent rounded-2xl bg-opacity-0 bg-white backdrop-filter font-semibold hover:bg-opacity-20 text-[11304c]" onClick={()=>navigate("/our-work")}>Our Work</li>
          <li className="text-xl px-2 cursor-pointer mx-1 inline-block py-3 border border-transparent rounded-2xl bg-opacity-0 bg-white backdrop-filter font-semibold hover:bg-opacity-20 text-[11304c]" onClick={()=>navigate("/about-us")}>About Us</li>
          <li className="text-xl px-2 cursor-pointer mx-1 inline-block py-3 border border-transparent rounded-2xl bg-opacity-0 bg-white backdrop-filter font-semibold hover:bg-opacity-20 text-[11304c]" onClick={()=>navigate("/our-team")}>Our Team</li>
          <li className="text-xl px-2 cursor-pointer mx-1 inline-block py-3 border border-transparent rounded-2xl bg-opacity-0 bg-white backdrop-filter font-semibold hover:bg-opacity-20 text-[11304c]" onClick={()=>navigate("/get-involved")}>Get Involved</li>
          <li className="text-xl px-2 cursor-pointer mx-1 inline-block py-3 border border-transparent rounded-2xl bg-opacity-0 bg-white backdrop-filter font-semibold hover:bg-opacity-20 text-[11304c]" onClick={()=>navigate("/in-news")}>In News</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;