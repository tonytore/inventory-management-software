"use client"

import * as React from "react"
import { useTheme } from "next-themes"



import { Button } from "../../../@/components/ui/button"
import { Moon, Sun } from "lucide-react"


export function ModeToggle() {
  const {theme, setTheme } = useTheme()


  return (
    <button className={`w-fit p-2 rounded-md hover:scale-110 active:scale-100
      duration-200 bg-gray-100 dark:bg-gray-200`} onClick={()=>{ 
        setTheme(theme == "dark" ? "light" : "dark" )
       
        }}>
          {theme === "light" ? <Moon/> : <Sun className=""/>}
      </button>
  )
}
