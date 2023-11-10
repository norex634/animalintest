'use client'
import React from 'react'

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
import { Button } from "@/components/ui/button"
import Image from 'next/image'
const DialogAdoption = ({animal}) => {
    let currentAnimal = null;
    let age = 0;
    const calculateAge = (birthDate) => {
        const currentDate = new Date();
        const dateOfBirth = new Date(birthDate);
      
        // Vérifier si la date de naissance est valide
        if (isNaN(dateOfBirth.getTime())) {
          return "Date de naissance non valide";
        }
      
        const yearsDiff = currentDate.getFullYear() - dateOfBirth.getFullYear();
        const monthsDiff = currentDate.getMonth() - dateOfBirth.getMonth();
        const daysDiff = currentDate.getDate() - dateOfBirth.getDate();
      
        // Vérifier si la date d'anniversaire de cette année est déjà passée
        const hasBirthdayPassed = monthsDiff > 0 || (monthsDiff === 0 && daysDiff >= 0);
      
        // Si l'anniversaire n'est pas encore passé cette année, ajuster l'âge
        const adjustedAge = hasBirthdayPassed ? yearsDiff : yearsDiff - 1;
      
        // Vérifier si l'âge est inférieur à 0
        if (adjustedAge < 0) {
          return "Moins d'un an";
        }
      
        return adjustedAge;
      };
  return (
    <>
    <Dialog>
                            <DialogTrigger asChild>
                                <Button className="btn btn-primary border-transparent bg-ac hover:bg-transparent hover:border-ac hover:border hover:text-ac">plus d&apos;info</Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[50%]">
                            <DialogHeader>
                            <DialogTitle className="text-center text-[2em]">{animal.nom}</DialogTitle>
                            </DialogHeader>
                                <div className="flex flex-col lg:flex-row gap-2 ">
                                    <div className="flex justify-center max-h-[90%] w-full ">
                                    
                                        <div className="carousel w-full">
                                            {
                                            animal.image.map((img, index) => (
                                                <div id={`slide${index}`} className="carousel-item relative w-full" key={img.id}>
                                                    <Image priority="priority" width={600} height={600} src={img.img} alt={img.id} className="w-full" />
                                                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                                    <a href={`#slide${index === 0 ? animal.image.length - 1 : index - 1}`} className="btn btn-circle">❮</a> 
                                                    <a href={`#slide${index === animal.image.length - 1 ? 0 : index + 1}`} className="btn btn-circle">❯</a>
                                                    </div>
                                                </div> 
                                            ))
                                            }
                                        </div>
                                    {/* <Image priority="priority" src={animal.image[0].img} width={600} height={600} alt={animal.image[0].id} /> */}
                                    </div>
                                    <div className="w-full ">
                                        <div className="flex flex-col items-center lg:items-start h-full text-sec gap-2">
                                            <div className="flex">
                                                <p className=" text-[1.1em]"><span className=" text-[1.5em] pr-2">Race :</span>{animal.race.nom}</p>
                                            </div>

                                            <div className="flex">
                                                <p className="self text-[1.1em]"><span className=" text-[1.5em] pr-2">Age : </span>
                                                {
                                                currentAnimal !== animal ? (
                                                    <>
                                                    {
                                                        calculateAge(animal.naissance) === 0 ? (
                                                        <span>moins d&apos;un an</span>
                                                        ) : (
                                                        <span>{calculateAge(animal.naissance)} ans</span>
                                                        )
                                                    }
                                                    </>
                                                ) : (
                                                    <span>{age} ans</span>
                                                )
                                                }
                                                </p>
                                            </div>

                                            <div className="flex flex-col items-center lg:items-start">
                                                <span className=" text-[1.5em]">Description : </span><p className=" text-[1.1em]">{animal.descr}</p>
                                            </div>
                                            
                                            
                                        </div>
                                    </div>
                                </div>
                            </DialogContent>
                        </Dialog>
    </>
  )
}

export default DialogAdoption