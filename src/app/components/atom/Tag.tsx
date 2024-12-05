import React from 'react'

export default function Tag({text}: {text: string}) {
  return (
    <li className='py-2 rounded-full bg-cyan-700 text-center text-sm'><span>{text}</span></li>
  )
}
