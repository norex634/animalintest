'use client'
import React, {useState} from 'react'
import Footer from '@/components/partials/Footer'
import Header from '@/components/partials/Header'
import Nav from '@/components/partials/Nav'
import { PostContact } from '@/utils/fetch/ContactEmail'

import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const Contact = () => {
const [email, setEmail] = useState('')
const [nom, setNom] = useState('')
const [message, setMessage] = useState('')
async function onsubmit() {
    if (email && message && nom) {
        const data = { email: email, message: message, nom : nom };
        await PostContact(data);
        setEmail('');
        setMessage('');
        setNom('');
    } else {
      alert("Veuillez remplir tous les champs");
    }
  }
  return (
    <>
    <div className='bg-bgL min-h-screen text-txtL'>
      <Header />
      <Nav />
      <div className="flex mx-auto min-h-screen justify-center gap-6 pt-[20%] md:pt-[12%] lg:pt-[0%] pb-[3em] lg:pb-[0px] ">
        <div className="mx-[15%] w-full lg:pt-[5%] pb-8">
            
            <div className="flex flex-col items-center text-txtL">
                <div className="flex border-t-[5px] justify-center border-ac w-full">
                    <h1 className='text-[2em] pt-2'>Envie de nous contacter ? </h1>
                </div>
                <div className="flex flex-col lg:flex-row gap-2 w-full lg:mt-[2em] pt-4 lg:pt-[4em]">
                    <div className="flex flex-col w-full items-center lg:items-start ">
                        
                        <div className="grid gap-4 grid-cols-2  w-full lg:w-[80%] p-4 bg-bg2 rounded-xl">
                            <div className="grid w-full items-center gap-1.5">
                                
                                <Input onChange={(event) => setNom(event.target.value)} type="text" id="nom" placeholder="Nom" />
                            </div>
                            <div className="grid w-full items-center gap-1.5 ">
                                
                                <Input onChange={(event) => setEmail(event.target.value)} type="email" id="email" placeholder="Email" />
                            </div>
                            <div className="col-span-2 ">
                                <Textarea onChange={(event) => setMessage(event.target.value)} placeholder="Type your message here." className="w-full min-h-[200px] " />
                            </div>
                            <div className="col-span-2">
                                <Button onClick={onsubmit} className="w-full bg-ac hover:bg-ac ">Envoyer</Button>
                            </div>
                        </div>

                        <div className="flex pt-[2em] lg:w-[80%] gap-10 ">
                            <div className="flex w-full  flex-col lg:flex-row lg:justify-between items-center gap-4 ">
                                <div className="flex flex-col lg:w-[30%]">
                                    <div className="flex justify-start border-b-[4px] border-ac">
                                        <div className="flex justify-start w-full">
                                            <h1 className='text-[1.5em] font-bold'>Mail & Tél</h1>
                                        </div>
                                    </div>

                                    <div className="flex justify-start w-full pt-2">
                                        <div className="flex flex-col gap-2">
                                            <span>081 / 30 50 80</span>
                                            <span>info@animalin.be</span>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="flex flex-col lg:w-[30%]">
                                    <div className="flex justify-start border-b-[4px] border-ac">
                                        <div className="flex justify-center w-full">
                                            <h1 className='text-[1.5em] font-bold'>ADRESSE</h1>
                                        </div>
                                    </div>
                                
                                    <div className="flex justify-center w-full pt-2">
                                        <div className="flex flex-col">
                                            <span>Chaussée de l'animal 68,</span>
                                            <span>1000 Bruxelles</span>
                                        </div>
                                        
                                    </div>
                                </div>
                                
                                <div className="flex flex-col lg:w-[30%]">
                                    <div className="flex justify-start border-b-[4px] border-ac">
                                        <div className="flex justify-end w-full">
                                            <h1 className='text-[1.5em] font-bold'>NOUS SUIVRE</h1>
                                        </div>
                                    </div>
                                
                                    <div className="flex lg:justify-end justify-center w-full pt-2">
                                        <div className="flex gap-2">
                                            <span className='w-10 h-10 bg-ac'></span>
                                            <span className='w-10 h-10 bg-ac'></span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col lg:w-[30%] pt-8">
                        <div className="flex flex-col gap-10">

                        <div className="flex flex-col">
                                <div className="flex justify-start border-b-[4px] border-ac">
                                    <div className="flex justify-start w-full">
                                        <h1 className='text-[1em] font-bold'>HORAIRES</h1>
                                    </div>
                                </div>
                                    
                                <div className="flex justify-start w-full pt-2">
                                    <div className="flex gap-2">
                                        <span className='flex flex-col gap-2'> 
                                            <p><span>Lundi : de<span className='font-bold'> 9H à 17H</span> </span></p>
                                            <p><span>Mardi : de<span className='font-bold'> 9H à 19H</span></span></p>
                                            <p><span>Mercredi : de<span className='font-bold'> 9H à 19H</span></span></p>
                                            <p><span>Jeudi : de<span className='font-bold'> 9H à 19H</span></span></p>
                                            <p><span>Vendredi : de<span className='font-bold'> 9H à 19H</span></span></p>
                                            <p><span>Samedi : <span className='font-bold'> 10H à 15H</span></span></p>
                                            <p><span>Dimanche : <span className='font-bold'> FERMER</span></span></p>
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col ">
                                <div className="flex justify-start border-b-[4px] border-ac">
                                    <div className="flex justify-start w-full">
                                        <h1 className='text-[1em] font-bold'>CONTACTER LE SERVICE BIEN-ÊTRE ANIMAL</h1>
                                    </div>
                                </div>
                                    
                                <div className="flex justify-end w-full pt-2">
                                    <div className="flex gap-2">
                                        <span className=''> 
                                            Pour signaler un cas de maltraitance ou de négligence animale: sba@animalin.be.
                                            Veuillez être le plus complet possible et indiquer les coordonnées exactes du propriétaire. Anonymat garanti.
                                            Vous pouvez également consulter la rubrique FAQ pour plus d'informations.
                                        </span>
                                    </div>
                                </div>
                            </div>
                            

                            <div className="flex flex-col">
                                <div className="flex justify-start border-b-[4px] border-ac">
                                    <div className="flex justify-start w-full">
                                        <h1 className='text-[1em] font-bold'>CONTACTER LE SECRÉTARIAT</h1>
                                    </div>
                                </div>
                                    
                                <div className="flex justify-end w-full pt-2">
                                    <div className="flex gap-2">
                                        <span className=''> 
                                        Pour toutes questions administratives, parrainages, changement de coordonnées, évènementiel..., vous pouvez contacter le secrétariat du refuge par mail à secretariat@animalin.be
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col">
                                <div className="flex justify-start border-b-[4px] border-ac">
                                    <div className="flex justify-start w-full">
                                        <h1 className='text-[1em] font-bold'>CONTACTER LA DIRECTION</h1>
                                    </div>
                                </div>
                                    
                                <div className="flex justify-end w-full pt-2">
                                    <div className="flex gap-2">
                                        <span className=''> 
                                        Contact presse, dons et successions, sponsoring, plainte..., vous pouvez contacter la Direction par mail à media@animalin.be
                                        </span>
                                    </div>
                                </div>
                            </div>
                            

                        </div>

                        

                        
                    </div>
                </div>
            </div>

            
        </div>
    </div>
      <Footer />
    </div>
    </>
  )
}

export default Contact