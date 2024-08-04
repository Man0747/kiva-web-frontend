import React from 'react'
import ShiningText from './ShiningText';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between">
      <div className="flex ml-10 items-center">
        <ShiningText text="Kiva" />
      </div>
      <div className="mr-10 flex items-center justify-center gap-4 text-lg">
        <a href="/" className="hover:text-gray-500">Home</a>
        <a href="/ClubsAndSocieties" className="hover:text-gray-500">ClubsAndSocieties</a>
      </div>
    </nav>
  );
};

export default Navbar;