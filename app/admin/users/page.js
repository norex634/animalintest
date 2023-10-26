import React from 'react'
import { DataTable } from '@/components/table/DataTableUser'
import { columns} from '@/components/table/ColumnsUser'
import { GetFetchUsers } from '@/utils/fetch/User'



const UserPage = async () => {
  const {users} = await GetFetchUsers()
  //const user = await GetFetchUsers()
  //  console.log("users destructurerr : ",users)
  //console.log("user non destructurer : ",user)
  const pageval = 5
  return (
    <div className='w-full flex-col justify-center'>
      <div className="bg-[#ffffff] p-4 rounded-[20px] text-[#222222] shadow-lg" >
      <h1 className="text-[1.5em] font-semibold">Liste des Admin</h1>
      <div className=" flex flex-col w-full text-[#222222] ">
       
      <DataTable columns={columns} data={users} pageval={pageval} />
      </div>
        
      
      </div>

    </div>
  )
}

export default UserPage