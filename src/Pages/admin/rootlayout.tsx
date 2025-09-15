import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function RootLayoutAdmin() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <Header />
        <Outlet />
      </div>
    </div>
    //     <>
    //   <div className="flex flex-col min-h-screen">
    //     <Header />
    //     <main className="flex-1 container mx-auto px-4 py-6">
    //       <Outlet />
    //     </main>
    //     <Footer />
    //   </div>
    // </>
  );
}
