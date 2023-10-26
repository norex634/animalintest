"use client"
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faBuilding, faHouse, faPaw,faShieldCat, faShieldDog, faList, faHouseMedicalCircleCheck, faTableList, faVenusMars, faQuestion, faShareNodes, faEllipsisVertical, faUsers} from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { faClock, faNewspaper } from '@fortawesome/free-regular-svg-icons'
import Link from 'next/link'


import { ChevronDownIcon } from "@radix-ui/react-icons"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"


function SideAdmin() {
  const [toggleCompagnie, setToggleCompagnie] = useState(false)
  const [toggleAnimal, setToggleAnimal] = useState(false)
  const [toggleActu, setToggleActu] = useState(false)
  return (
    
//     <div className="flex">
//       <div className="flex flex-col h-full p-3 bg-gray-800 shadow">
//         <div className="space-y-3">
//           <div className="flex flex-col">
//             <h2 className="text-xl font-bold text-white">Dashboard Animalin</h2>
//             <div className="relative">
//               <span className="absolute inset-y-0 left-0 flex items-center py-4">
//                 <button type="submit" className="p-2 focus:outline-none focus:ring">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="w-6 h-6"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                     strokeWidth={2}
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
//                     />
//                 </svg>
//                 </button>
//               </span>
//                 <input
//                   type="search"
//                   name="Search"
//                   placeholder="Nom de l'animal"
//                   className="w-full py-2 pl-10 text-sm rounded-md focus:outline-none"
//                 />
//             </div>
//             <div className="flex-1">
//               <ul className="pt-2 pb-4 space-y-1 text-sm">

//               {/* HOME */}
//                 <li className="rounded-sm">
//                   <a href="#" className="flex items-center p-2 space-x-3 rounded-md">
//                   <FontAwesomeIcon icon={faHouse} size="lg" style={{color: "#ffffff",}} />
//                     <span className="text-gray-100">Home</span>
//                   </a>
//                 </li>


//               {/* DROP COMPAGNIE */}
//                 <li className="rounded-sm">
//                   <div className="flex items-center p-2 space-x-3 rounded-md">
//                   <FontAwesomeIcon icon={faBuilding} size="lg" style={{color: "#ffffff",}} />
//                     <button onClick={() => setToggleCompagnie(!toggleCompagnie)} className="text-gray-100">Compagnie</button>
//                   </div>
//                     {toggleCompagnie && (
//                       <ul className='pl-6'>
//                         <li className="rounded-sm">
//                           <Link href="/admin/compagnie" className="flex items-center p-2 space-x-3 rounded-md">
//                           <FontAwesomeIcon icon={faHouseMedicalCircleCheck} size="lg" style={{color: "#ffffff",}} />
//                           <span className="text-gray-100">Info</span>
//                           </Link>
//                         </li>

//                         <li className="rounded-sm">
//                           <Link href="/admin/faq" className="flex items-center p-2 space-x-3 rounded-md">
//                           <FontAwesomeIcon icon={faQuestion} size="lg" style={{color: "#ffffff",}} />
//                             <span className="text-gray-100">Faq</span>
//                           </Link>
//                         </li>

//                         <li className="rounded-sm">
//                           <Link href="/admin/users" className="flex items-center p-2 space-x-3 rounded-md">
//                           <FontAwesomeIcon icon={faUsers} size="lg" style={{color: "#ffffff",}} />
//                             <span className="text-gray-100">Users</span>
//                           </Link>
//                         </li>
//                       </ul>
//                     )
//                   }
//                 </li>
                
//                   {/* ANIMAL DROPDOWN */}
//                 <li className="rounded-sm">
//                   <div className="flex items-center p-2 space-x-3 rounded-md">
//                   <FontAwesomeIcon icon={faPaw} size="lg" style={{color: "#ffffff",}} />
//                     <button onClick={() => setToggleAnimal(!toggleAnimal)} className="text-gray-100">animal</button>
//                   </div>
//                 {toggleAnimal && (
//                   <ul className='pl-6'>
//                     <li className="rounded-sm">
//                       <Link href="/admin/animal" className="flex items-center p-2 space-x-3 rounded-md">
//                       <FontAwesomeIcon icon={faList} size="lg" style={{color: "#ffffff",}} />
//                       <span className="text-gray-100">Tous les animaux</span>
//                       </Link>
//                     </li>
//                   </ul>
//                 )}
//                 </li>


//                 <ul className=''>
//                       <li className="rounded-sm">
//                         <Link href="/admin/actu" className="flex items-center p-2 space-x-3 rounded-md">
//                         <FontAwesomeIcon icon={faNewspaper} size="lg" style={{color: "#ffffff",}} />
//                         <span className="text-gray-100">Actu</span>
//                         </Link>
//                       </li>
//                     </ul>

//               </ul>
//           </div>
//         </div>
//       </div>
//     </div>
// </div>

<div className="h-[96vh] w-full p-2 bg-[#ffffff] text-[#222222] rounded-[10px] flex flex-col justify-between shadow-lg ">
  <div className="flex flex-col ">
    <h1 className="text-[1.5em] font-semibold mb-2 text-center">Dashboard</h1>
    <ul className='flex flex-col gap-4 text-[#222222]'>
      {/* HOME */}                 
      <li className="rounded-[20px] border border-transparent hover:border-[#28ccac] ">
        <a href="#" className="flex items-center p-2 space-x-3 rounded-md">
        <FontAwesomeIcon icon={faHouse} size="lg" style={{color: "#28ccac",}} />
        <span className="">Home</span>
        </a>
      </li>
      {/* DROP COMPAGNIE */}
      <li className="rounded-[50px] group ">
        <div className="flex items-center p-2 space-x-3 rounded-[20px] border border-transparent hover:border-[#28ccac]">
          <FontAwesomeIcon icon={faBuilding} size="lg" style={{color: "#28ccac",}} />
            <button onClick={() => setToggleCompagnie(!toggleCompagnie)} className="">Compagnie</button>
              </div>
                {toggleCompagnie && (
                  <ul className=' flex flex-col gap-2 pl-6'>
                    <li className=" mt-2 rounded-[20px] border border-transparent hover:border-[#28ccac]">
                      <Link href="/admin/compagnie" className="flex items-center p-2 space-x-3 rounded-md mt-1">
                      <FontAwesomeIcon icon={faHouseMedicalCircleCheck} size="lg" style={{color: "#28ccac",}} />
                      <span className="">Info</span>
                      </Link>
                    </li>

                    <li className="rounded-[20px] border border-transparent hover:border-[#28ccac]">
                      <Link href="/admin/faq" className="flex items-center p-2 space-x-3 rounded-md">
                      <FontAwesomeIcon icon={faQuestion} size="lg" style={{color: "#28ccac",}} />
                      <span className="">Faq</span>
                      </Link>
                    </li>

                    <li className="rounded-[20px] border border-transparent hover:border-[#28ccac]">
                      <Link href="/admin/users" className="flex items-center p-2 space-x-3 rounded-md">
                      <FontAwesomeIcon icon={faUsers} size="lg" style={{color: "#28ccac",}} />
                      <span className="text-[#222222]">Users</span>
                      </Link>
                    </li>
                  </ul>
                )}
        </li>
        <li className="rounded-[20px] border border-transparent hover:border-[#28ccac]">
          <Link href="/admin/animal" className="flex items-center p-2 space-x-3 rounded-md">
          <FontAwesomeIcon icon={faPaw} size="lg" style={{color: "#28ccac",}} />
          <span className="">Animaux</span>
          </Link>
        </li>
        <li className="rounded-[20px] group border border-transparent hover:border-[#28ccac]">
          <Link href="/admin/actu" className="flex items-center p-2 space-x-3 rounded-md">
          <FontAwesomeIcon icon={faNewspaper} size="lg" style={{color: "#28ccac",}} />
          <span className=" ">Actu</span>
          </Link>
        </li>
    </ul>
  </div>
  
   <Card className="bg-[#ffffff] border-[#222222] shadow-lg w-full">
      <CardContent className="grid gap-6 p-2">
        <div className="flex items-center justify-between space-x-2">
            <div className='flex flex-col '>
              <p className="text-lg font-medium leading-none text-[#222222] underline decoration-[#28ccac]">Savanah</p>
            </div>
            
            <Button className="text-[#222222] bg-[#ffffff] border border-[#222222] hover:border-[#28ccac] hover:bg-[#28ccac] hover:text-[#ffffff]">
              <FontAwesomeIcon icon={faEllipsisVertical} />
            </Button>
            
        </div>
      </CardContent>
    </Card>
</div>



    
  )
}

export default SideAdmin

