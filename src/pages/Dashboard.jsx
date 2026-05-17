import { useState, useEffect } from "react";
import { useGame } from "../context/GameContext";

import Sidebar from "../components/dashboard/Sidebar";
import Topbar from "../components/dashboard/Topbar";
import Tabs from "../components/dashboard/Tabs";

import HubPage from "../features/hub/pages/HubPage";
import CalendarPage from "../features/calendar/pages/CalendarPage";

export default function Dashboard() {

  const { activeSave } = useGame();

  const [activeMenu, setActiveMenu] = useState("Hub");
  const [activeTab, setActiveTab] = useState(null);

  // =====================================================
  // TABS CONFIG
  // =====================================================

  const menuTabs = {
    "Équipe": [
      "Roster",
      "Training",
      "Academy",
    ],

    "Compétition": [
      "Classement",
      "Statistiques",
      "Calendrier",
    ],

    "Scouting": [
      "Prospects",
      "Shortlist",
    ],

    "Finances": [
      "Budget",
      "Sponsors",
      "Marketing",
    ],
  };

  // =====================================================
  // UPDATE ACTIVE TAB
  // =====================================================

  useEffect(() => {

    const tabs = menuTabs[activeMenu];

    if (tabs && tabs.length > 0) {
      setActiveTab(tabs[0]);
    } else {
      setActiveTab(null);
    }

  }, [activeMenu]);

  // =====================================================
  // NO SAVE
  // =====================================================

  if (!activeSave) {
    return (
      <div className="text-white p-10">
        Aucune sauvegarde active
      </div>
    );
  }

  // =====================================================
  // RENDER
  // =====================================================

  return (

    <div className="
      fixed
      inset-0
      bg-[#1B1F2A]
      flex
      overflow-hidden
    ">

      {/* SIDEBAR */}
      <Sidebar
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
      />

      {/* MAIN */}
      <div className="
        flex-1
        flex
        flex-col
        overflow-hidden
      ">

        {/* TOPBAR */}
        <Topbar />

        {/* CONDITIONAL TABS */}
        {menuTabs[activeMenu] && (
          <Tabs
            activeMenu={activeMenu}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        )}

        {/* CONTENT */}
        <main className="
          flex-1
          p-6
          overflow-hidden
          text-white
        ">

          {activeMenu === "Hub" && (
            <HubPage />
          )}
          {activeMenu === "Calendrier" && (
            <CalendarPage />
          )}

        </main>

      </div>

    </div>
  );
}