import React from 'react';
import coverImage from '../asset/image/nextgen.jpeg';

const Header = () => {
  return (
    <header className="w-full bg-green-50 flex justify-center">
      <div className="w-full max-w-7xl h-64 md:h-96 overflow-hidden flex items-center">
        <img 
          src={coverImage} 
          alt="NextGen AgroFarms" 
          className="object-cover w-full h-full" 
        />
      </div>
    </header>
  );
};

export default Header;
