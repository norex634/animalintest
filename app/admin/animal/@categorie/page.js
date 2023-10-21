
import { DataTable } from '@/components/table/DataTableCategorieAnimal'
import { columns } from '@/components/table/ColumnsCategorieAnimal'
import { GetFetchCategorieAnimaux } from '@/utils/fetch/CategorieAnimal'

const AnimalPageCategorie = async ({}) => {
  const {categoriesAnimaux} = await GetFetchCategorieAnimaux()
  const pageval= 3
  return (
    <div className='w-full bg-slate-100 p-4'>
      <h1 className='bg-gray-700 text-white rounded-md px-3 py-2 text-sm font-medium text-center'>categorie</h1>
      
    <DataTable columns={columns} data={categoriesAnimaux} pageval={pageval} />
    </div>
  )
}

export default AnimalPageCategorie