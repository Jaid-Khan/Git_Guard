import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const DashboardLayout = () => {
  return (
    <div className="min-h-screen bg-[#070d1a] text-white relative overflow-hidden">
      {/* Ambient Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 h-[500px] w-[500px] rounded-full bg-[#fca311]/5 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 h-[400px] w-[400px] rounded-full bg-blue-500/5 blur-[120px]" />
      </div>

      <Navbar />

      <div className="relative flex">
        {/* Sidebar */}
        <aside className="hidden lg:block">
          <Sidebar />
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          <div className="max-w-[1600px] mx-auto p-4 md:p-6 lg:p-8">
            <div
              className="
                border border-white/10
                bg-white/[0.02]
                backdrop-blur-xl
                rounded-3xl
                min-h-[calc(100vh-120px)]
                p-6 md:p-8
              "
            >
              <Outlet />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;