import React from 'react'
// import { DataTable } from '@/components/table/DataTableUser'
// import { columns} from '@/components/table/ColumnsUser'
import { GetFetchUsers } from '@/utils/fetch/User'

const page = async () => {
  const {users} = await GetFetchUsers()
  console.log(users)
  const pageval = 15
  return (
    <div className='w-full h-screen bg-slate-100 p-4 flex-col justify-center'>
      <h1 className='bg-gray-700 text-white rounded-md px-3 py-2 text-sm font-medium text-center'>Tous les users</h1>
      <div className=" flex w-full ">
      {/* <DataTable columns={columns} data={users} pageval={pageval} /> */}
        
      
      </div>

    </div>
  )
}

export default page