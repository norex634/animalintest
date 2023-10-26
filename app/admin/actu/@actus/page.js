import React from 'react'
import { DataTable } from '@/components/table/DataTableActu'
import { columns } from '@/components/table/ColumnsActu'
import { GetFetchActus } from '@/utils/fetch/Actu'
import { GetFetchCategorieActus } from '@/utils/fetch/CategorieActu'

const ActusPage = async () => {
  const {actus} = await GetFetchActus()
  const pageval = 9
  const {categoriesActus} = await GetFetchCategorieActus()
 
  

  return (
    <>
    <div className='w-full flex-col justify-center'>
      <div className="bg-[#ffffff] p-4 rounded-[20px] text-[#222222] shadow-lg" >
      <h1 className="text-[1.5em] font-semibold">Liste des actualitées</h1>
      <div className=" flex flex-col w-full text-[#222222] ">
       
      <DataTable columns={columns} data={actus} pageval={pageval} categorieactu={categoriesActus} />
      </div>
        
      
      </div>

    </div>
    </>
    
  )
}

export default ActusPage