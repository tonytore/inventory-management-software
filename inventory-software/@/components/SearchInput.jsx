import { Input } from "../../@/components/ui/input"
import React from 'react'

const SearchInput = () => {
    return (
      <div >
         <Input
          className="bg-gray-300 rounded-2xl"
          type="text" 
          placeholder=" Search Customer ..." />
        
        </div>
    )
}

export default SearchInput
