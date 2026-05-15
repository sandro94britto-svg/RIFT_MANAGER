import { sidebarSections } from "../../data/sidebarSections";

import { useGame } from "../../context/GameContext";

export default function Sidebar({
  activeMenu,
  setActiveMenu,
}) {

  const { activeSave } = useGame();

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

      {/* TEAM */}
      <div className="mb-10">

        <img
          src={activeSave.selectedTeam.logo}
          className="w-20 h-20 object-contain mb-4"
        />

        <h2 className="text-white text-xl font-bold">
          {activeSave.selectedTeam.name}
        </h2>

      </div>

      {/* SECTIONS */}
      <div className="flex flex-col gap-8">

        {sidebarSections.map((section) => (

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
            <div className="flex flex-col gap-2">

              {section.menus.map((menu) => (

                <button
                  key={menu}
                  onClick={() => setActiveMenu(menu)}
                  className={`
                    text-left
                    px-4
                    py-3
                    rounded-xl
                    transition

                    ${activeMenu === menu
                      ? "bg-blue-600 text-white"
                      : "text-white/70 hover:bg-white/10 hover:text-white"
                    }
                  `}
                >
                  {menu}
                </button>

              ))}

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}