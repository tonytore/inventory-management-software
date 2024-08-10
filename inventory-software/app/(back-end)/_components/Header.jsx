"use client";


import { usePathname } from "next/navigation";
import { ModeToggle } from "./ModeToggle";
import { Bell, ChevronDown, History, LayoutGrid, Settings, Users } from "lucide-react";
import SearchInput from '../../../@/components/SearchInput'
import { TooltipDemo } from '../../../@/components/ToolTip'
import Image from "next/image";

export const Header = () => {
  const path = usePathname();


  return (
    <div className="flex p-3 dark:bg-gray-100 bg-gray-100 shadow-sm justify-between items-center px-8">
      <div className="flex items-center gap-6">
        <ModeToggle  />
        <button><History width={20} height={20} /></button>
        <div className="bg-gray-300 rounded-xl">
          <SearchInput />
        </div>

      </div>
      <div className="flex gap-6 px-8 text-zinc-400">
        <div className="pr-3  border-r border-gray-300">
          <TooltipDemo />
        </div>

        <div className="flex gap-3 items-center border-r pr-3 border-gray-400">
          <button>
          <Users className="text-slate-900 dark:text-slate-500" width={20} height={20}/>
          </button>
          <button>
          <Bell className="text-slate-900 dark:text-slate-500" width={20} height={20}/>
          </button>
          <button>
          <Settings className="text-slate-900 dark:text-slate-500" width={20} height={20}/>
          </button>
         
         
          
        </div>
        
        <div className="flex gap-4 items-center">
          <button className="flex items-center gap-1 text-slate-900 dark:text-slate-500">
            <span>Garat</span><ChevronDown className="w-4 h-4" />
            </button>
          <Image
          src='/user.jpg'
          alt="user image"
          width={96}
          height={96}
          className="rounded-full w-9 h-9"
          />
          <button>
          <LayoutGrid className="text-slate-900 dark:text-slate-500"/>
          </button>
         
        </div>

      </div>
    </div>
  );
};
