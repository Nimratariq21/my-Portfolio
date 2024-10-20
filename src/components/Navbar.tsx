import React from 'react';
import { AiOutlineMenu } from "react-icons/ai";

import Image from 'next/image'; 

const Navbar = () => {
  return (
    <div className='container pt-8'>
      <div className='flex justify-between items-center'>
        <div className='logo'>
          <Image 
            src='/logo.png' 
            alt='Logo' 
            width={130} 
            height={20} 
            priority={true} 
          />
        </div>

        <ul className='gap-10 lg:gap-16 hidden md:flex'>
          <li className='menuLink'><a href='#hero'>Home</a></li>
          <li className='menuLink'><a href='#about'>About</a></li>
          <li className='menuLink'><a href='#skills'>Skills</a></li>
          <li className='menuLink'><a href='#contact'>Contact</a></li>
        </ul>

        <AiOutlineMenu size={30}/>
      </div>
    </div>
  );
};

export default Navbar;






