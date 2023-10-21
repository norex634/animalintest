import SideAdmin from "@/components/partials/SideAdmin";


 
const Layoutside = ( props ) => {
  return (
    <>
      <main className="flex min-h-screen w-full">
      {props.info}
      <div className="flex flex-col w-[80%]">
      {props.horaire}
      {props.social}
      </div>
      
        </main>
    </>
  )
}

export default Layoutside