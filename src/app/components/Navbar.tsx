'use client';

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import LogoProfile from '../../../public/logo-profile.png'
import { CgMenuLeftAlt } from 'react-icons/cg'

export default function Navbar() {

  const [isOpen, setIsOpen] = useState<boolean>(false)
  const isClickedMenu = () => {
    setIsOpen(!isOpen)
  }

    // close burger when lg automatically
    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth >= 1024) {
          setIsOpen(false);
        }
      };
  
      // Add event listener on window resize
      window.addEventListener("resize", handleResize);
  
      // Cleanup event listener on component unmount
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);

  return (
    
    <nav className='w-full bg-[#0A192F] h-[100px] flex text-white justify-between items-center px-10 font-geist-mono sticky top-0'>

        <Image src={LogoProfile} alt='logo-profile' width={100} height={100} className="invert"/>

        <ul className='lg:flex gap-10 hidden items-center'>
            <li className='hover:text-[#59E3C6]'><a href="/"><span className='text-xs text-[#59E3C6]'>01.</span> Home</a></li>
            <li className='hover:text-[#59E3C6]'><a href="/about"><span className='text-xs text-[#59E3C6]'>02.</span> About</a></li>
            <li className='hover:text-[#59E3C6]'><a href="/"><span className='text-xs text-[#59E3C6]'>03.</span> Experiences</a></li>
            <li className='hover:text-[#59E3C6]'><a href="/project"><span className='text-xs text-[#59E3C6]'>04.</span> Project</a></li>
            <li className='hover:text-[#59E3C6]'><a href="/blog"><span className='text-xs text-[#59E3C6]'>05.</span> Blog</a></li>
            <li className='hover:text-[#59E3C6]'><a href="/contact"><span className='text-xs text-[#59E3C6]'>06.</span> Contact</a></li>
            <a href="/cv.pdf" download={"cv.pdf"} className='py-2 px-4 rounded-lg border-[#59E3C6] border border-dashed hover:border-dotted hover:text-[#59E3C6]'>Resume</a>
        </ul>


        <button className='lg:hidden' onClick={isClickedMenu}> 
          <CgMenuLeftAlt size={30}/>
        </button>

        <ul className={`${isOpen? 'block': 'hidden'} absolute w-full min-h-screen bg-[#0A192F] left-0 top-24 grid grid-rows-6 items-center justify-start pl-20 gap-10`}>
            <li className='hover:text-[#59E3C6] text-3xl'><a href="/"><span className='text-xl text-[#59E3C6]'>01.</span> Home</a></li>
            <li className='hover:text-[#59E3C6] text-3xl'><a href="/about"><span className='text-xl text-[#59E3C6]'>02.</span> About</a></li>
            <li className='hover:text-[#59E3C6] text-3xl'><a href="/project"><span className='text-xl text-[#59E3C6]'>03.</span> Project</a></li>
            <li className='hover:text-[#59E3C6] text-3xl'><a href="/blog"><span className='text-xl text-[#59E3C6]'>04.</span> Blog</a></li>
            <li className='hover:text-[#59E3C6] text-3xl'><a href="/contact"><span className='text-xl text-[#59E3C6]'>05.</span> Contact</a></li>
            
        </ul>
    </nav>
    

  )
}
