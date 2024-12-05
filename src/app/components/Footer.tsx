'use client';

import React, { useEffect, useState } from 'react'
import DeviceDetector from "device-detector-js";

import { useDate } from '../hooks/Date';

export default function Footer() {

    const {date, time} = useDate()
    const [userAgent, setUserAgent] = useState<null | string>(null)

    useEffect(()=> {
        const device = new DeviceDetector()
        const agent = device.parse(navigator.userAgent)

        setUserAgent(agent.device?.brand || "Unknown")
    }, [])

  return (
    <div className="w-full min-h-[100px] italic text-sm flex px-20 md:justify-between items-center bg-black text-white font-geist-mono gap-10 justify-center">
        <div>
            {date}{time}
        </div>
        <div className='hidden md:block'>
            {
                "Open with "+ userAgent
            }
        </div>
    </div>
  )
}
