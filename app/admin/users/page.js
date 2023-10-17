import React from 'react'
import { DataTable } from '@/components/table/DataTableUser'
import { columnsUser} from '@/components/table/Columns'
import { GetFetchUsers } from '@/utils/fetch/User'

const page = async () => {
  const user = await GetFetchUsers()
  const pageval = 15
  return (
    <div className='w-full h-screen bg-slate-100 p-4 flex-col justify-center'>
      <h1 className='bg-gray-700 text-white rounded-md px-3 py-2 text-sm font-medium text-center'>Tous les users</h1>
      <div className=" flex w-full ">
      <DataTable columns={columnsUser} data={user} pageval={pageval} />
        
      
      </div>

    </div>
  )
}

export default page