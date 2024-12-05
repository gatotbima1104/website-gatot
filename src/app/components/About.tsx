import React from 'react'
import Image from 'next/image'

import Skill from './Skill'
import Photo from "../../../public/pp.jpeg"

import { DiJsBadge } from 'react-icons/di'
import { TbBrandTypescript } from 'react-icons/tb'
import { SiFiverr, SiNestjs, SiPuppeteer } from 'react-icons/si'
import { RiNextjsFill } from 'react-icons/ri'
import { IoLogoElectron } from 'react-icons/io5'
import { FaAws, FaGithub, FaLinkedin, FaMediumM } from 'react-icons/fa'
import { FaSquareThreads, FaSquareUpwork } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'

export default function About() {
  return (
    <div className='w-full min-h-screen flex justify-center items-center bg-[#0A192F] text-white font-geist-mono py-5'>
        
        <div className='w-[80%] lg:grid grid-cols-2 md:flex md:flex-col'>
            <div className='space-y-3 sm:pt-8'>
                <h2 className='text-3xl'><span className='text-[#59E3C6] text-xl '>01.</span> About <hr /></h2> 
                <p className='text-justify w-[100%] text-base pb-4'>A boy that loves to code and Enthusiast with Software Engineer things, I've been as <span className='text-[#59E3C6] underline'>Web Scraper</span> & <span className='text-[#59E3C6] underline'>Web Automation</span> for over 2+ years.
                </p>

                <p className='text-justify w-[100%] text-base pb-4'>Assisting more than <span className='text-[#59E3C6] underline text-2xl'>15+</span> clients around the world related with <span className='text-[#59E3C6] underline'>Scraping</span> & <span className='text-[#59E3C6] underline'>Automation</span> things through platform <span className='text-[#59E3C6] underline'>Upwork</span> & <span className='text-[#59E3C6] underline'>Fiverr</span>.
                </p>

                <div className='grid grid-cols-2 text-white gap-1 gap-y-2 pb-10'>
                    <Skill icon={<DiJsBadge color='#59E3C6'/>} text='Javascript'/>
                    <Skill icon={<TbBrandTypescript color='#59E3C6'/>} text='Typescript'/>
                    <Skill icon={<SiPuppeteer color='#59E3C6'/>} text='Puppeteer'/>
                    <Skill icon={<SiNestjs color='#59E3C6'/>} text='Nest.js'/>
                    <Skill icon={<RiNextjsFill color='#59E3C6'/>} text='Next.js'/>
                    <Skill icon={<IoLogoElectron color='#59E3C6'/>} text='Electron.js'/>
                    <Skill icon={<FaAws color='#59E3C6'/>} text='AWS'/>
                </div>

                <div className='flex gap-5 items-center py-5 flex-wrap'>
                  <p>Contact :</p>
                  <a href="mailto:gatotbima2002@gmail.com" className='hover:cursor-pointer hover:bg-gray-600 rounded-md' target='_blank'><MdEmail size={30} color='#59E3C6'/></a>
                  <a href="https://www.linkedin.com/in/muhamad-gatot-s-7b08491aa/" className='hover:cursor-pointer hover:bg-gray-600 rounded-md' target='_blank'><FaLinkedin size={30} color='#59E3C6'/></a>
                  <a href="https://www.upwork.com/freelancers/muhamadgatots" className='hover:cursor-pointer hover:bg-gray-600 rounded-md' target='_blank'><FaSquareUpwork size={30} color='#59E3C6'/></a>
                  <a href="https://github.com/gatotbima1104" className='hover:cursor-pointer hover:bg-gray-600 rounded-md' target='_blank'><FaGithub size={30} color='#59E3C6'/></a>
                  <a href="https://www.threads.net/@gatotbim_" className='hover:cursor-pointer hover:bg-gray-600 rounded-md' target='_blank'><FaSquareThreads size={30} color='#59E3C6'/></a>
                  <a href="https://medium.com/@ijsamika67" className='hover:cursor-pointer hover:bg-gray-600 rounded-md' target='_blank'><FaMediumM size={30} color='#59E3C6'/></a>
                </div>
                
            </div>
            <div className='flex justify-end lg:items-center lg:justify-center sm:justify-center :items-center sm:py-20'>
            <Image alt='photo-profile' src={Photo} className='rounded-lg sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px]'/>
            </div>
        </div>
    </div>
  )
}
