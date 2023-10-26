
import { DataTable } from '@/components/table/DataTableCategorieAnimal'
import { Columns } from '@/components/table/ColumnsCategorieAnimal'
import { GetFetchCategorieAnimaux } from '@/utils/fetch/CategorieAnimal'

const AnimalPageCategorie = async ({}) => {
  const {categoriesAnimaux} = await GetFetchCategorieAnimaux()
  const pageval= 3
  return (
    
    <div className='w-full flex-col justify-center'>
      <div className="bg-[#ffffff] p-4 rounded-[20px] text-[#222222] shadow-lg" >
      <h1 className="text-[1.5em] font-semibold">Liste des catégorie</h1>
      <div className=" flex flex-col w-full text-[#222222] ">
       
      <DataTable columns={Columns} data={categoriesAnimaux} pageval={pageval} />
      </div>
        
      
      </div>

    </div>
  )
}

export default AnimalPageCategorie