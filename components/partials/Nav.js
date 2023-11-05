'use client'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faHouse,faCircleInfo,faDog,faNewspaper,faClipboardQuestion,faEnvelope } from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'
// nav data
export const navData = [
  {name : 'Home', path : '/', icon : <FontAwesomeIcon icon={faHouse} />},
  {name : 'About', path : '/about', icon : <FontAwesomeIcon icon={faCircleInfo} />},
  {name : 'Adoption', path : '/adoption', icon : <FontAwesomeIcon icon={faDog} />},
  {name : 'Blog', path : '/blog', icon : <FontAwesomeIcon icon={faNewspaper} />},
  {name : 'Faq', path : '/faq', icon : <FontAwesomeIcon icon={faClipboardQuestion} />},
  {name : 'Contact', path : '/contact', icon : <FontAwesomeIcon icon={faEnvelope} />},
];
// next link
import Link from 'next/link'
// next router
import { useRouter,usePathname } from "next/navigation"

const Nav = () => {
    const router = useRouter();
    const  pathname  = usePathname();
  return (
    <nav className=' flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-40 top 0 w-full xl:w-16 xl:max-w-md xl:h-screen'>
      {/* inner */}
      <div className="flex w-full lg:flex-col items-center justify-between lg:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[80px] xl:h-max py-8 backdrop-blur-sm text-2xl xl:text-xl xl:rounded-full bg-bg2 text-txt">
        {navData.map((link, index) => {
          return (
            <Link href={link.path} key={index}>
              
              
              <div className={`${link.path === pathname ? 'text-ac' : ''} relative flex items-center group hover:text-ac transistion-all duration-300`}>
                {/* tooltip */}
                <div className="absolute pr-14 right-0 hidden lg:group-hover:flex">
                  <div className="bg-prim relative flex text-txt items-center p-[6px] rounded-[3px]">
                    <div className="text-[12px] leading-none font-semibold capitalize">
                    {link.name}
                    </div>
                    {/* Triangle */}
                    <div className="border-solid border-l-prim border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2"></div>
                  </div>
                </div>
                
                {/* Icon */}
                {link.icon}
              </div>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}

export default Nav