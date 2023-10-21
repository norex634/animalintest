import SideAdmin from "@/components/partials/SideAdmin";


 
const Layoutside = ({info,horaire,social} ) => {

  return (
    <>
      <main className="flex min-h-screen w-full">
      {info}
      <div className="flex flex-col w-[80%]">
      {horaire}
      {social}
      </div>
      
        </main>
    </>
  )
}

export default Layoutside