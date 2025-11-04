import React from 'react';

const Logo = ({ text }) => {
  return (
//kezia/Evolution
    <div className="logo p-2 border border-gray-300 rounded">

    <div className="text-[25px] bg-green-500 m-2 p-2 font-serif">
    main
      {text}
    </div>
  );
};

export default Logo;