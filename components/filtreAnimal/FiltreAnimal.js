'use client'
import React, { useState } from 'react'
import { useRouter,usePathname,useSearchParams } from 'next/navigation'

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  import { Button } from "@/components/ui/button"

const FiltreAnimal = ({race,sexe,type}) => {
  const races = race.races
  const types = type.categoriesAnimaux
  const sexes = sexe.sexes
  
  
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [newType, setNewType] = useState('');
  const [newSexe, setNewSexe] = useState('');
  const [newRace, setNewRace] = useState('');
  const [name, setName] = useState('');

  const handleSelectType = (e) => {
    setNewType(e.target.value);
  }

  const handleSelectSexe = (e) => {
    setNewSexe(e.target.value);
  }

  const handleSelectRace = (e) => {
    setNewRace(e.target.value);
  }

  const handleFilterClick = () => {
    const newSearchParams = new URLSearchParams(searchParams.toString());

    if (newType) {
      newSearchParams.set('type', newType);
    } else {
      newSearchParams.delete('type');
    }

    if (newSexe) {
      newSearchParams.set('sexe', newSexe);
    } else {
      newSearchParams.delete('sexe');
    }

    if (newRace) {
      newSearchParams.set('race', newRace);
    } else {
      newSearchParams.delete('race');
    }

    if (name) {
      newSearchParams.delete('name');
    }

    const newURL = `${pathname}?${newSearchParams.toString()}`;
    router.push(newURL);
  }

  const handleResetFilters = () => {
    const newSearchParams = new URLSearchParams(searchParams.toString());
    newSearchParams.delete('type');
    newSearchParams.delete('sexe');
    newSearchParams.delete('race');
    newSearchParams.delete('name');
    const newURL = `${pathname}?${newSearchParams.toString()}`;
    setNewType('');
    setNewSexe('');
    setNewRace('');
    setName('');
    router.push(newURL);
  }

  const filterName = (e) => {
    const newName = e.target.value;
    
    setName(newName);

    // Filtrer automatiquement en fonction de la saisie de l'utilisateur
    const newSearchParams = new URLSearchParams(searchParams.toString());
    newSearchParams.delete('type');
    newSearchParams.delete('sexe');
    newSearchParams.delete('race');
    if (newName) {
      newSearchParams.set('name', newName);
    } else {
      newSearchParams.delete('name');
    }

    const newURL = `${pathname}?${newSearchParams.toString()}`;
    router.push(newURL);
  }


  return (
    <>
      <div className="flex flex-col text-center gap-2">
        <h1 className="text-[1.5em]"></h1>
        <input type="text" placeholder="Rechercher par nom" className="input input-bordered input-md w-full" onChange={filterName} />
      </div>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className='text-[#28ccac]'>Affiner la recherche ?</AccordionTrigger>
          <AccordionContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
              <div className="flex p-2 w-full">
                <select onChange={handleSelectType} className="select select-bordered w-full max-w-xs" defaultValue="type">
                  <option key="typekey" value="type">Sélectionnez le type</option>
                  {
                    types.map((type) => (
                      
                      <option key={type.id} value={type.nom}>{type.nom}</option>
                      
                    ))
                  }
                </select>
              </div>
              <div className="flex p-2 w-full">
                <select onChange={handleSelectRace} className="select select-bordered w-full max-w-xs" defaultValue="race">
                  <option key="racekey" value="race">Sélectionnez la race</option>
                  {
                    races.map((race) => (
                      
                      <option key={race.id} value={race.nom}>{race.nom}</option>
                      
                    ))
                  }
                </select>
              </div>
              <div className="flex p-2 w-full">
                <select onChange={handleSelectSexe} className="select select-bordered w-full max-w-xs" defaultValue="sexe"> 
                  <option key="sexekey" value="sexe">Sélectionnez le sexe</option>
                  {
                    sexes.map((sexe) => (
                      
                      <option key={sexe.id} value={sexe.nom}>{sexe.nom}</option>
                      
                    ))
                  }
                </select>
              </div>
            </div>
            <div className="col-span-4 lg:col-span-2">
              <div className="flex justify-center gap-2">
                <Button className='bg-ac mt-2 w-[25%]' onClick={handleResetFilters}>
                  Supprimer les filtres
                </Button>
                <Button className='bg-ac mt-2 w-[25%]' onClick={handleFilterClick}>
                  Filtrer
                </Button>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
}

export default FiltreAnimal;