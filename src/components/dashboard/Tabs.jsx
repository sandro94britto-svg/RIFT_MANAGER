export default function Tabs({
  activeMenu,
  activeTab,
  setActiveTab,
}) {

  const tabsByMenu = {

    "Équipe": [
      "Roster",
      "Training",
      "Academy",
    ],

    "Compétition": [
      "Classement",
      "Calendrier",
    ],

    "Scouting": [
      "Prospects",
      "Rapports",
    ],

    "Finances": [
      "Budget",
      "Sponsors",
    ],
  };

  const tabs = tabsByMenu[activeMenu] || [];

  return (
    <div className="
      h-[70px]
      border-b
      border-white/10
      flex
      items-center
      px-8
      gap-4
    ">

      {tabs.map(tab => (

        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`
            px-5
            py-2
            rounded-lg
            transition

            ${activeTab === tab
              ? "bg-blue-600 text-white"
              : "bg-white/5 text-white/70 hover:bg-white/10"
            }
          `}
        >
          {tab}
        </button>

      ))}

    </div>
  );
}