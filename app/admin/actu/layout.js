import SideAdmin from "@/components/partials/SideAdmin";


 
const Layoutside = ( {actus, categorie} ) => {
  return (
    <>
      <main className="flex w-full">
      {actus}
      <div className=" flex flex-col w-[30%] pl-2">
      {categorie}
      </div>
      
        </main>
    </>
  )
}

export default Layoutside