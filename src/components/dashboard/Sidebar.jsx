// =====================================================
// Sidebar.jsx
// =====================================================

import { NavLink }
from "react-router-dom";

import { sidebarSections }
from "../../data/sidebarSections";

import { useGame }
from "../../context/GameContext";

// =====================================================

export default function Sidebar() {

  const { activeSave } = useGame();

  // ===================================================
  // SAFETY
  // ===================================================

  if (!activeSave) {

    return null;
  }

  // ===================================================
  // DYNAMIC ROUTES
  // ===================================================

  const routes = {

    Hub:
      "/dashboard",

    Calendrier:
      "/dashboard/calendar",

    Club:
      `/dashboard/club/${activeSave.selectedTeam.id}`,

  };

  // ===================================================
  // RENDER
  // ===================================================

  return (

    <div className="
      w-[225px]
      bg-[#151922]
      border-r
      border-white/10
      flex
      flex-col
      p-6
      overflow-y-auto
    ">

      {/* SECTIONS */}

      <div className="
        flex
        flex-col
        gap-8
      ">

        {sidebarSections.map(section => (

          <div key={section.title}>

            {/* SECTION TITLE */}

            <div className="
              text-xs
              text-white/30
              uppercase
              tracking-widest
              mb-3
            ">

              {section.title}

            </div>

            {/* MENUS */}

            <div className="
              flex
              flex-col
              gap-2
            ">

              {section.menus.map(menu => {

                const path =
                  routes[menu.label];

                // ===============================
                // DISABLED MENU
                // ===============================

                if (!path) {

                  return (

                    <div
                      key={menu.label}
                      className="
                        px-4
                        py-3
                        rounded-xl
                        text-white/30
                        cursor-default
                      "
                    >

                      {menu.label}

                    </div>

                  );
                }

                // ===============================
                // ACTIVE MENU
                // ===============================

                return (

                  <NavLink
                    key={menu.label}

                    to={path}

                    end={
                      path === "/dashboard"
                    }

                    className={({ isActive }) => `
                      text-left
                      px-4
                      py-3
                      rounded-xl
                      transition

                      ${
                        isActive
                          ? "bg-white/10 text-white"
                          : "text-white/70 hover:bg-white/5 hover:text-white"
                      }
                    `}
                  >

                    {menu.label}

                  </NavLink>

                );

              })}

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}