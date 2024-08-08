"use client"


import { BadgeDollarSign, ChartNoAxesColumnIncreasing,   ChevronLeft, ClipboardList, Files, Group, House, PlusCircle, Proportions, ScanLine, ShoppingCart, StretchHorizontal, Workflow } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import SubscriptionCard from '../_components/SubscriptionCard'

import SideNavDropDown from './SideNavDropDown'






export const SideNav = () => {
  const path = usePathname()
 

  let inventoryLinks = [
    {
      icon: <PlusCircle />,
      title: "Items",
      href: "/app/inventory/items/new",
    },
    {
      icon:  <PlusCircle />,
      title: "Categories",
      href: "/app/inventory/categories/new",
    },
    {
      icon: <PlusCircle />,
      title: "Brands",
      href: "/app/inventory/brands/new",
    },
    {
      icon:  <PlusCircle />,
      title: "Units",
      href: "/app/inventory/units/new",
    },
    {
      icon: <PlusCircle />,
      title: "Warehouse",
      href: "/app/inventory/warehouse/new",
    },
    {
      icon:  <PlusCircle />,
      title: "Inventory Adjustments",
      href: "/app/inventory/inventory-adjustments",
    },


  ];
  let salesLinks = [
    {
      icon: <PlusCircle />,
      title: "Customers",
      href: "/app/inventory/items",
    },
    {
      icon:  <PlusCircle />,
      title: "Sales Orders",
      href: "/app/inventory/item-groups",
    },

    {
      icon:  <PlusCircle />,
      title: "Packages",
      href: "/app/inventory/price-lists",
    },
    {
      icon:  <PlusCircle />,
      title: "Shipments",
      href: "/app/inventory/inventory-adjustments",
    },
    {
      icon: <PlusCircle />,
      title: "invoices",
      href: "/app/inventory/items",
    },
    {
      icon:  <PlusCircle />,
      title: "Sales Receipts",
      href: "/app/inventory/item-groups",
    },

    {
      icon:  <PlusCircle />,
      title: "Payments Received",
      href: "/app/inventory/price-lists",
    },
    {
      icon:  <PlusCircle />,
      title: "Sales Returns",
      href: "/app/inventory/inventory-adjustments",
    },
    {
      icon:  <PlusCircle />,
      title: "Credit Notes",
      href: "/app/inventory/inventory-adjustments",
    },


  ];
  let purchasLinks = [
    {
      icon: <PlusCircle />,
      title: "Vendors",
      href: "/app/inventory/items",
    },
    {
      icon:  <PlusCircle />,
      title: "Expenses",
      href: "/app/inventory/item-groups",
    },

    {
      icon:  <PlusCircle />,
      title: "Purchase Orders",
      href: "/app/inventory/price-lists",
    },
    {
      icon:  <PlusCircle />,
      title: "Purchase Receives",
      href: "/app/inventory/inventory-adjustments",
    },
    {
      icon: <PlusCircle />,
      title: "Bills",
      href: "/app/inventory/items",
    },
    {
      icon:  <PlusCircle />,
      title: "Payments Made",
      href: "/app/inventory/item-groups",
    },

    {
      icon:  <PlusCircle />,
      title: "Vendor Credits",
      href: "/app/inventory/price-lists",
    },
  ];
  
  return (
    <div className='h-screen flex flex-col justify-between items-center shadow-md bg-slate-50 dark:bg-slate-800'>

      <Link href='#' className='flex text-2xl gap-2 items-center justify-center py-3  w-full dark:bg-slate-900'>
        <ScanLine /> <span>Inventory</span>
      </Link>

      <div className='w-[90%] flex-1  my-24'>

        <Link

          href='/app/home/overview'
          className={`flex rounded-2xl justify-between items-center dark:hover:bg-slate-600 
               hover:bg-slate-100 my-2 px-2 ${path == '/app/home/overview' && ' bg-blue-700 '}`}>

          <div
            className={`flex items-center p-5 gap-2`}
          >
            <House /> Home
          </div>

        </Link>

      
         <SideNavDropDown title="Inventory" links={inventoryLinks}/>
         <SideNavDropDown title="Sales" links={salesLinks}/>
         <SideNavDropDown title="Purchases" links={purchasLinks}/>

        <Link

          href='/app/integrations'
          className={`flex rounded-2xl justify-between items-center dark:hover:bg-slate-600 
              hover:bg-slate-100 my-2 px-2 ${path == '/app/integrations' && ' bg-blue-700 '}`}>

          <div
            className={`flex items-center p-5 gap-2`}
          >
            <Workflow /> Integrations
          </div>

        </Link>
        <Link

          href='/app/reports'
          className={`flex rounded-2xl justify-between items-center dark:hover:bg-slate-600 
              hover:bg-slate-100 my-2 px-2 ${path == '/app/reports' && ' bg-blue-700 '}`}>

          <div
            className={`flex items-center p-5 gap-2`}
          >
            <ChartNoAxesColumnIncreasing /> Reports
          </div>

        </Link>
        <Link

          href='/app/documents'
          className={`flex rounded-2xl justify-between items-center dark:hover:bg-slate-600 
              hover:bg-slate-100 my-2 px-2 ${path == '/app/documents' && ' bg-blue-700 '}`}>

          <div
            className={`flex items-center p-5 gap-2`}
          >
            <Files /> Documents
          </div>

        </Link>

      </div>


      <SubscriptionCard />


      <div className='flex text-2xl  items-center justify-center py-3  w-full dark:bg-slate-900'>
        <ChevronLeft />
      </div>


    </div>
  )
}
