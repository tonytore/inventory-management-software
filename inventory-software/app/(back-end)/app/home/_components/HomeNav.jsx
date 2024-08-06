"use client"

import { ClipboardMinus } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const HomeNav = () => {
    const path = usePathname()
    const navLink = [
        {
            title: "Dashboard",
            href: '/app/home/overview'
        },
        {
            title: "Getting Started",
            href: '/app/home/getting-started'
        },
        {
            title: "Announcements",
            href: '/app/home/announcements'
        },
        {
            title: "Recent Updates",
            href: '/app/home/updates'
        },
    ]
    return (
        <div className='flex flex-col gap-2'>
            <div className='flex p-6 gap-5 items-center'>
                <div className='p-4 bg-white border border-gray-200 rounded-lg shadow-sm'>
                    <ClipboardMinus width={28} height={28} />
                </div>

                <div className='flex flex-col gap-1'>
                    <h1 className='font-semibold text-gray-500 text-xl'>Hello, TONYTOR WEBDEVELOPER </h1>
                    <span className='text-gray-400 font-medium'>Garat</span>
                </div>
            </div>

            
                <div className='flex px-6 text-gray-700 space-x-6 items-center gap-3'>
                    {
                navLink.map((item, i) => {
                    return (
                            <Link 
                            key={i}
                            className={` ${path === item.href ? " border-b-2 py-3 border-blue-700": "py-3"}`}
                            href={item.href}>
                                {item.title}
                            </Link>
                    )
                })
            }
                </div>
            


        </div>
    )
}

export default HomeNav
