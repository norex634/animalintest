// import SideAdmin from "@/components/partials/SideAdmin";


 
// const LayoutAdmin = ({children,Layoutside}) => {
//   return (
//     <>
//       <main className="flex min-h-screen w-full bg-[#0A0C0F] relative">
//         <div className="w-[13%] min-h-screen">
//         <SideAdmin />
//         </div>
        
//       {children}
//       {Layoutside}
//         </main>
//     </>
//   )
// }

// export default LayoutAdmin

import SideAdmin from "@/components/partials/SideAdmin";

const LayoutAdmin = ({ children, Layoutside }) => {
  return (
    <div className="flex min-h-screen bg-[#f1f1f1] relative">
      <div className="w-[12%] min-h-screen">
        <div className="fixed h-full w-[12%] p-4">
          <SideAdmin />
        </div>
      </div>

      <div className="w-[90%] h-full p-4">

        {children}
        {Layoutside}
      </div>
      
    </div>
  );
};

export default LayoutAdmin;

