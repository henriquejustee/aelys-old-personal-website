
import React from 'react';

const Setup: React.FC = () => {
  return (
    <div className="bg-gray-200">
      <h1 className="text-2xl font-bold text-center">My PC Setup</h1>
      <div className="flex justify-center items-center mt-4">
        <img
          className="w-64 h-64 rounded-full"
          src="/path/to/pc-setup-image.jpg"
          alt="PC Setup"
        />
      </div>
      <ul className="mt-4">
        <li className="text-lg">Processor: Intel Core i7</li>
        <li className="text-lg">RAM: 16GB</li>
        <li className="text-lg">Graphics Card: NVIDIA GeForce RTX 3080</li>
        <li className="text-lg">Storage: 1TB SSD</li>
      </ul>
    </div>
  );
};

export default Setup;
