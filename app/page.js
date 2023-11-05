'use client'
import React,{useState,useEffect} from "react"
import Nav from "@/components/partials/Nav"
import { Button } from "@/components/ui/button"
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars,faHandshakeAngle,faGraduationCap,faBook,faBell} from '@fortawesome/free-solid-svg-icons'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import Footer from "@/components/partials/Footer"
import Header from "@/components/partials/Header"
export default function HomePage() {
    //scoll 
    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 0) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

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
                <Button className="border-ac bg-transparent text-ac hover:text-white hover:bg-ac" variant="outline">Découvrir notre refuge</Button>
              </div>
              </div>
            </div>
        </div>

        {/* new animal */}
        <div className="flex max-w-screen bg-txt text-txt lg:p-[3em] flex-col items-center pb-[120px]">
          <h1 className="text-[2em] underline text-[#030707] decoration-ac">Nos derniers Arrivants</h1>
          {/* card */}
          <div className="flex flex-col gap-8 justify-center pt-4 md:flex-col lg:flex-row items-center">
            <div className="card bg-base-100 shadow-xl lg:w-[25%] w-[70%]">
              <figure><img src="https://www.spalalouviere.be/wp-content/uploads/2019/11/272594154_10226572695932574_6645465709592935901_n-820x528.jpg" alt="Shoes" /></figure>
                <div className="card-body text-sec">
                  <h2 className="card-title">Nala</h2>
                  <p>Nala est arrivée au refuge après avoir été trouvée sur la voie publique … </p>
                  <div className="card-actions justify-end">
                    <Dialog className="">
                      <DialogTrigger className="btn bg-ac text-txt">Open</DialogTrigger>
                      <DialogContent className="lg:min-w-[54%] bg-txt ">
                      <DialogHeader>
                      <DialogTitle className="text-center mb-4">Nala</DialogTitle>
                      <DialogDescription className="text-sec ">
                        <div className="flex flex-col lg:flex-row gap-4 items-center">
                          <div className="lg:w-[20vw]">
                          <img src="https://www.spalalouviere.be/wp-content/uploads/2019/11/272594154_10226572695932574_6645465709592935901_n-820x528.jpg" alt="Nala" />
                          </div>
                          <div className="lg:w-[30vw] flex flex-col lg:flex-col gap-2">
                            <div className="flex flex-row gap-2">
                              <p><span className="text-[1.5em]">Nala</span></p>
                              <p><span className="text-[1.5em]"></span > Berger Malinois</p>
                            </div>
                            <div className="flex flex-row gap-2">
                              <p><span className="text-[1.5em]">Femelle</span> <span>de 2 ans</span></p>
                            </div>
                            <div className="w-full">
                            <p>
                              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates quia commodi saepe tempora odit quae cumque sed, iure perspiciatis doloremque, culpa ipsa accusantium 
                            </p>
                            </div>
                          </div>
                        </div>
                      </DialogDescription>
                      </DialogHeader>
                      </DialogContent>
                      </Dialog>
                  </div>
                </div>
            </div>
            {/* card */}
            <div className="card bg-base-100 shadow-xl lg:w-[25%] w-[70%]">
              <figure><img src="https://www.spalalouviere.be/wp-content/uploads/2019/11/272594154_10226572695932574_6645465709592935901_n-820x528.jpg" alt="Shoes" /></figure>
                <div className="card-body text-black">
                  <h2 className="card-title">Nala</h2>
                  <p>Nala est arrivée au refuge après avoir été trouvée sur la voie publique … </p>
                  <div className="card-actions justify-end">
                    <Dialog className="">
                      <DialogTrigger className="btn bg-ac text-white">Open</DialogTrigger>
                      <DialogContent className="lg:min-w-[54%] bg-txt ">
                      <DialogHeader>
                      <DialogTitle className="text-center mb-4">Nala</DialogTitle>
                      <DialogDescription className="text-sec ">
                        <div className="flex flex-col lg:flex-row gap-4 items-center">
                          <div className="lg:w-[20vw]">
                          <img src="https://www.spalalouviere.be/wp-content/uploads/2019/11/272594154_10226572695932574_6645465709592935901_n-820x528.jpg" alt="Nala" />
                          </div>
                          <div className="lg:w-[30vw] flex flex-col lg:flex-col gap-2">
                            <div className="flex flex-row gap-2">
                              <p><span className="text-[1.5em]">Nala</span></p>
                              <p><span className="text-[1.5em]"></span > Berger Malinois</p>
                            </div>
                            <div className="flex flex-row gap-2">
                              <p><span className="text-[1.5em]">Femelle</span> <span>de 2 ans</span></p>
                            </div>
                            <div className="w-full">
                            <p>
                              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates quia commodi saepe tempora odit quae cumque sed, iure perspiciatis doloremque, culpa ipsa accusantium 
                            </p>
                            </div>
                          </div>
                        </div>
                      </DialogDescription>
                      </DialogHeader>
                      </DialogContent>
                      </Dialog>
                  </div>
                </div>
            </div>
            {/* card */}
            <div className="card bg-base-100 shadow-xl lg:w-[25%] w-[70%]">
              <figure><img src="https://www.spalalouviere.be/wp-content/uploads/2019/11/272594154_10226572695932574_6645465709592935901_n-820x528.jpg" alt="Shoes" /></figure>
                <div className="card-body text-black">
                  <h2 className="card-title">Nala</h2>
                  <p>Nala est arrivée au refuge après avoir été trouvée sur la voie publique … </p>
                  <div className="card-actions justify-end">
                    <Dialog className="">
                      <DialogTrigger className="btn bg-ac text-white">Open</DialogTrigger>
                      <DialogContent className="lg:min-w-[54%] bg-[#ffffffa3] ">
                      <DialogHeader>
                      <DialogTitle className="text-center mb-4">Nala</DialogTitle>
                      <DialogDescription className="text-[#222222] ">
                        <div className="flex flex-col lg:flex-row gap-4 items-center">
                          <div className="lg:w-[20vw]">
                          <img src="https://www.spalalouviere.be/wp-content/uploads/2019/11/272594154_10226572695932574_6645465709592935901_n-820x528.jpg" alt="Nala" />
                          </div>
                          <div className="lg:w-[30vw] flex flex-col lg:flex-col gap-2">
                            <div className="flex flex-row gap-2">
                              <p><span className="text-[1.5em]">Nala</span></p>
                              <p><span className="text-[1.5em]"></span > Berger Malinois</p>
                            </div>
                            <div className="flex flex-row gap-2">
                              <p><span className="text-[1.5em]">Femelle</span> <span>de 2 ans</span></p>
                            </div>
                            <div className="w-full">
                            <p>
                              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates quia commodi saepe tempora odit quae cumque sed, iure perspiciatis doloremque, culpa ipsa accusantium 
                            </p>
                            </div>
                          </div>
                        </div>
                      </DialogDescription>
                      </DialogHeader>
                      </DialogContent>
                      </Dialog>
                  </div>
                </div>
            </div>
            
          {/* fermeture card */}
          </div>
          <Button className="border-ac bg-ac hover:bg-transparent text-txt hover:text-ac  mt-10" variant="outline">Voir tous nos colocataire</Button>
        </div>

      <div className="flex-col max-w-screen px-[5em] pt-[2em] pb-[3em] bg-bg">
        <div className="text-txt text-center">
          <h1 className="text-[2em] text-ac">Nos actions</h1>
          <p className="mt-3">Depuis 1972, nous travaillons au quotidien pour améliorer le bien-être animal.
          Des actions concrètes et nombreuses pour défendre leur intérêts.</p>
        </div>
        <div className="flex lg:flex-row lg:justify-center gap-8 mt-6 flex-col items-center">
          <div className="lg:w-[15%] lg:min-h-[260px] w-[80%] md:w-[80%] group border border-txt hover:border-ac rounded-[1em] text-center text-txt p-4">
            <FontAwesomeIcon className="text-[5em] group-hover:text-ac" icon={faHandshakeAngle} />
            <h1 className="text-[1.2em] text-center pb-4 mt-4">Sauvetages</h1>
            <p className="text-[0.8em] text-center">Notre association prend en charge chaque année plusieurs centaines d'animaux.</p>
          </div>
          <div className="lg:w-[15%] w-[80%] md:w-[80%] lg:min-h-[260px] group border border-txt hover:border-ac rounded-[1em] text-center text-txt p-4">
            <FontAwesomeIcon className="text-[5em] group-hover:text-ac" icon={faGraduationCap} />
            <h1 className="text-[1.2em] text-center pb-4 mt-4">Education</h1>
            <p className="text-[0.8em] text-center">Nous promouvons l'animal dans la société à travers l'éducation et la sensibilisation.</p>
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
