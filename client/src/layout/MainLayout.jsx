import EmergencyBar from "./EmergencyBar";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="min-h-screen w-full bg-[#F0FEF5] text-gray-800 flex flex-col">
      <EmergencyBar />
      <Navbar />

      <main className="flex-1 w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-20 xl:px-32">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
