import React from "react";
import NumberCount from "./NumberCounter"; // Assuming NumberCount is now a TSX component
import './Achievements.css';


const Achievements: React.FC = () => {
  return (
    <div className="achievements">
      <div className="achievement-item">
        
        <h2>
          <NumberCount value={501} suffix="+" />
        </h2>
        <p>States</p>
      </div>
      <div className="achievement-item">
        
        <h2>
          <NumberCount value={999} suffix="+" />
        </h2>
        <p>People Sensitised</p>
      </div>
      <div className="achievement-item">
       
        <h2>
          <NumberCount value={500} suffix="+" />
        </h2>
        <p>Children Educated</p>
      </div>
      <div className="achievement-item">
        
        <h2>
          <NumberCount value={100} suffix="+" />
        </h2>
        <p>Sanitary Products Distributed</p>
      </div>
      <div className="achievement-item">
       
        <h2>
          <NumberCount value={10} suffix="+" />
        </h2>
        <p>Sushiksha Schools</p>
      </div>
      <div className="achievement-item">
      
        <h2>
          <NumberCount value={5} suffix="+" />
        </h2>
        <p>Outreach Centres</p>
      </div>
    </div>
  );
};

export default Achievements;
