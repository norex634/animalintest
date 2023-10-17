import SideAdmin from "@/components/partials/SideAdmin";


 
const LayoutAdmin = ({children,Layoutside}) => {
  return (
    <>
      <main className="flex min-h-screen">
      <SideAdmin />
      {children}
      {Layoutside}
        </main>
    </>
  )
}

export default LayoutAdmin