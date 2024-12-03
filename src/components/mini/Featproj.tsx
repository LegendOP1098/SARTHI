import React from 'react';
import { motion, useAnimation } from "motion/react"

interface FeatureCardProps {
  title: string;
  tagline: string;
  imgsrc:string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ title, tagline ,imgsrc}) => {
  const anima=useAnimation();
  return (
    <motion.div
      className="relative bg-white rounded-lg shadow-md overflow-hidden group h-60"
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.05 }}
      onHoverStart={()=>anima.start({ y: 130 })}
      onHoverEnd={()=>anima.start({ y: 200 })}
    >
      <img
        src={imgsrc}
        alt={title}
        className="aboslute w-full h-full"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/40 text-white group-hover:opacity-0">
        <h3 className="text-2xl font-bold">{title}</h3>
      </div>
      <motion.div
        className="absolute inset-0 p-4 flex h-28 flex-col bg-white rounded-lg opacity-0 group-hover:opacity-100"
        initial={{ y: 200 }}
        animate={anima}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-2xl font-semibold  text-blue-800">{title}</h3>
        <p className="text-gray-600">{tagline}</p>
        <a className='text-blue-600 cursor-pointer hover:underline'>View More &#8594;</a>
      </motion.div>
    </motion.div>
  );
};
