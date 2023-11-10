import React from 'react'

import CompagnieForm from '@/components/form/CompagnieForm';
import CompagnieMediaForm from '@/components/form/CompagnieMediaForm';
import CompagnieHoraireForm from '@/components/form/CompagnieHoraireForm';
import { GetFetchCompagnie1 } from '@/utils/fetch/Compagnie';
import { GetFetchHoraire } from '@/utils/fetch/Horaire';
import { GetFetchMedia } from '@/utils/fetch/Media';

const compagniePage = async () => {
  const horaire = await GetFetchHoraire()
  const media = await GetFetchMedia()
  const data = await GetFetchCompagnie1()

  return (
    <>
     <div className='w-full flex flex-col justify-center gap-2'>
      <div className="bg-[#ffffff] p-4 rounded-[20px] text-[#222222] shadow-lg" >
      <h1 className="text-[1.5em] font-semibold">Compagnie</h1>
      <div className="flex w-[100%] text-[#222222] gap-12">
        
        <div className="flex w-[100%]">
          <CompagnieForm key="compagnieFormKey" data={data}/>
        </div>

        <div className="flex w-[100%]">
        <CompagnieMediaForm key="compagnieMediaFormKey" data={media}/>
        </div>

        
      </div>
        
      
      </div>

      <div className="bg-[#ffffff] p-4 rounded-[20px] text-[#222222] shadow-lg flex w-[50%]" >
      
      <div className="flex flex-col w-full">
        <div className="flex">Horaire</div>
        <div className="flex ">
        <CompagnieHoraireForm data={horaire}/>
         
        </div>
      </div>
      </div>

    </div>
    </>
  )
}

export default compagniePage