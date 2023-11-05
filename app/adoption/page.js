'use client'
import React,{useState,useEffect} from "react"
import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars,faHandshakeAngle,faGraduationCap,faBook,faBell} from '@fortawesome/free-solid-svg-icons'
import Nav from "@/components/partials/Nav"
import Header from "@/components/partials/Header"
import Footer from "@/components/partials/Footer"
export default function HomePage() {


  return (

  <>
  <Header/>
   <Nav/>
  <div className="min-h-screen bg-txt pb-[3em]">

    <div className="flex bg-txt min-h-screen pt-[15%] md:pt-[10%] lg:pt-[4%] px-[15%]">
        <div className="grid h-[15%] w-full rounded flex-col p-2 gap-2">
            <div className="flex flex-col text-center gap-2">
                <h1 className="text-[1.5em]"></h1>
                {/* md */}
                <input type="text" placeholder="Rechercher par nom" className="input input-bordered input-md w-full" />
            </div>
            <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
                <AccordionTrigger className='text-[#28ccac]'>Plus de recherche ?</AccordionTrigger>
                <AccordionContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
                        <div className="flex p-2 w-full">
                            {/* md */}
                            <select className="select select-bordered w-full max-w-xs">
                            <option disabled selected>Normal</option>
                            <option>Normal Apple</option>
                            <option>Normal Orange</option>
                            <option>Normal Tomato</option>
                            </select>
                        </div>
                        <div className="flex p-2 w-full">
                            {/* md */}
                            <select className="select select-bordered w-full max-w-xs">
                            <option disabled selected>Normal</option>
                            <option>Normal Apple</option>
                            <option>Normal Orange</option>
                            <option>Normal Tomato</option>
                            </select>
                        </div>
                        <div className="flex p-2 w-full">
                            {/* md */}
                            <select className="select select-bordered w-full max-w-xs">
                            <option disabled selected>Normal</option>
                            <option>Normal Apple</option>
                            <option>Normal Orange</option>
                            <option>Normal Tomato</option>
                            </select>
                        </div>
                        <div className="flex p-2 w-full">
                            {/* md */}
                            <select className="select select-bordered w-full max-w-xs">
                            <option disabled selected>Normal</option>
                            <option>Normal Apple</option>
                            <option>Normal Orange</option>
                            <option>Normal Tomato</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-span-4 lg:col-span-2 ">
                      <div className="text-center">
                        <Button className='bg-ac mt-2 w-[25%]'>Filtrer</Button>
                      </div>
                    </div>
                </AccordionContent>
            </AccordionItem>
            </Accordion>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8" >
                    {/* card 1  */}
                    <div className="card card-compact bg-base-100 shadow-xl">
                        <figure><img src="https://www.spalalouviere.be/wp-content/uploads/2019/11/272594154_10226572695932574_6645465709592935901_n-820x528.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                    {/* card 1  */}
                    <div className="card card-compact bg-base-100 shadow-xl">
                        <figure><img src="https://www.spalalouviere.be/wp-content/uploads/2019/11/272594154_10226572695932574_6645465709592935901_n-820x528.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                    {/* card 1  */}
                    <div className="card card-compact bg-base-100 shadow-xl">
                        <figure><img src="https://www.spalalouviere.be/wp-content/uploads/2019/11/272594154_10226572695932574_6645465709592935901_n-820x528.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                    {/* card 1  */}
                    <div className="card card-compact bg-base-100 shadow-xl">
                        <figure><img src="https://www.spalalouviere.be/wp-content/uploads/2019/11/272594154_10226572695932574_6645465709592935901_n-820x528.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                    {/* card 1  */}
                    <div className="card card-compact bg-base-100 shadow-xl">
                        <figure><img src="https://www.spalalouviere.be/wp-content/uploads/2019/11/272594154_10226572695932574_6645465709592935901_n-820x528.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                
            </div>
            
        </div>
    </div>
</div>






  <Footer/>

  </> 
  )
}
