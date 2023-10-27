import React from 'react'
import {MdProductionQuantityLimits} from 'react-icons/md'

export default function ProductEmpty() {
  return <div className=" flex mt-7 md:pt-6 h-96 justify-center items-center">
      <MdProductionQuantityLimits className='w-40 h-40 text-gray-800'/>
      <p className='font-bold font-mono text-gray-800'>Try different shoes name</p>
  </div>;
}
