import Acordion from '@/components/faqAcordion/Acordion'
import Footer from '@/components/partials/Footer'
import Header from '@/components/partials/Header'
import Nav from '@/components/partials/Nav'
import React from 'react'
import { GetFetchFaqs } from '@/utils/fetch/Faq'



const Faq = async () => {
  const {faqs} = await GetFetchFaqs()
  return (
    <>
    <div className='bg-bgL text-txtL min-h-screen'>
      <Header />
      <Nav />
      <div className="flex mx-auto min-h-screen justify-center gap-6 pt-[20%] md:pt-[12%] lg:pt-[0%] pb-[3em] lg:pb-[0px] w-full">
        <div className="flex flex-col w-full gap-6 mx-[15%] md:mx-[10%] lg:mx-[15%] lg:pt-[5%]">
            <div className="flex flex-col h-full gap-6 border-t-[10px] border-[#25CAAC] ">
                <h1 className="lg:text-[2em] text-[1.5em] text-center ">Notre liste de question réponse</h1>
                {
                faqs.map((faq) => (
                  <div className="">

                    <Acordion faqs={faq} />
                  </div>
                ))
                
                }
                
            </div>
        </div>
    </div>
      <Footer />
    </div>
    </>
  )
}

export default Faq