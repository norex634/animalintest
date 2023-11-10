'use client'
import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import Link from 'next/link'

const Acordion = (faq) => {
    const MaFaq = faq.faqs
    // console.log(MaFaq)
  return (
  
<Accordion  type="single" collapsible>
  <AccordionItem key={`item-${MaFaq.id}`} value="item-1">
    <AccordionTrigger className="text-[1em] text-left" key={`trigger-${MaFaq.id}`} >{MaFaq.question}</AccordionTrigger>
    <AccordionContent key={`content-${MaFaq.id}`} className="max-w-full ">
    {MaFaq.reponse && <span>{MaFaq.reponse}</span>}
    {MaFaq.link && MaFaq.link !== 'Link' && <span><Link className='text-ac' href={MaFaq.link}> Plus d&apos;informations ici</Link></span>}
    </AccordionContent>
  </AccordionItem>
</Accordion>
    
  )
}

export default Acordion