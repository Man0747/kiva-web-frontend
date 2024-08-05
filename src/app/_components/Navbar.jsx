import React from 'react'
import ShiningText from './ShiningText';

const Navbar = () => {
  return (
    <nav className="flex justify-center items-center py-2">
      <div className="flex items-center">
        <ShiningText text="Kiva" size="extralarge"/>
      </div>
      
    </nav>
  );
};

export default Navbar;