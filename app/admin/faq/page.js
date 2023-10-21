import React from 'react'
import { DataTable } from '@/components/table/DataTableFaq'
import { columns } from '@/components/table/ColumnsFaq'
import { GetFetchFaqs } from '@/utils/fetch/Faq'


const page = async () => {
  const {faqs} = await GetFetchFaqs()
  const pageval = 10
  return (
    <>
    <div className='w-full h-screen bg-slate-100 p-4 flex-col justify-center'>
      <h1 className='bg-gray-700 text-white rounded-md px-3 py-2 text-sm font-medium text-center'>Tous les actus</h1>
      <div className=" flex w-full h-[50%] ">
      <DataTable columns={columns} data={faqs} pageval={pageval} />

      
      </div>

    </div>
    </>
  )
}

export default page