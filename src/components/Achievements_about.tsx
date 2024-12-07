import React from "react";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup"; 

const Achievements: React.FC = () => {
  const data = [
    {
      value: 7,
      suffix: "+",
      name: "States",
    },
    {
      value: 999,
      suffix: "+",
      name: "People Sensitised",
    },
    {
      value: 500,
      suffix: "+",
      name: "Children Educated",
    },
    {
      value: 100,
      suffix: "+",
      name: "Sanitary Products Distributed",
    },
    {
      value: 10,
      suffix: "+",
      name: "Sushiksha Schools",
    },
    {
      value: 3,
      suffix: "+",
      name: "Outreach Centres",
    },
  ]

  const [ref ,inView]=useInView({
    triggerOnce:true,
    threshold:0.4
  })

  return (
    <div ref={ref} className="flex flex-wrap justify-center gap-36 bg-[#f0fdfa] py-10 px-5">
      {data.map((item, index) => (
        <div key={index} className="bg-[#0d1b52] text-white w-64 h-60 text-center p-8 rounded-lg [clip-path:polygon(1%_0,100%_0,100%_75%,47%_100%,0_75%)] transition-transform transform hover:translate-y-[-10px] hover:shadow-lg">
          <h2 className="text-5xl">
            {inView ? (
              <CountUp
                start={0}
                end={item.value}
                duration={3}
                suffix={item.suffix}
              />
            ) : (
              "0"
            )}
          </h2>
          <p className="mt-5 text-2xl">{item.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Achievements;
