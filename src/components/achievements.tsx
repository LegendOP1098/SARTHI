// import React from "react";
import CountUp from "react-countup";

export const Achievements = () => {
  const data = [
    {
      value: 7,
      suffix: "+",
      name: "states",
      isrc: "https://i.ibb.co/7kpy0YH/mapNew.png",
    },
    {
      value: 100000,
      suffix: "+",
      name: "people sensitised",
      isrc: "https://i.ibb.co/ctKYqc9/people-New.png",
    },
    {
      value: 250,
      suffix: "+",
      name: "children educated",
      isrc: "https://i.ibb.co/98Vwx86/education-New.png",
    },
    {
      value: 1500,
      suffix: "+",
      name: "sanitary products distributed",
      isrc: "https://i.ibb.co/YcQJ7XF/sanitary-New.png",
    },
    {
      value: 2,
      suffix: "+",
      name: "Sushiksha schools",
      isrc: "https://i.ibb.co/x11TFDW/school-New.png",
    },
  ];

  return (
    <div className="my-6 mx-4 h-[340px]">
      <div className="flex justify-center">
        <h1 className="text-4xl font-bold text-center my-10 text-blue-800">Achievements</h1>
      </div>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center"
          >
            <img
              src={item.isrc}
              alt={item.name}
              className="w-28 h-28 mb-4"
            />
            <h2 className="text-2xl font-bold text-orange-600">
              <CountUp start={0} end={item.value} duration={2} suffix={item.suffix} />
            </h2>
            <p className="text-gray-700">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
