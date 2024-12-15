'use client';

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import LogoProfile from '../../../public/logo-profile.webp'
import { CgMenuLeftAlt } from 'react-icons/cg'
import Link from 'next/link';

export default function Navbar() {

  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isActive, setIsActive] = useState<string>("home")
  const isClickedMenu = () => {
    setIsOpen(!isOpen)
  }

  const handleNavbarActive = (label: string) => {
    setIsActive(label)
  }

  const scrollToSection = (sectionId: string, label: string) => {
    const section = document.getElementById(sectionId)
    if(section){
      section.scrollIntoView({behavior: 'smooth'})
      handleNavbarActive(label)
    }
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
    
    <nav className='w-full bg-[#0A192F] h-[100px] flex text-white justify-between items-center px-10 font-geist-mono sticky top-0 z-10'>
        {/* Fix priority  */}
        <Image src={LogoProfile} alt='logo-profile' priority={true} className="invert w-[100px]"/>   

        <ul className='lg:flex gap-10 hidden items-center'>
          {
            [
              {id: "home", label: "Home"},
              {id: "about", label: "About"},
              {id: "experience", label: "Experience"},
              {id: "project", label: "Project"},
              {id: "blog", label: "Blog"},
              {id: "contact", label: "Contact"},
              
            ].map((el, idx) => {
              return (
                <li onClick={()=> scrollToSection(el.id, el.id)} 
                key={idx}
                className={`cursor-pointer ${
                  isActive === el.id ? "text-[#59E3C6]" : "hover:text-[#59E3C6]"
                }`}
                >
                <p><span className='text-xs text-[#59E3C6]'>{`0${idx + 1}.`}</span> {el.label}</p></li>
              )
            })
          }
            <Link href="/cv.pdf" download={"cv.pdf"} className='py-2 px-4 rounded-lg border-[#59E3C6] border border-dashed hover:border-dotted hover:text-[#59E3C6]'>Resume</Link>
        </ul>


        <button className='lg:hidden' onClick={isClickedMenu}> 
          <CgMenuLeftAlt size={30}/>
        </button>

        <ul className={`${isOpen? 'block': 'hidden'} absolute w-full min-h-screen bg-[#0A192F] left-0 top-24 grid grid-rows-6 items-center justify-start pl-20 gap-10`}>
            <li className='hover:text-[#59E3C6] text-3xl'><Link href="/"><span className='text-xl text-[#59E3C6]'>01.</span> Home</Link></li>
            <li className='hover:text-[#59E3C6] text-3xl'><Link href="/about"><span className='text-xl text-[#59E3C6]'>02.</span> About</Link></li>
            <li className='hover:text-[#59E3C6] text-3xl'><Link href="/project"><span className='text-xl text-[#59E3C6]'>03.</span> Project</Link></li>
            <li className='hover:text-[#59E3C6] text-3xl'><Link href="/blog"><span className='text-xl text-[#59E3C6]'>04.</span> Blog</Link></li>
            <li className='hover:text-[#59E3C6] text-3xl'><Link href="/contact"><span className='text-xl text-[#59E3C6]'>05.</span> Contact</Link></li>
            
        </ul>
    </nav>
    

  )
}
