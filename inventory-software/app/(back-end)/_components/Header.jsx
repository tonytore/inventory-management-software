"use client";


import { usePathname } from "next/navigation";
import { ModeToggle } from "./ModeToggle";
import { Bell, ChevronDown, History, LayoutGrid, Settings, Users } from "lucide-react";
import SearchInput from '../../../@/components/SearchInput'
import { TooltipDemo } from '../../../@/components/ToolTip'
import Image from "next/image";



// const HeaderList = [
//   {
//     id: 1,
//     title: "Home",
//     href: "/",
//   },
//   {
//     id: 2,
//     title: "Posts",
//     href: "/posts",
//   },
//   {
//     id: 3,
//     title: "CreatePost",
//     href: "/posts/createPosts",
//   },
// ];
// {HeaderList.map((list) => {
//       return (
//         <div
//           className={`flex items-center gap-3 ${
//             path === list.href && "text-zinc-950"
//           }`}
//           key={list.id}
//         >
//           <Link href={list.href}>{list.title}</Link>
//         </div>
//       );
//     })}
export const Header = () => {
  const path = usePathname();


  return (
    <div className="flex p-7 dark:bg-gray-400 bg-sky-50 shadow-md justify-between items-center px-8">
      <div className="flex items-center gap-6">
        <ModeToggle  />
        <button><History width={20} height={20} /></button>
        <div className="">
          <SearchInput />
        </div>

      </div>
      <div className="flex gap-6 px-8 text-zinc-400">
        <div className="pr-3 border-r border-gray-400">
          <TooltipDemo />
        </div>

        <div className="flex gap-3 items-center border-r pr-3 border-gray-400">
          <button>
          <Users className="text-slate-900 dark:text-slate-50" width={20} height={20}/>
          </button>
          <button>
          <Bell className="text-slate-900 dark:text-slate-50" width={20} height={20}/>
          </button>
          <button>
          <Settings className="text-slate-900 dark:text-slate-50" width={20} height={20}/>
          </button>
         
         
          
        </div>
        
        <div className="flex gap-4 items-center">
          <button className="flex items-center gap-1 text-slate-900 dark:text-slate-50">
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
          <LayoutGrid className="text-slate-900 dark:text-slate-50"/>
          </button>
         
        </div>

      </div>
    </div>
  );
};
