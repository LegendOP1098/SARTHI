import React from 'react';

interface FeatureCardProps {
  title: string;
  tagline: string;
  imgsrc:string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ title, tagline ,imgsrc}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={imgsrc}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-2xl font-semibold mb-2 text-blue-800">{title}</h3>
        <p className="text-gray-600">{tagline}</p>
      </div>
    </div>
  );
};
