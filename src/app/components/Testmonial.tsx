'use client';
import React from 'react'

import TestiCard from './atom/TestiCard';
import { TestiUser } from '../constant/TestiList';

export default function Testmonial() {
  return (
    <div className="w-full min-h-[50vh] bg-[#0A192F] text-white font-geist-mono pb-10">
      <h2 className='text-3xl pb-5 mx-auto max-w-[80%] text-center'> Our Testimonial</h2> 
      <h2 className='text-right mx-auto max-w-[80%] underline'><a onClick={()=> document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})} className='text-[#59E3C6] hover:cursor-pointer hover:text-blue-600'>Become our testimonial </a></h2> 
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 max-w-[80%] mx-auto gap-5'>
          {
            TestiUser.length > 0 &&
            TestiUser.map((el, id) => {
              return (
                <TestiCard key={id} {...el}/>
              )
            })
          }
        </div>
    </div>
  )
}
