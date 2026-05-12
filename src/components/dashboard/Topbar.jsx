import { useGame } from "../../context/GameContext";

export default function Topbar() {

  const { activeSave } = useGame();

  return (
    <div className="
      h-[80px]
      border-b
      border-white/10
      bg-[#151922]
      flex
      items-center
      justify-between
      px-8
    ">

      <div className="text-white text-xl font-bold">
        Dashboard
      </div>

      <div className="flex items-center gap-8 text-white">

        <div>
          💰 {activeSave.money.toLocaleString()} €
        </div>

        <div>
          📅 Week {activeSave.currentWeek}
        </div>

        <div>
          Split {activeSave.currentSplit}
        </div>

      </div>

    </div>
  );
}