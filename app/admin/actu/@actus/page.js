import React from 'react'
import { DataTable } from '@/components/table/DataTableActu'
import { columns } from '@/components/table/ColumnsActu'
import { GetFetchActus } from '@/utils/fetch/Actu'
import { GetFetchCategorieActus } from '@/utils/fetch/CategorieActu'

const page = async () => {
  const actu = await GetFetchActus()
  const pageval = 9
  const categorieActu = await GetFetchCategorieActus()
  return (
    <>
    
    <div className='w-full h-full bg-slate-100 p-4 flex-col justify-center'>
      <h1 className='bg-gray-700 text-white rounded-md px-3 py-2 text-sm font-medium text-center'>Tous les actus</h1>
      <div className=" flex w-full h-[50%] ">
      <DataTable columns={columns} data={actu} pageval={pageval} categorieactu={categorieActu}/>

      
      </div>

    </div>
    </>
    
  )
}

export default page