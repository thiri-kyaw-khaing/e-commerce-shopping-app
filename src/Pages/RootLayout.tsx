import Footer from "@/components/layoutsNav/Footer";
import Header from "@/components/layoutsNav/Header";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 container mx-auto px-4 py-6">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}
