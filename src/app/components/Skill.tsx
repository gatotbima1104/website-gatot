import React from 'react'

export default function Skill({icon, text}: {icon: React.ReactNode, text: string}) {
  return (
    <p className='flex items-center gap-2'>{icon} {text}</p>
  )
}

