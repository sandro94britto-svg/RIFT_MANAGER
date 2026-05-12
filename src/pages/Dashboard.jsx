import { useState, useEffect } from "react";
import { useGame } from "../context/GameContext";

import Sidebar from "../components/dashboard/Sidebar";
import Topbar from "../components/dashboard/Topbar";
import Tabs from "../components/dashboard/Tabs";

import HubPage from "../features/hub/pages/HubPage";


export default function Dashboard() {

  const { activeSave } = useGame();

  const [activeMenu, setActiveMenu] = useState("Hub");
  const [activeTab, setActiveTab] = useState("Roster");

  useEffect(() => {
    const defaultTabs = {
      "Équipe": "Roster",
      "Compétition": "Classement",
      "Scouting": "Prospects",
      "Finances": "Budget",
    };

    setActiveTab(defaultTabs[activeMenu]);
  }, [activeMenu]);

  if (!activeSave) {
    return (
      <div className="text-white p-10">
        Aucune sauvegarde active
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-[#1B1F2A] flex">

      {/* SIDEBAR */}
      <Sidebar
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
      />

      {/* MAIN */}
      <div className="flex-1 flex flex-col">

        {/* TOPBAR */}
        <Topbar />

        {/* TABS */}
        <Tabs
          activeMenu={activeMenu}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        {/* CONTENT */}
        <div className="flex-1 p-8 text-white">
          {activeMenu === "Hub" && (
            <HubPage />
)}
        </div>

      </div>

    </div>
  );
}