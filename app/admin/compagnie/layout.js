import SideAdmin from "@/components/partials/SideAdmin";
import { GetFetchCompagnie1 } from '@/utils/fetch/Compagnie';
// import React, { useEffect, useState } from 'react';


 
const Layoutside = async ({info,horaire,social} ) => {
  return (
    <>
      <main className="flex min-h-screen w-full">
      {info}
      <div className="flex flex-col w-[80%]">
      {horaire}
      {social}
      </div>
      
        </main>
    </>
  )
}

export default Layoutside