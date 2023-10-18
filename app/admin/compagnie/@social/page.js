import React from 'react'
import { GetFetchCompagnie1 } from '@/utils/fetch/Compagnie';


const compagnies = await GetFetchCompagnie1();

const page = () => {
  return (
    <div className='w-full h-[50%] bg-slate-800 p-4'>
      <h1>Nom de la compagnie : {compagnies.nom}</h1>
      <h1>Social : </h1>
      {compagnies.social.map((social)=> (
        <div key={social.id}>
          <p><span>nom : {social.nom}</span></p>
          <p><span>link : {social.link}</span></p>
        </div>
      ))}

    </div>
  )
}

export default page