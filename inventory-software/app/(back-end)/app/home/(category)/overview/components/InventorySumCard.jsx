import React from 'react'

const InventorySumCard = ({item}) => {
  return (
    <div  className={`flex justify-between border p-3 items-center `}>
               
    <h2 className={` text-xl text-gray-400 p-3`}>{item.text}</h2>
    <p className='text-2xl text-gray-700'>{item.number}</p>
   
  </div>
  )
}

export default InventorySumCard
