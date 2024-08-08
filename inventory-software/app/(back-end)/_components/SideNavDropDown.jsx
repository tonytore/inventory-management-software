"use client"

import { BadgeDollarSign, ChartNoAxesColumnIncreasing, ChevronDown, ChevronRight, ShoppingCart } from "lucide-react"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../../../@/components/ui/collapsible"
import { useState } from "react"
import CollapsibleLink from "./CollapsibleLink"

const SideNavDropDown = ({title,links}) => {
  const [openMenu, setOpenMenu] = useState(false)
  return (
   
    <Collapsible >
    <CollapsibleTrigger onClick={() => setOpenMenu(!openMenu)} className="flex items-center justify-between  transition-all duration-300 ease-in-out w-full"> 
    <div className='flex items-center p-5 gap-2'>
       {  title === "Sales" ? <BadgeDollarSign /> :title === "Purchases" ? <ShoppingCart /> :<ChartNoAxesColumnIncreasing />  } {title} 
        
    </div>
    {openMenu ? <ChevronDown className="w-4 h-4"/> : <ChevronRight className="w-4 h-4"/>}
    </CollapsibleTrigger>
    <CollapsibleContent className="transition-all duration-300">
    {
      links.map((item,i)=>{
        return (
          <CollapsibleLink key={i} item={item}/>
        )
      })
    }
         
        
    </CollapsibleContent>
  </Collapsible>
  )
}

export default SideNavDropDown
