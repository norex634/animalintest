import React from 'react'
import { DataTable } from '@/components/table/DataTableCategorieAnimal'
import { columns } from '@/components/table/ColumnsCategorieAnimal'
import { GetFetchCategorieAnimaux } from '@/utils/fetch/CategorieAnimal'

const page = async ({}) => {
  const categorie = await GetFetchCategorieAnimaux()
  const pageval= 3
  return (
    <div className='w-full bg-slate-100 p-4'>
      <h1 className='bg-gray-700 text-white rounded-md px-3 py-2 text-sm font-medium text-center'>categorie</h1>
      
    {/* <DataTable columns={columnsCategorieAnimal} data={categorie} totalPage={totalPageCategorie} value={`categorie`} /> */}
    <DataTable columns={columns} data={categorie} pageval={pageval} />
    </div>
  )
}

export default page