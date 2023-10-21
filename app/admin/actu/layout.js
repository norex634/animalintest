import SideAdmin from "@/components/partials/SideAdmin";


 
const Layoutside = ( {actus, categorie} ) => {
  return (
    <>
      <main className="flex w-full min-h-screen">
      {actus}
      <div className="flex flex-col w-[30%]">
      {categorie}
      </div>
      
        </main>
    </>
  )
}

export default Layoutside