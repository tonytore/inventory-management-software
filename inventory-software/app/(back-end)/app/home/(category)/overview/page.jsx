"use client"

import { CreditCard, X } from 'lucide-react'
import SaleActivityCard from '../overview/components/SaleActivityCard'
import InventorySumCard from '../overview/components/InventorySumCard'
import React, { useState } from 'react'

const Overview = () => {
  const [hidden, setHidden] = useState(false)

  const salesActivity = [
    {
      number: 0,
      text: "Qty",
      desc: "to be packed",
      color: "text-blue-600",
      href: "#",
      borderColor: 'border-blue-600'
    },
    {
      number: 0,
      text: "Pkgs",
      desc: "to be shipped",
      color: "text-red-600",
      href: "#",
      borderColor: 'border-red-600'
    },
    {
      number: 0,
      text: "Pkgs",
      desc: "to be delivered",
      color: "text-green-600",
      href: "#",
      borderColor: 'border-green-600'
    },
    {
      number: 0,
      text: "Qty",
      desc: "to be invoiced",
      color: "text-orange-600",
      href: "#",
      borderColor: 'border-orange-600'
    },
  ]

  const inventorySum = [
    {
      text: "quantity in hand",
      number: 0
    },
    {
      text: "quantity in received",
      number: 0
    },
  ]


  return (
    <div className='flex flex-col gap-3'>

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
      <div className="grid grid-cols-12 gap-3 bg-blue-50 text-gray-500 p-8">
        <div className='lg:col-span-8 md:col-span-5 flex flex-col border border-gray-300 rounded-xl '>
          <div className='text-gray-600 border-b border-gray-300 bg-gray-200 text-xl p-3'>
            Sales Activity
          </div>
          <div className='w-full flex lg:gap-8 md:gap-4    lg:p-3'>
            {
              salesActivity.map((sale, i) => {
                return (
                  <SaleActivityCard sale={sale} key={i} />
                )
              })
            }
          </div>
        </div>

        <div className='lg:col-span-3  md:col-span-4 border border-gray-300 rounded-xl'>
          <div className='text-gray-600 border-b border-gray-300 bg-gray-200 text-xl p-3'>
            Inventory Summary
          </div>
          <div className=' p-5'>
            {
              inventorySum.map((item, i) => {
                return (
                  <InventorySumCard item={item} key={i} />
                )
              })
            }
          </div>
        </div>
       

      </div>
      <div className='grid grid-cols-6 gap-6 p-8 mr-32'>
        <div className='col-span-3 border border-gray-300 rounded-xl'>
          <div className='text-gray-600 border-b border-gray-300 bg-gray-200 text-xl p-3'>
            Product Details
          </div>
          <div className={`flex justify-between items-center p-3`}>

            <h2 className={` text-xl text-gray-400 p-3`}>text</h2>
            <p className='text-2xl text-gray-700'>number</p>

          </div>
        </div>

        <div className='col-span-3 border border-gray-300 rounded-xl'>
          <div className='text-gray-600 border-b border-gray-300 bg-gray-200 text-xl p-3'>
           Top Selling Items
          </div>
          <div className={`flex justify-between items-center `}>

            <h2 className={` text-xl text-gray-400 p-3`}>text</h2>
            <p className='text-2xl text-gray-700'>number</p>

          </div>

        </div>
      </div>
    </div>

  )
}

export default Overview
