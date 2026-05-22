// =====================================================
// ClubPage.jsx
// =====================================================

import { useState }
from "react";

import { useParams }
from "react-router-dom";

import { useGame }
from "../../../context/GameContext";

import { teams }
from "../../../data/teams";

import TeamCalendar from "../components/TeamCalendar";

// =====================================================

export default function ClubPage() {

  const { teamId } =
    useParams();
  
  const { activeSave } = useGame();

  const world = activeSave.world;   

  // ===================================================
  // TEAM
  // ===================================================

  const team =

    teams.find(
      team =>
        team.id === teamId
    );

  // ===================================================
  // SAFETY
  // ===================================================

  if (!team) {

    return (

      <div className="
        text-white
        text-xl
      ">
        Team not found
      </div>

    );
  }

  // ===================================================
  // OWN TEAM ?
  // ===================================================

  const isOwnTeam =

    team.id ===
    activeSave?.selectedTeam?.id;

  // ===================================================
  // TABS
  // ===================================================

  const ownTeamTabs = [
    "Général",
    "Infos",
    "Historique",
  ];

  const externalTeamTabs = [
    "Général",
    "Infos",
    "Roster",
    "Calendrier",
    "Staff",
    "Transferts",
    "Historique",
  ];

  const tabs =

    isOwnTeam

      ? ownTeamTabs

      : externalTeamTabs;

  // ===================================================
  // ACTIVE TAB
  // ===================================================

  const [activeTab, setActiveTab] =
    useState(
      tabs[0]
    );

  // ===================================================
  // RENDER
  // ===================================================

  return (

      <div className="
        h-full
        flex
        flex-col
        gap-6
        min-h-0
        overflow-hidden
      ">

      {/* ============================================= */}
      {/* TABS */}
      {/* ============================================= */}

      <div className="
        flex
        items-center
        gap-2
        border-b
        border-white/10
        pb-3
        overflow-x-auto
      ">

        {tabs.map(tab => (

          <button
            key={tab}
            onClick={() =>
              setActiveTab(tab)
            }
            className={`
              px-4
              py-2
              rounded-lg
              text-sm
              whitespace-nowrap
              transition

              ${
                activeTab === tab

                  ? `
                    bg-white/10
                    text-white
                  `

                  : `
                    text-white/50
                    hover:text-white
                    hover:bg-white/5
                  `
              }
            `}
          >
            {tab}
          </button>

        ))}

      </div>

      {/* ============================================= */}
      {/* CONTENT */}
      {/* ============================================= */}

        <div className="
          bg-[#111827]
          rounded-2xl
          p-6
          flex-1
          min-h-0
          overflow-hidden
        ">

        {/* GENERAL */}

        {activeTab === "Général" && (

          <div className="
            text-white
          ">
            Général
          </div>

        )}

        {/* INFOS */}

        {activeTab === "Infos" && (

          <div className="
            text-white
          ">
            Infos
          </div>

        )}

        {/* ROSTER */}

        {activeTab === "Roster" && (

          <div className="
            text-white
          ">
            Roster
          </div>

        )}

        {/* CALENDAR */}

        {activeTab === "Calendrier" && (

          <div className="
            h-full min-h-0
          ">
          <TeamCalendar
            world={world}
            teamId={team.id}
          />
          </div>

        )}

        {/* STAFF */}

        {activeTab === "Staff" && (

          <div className="
            text-white
          ">
            Staff
          </div>

        )}

        {/* TRANSFERS */}

        {activeTab === "Transferts" && (

          <div className="
            text-white
          ">
            Transferts
          </div>

        )}

        {/* HISTORY */}

        {activeTab === "Historique" && (

          <div className="
            text-white
          ">
            Historique
          </div>

        )}

      </div>

    </div>

  );
}