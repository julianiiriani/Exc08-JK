import React from 'react';

const Logo = ({ text }) => {
  return (
    <div className="logo p-2 border border-gray-300 rounded">
      {text}
    </div>
  );
};

export default Logo;