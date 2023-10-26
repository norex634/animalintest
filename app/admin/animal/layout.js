import SideAdmin from "@/components/partials/SideAdmin";


 
const Layoutside = (props) => {
  return (
    <>
      <main className="flex w-full flex-col md:flex-row ">
    
        <div className="w-full md:w-[70%] h-full">
        {props.all}
        </div>
      <div className="w-full h-full md:w-[30%] flex flex-col mx-2 md:mt-0 mt-4">
        

        <div className="pb-4">{props.categorie}</div>

        <div className="hidden md:block ">{props.race}</div>
        
        <div className="md:hidden ">{props.race}</div>
      </div>
        
        </main>
    </>
  )
}

export default Layoutside