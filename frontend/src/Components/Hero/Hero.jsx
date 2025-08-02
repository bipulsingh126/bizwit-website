import React from 'react';

import { FiArrowUpRight } from 'react-icons/fi';

const Hero = () => {
  return (
    <div
      className="relative bg-cover bg-center h-screen flex flex-col justify-center items-start text-white p-8 md:p-16 lg:p-24"
      style={{ backgroundImage: `url('https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')` }}
    >

      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="relative z-10 max-w-2xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          Your Trusted
          <br />
          <span className="relative">
            Consulting Partner
            <span className="absolute bottom-0 left-0 w-1/3 h-1 bg-green-400"></span>
          </span>
        </h1>
        <button className="mt-8 bg-green-400 text-black font-bold py-3 px-6 rounded-lg flex items-center hover:bg-green-500 transition-colors">
          Free Consultation <FiArrowUpRight className="ml-2" />
        </button>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
        <button className="bg-white/80 text-black font-semibold py-3 px-8 rounded-lg hover:bg-white transition-colors">Consultation</button>
        <button className="bg-white/30 text-white font-semibold py-3 px-8 rounded-lg hover:bg-white/50 transition-colors">Consultation</button>
        <button className="bg-white/30 text-white font-semibold py-3 px-8 rounded-lg hover:bg-white/50 transition-colors">Consultation</button>
        <button className="bg-white/30 text-white font-semibold py-3 px-8 rounded-lg hover:bg-white/50 transition-colors">Consultation</button>
      </div>
    </div>
  );
};

export default Hero;