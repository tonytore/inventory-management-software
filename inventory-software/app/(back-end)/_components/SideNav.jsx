"use client"

import React from 'react'
import {BadgeDollarSign, ChartNoAxesGantt, ChevronLeft, ChevronRight, Files, House, MessageCircleWarning, ScanLine, ShoppingCart, Workflow } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import SubscriptionCard from '../_components/SubscriptionCard'

export const SideNav = () => {
  const path = usePathname()
   
    const menuList = [
     
        {
            id:1,
            name:"Home",
            icon:<House/>,
            path:'/app/home/overview',
        },
        {
            id:2,
            name:"Inventory",
            icon:<ChartNoAxesGantt />,
            path:'/app/inventory',
            icon2:<ChevronRight width={20} height={20}/>
        },
        {
            id:3,
            name:"Sales",
            icon:<BadgeDollarSign />,
            path:'/app/sales',
            icon2:<ChevronRight width={20} height={20}/>
        },
        {
            id:4,
            name:"Purchases",
            icon:<ShoppingCart />,
            path:'/app/purchases',
            icon2:<ChevronRight width={20} height={20}/>
        },
        {
          id:5,
          name:"Integrations",
          icon:<Workflow />,
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
    <div className='h-screen flex flex-col justify-between items-center shadow-md bg-slate-50 dark:bg-slate-800'>

      <Link href='#' className='flex text-2xl gap-2 items-center justify-center py-3  w-full dark:bg-slate-900'>
      <ScanLine /> <span>Inventory</span>
      </Link>

       <div className='w-[90%] flex-1  my-24'>
         {
            menuList.map((menu,i)=>(
              <Link 
              key={i}
              href={menu.path}
              className={`flex rounded-2xl justify-between items-center dark:hover:bg-slate-600 
               hover:bg-slate-100 my-2 px-2 ${path == menu.path && ' bg-blue-700 '}`}>

            <div
             className={`flex items-center p-5 gap-2`}
             >
              {menu.icon} {menu.name}    
             </div>
             <div className=''>
              {
                menu.icon2 && menu.icon2
              }
              </div>
              </Link>
           
            ))
         }
       </div>
         
         <SubscriptionCard/>
      

        <div className='flex text-2xl  items-center justify-center py-3  w-full dark:bg-slate-900'>
        <ChevronLeft />
        </div>
     
     
    </div>
  )
}
