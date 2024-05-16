'use client'

import React, { useState } from 'react'
import { Nav } from './nav'
import {
  ChevronRight,
    LayoutDashboard,
    Settings,
    ShoppingCart,
    UsersRound,
  } from "lucide-react"
import { Button } from './button'
import {
  
  useWindowWidth,
  
} from '@react-hook/window-size'

type Props = {}

export default function SideNavbar({}: Props) {
  const [isCollapsed, setisCollapsed] = useState(false);
  const onlyWidth = useWindowWidth();
  const mobileWidth = onlyWidth < 768;

  function toggleSidebar() {
    setisCollapsed(!isCollapsed)
    
  }
  return (
    <div className='relative min-w-[80px] border-r px-3 pb-10 pt-24'>
      {!mobileWidth && (
        
        <div className="absolute right-[-20px] top-7">
      <Button onClick={toggleSidebar} className='rounded-full p-2' variant='secondary'>
        <ChevronRight className=''/>
      </Button>
      </div>
      )}
         <Nav
            isCollapsed={mobileWidth ? true : isCollapsed} 
            links={[
              {
                title: "Dashboard",
                href: "/",
                icon: LayoutDashboard,
                variant: "default",
              },
              {
                title: "Users",
                href: "/users",
                icon: UsersRound,
                variant: "ghost",
              },
              {
                title: "Orders",
                href: "/orders",
                icon: ShoppingCart,
                variant: "ghost",
              },
              {
                title: "Settings",
                href: "/settings",
                icon: Settings,
                variant: "ghost",
              },
              // {
              //   title: "Trash",
              //   href: "/",
              //   icon: Trash2,
              //   variant: "ghost",
              // },
              // {
              //   title: "Archive",
              //   href: "/",
              //   icon: Archive,
              //   variant: "ghost",
              // },
            ]}
          />
    </div>
  )
}