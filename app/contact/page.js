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
                            <div className="flex w-full flex-col lg:flex-row lg:justify-between  gap-4 ">
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
                                        <div className="flex justify-start lg:justify-center w-full">
                                            <h1 className='text-[1.5em] font-bold'>ADRESSE</h1>
                                        </div>
                                    </div>
                                
                                    <div className="flex justify-center w-full pt-2">
                                        <div className="flex flex-col">
                                            <span>Chaussée de l&apos;animal 68,</span>
                                            <span>1000 Bruxelles</span>
                                        </div>
                                        
                                    </div>
                                </div>
                                
                                <div className="flex flex-col lg:w-[30%]">
                                    <div className="flex justify-start border-b-[4px] border-ac">
                                        <div className="flex justify-start lg:justify-end w-full">
                                            <h1 className='text-[1.5em] font-bold'>NOUS SUIVRE</h1>
                                        </div>
                                    </div>
                                
                                    <div className="flex lg:justify-end justify-center w-full ">
                                        <div className="flex ">
                                            <span className='text-ac'><svg xmlns="http://www.w3.org/2000/svg" width="30" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></span>
                                            <span className='text-ac'><svg xmlns="http://www.w3.org/2000/svg" width="30" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></span>
                                            <span className='text-ac'><svg xmlns="http://www.w3.org/2000/svg" width="30" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></span>
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
                                            Vous pouvez également consulter la rubrique FAQ pour plus d&apos;informations.
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