import React from 'react'

export default function Button({text} : {text: string}) {
  return (
    <button className='py-2 px-4 rounded-lg border-[#59E3C6] border border-dashed hover:border-dotted hover:text-[#59E3C6]'>
        {text}
    </button>
  )
}
