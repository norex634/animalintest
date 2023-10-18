import React from 'react'
import { GetFetchCompagnie1 } from '@/utils/fetch/Compagnie';

import Image from 'next/image'
// import { DataTable } from '@/components/elements/table/DataTable'
// import { columns } from '@/components/elements/table/Columns'

const page = async () => {
  
  const {compagnie} = await GetFetchCompagnie1();
  
  
  return (
    <div className='w-full bg-slate-100 p-4'>

      <h1>Compagnie : </h1>
      <p><span>nom : {compagnie.nom}</span></p>
      <p><span>logo : <Image  width={100} height={100} src={""} alt="" /></span></p>
      <p><span>slogan : {compagnie.slogan}</span></p>
      <p><span>tel : {compagnie.tel}</span></p>
      <p><span>lieu : {compagnie.lieu}</span></p>
      <p><span>email : {compagnie.email}</span></p>
      
      </div>
  )
}

export default page