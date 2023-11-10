'use client'
import React from 'react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { Button } from "@/components/ui/button"

const CompagnieForm = ({data}) => {
    const horaire = data
    const horaires = horaire.horaire
    // console.log(horaires)
    
  return (
    <>
      <div className="flex flex-col w-[100%]">
        {data.horaire.map((horaire) => {
          // Extraction de l'heure et des minutes de horaire.h1
          const heureMinuteH1 = horaire.h1.slice(11, 16);

          // Extraction de l'heure et des minutes de horaire.h2
          const heureMinuteH2 = horaire.h2.slice(11, 16);

          return (
            <div key={horaire.jour} className="grid w-[100%] grid-cols-3 items-center pt-2">
              <div>
                <Label htmlFor="nom">{horaire.jour}</Label>
              </div>

              <div key={`${horaire.jour}${horaire.h1}1`}>
                <Input type="text" id="nom" placeholder={`${horaire.h1}`} defaultValue={`${heureMinuteH1}`} />
              </div>

              <div key={`${horaire.jour}${horaire.h2}2`}>
                <Input type="text" id="nom2" placeholder={horaire.h2} defaultValue={`${heureMinuteH2}`} />
              </div>
            </div>
          );
        })}
      </div>
    </>
  )
}

export default CompagnieForm