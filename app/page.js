
import React from "react"
import Image from 'next/image'
import Nav from "@/components/partials/Nav"
import { Button } from "@/components/ui/button"
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars,faHandshakeAngle,faGraduationCap,faBook,faBell} from '@fortawesome/free-solid-svg-icons'

import Footer from "@/components/partials/Footer"
import Header from "@/components/partials/Header"
import { GetFetchAnimaux3 } from "@/utils/fetch/Animal3"
import Link from "next/link"
import DialogHome from "@/components/card/DialogHome"

export default async function HomePage() {
    
    const treeLastAnimals = await GetFetchAnimaux3();
    const animaux = treeLastAnimals.animaux;

    

  return (
      <>
      <main className="bg-bg min-h-screen">
        <Header />
        <Nav />
        <div className=" min-h-screen bg-cover bg-no-repeat bg-center lg:bg-[url('https://www.chromethemer.com/download/hd-wallpapers/dog-nose-2560x1440.jpg')] bg-[url('#')] bg-bg"> 
          <div className="flex w-full justify-between p-4 fixed">
  
          </div>
            <div className="hero-content text-left pt-[5em] md:pt-[30vh] lg:pt-[15%] lg:ml-[5em]">
              <div className="md:w-full">
                <h1 className="lg:text-[4em] md:text-[6em] text-[4em] pt-[3em] md:pt-[0.7em] md:text-center lg:text-left  text-center font-bold text-txt">Un meilleur <span className="text-ac">avenir</span></h1>
                <p className=" text-txt text-[1.5em] text-center py-4 lg:text-left">Offrons-leur une seconde chance</p>
              <div className="text-center md:pt-[2em] pt-[6em] lg:text-left">
                <Button className="border-ac bg-transparent text-ac hover:text-white hover:bg-ac" variant="outline">
                  <Link href="/about">Découvrir notre refuge</Link>
                </Button>
                
                  
              </div>
              </div>
            </div>
        </div>

        {/* new animal */}
        
        <div className="flex max-w-screen bg-bgL text-txtL lg:p-[3em] flex-col items-center pb-8 md:pb-14">
          <h1 className="text-[2em] underline text-txtL decoration-ac pt-6">Nos derniers arrivants</h1>
          {/* card */}
          <div className="grid grid-cols-1 lg:grid-cols-3 mx-[15%] mt-8 lg:gap-8">
          {animaux.map((animal) => (
          <>
            <div className="card h-[90%] bg-base-100 shadow-xl">
              <figure>
              <Image priority="priority" src={animal.image[0].img} width={600} height={600} alt={animal.image[0].id} />
                
              </figure>
                <div className="card-body text-sec">
                  <h2 className="card-title">{animal.nom}</h2>
                  <p>{animal.descrShort}</p>
                  <div className="card-actions justify-end">
                    <DialogHome animal={animal} />
                  </div>
                </div>
            </div>
          </>
        ))}  
          {/* fermeture de la card */}
          </div>
          
          <Button className="border-ac w-[70%] lg:w-[20%] bg-ac hover:bg-transparent text-txt hover:text-ac " variant="outline">
          <Link href="/adoption">Voir tous nos colocataires</Link></Button>
        </div>

      <div className="flex-col max-w-screen px-[5em] pt-[2em] pb-[3em] bg-bg2">
        <div className="text-txt text-center">
          <h1 className="text-[2em] text-ac">Nos actions</h1>
          <p className="mt-3">Depuis 1972, nous œuvrons quotidiennement à améliorer le bien-être animal. Des actions concrètes et nombreuses sont entreprises pour défendre leurs intérêts.</p>
        </div>
        <div className="flex lg:flex-row lg:justify-center gap-8 mt-6 flex-col items-center">
          <div className="lg:w-[15%] lg:min-h-[260px] w-[80%] md:w-[80%] group border border-txt hover:border-ac rounded-[1em] text-center text-txt p-4">
            <FontAwesomeIcon className="text-[5em] group-hover:text-ac" icon={faHandshakeAngle} />
            <h1 className="text-[1.2em] text-center pb-4 mt-4">Sauvetages</h1>
            <p className="text-[0.8em] text-center">Notre association prend en charge chaque année plusieurs centaines d`&apos;`animaux.</p>
          </div>
          <div className="lg:w-[15%] w-[80%] md:w-[80%] lg:min-h-[260px] group border border-txt hover:border-ac rounded-[1em] text-center text-txt p-4">
            <FontAwesomeIcon className="text-[5em] group-hover:text-ac" icon={faGraduationCap} />
            <h1 className="text-[1.2em] text-center pb-4 mt-4">Education</h1>
            <p className="text-[0.8em] text-center">Nous promouvons l`&apos;`animal dans la société à travers l`&apos;`éducation et la sensibilisation.</p>
          </div>
          <div className="lg:w-[15%] w-[80%] md:w-[80%] lg:min-h-[260px] group border border-txt hover:border-ac rounded-[1em] text-center text-txt p-4">
            <FontAwesomeIcon className="text-[5em] group-hover:text-ac" icon={faBook} />
            <h1 className="text-[1.2em] text-center pb-4 mt-4">Législation</h1>
            <p className="text-[0.8em] text-center">Nous faisons pression sur le politique pour faire évoluer les législations.</p>
          </div>
          <div className="lg:w-[15%] w-[80%] md:w-[80%] lg:min-h-[260px] group border border-txt hover:border-ac rounded-[1em] text-center text-txt p-4">
            <FontAwesomeIcon className="text-[5em] group-hover:text-ac" icon={faBell} />
            <h1 className="text-[1.2em] text-center pb-4 mt-4">Maltraitance</h1>
            <p className="text-[0.8em] text-center">Nous effectuons plus de 1.000 contrôles par an pour répondre à la maltraitance animale.
            </p>
          </div>
        </div>
      </div>
    {/* footer */}
    <Footer />
  </main>
</>
  )
}
