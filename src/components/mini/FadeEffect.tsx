import React, { useState, useEffect, ReactNode } from "react";

interface FadeInFromDownProps {
  children: ReactNode; 
}

const FadeInFromDown: React.FC<FadeInFromDownProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger the fade-in effect when the component mounts
    setIsVisible(true);
  }, []);

  return (
    <div
      className={`transition-all duration-1000 ease-in-out transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {children}
    </div>
  );
};

export default FadeInFromDown;
