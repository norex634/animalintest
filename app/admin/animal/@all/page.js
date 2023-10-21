
import React from 'react'
import { DataTable } from '@/components/table/DataTableAnimal'
import { columns } from '@/components/table/ColumnsAnimal'
import { GetFetchAnimaux } from '@/utils/fetch/Animal'
import {GetFetchRaces} from '@/utils/fetch/Race'
import {GetFetchCategorieAnimaux} from '@/utils/fetch/CategorieAnimal'
import {GetFetchSexes} from '@/utils/fetch/Sexe'




const AnimalPage = async () => {
  const {animaux} = await GetFetchAnimaux()
  const pageval = 10
  const {races} = await GetFetchRaces()
  const {sexes} = await GetFetchSexes()
  const {categoriesAnimaux} = await GetFetchCategorieAnimaux()
  
  return (
    <div className='w-full h-full bg-slate-100 p-4 flex-col justify-center'>
      <h1 className='bg-gray-700 text-white rounded-md px-3 py-2 text-sm font-medium text-center'>Tous les animaux</h1>
      <div className=" flex w-full  ">
      <DataTable columns={columns} data={animaux} pageval={pageval} race={races} sexe={sexes} categorie={categoriesAnimaux}/>

      </div>
    </div>
  )
}

export default AnimalPage