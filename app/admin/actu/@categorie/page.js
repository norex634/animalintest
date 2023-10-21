
import { DataTable } from '@/components/table/DataTableCategorieActu'
import { columns } from '@/components/table/ColumnsCategorieActu'
import { GetFetchCategorieActus } from '@/utils/fetch/CategorieActu'

const page = async () => {
  // const {categoriesActus} = await GetFetchCategorieActus()
  return (
    <div className='w-full h-full bg-slate-100 p-4 flex-col justify-center'>
      <h1 className='bg-gray-700 text-white rounded-md px-3 py-2 text-sm font-medium text-center'>Tous les categorie</h1>
      <div className=" flex w-full h-[50%] ">
      {/* <DataTable columns={columns} data={categoriesActus}  /> */}

      
      </div>

    </div>
  )
}

export default page