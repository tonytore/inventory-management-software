import { Boxes, Group, ScrollText, Shirt, Trophy } from 'lucide-react'
import FixedHeader from '../../../../_components/FixedHeader'

const Items = () => {
  const optionalCard = [
    {
      title : "Item group",
      icon : <Boxes className='w-36 h-36' strokeWidth="0.5"/>,
      desc : "Create multiple variants of the same item using item Groups",
      btnTitle : "New Item Group",
      enable : true
    },
    {
      title : "Item",
      icon : <Shirt className='w-36 h-36' strokeWidth="0.5"/>,
      desc : "Create standard items and services that you buy and sell",
      btnTitle : "New Item",
      enable : true
    },
    {
      title : "Composite Item",
      icon : <Trophy className='w-36 h-36' strokeWidth="0.5" />,
      desc : "Bundle different items together and sell them as kits",
      btnTitle : "New Composite Item",
      enable : false
    },
    {
      title : "Price Lists",
      icon : <ScrollText className='w-36 h-36' strokeWidth="0.5" />,
      desc : "Tweak your item prices for specific contacts or transactions",
      btnTitle : "New Price List",
      enable : false
    },
  ]
  return (
    <div className=''>
      <FixedHeader/>
      <div className='flex flex-wrap p-9 items-center gap-3 m-8'>
      {
        optionalCard.map((item,i)=>{
          return (
            <div key={i} className='flex flex-col shadow-md items-center gap-6 w-[600px] my-4 mx-4 p-8 text-center border text-gray-900 bg-white'>
            <h2 className='font-semibold'>{item.title}</h2>
            {item.icon}
            <p className='text-sm'>{item.desc}</p>
            <button
              className="flex items-center text-white bg-blue-600 font-medium rounded-xl text-sm p-3 px-6 text-center dark:bg-blue-600" variant="outline">
                {item.btnTitle}
    
            </button>
    
          </div>
          )
        })
      }
      </div>
    
    
    </div>
  )
}

export default Items
