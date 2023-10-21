import { columns } from '@/components/table/ColumnsRace'
import { DataTable } from '@/components/table/DataTableRace'
import { GetFetchRaces } from '@/utils/fetch/Race'
import React from 'react'

const AnimalPageRace = async () => {
  const {races} = await GetFetchRaces()
  const pageval = 3
  return (
    <div className='w-full bg-slate-100 p-4'>
      <h1 className='bg-gray-700 text-white rounded-md px-3 py-2 text-sm font-medium text-center'>Race</h1>
      {/* <DataTable columns={columnsRace} data={race}  totalPage={totalPageRace} value={`race`}/> */}
      <DataTable columns={columns} data={races} pageval={pageval} />
    </div>
  )
}

export default AnimalPageRace