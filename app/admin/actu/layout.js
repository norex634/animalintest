import SideAdmin from "@/components/partials/SideAdmin";


 
const Layoutside = ( props ) => {
  return (
    <>
      <main className="flex w-full min-h-screen">
      {props.actus}
      <div className="flex flex-col w-[30%]">
      {props.categorie}
      </div>
      
        </main>
    </>
  )
}

export default Layoutside