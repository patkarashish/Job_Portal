
import Header from "@/components/Header";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="text-white w-full max-w-7xl mx-auto">
      <div className="grid-background"></div>
      <main className="min-h-screen container">
        <Header/>
        <Outlet />
      </main>
      <div className="p-10 text-center bg-gray-800 mt-10 text-white">
        Made with 💗 by RoadsideCoder
      </div>
    </div>
  );
};

export default AppLayout;