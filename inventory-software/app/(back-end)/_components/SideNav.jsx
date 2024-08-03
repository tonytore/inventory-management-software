"use client"

import React from 'react'
import logo from '../../../public/logo.svg'
import Image from 'next/image'
import {BadgeDollarSign, Blocks, ChartNoAxesGantt, Files, House, MessageCircleWarning, ShoppingCart } from 'lucide-react'


import Link from 'next/link'
import { usePathname } from 'next/navigation'


export const SideNav = () => {
  const path = usePathname()
   
    const menuList = [
        {
            id:1,
            name:"Home",
            icon:<House/>,
            path:'/app/home/overview'
        },
        {
            id:2,
            name:"Inventory",
            icon:<ChartNoAxesGantt />,
            path:'/app/inventory'
        },
        {
            id:3,
            name:"Sales",
            icon:<BadgeDollarSign />,
            path:'/app/sales'
        },
        {
            id:4,
            name:"Purchases",
            icon:<ShoppingCart />,
            path:'/app/purchases'
        },
        {
          id:5,
          name:"Integrations",
          icon:<Blocks />,
          path:'/app/integrations'
      },
      {
          id:6,
          name:"Reports",
          icon:<MessageCircleWarning />,
          path:'/app/reports'
      },
      {
          id:7,
          name:"Documents",
          icon:<Files />,
          path:'/app/documents'
      }
    ]
  return (
    <div className='h-screen flex flex-col justify-between items-center shadow-md bg-white dark:bg-slate-900'>
   <Link
   href='/'>
   <Image
       src={logo}
       width={180}
       height={50}
       alt='logo'
       className='mx-auto my-3  p-7 shadow-md'
       /></Link>
       <div className='mx-12 flex-1  my-36'>
         {
            menuList.map((menu,i)=>(
             <Link
             key={i}
             href={menu.path}
             className={`flex p-5 gap-2  rounded-lg my-2
             ${path == menu.path && ' bg-purple-700'}
             `}
             >
                {menu.icon} {menu.name}
             </Link>
            ))
         }
       </div>

       <div className='flex justify-start items-center'>
        <Image
        src={logo}
        width={35}
        height={35}
        alt='user'
        className='rounded-full mx-4'
        />
       <div className='text-sm'>
       <h2 className=''>username    familyname</h2>
        <h2 className='truncate text-[10px]'>email</h2>
       </div>
       </div>
    </div>
  )
}
