import React from 'react';

const Logo = ({ text }) => {
  return (
//kezia/Evolution
    <div className="logo p-2 border border-gray-300 rounded">
      {text}

    <div className="text-[25px] bg-yellow-500 m-2 p-2 font-serif text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl">
      JK Websides 
      main
    </div>
  );
};

export default Logo;