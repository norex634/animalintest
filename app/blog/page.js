import Footer from '@/components/partials/Footer'
import Header from '@/components/partials/Header'
import Nav from '@/components/partials/Nav'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

import { GetFetchActus } from '@/utils/fetch/Actu'
import DialogBlog from '@/components/card/DialogBlog'

const Blog = async () => {
    const {actus}  = await GetFetchActus();
    // console.log(actus);

    const rawDate = '2023-10-20T23:46:53.000Z';
    const formattedDate = new Date(rawDate).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
    });
  return (
    <>
    <Header/>
    <Nav/>
    <div className="flex flex-col min-h-screen px-[4em] pt-[6em] lg:px-[8em] bg-bgL">
        <div className="flex border border-t-[10px] border-[#25CAAC]"></div>
        <h1 className='text-[1.5em] text-center text-txtL'>Nos dernières nouvelles</h1>
        <div className="flex flex-col pt-[1.5em] gap-4 lg:w-[50%] lg:mx-auto pb-8">
            
        {
            actus.map((actu) => (
                <>
                {/* Card */}
<div className="relative flex w-full border border-t rounded bg-bg2 text-white">
    <div className="flex flex-col w-full p-[1em] gap-2">
        <div className="flex gap-2">
            <Image className='w-5 ' width={20} height={20} src="/logo.png" alt="" />
            <h1 className='underline decoration-ac font-bold text-[1em]'>Animalin</h1>
        </div>
        <div className="flex flex-col">
            <h1 className="text-[1.3em] text-center">{actu.titre}</h1>
            <div className="flex flex-col gap-2 pt-[1em] text-center">
                <p className="text-[0.8em]">{actu.descr}</p>
            </div>
        </div>
        <div className="absolute bottom-0 right-0 p-[1em]">
        <p className='self-end'>Le {new Date(actu.date).toLocaleDateString('en-US', {
            day: 'numeric',
            month: 'numeric',
            year: 'numeric',
})}</p>
        </div>
        <div className="absolute top-0 right-0 p-[1em]">
        <p className='self-end'>{actu.categorie.nom}</p>
        </div>
        <div className="flex justify-center p-[1em] pb-8 md:pb-0 ">
        
        <DialogBlog actu={actu}/>

        </div>
    </div>
</div>
                </>
        ))}
             
           

  


        </div>
    </div>
    <Footer/>
    </>
  )
}

export default Blog