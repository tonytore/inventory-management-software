"use client"

import { CircleHelp, EllipsisVertical, LayoutGrid, Logs, Plus } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'

const FixedHeader = () => {
  const router = useRouter()
  return (
    <div className='flex items-center justify-between p-5 bg-white shadow-sm'>
      <h1 className='font-medium text-xl text-gray-600'>All Items</h1>
      <div className='flex items-center text-white gap-3'>
      <button onClick={()=>router.push('/app/inventory/items/new')}
          className="flex gap-2 items-center text-white bg-blue-700 font-medium rounded-xl text-sm p-2 text-center dark:bg-blue-600" variant="outline">
            <Plus className='w-4 h-4'/> New

        </button>
        
        <div className='flex items-center border rounded-xl'>
            <Logs className='bg-gray-300 p-4'/>
            <LayoutGrid className='bg-gray-100 p-4'/>
        </div>
        <div className='bg-gray-100 p-2 rounded-xl text-gray-500'>
        <EllipsisVertical />
        </div>
        <div className='bg-orange-400 p-2 rounded-xl outline-none'>
        <CircleHelp/>
        </div>
       
      </div>
    </div>
  )
}

export default FixedHeader
