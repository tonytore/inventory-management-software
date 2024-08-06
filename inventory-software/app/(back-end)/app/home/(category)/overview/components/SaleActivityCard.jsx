"use client"

import Link from "next/link"

const SaleActivityCard = ({sale}) => {
  return (
    <Link href={sale.href} className={`border p-10 ${sale.borderColor} my-8 text-center rounded-xl border-gray-300 mx-auto lg:p-6 md:p-2`}>
               
    <h2 className={`${sale.color} text-3xl`}>{sale.number}</h2>
    <small className="">{sale.text}</small>
    <p className='uppercase text-sm'>{sale.desc}</p>
   
  </Link>
  
  )
}

export default SaleActivityCard
