"use client"

import { CreditCard, X } from 'lucide-react'
import React from 'react'
import { useState } from 'react'

const DashboardBanner = () => {
    const [hidden, setHidden] = useState(false)
  return (
       <div className={`${hidden ? "hidden" : "grid grid-cols-12 gap-3  p-8 text-gray-900 bg-white relative"}`}>

      
    <CreditCard width={64} height={64}  className="col-span-3"/>
    <div className='col-span-6'>
      <h2 className='font-semibold text-xl'>Start accepting online payments</h2>
      <p className='text-wrap'>Businesses are moving towards online payments as they're easy, secure and fast. Try them for your business today.</p>
    </div>
    <button className='col-span-2 uppercase rounded-xl p-1 text-white px-4 bg-blue-600'>Enable</button>
    <button onClick={() => setHidden(true)} className='col-span-1 absolute top-3 right-3 hover:text-red-500 cursor-pointer'>
        <X />
      </button>
   

    </div>
  )
}

export default DashboardBanner
