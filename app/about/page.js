import React from 'react'
import Image from 'next/image'
// nav
import Nav from '@/components/partials/Nav' 
import Footer from '@/components/partials/Footer'
import Header from '@/components/partials/Header'

const About = () => {
  return (
    
    <div className='bg-txt min-h-screen'>
      <Header />
      <Nav />
      <div className="flex mx-auto min-h-screen items-center justify-center gap-6 pt-[20%] md:pt-[12%] lg:pt-[0%] pb-[3em] lg:pb-[0px]">
        <div className="flex flex-col px-[15%] gap-6 ">
            <div className="flex flex-col h-full gap-6 border-t-[10px] border-[#25CAAC] ">
                <h1 className="lg:text-[2em] text-[1.5em]">Protection animale et refuges en Belgique</h1>
                <div className="flex flex-col lg:flex-row gap-6">
                    <Image className="min-w-[40%] min-h-[30%]" src="https://ds.static.rtbf.be/article/image/770x770/7/f/8/ec93ca97659bfc5d22285fad975f26af-1642412505.jpg" width={500} height={100} alt='about'></Image>
                    <div className="flex flex-col gap-4 lg:text-[1.5em] md:text-[1.2em]">
                        <p>
                            <span className="text-[#25CAAC] underline decoration-[#25CAAC]">Animalin</span> agit d`&apos;`une part en proposant des initiatives et des actions de sensibilisation positives et, d`&apos;`autre part, en gérant deux refuges pour chiens et chats trouvés, maltraités ou abandonnés, qui ne pratiquent pas l`&apos;`euthanasie.
                        </p>
                        <p>
                            Chaque année, ce sont plus de <span className="text-[#25CAAC] underline decoration-[#25CAAC]">1 800 animaux</span> qui sont sauvés par le refuge et plus d`&apos;`une dizaine d`&apos;`évènements ou de campagnes qui sont réalisés. Le refuge héberge et soigne en permanence environ 300 chiens et chats. Notre association possède un réseau de membres de plus de 3 500 personnes et ne perçoit aucune subvention pour sa gestion quotidienne. Son budget annuel dépasse 800 000 euros.
                        </p>
                        <p>
                            Fondée en 1972, l`&apos;`asbl Animalin est basée en Région Wallonne (Brabant wallon). Notre association a pour fondement l`&apos;`amélioration de la relation entre l`&apos;`homme et l`&apos;`animal, tout en tenant compte de leur <span className="text-[#25CAAC] underline decoration-[#25CAAC]">bien-être</span> réciproque et de la place de l`&apos;`animal dans la société.
                        </p>


                    </div>
                </div>
            </div>
        </div>
    </div>
      <Footer />
    </div>
  )
}

export default About