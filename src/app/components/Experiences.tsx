import React from 'react'
import { ExpList } from '../constant/ExpList'

export default function Experiences() {
  return (
    <div className="w-full min-h-[75vh] flex flex-col items-center justify-center bg-[#0A192F] text-white font-geist-mono gap-10" id='experience'>
    <h2 className='text-3xl py-5 min-w-[80%]'><span className='text-[#59E3C6] text-xl'>02.</span> Experiences <hr /></h2> 
        {   ExpList.length > 0 &&
            ExpList.map((el, index) => {
                return index % 2 == 0? 
                <div className='flex items-center justify-between gap-10 py-5' key={index}>
                    <div className='min-w-[400px] min-h-[100px] flex flex-col pl-3 justify-center'>
                        <h3 className='text-base mb-2 font-bold border-b'>{el.as}</h3>
                        <p className='text-sm pb-1'>{el.timeline}</p>
                        {
                            el.responsible.map((val, _) => 
                                (<p className='text-sm' key={_}>- {val}</p>)
                            )
                        }
                    </div>
                    <p className='bg-blue-500 font-bold min-w-[150px] p-2 rounded-lg text-center'>{el.company}</p>
                </div> : 
                <div className='flex items-center justify-between gap-10 py-5' key={index}>
                    <p className='bg-blue-500 font-bold min-w-[150px] p-2 ml-4 rounded-lg text-center'>{el.company}</p>
                    <div className='min-w-[400px] h-[100px] flex flex-col pl-3 justify-center'>
                        <h3 className='text-base mb-2 font-bold pb-1 border-b'>{el.as}</h3>
                        <p className='text-sm'>{el.timeline}</p>
                        {
                            el.responsible.map((val, _) => 
                                (<p className='text-sm' key={_}>- {val}</p>)
                            )
                        }
                    </div>
                </div>
            })
        }

    </div>
  )
}
