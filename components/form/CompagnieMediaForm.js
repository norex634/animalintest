'use client'
import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

const CompagnieMediaForm = ({data}) => {
    const socials = data.media
    console.log(socials)



    return (
    <>
    <div className="flex flex-col w-[100%]">
        {
            socials.map((social, index) => (
                <div  key={social.nom} className="grid w-full  items-center gap-1.5 pt-4">
                    <Label htmlFor="nom">{social.nom}</Label>
                    <Input type="text" id="nom" placeholder={social.link} defaultValue={`${social.link}`} />
                </div>
            ))
        }
        
    </div>
    </>
  )
}

export default CompagnieMediaForm