import { useState } from "react";
import { useNavigate } from "react-router-dom";
import mainlogo from "../assets/main-logo.png";
import { ChevronDown, ArrowUpRight } from "lucide-react";

const Header = () => {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="absolute bg-gradient-to-b from-[#11304c] via-[#0c2355] to-[#292a4f] py-4 backdrop-filter backdrop-blur-sm top-0 flex justify-between w-full h-16 items-center z-10">
      <div className="flex items-center mx-4 mt-10 h-30 border-[#11304c] border-4 p-2 rounded-b-lg bg-white">
        <img src={mainlogo} alt="Main Logo" />
        <h1 className="text-5xl font-bold text-[#11304c]">SARTHI</h1>
      </div>
      <div className="px-2">
        <ul className="flex items-center px-3 justify-around mx-4 h-20 rounded-2xl py-4">
          {[
            { label: "Home", path: "/" },
            { label: "Our Work", path: "/our-work" },
            { label: "About Us", path: "/about-us" },
            { label: "Our Team", path: "/our-team" },
            { label: "Get Involved", path: "/get-involved" },
            // { label: "In News", path: "/in-news" },
          ].map((item) => (
            <li
              key={item.label}
              className="relative text-xl px-2 cursor-pointer mx-2  inline-block py-1 border border-transparent rounded-2xl bg-opacity-0 bg-white backdrop-filter font-semibold hover:bg-opacity-20 text-white  transition-all duration-300 group"
              onClick={() => item.label !== "Our Work" && navigate(item.path)}
              onMouseEnter={() => item.label === "Our Work" && setShowDropdown(true)}
              onMouseLeave={() => item.label === "Our Work" && setShowDropdown(false)}
            >
              <span className="inline-block group-hover:-translate-x-1 transition-transform duration-300">
                <span className="bg-left-bottom bg-gradient-to-r from-blue-100 to-blue-800 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                  {item.label}
                </span>
              </span>
              {item.label === "Our Work" && showDropdown && (
                <div className="absolute -left-3 top-7 mt-2 w-36 bg-white text-[#11304c] text-center shadow-lg rounded-lg">
                  <ul>
                    <li
                      className="px-4 py-2 hover:bg-gray-200 cursor-pointer rounded-lg"
                      onClick={() => navigate("/our-work")}
                    >
                      Project 1
                    </li>
                    <li
                      className="px-4 py-2 hover:bg-gray-200 cursor-pointer rounded-lg"
                      onClick={() => navigate("/our-work/project-2")}
                    >
                      Project 2
                    </li>
                  </ul>
                </div>
              )}
              {item.label==="Our Work"?<span className="absolute right-1 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-4 transition-all duration-300 text-white font-bold">
                <ChevronDown />
              </span>:<span className="absolute right-1 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-4 transition-all duration-300 text-white font-bold">
                <ArrowUpRight />
              </span>}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
