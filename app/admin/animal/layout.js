import SideAdmin from "@/components/partials/SideAdmin";


 
const Layoutside = (props) => {
  return (
    <>
      <main className="flex min-h-screen w-full flex-col md:flex-row bg-slate-100">
    
        <div className="w-full md:w-[70%]">
        {props.all}
        </div>
      <div className="w-full md:w-[30%]">
        

        <div className="">{props.categorie}</div>

        <div className="hidden md:block ">{props.race}</div>
        
        <div className=" mt-16 md:hidden ">{props.race}</div>
      </div>
        
        </main>
    </>
  )
}

export default Layoutside