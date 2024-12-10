'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Article1 from "../../../public/article1.png"
import Article2 from "../../../public/ppter.png"
import Octoparse from "../../../public/octoparse.png"

export default function Blog() {

  const [isActive, setIsActive] = useState<null | number>(0)

  const handleIsActive = (index: number) =>{
    setIsActive(index)
  }


  return (
    <div className="w-full min-h-[100vh] flex flex-col justify-center bg-[#0A192F] text-white font-geist-mono gap-2 py-5" id='blog'>
      <h2 className='text-3xl py-5 mx-auto min-w-[80%]'><span className='text-[#59E3C6] text-xl'>04.</span> Blog <hr /></h2> 
      <div className='flex gap-2 justify-center'>
        <div className='min-w-[300px] min-h-[400px] rounded-xl hidden lg:block'>
          <ul className='flex flex-col'>
            {
              ["All", "Scraping", "Web Dev"].map((el, index) => {
                return (
                  <li key={index} onClick={()=> handleIsActive(index)} className=
                    {`${isActive === index? 'bg-gray-700 border' : 'bg-gray-600'} p-5 hover:bg-gray-700 hover:cursor-pointer`}><a href="">
                      {el}</a></li>
                )
              })
            }
          </ul>
        </div>
        <div className='max-w-[700px] max-h-[800px]'>
          <ul className='flex flex-col gap-2'>
            <li className='min-h-[200px] border mx-2 lg:mx-0 rounded-md'>
              <div className='flex p-5 justify-between'>
                <div>
                  <p className='pb-2'>Easy Step-by-Step Web Scraping with Node JS — Puppeteer in 2023</p>
                  <p className='text-xs text-justify'>Web scraping is the process of extracting valuable information and data from websites. It plays a pivotal role in data collection by enabling automated extraction of data from various online sources. Whether it’s for market research, competitive analysis, or gathering real-time information, web scraping provides businesses and researchers with a powerful tool to collect and analyze large datasets efficiently.</p>
                </div>
                <div className='ml-5 my-auto'>
                  <Image alt='article-1' src={Article1} className='w-[350px] h-[80px] object-cover'/>
                  <a target='_blank' href='https://medium.com/scraping-things/the-best-platform-the-best-way-to-scrape-with-no-code-in-2024-using-octoparse-816deabc5229' className='text-xs pt-3 underline text-center text-[#59E3C6] hover:cursor-pointer hover:text-blue-600'>read more</a>
                </div>
              </div>
            </li>
            <li className='min-h-[200px] border mx-2 lg:mx-0 rounded-md'>
              <div className='flex p-5 justify-between'>
                <div>
                  <p className='pb-2'>The best platform: The best way to scrape with no-code in 2024 -using Octoparse</p>
                  <p className='text-xs text-justify'>Are you a person who has no background with code? or a programmer that is exhausted from eating code all the time? <br />Sometimes you need to build a scraper for your task or your belongings, but building every script for every website really costs you more time. That’s why some web extractors and web scraper platforms were invented.</p>
                </div>
                <div className='ml-5 my-auto'>
                  <Image alt='article-1' src={Octoparse} className='w-[190px] h-[80px] object-cover'/>
                  <a target='_blank' href='https://medium.com/scraping-things/mastering-puppeteer-ultimate-guide-to-browser-automation-episode-1-what-is-puppeteer-4c89af99da26' className='text-xs pt-3 underline text-center text-[#59E3C6] hover:cursor-pointer hover:text-blue-600'>read more</a>
                </div>
              </div>
            </li>
            <li className='min-h-[200px] border mx-2 lg:mx-0 rounded-md'>
              <div className='flex p-5 justify-between'>
                <div>
                  <p className='pb-2'>Easy Step-by-Step Web Scraping with Node JS — Puppeteer in 2023</p>
                  <p className='text-xs text-justify'>Web scraping is the process of extracting valuable information and data from websites. It plays a pivotal role in data collection by enabling automated extraction of data from various online sources. Whether it’s for market research, competitive analysis, or gathering real-time information, web scraping provides businesses and researchers with a powerful tool to collect and analyze large datasets efficiently.</p>
                </div>
                <div className='ml-5 my-auto'>
                  <Image alt='article-1' src={Article2} className='w-[350px] h-[80px] object-cover'/>
                  <a target='_blank' href='https://medium.com/@ijsamika67/easy-step-by-step-web-scraping-with-node-js-puppeteer-in-2023-75031134e8c8' className='text-xs pt-3 underline text-center text-[#59E3C6] hover:cursor-pointer hover:text-blue-600'>read more</a>
                </div>
              </div>
            </li>            
            <p className='text-center'>
              <a target='_blank' href='' className='py-5 underline text-xl text-[#59E3C6] hover:cursor-pointer hover:text-blue-600'>More</a>
            </p>
          </ul>

        </div>

      </div>
    </div>
  )
}
