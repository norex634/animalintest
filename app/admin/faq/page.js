import React from 'react'
import { DataTable } from '@/components/table/DataTableFaq'
import { Columns } from '@/components/table/ColumnsFaq'
import { GetFetchFaqs } from '@/utils/fetch/Faq'


const FaqPage = async () => {
  const {faqs} = await GetFetchFaqs()
  const pageval = 10
  return (
    <>
    <div className='w-full flex-col justify-center'>
      <div className="bg-[#ffffff] p-4 rounded-[20px] text-[#222222] shadow-lg" >
      <h1 className="text-[1.5em] font-semibold">Liste des FAQ</h1>
      <div className=" flex flex-col w-full text-[#222222] ">
       
      <DataTable columns={Columns} data={faqs} pageval={pageval} />
      </div>
        
      
      </div>

    </div>
    </>
  )
}

export default FaqPage