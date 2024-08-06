import React from 'react'

const SubscriptionCard = () => {
  return (
    <div className='flex flex-col rounded-lg dark:bg-slate-900 my-9 mx-3'>
      <div className='truncate '>
            <p className='border-l-4 text-wrap text-sm my-1 mx-2 py-2 px-2 border-orange-300'>Your Premium plan's trial expires in <span className='text-orange-600 text-xs'>14 days.</span></p>
      </div>
      <div className='flex  items-center justify-evenly border-t border-gray-400'>
        <p className='border-r p-3  border-gray-400'>Change Plan</p>
        <p className=' p-3'>Upgrade</p>
      </div>
    </div>
  )
}

export default SubscriptionCard
