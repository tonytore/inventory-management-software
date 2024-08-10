import { Input } from "../../@/components/ui/input"
import React from 'react'

const SearchInput = () => {
    return (
      <div >
         <Input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5
          dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-slate-600
           dark:focus:ring-primary-500 dark:focus:border-primary-500"
          type="text" 
          placeholder=" Search Customer ..." />
        
        </div>
    )
}

export default SearchInput
