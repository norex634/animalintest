'use client'
import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  import { Button } from "@/components/ui/button"
  import Image from 'next/image'

const DialogHome = (
{animal}
) => {
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
<Dialog className="">
                      <DialogTrigger className="btn bg-ac text-txt">Open</DialogTrigger>
                      <DialogContent className="lg:min-w-[54%] min-w-[90%] bg-txt ">
                      <DialogHeader>
                      <DialogTitle className="text-center mb-4">{animal.nom}</DialogTitle>
                      <DialogDescription className="text-sec ">
                        <div className="flex flex-col lg:flex-row gap-4 items-center">
                          <div className="lg:w-[20vw]">
                          <div className="carousel w-full">
                            {
                              animal.image.map((img, index) => (
                                <div id={`slide${index}`} className="carousel-item relative w-full" key={img.id}>
                                    <img src={img.img} className="w-full" />
                                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href={`#slide${index === 0 ? animal.image.length - 1 : index - 1}`} className="btn btn-circle">❮</a> 
                                    <a href={`#slide${index === animal.image.length - 1 ? 0 : index + 1}`} className="btn btn-circle">❯</a>
                                    </div>
                                </div> 
                              ))
                            }
                            </div>
                          </div>
                          <div className="lg:w-[30vw] flex flex-col lg:flex-col gap-2">
                            <div className="flex flex-row gap-2">
                              <p><span className="text-[1.5em]">{animal.nom}</span></p>
                              <p><span className="text-[1.5em]"></span > {animal.race.nom}</p>
                            </div>
                            <div className="flex flex-row gap-2">
                              <p><span className="text-[1.5em]">{animal.sexe.nom}</span> <span>{
                                                currentAnimal !== animal ? (
                                                    <>
                                                    {
                                                        calculateAge(animal.naissance) === 0 ? (
                                                        <span> de moins d'un an</span>
                                                        ) : (
                                                        <span> de {calculateAge(animal.naissance)} ans</span>
                                                        )
                                                    }
                                                    </>
                                                ) : (
                                                    <span>{age} ans</span>
                                                )
                                                }</span></p>
                            </div>
                            <div className="w-full">
                            <p>
                              {animal.descr}
                            </p>
                            </div>
                          </div>
                        </div>
                      </DialogDescription>
                      </DialogHeader>
                      </DialogContent>
                      </Dialog>
    </>
  )
}

export default DialogHome