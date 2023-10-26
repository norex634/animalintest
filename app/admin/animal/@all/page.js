
import React from 'react'
import { DataTable } from '@/components/table/DataTableAnimal'
import { Columns } from '@/components/table/ColumnsAnimal'
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
    // hover:bg-[#28ccac]
    <div className='w-full flex-col justify-center'>
      <div className="bg-[#ffffff] p-4 rounded-[20px] text-[#222222] shadow-lg" >
      <h1 className="text-[1.5em] font-semibold">Liste des animaux</h1>
      <div className=" flex flex-col w-full ">
       
      <DataTable columns={Columns} data={animaux} pageval={pageval} race={races} sexe={sexes} categorie={categoriesAnimaux} />
      </div>
        
      
      </div>

    </div>
  )
}

export default AnimalPage