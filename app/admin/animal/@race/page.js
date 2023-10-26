import { Columns } from '@/components/table/ColumnsRace'
import { DataTable } from '@/components/table/DataTableRace'
import { GetFetchRaces } from '@/utils/fetch/Race'
import React from 'react'

const AnimalPageRace = async () => {
  const {races} = await GetFetchRaces()
  const pageval = 3
  return (
    // <div className='w-full bg-slate-100 p-4'>
    //   <h1 className='bg-gray-700 text-white rounded-md px-3 py-2 text-sm font-medium text-center'>Race</h1>
    //   <DataTable columns={columns} data={races} pageval={pageval} />
    // </div>
    <div className='w-full h-full flex-col justify-center'>
      <div className="bg-[#ffffff] p-4 rounded-[20px] text-[#222222] shadow-lg" >
      <h1 className="text-[1.5em] font-semibold">Liste des races</h1>
      <div className=" flex flex-col w-full text-[#222222] ">
       
      <DataTable columns={Columns} data={races} pageval={pageval} />
      </div>
        
      
      </div>

    </div>
  )
}

export default AnimalPageRace