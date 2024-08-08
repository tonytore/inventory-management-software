"use client"

import { PlusCircle } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"



const CollapsibleLink = ({item}) => {
  const path = usePathname()
  return (
    <Link
    href={item.href}
    className={`flex rounded-2xl justify-between items-center dark:hover:bg-slate-600 
        hover:bg-slate-100 my-2 pl-12 pr-4 p-2 ${path == item.href && ' bg-blue-700 '}`}>
        <span className="text-sm">{item.title}</span>
       
        {item.icon}
       
       
  </Link>
  )
}

export default CollapsibleLink
