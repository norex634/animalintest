'use client'
import React from 'react'
import Image from 'next/image'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  import { Input } from "@/components/ui/input"
  import { Label } from "@/components/ui/label"
  import { Button } from '@/components/ui/button'

const DialogBlog = ({actu}) => {
  return (
    <>
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-ac hover:bg-txt hover:text-ac">Plus d&apos;info</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] md:max-w-[70%] lg:maw-w-[50%]">
        <DialogHeader>
          <DialogTitle className="text-[1.3em] text-center"> {actu.titre} / {actu.categorie.nom}</DialogTitle>
          <DialogDescription className="text-center">
            Nous prenon à coeur de vous informer de nos dernières nouvelles
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col lg:flex-row gap-2">
            <div className="flex flex-col lg:flex-row justify-center lg:justify-start max-h-[90%] w-full lg:gap-4 ">
                <div className="carousel w-full lg:w-[50%]">
                    <div id="slide1" className="carousel-item relative w-full">
                    <Image priority="priority" width={600} height={600} alt="1" src="https://picsum.photos/400/400" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a> 
                    <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div> 
                <div id="slide2" className="carousel-item relative w-full">
                    <Image priority="priority" src="https://picsum.photos/400/400" width={600} height={600} alt="2" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a> 
                    <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div> 
            
            </div>

            <div className="flex flex-col items-center lg:items-start">
            <p className='self-center lg:self-start'><span className='font-bold'>Date : </span>{new Date(actu.date).toLocaleDateString('en-US', {
            day: 'numeric',
            month: 'numeric',
            year: 'numeric',
            })}</p>
            <p>{actu.descr}</p>
            </div>
            </div>
        </div>
      </DialogContent>
    </Dialog>
    </>
  )
}

export default DialogBlog