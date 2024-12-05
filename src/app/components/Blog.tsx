'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Pp from "../../../public/pp.jpeg"

export default function Blog() {

  const [isActive, setIsActive] = useState<null | number>(0)

  const handleIsActive = (index: number) =>{
    setIsActive(index)
  }


  return (
    <div className="w-full min-h-[100vh] flex flex-col justify-center bg-[#0A192F] text-white font-geist-mono gap-2 py-5">
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
                  <p className='pb-2'>Title</p>
                  <p className='text-xs text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam vero animi eius beatae voluptatum non aperiam quia ipsa adipisci, fugit molestiae rerum magni reiciendis id architecto culpa sapiente ipsam quo. <br /><br />Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis labore recusandae officia cupiditate, aliquid magni cum dicta explicabo atque, facilis, dolorem minus temporibus impedit quas ut molestiae eveniet? Accusamus, doloribus.</p>
                </div>
                <div className='ml-5 my-auto'>
                  <Image alt='article-1' src={Pp} className='w-[250px] h-[80px] object-cover'/>
                  <a href='' className='text-xs pt-3 underline text-center text-[#59E3C6] hover:cursor-pointer hover:text-blue-600'>read more</a>
                </div>
              </div>
            </li>
          </ul>
        </div>

      </div>
    </div>
  )
}
