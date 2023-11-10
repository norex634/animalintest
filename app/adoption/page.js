
import React from "react"
import { Button } from "@/components/ui/button"


import {FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars,faHandshakeAngle,faGraduationCap,faBook,faBell} from '@fortawesome/free-solid-svg-icons'
import Nav from "@/components/partials/Nav"
import Header from "@/components/partials/Header"
import Footer from "@/components/partials/Footer"
import Image from "next/image"
import FiltreAnimal from "@/components/filtreAnimal/FiltreAnimal"
import {GetFetchAnimaux} from "@/utils/fetch/Animal"
import {GetFetchRaces} from "@/utils/fetch/Race"
import {GetFetchSexes} from "@/utils/fetch/Sexe"
import {GetFetchCategorieAnimaux} from "@/utils/fetch/CategorieAnimal"
import MoreAnimals from "@/components/filtreAnimal/MoreAnimals"
import DialogAdoption from "@/components/card/DialogAdoption"


export default async function HomePage({
    // params 
    searchParams,
}){
    const page = typeof searchParams.page === 'string' ? Number(searchParams.page) : 1
    const limit = typeof searchParams.limit === 'string' ? Number(searchParams.limit) : 8
    // const search = typeof searchParams.search === 'string' ? searchParams.search : undefined

    const type = searchParams?.type
    const sexe = searchParams?.sexe
    const race = searchParams?.race
    
    const name = searchParams?.name
    const allAnimaux = await GetFetchAnimaux({
        type: type,
        sexe: sexe,
        race: race,
        name: name,
        page: page,
        limit: limit,
        // search: search,
    });
    const fetchAnimaux = allAnimaux.animaux

    const allRace = await GetFetchRaces();
    const allSexe = await GetFetchSexes();
    const allType = await GetFetchCategorieAnimaux();

  return (
  <>
    <div className="flex flex-col min-h-screen text-txtL bg-bgL">
    <Header/>
    <Nav/>
        <div className="flex min-h-full">
            <div className="flex flex-col w-full min-h-screen pt-[20%] lg:pt-[5%] px-[15%]">
                <div className="flex flex-col w-full">
                        <FiltreAnimal race={allRace} sexe={allSexe} type={allType} />
                </div>
            <div className="grid grid-cols-1">
                {fetchAnimaux?.length === 0 ? (
                    <div className="grid place-items-center h-[60vh] ">
                        <p className="text-[2em]">Désolé nous n'avons pas trouvé d'animal avec cette recherche</p>
                    </div> 
                ) : ( 
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 mt-8 "> 
                {fetchAnimaux.map((animal) => ( 
                    <div className="card card-compact h-[90%] bg-base-100 shadow-xl " key={animal.id}>
                        <figure>
                            <Image priority="priority" src={animal.image[0].img} width={600} height={600} alt={animal.image[0].id} />
                        </figure>
                    <div className="card-body ">
                        <h2 className="card-title">{animal.nom.length > 15 ? `${animal.nom.substring(0, 15)}...` : animal.nom}</h2>
                        <p>{animal.descrShort}</p>
                    <div className="card-actions justify-end "> 
                        <DialogAdoption animal={animal} />
                    </div>
                    </div>
                    </div>
                ))}
            </div>
                )}
            </div>
            </div>
        </div>
        <Footer/>
    </div>
  </> 
)}
