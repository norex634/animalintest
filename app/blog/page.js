import Footer from '@/components/partials/Footer'
import Header from '@/components/partials/Header'
import Nav from '@/components/partials/Nav'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const Blog = () => {
  return (
    <>
    <Header/>
    <Nav/>
    <div className="flex flex-col min-h-screen px-[4em] pt-[6em] lg:px-[8em] bg-txt">
        <div className="flex border border-t-[10px] border-[#25CAAC]"></div>
        <h1 className='text-[1.5em] text-center'>Nos dernière nouvelles</h1>
        <div className="flex flex-col pt-[1.5em] gap-4 lg:w-[50%] lg:mx-auto">
            

             {/* Card */}
<div className="relative flex w-full border border-t rounded bg-bg2 text-white">
    <div className="flex flex-col w-full p-[1em] gap-2">
        <div className="flex gap-2">
            <Image className='w-5 ' width={20} height={20} src="/logo.png" alt="" />
            <h1 className='underline decoration-ac font-bold text-[1em]'>Animalin</h1>
        </div>
        <div className="flex flex-col">
            <h1 className="text-[1.3em] text-center">Porte Ouverte</h1>
            <div className="flex flex-col gap-2 pt-[1em] text-center">
                <p className="text-[0.8em]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat labore ipsam itaque, amet ullam expedita sapiente a laudantium minima doloremque quod maiores quia consequatur nemo aliquid! Error voluptate est perferendis? Omnis doloremque, quibusdam vel beatae dignissimos architecto deserunt nesciunt, quaerat ut repellat fuga reprehenderit dolor ipsa cum perspiciatis a quod delectus molestiae consectetur. Quis facere at quidem inventore, doloremque beatae!</p>
            </div>
        </div>
        <div className="absolute bottom-0 right-0 p-[1em]">
            <p className='self-end'> le : 12 / 08 / 2023</p>
        </div>
        <div className="flex justify-center p-[1em] pb-8 md:pb-0 ">
            <Button className="bg-ac w-[50%] hover:bg-txt hover:text-ac">More Info</Button>
        </div>
    </div>
</div>
           

  {/* Card */}
<div className="relative flex w-full border border-t rounded bg-bg2 text-white">
    <div className="flex flex-col w-full p-[1em] gap-2">
        <div className="flex gap-2">
            <Image className='w-5 ' width={20} height={20} src="/logo.png" alt="" />
            <h1 className='underline decoration-ac font-bold text-[1em]'>Animalin</h1>
        </div>
        <div className="flex flex-col">
            <h1 className="text-[1.3em] text-center">Porte Ouverte</h1>
            <div className="flex flex-col gap-2 pt-[1em] text-center">
                <p className="text-[0.8em]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat labore ipsam itaque, amet ullam expedita sapiente a laudantium minima doloremque quod maiores quia consequatur nemo aliquid! Error voluptate est perferendis? Omnis doloremque, quibusdam vel beatae dignissimos architecto deserunt nesciunt, quaerat ut repellat fuga reprehenderit dolor ipsa cum perspiciatis a quod delectus molestiae consectetur. Quis facere at quidem inventore, doloremque beatae!</p>
            </div>
        </div>
        <div className="absolute bottom-0 right-0 p-[1em]">
            <p className='self-end'> le : 12 / 08 / 2023</p>
        </div>
        <div className="flex justify-center p-[1em] pb-8 md:pb-0 ">
            <Button className="bg-ac w-[50%] hover:bg-txt hover:text-ac">More Info</Button>
        </div>
    </div>
</div>


 {/* Card */}
 <div className="relative flex w-full border border-t rounded bg-bg2 text-white">
    <div className="flex flex-col w-full p-[1em] gap-2">
        <div className="flex gap-2">
            <img className='w-5 ' src="/logo.png" width={20} height={20}  alt="" />
            <h1 className='underline decoration-ac font-bold text-[1em]'>Animalin</h1>
        </div>
        <div className="flex flex-col">
            <h1 className="text-[1.3em] text-center">Porte Ouverte</h1>
            <div className="flex flex-col gap-2 pt-[1em] text-center">
                <p className="text-[0.8em]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat labore ipsam itaque, amet ullam expedita sapiente a laudantium minima doloremque quod maiores quia consequatur nemo aliquid! Error voluptate est perferendis? Omnis doloremque, quibusdam vel beatae dignissimos architecto deserunt nesciunt, quaerat ut repellat fuga reprehenderit dolor ipsa cum perspiciatis a quod delectus molestiae consectetur. Quis facere at quidem inventore, doloremque beatae!</p>
            </div>
        </div>
        <div className="absolute bottom-0 right-0 p-[1em]">
            <p className='self-end'> le : 12 / 08 / 2023</p>
        </div>
        <div className="flex justify-center p-[1em] pb-8 md:pb-0 ">
            <Button className="bg-ac w-[50%] hover:bg-txt hover:text-ac">More Info</Button>
        </div>
    </div>
</div>


        </div>
    </div>
    <Footer/>
    </>
  )
}

export default Blog