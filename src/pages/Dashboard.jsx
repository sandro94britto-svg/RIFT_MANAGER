// =====================================================
// Dashboard.jsx
// =====================================================

import { Outlet }
from "react-router-dom";

import Sidebar
from "../components/dashboard/Sidebar";

import TopBar
from "../components/dashboard/TopBar";

// =====================================================

export default function Dashboard() {

  return (

    <div className="
      flex
      h-screen
      bg-[#0f172a]
      text-white
    ">

      {/* SIDEBAR */}

      <Sidebar />

      {/* MAIN */}

      <div className="
        flex-1
        flex
        flex-col
        overflow-hidden
      ">

        <TopBar />

        {/* PAGE CONTENT */}

        <main className="
          flex-1
          overflow-y-auto
          p-6
        ">

          <Outlet />

        </main>

      </div>

    </div>
  );
}