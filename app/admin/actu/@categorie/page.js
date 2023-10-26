
import { DataTable } from '@/components/table/DataTableCategorieActu'
import { columns } from '@/components/table/ColumnsCategorieActu'
import { GetFetchCategorieActus } from '@/utils/fetch/CategorieActu'

const ActusPageCategorie = async () => {

  const {categoriesActus} = await GetFetchCategorieActus()
  const pageval= 10
  return (
    <div className='w-full flex-col justify-center'>
      <div className="bg-[#ffffff] p-4 rounded-[20px] text-[#222222] shadow-lg" >
      <h1 className="text-[1.5em] font-semibold">Liste des catégorie</h1>
      <div className=" flex flex-col w-full text-[#222222] ">
       
      <DataTable columns={columns} data={categoriesActus} pageval={pageval} />
      </div>
        
      
      </div>

    </div>
  )
}

export default ActusPageCategorie