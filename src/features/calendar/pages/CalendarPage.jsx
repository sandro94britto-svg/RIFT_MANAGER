import { useGame }
from "../../../context/GameContext";

import TeamCalendar
from "../../club/components/TeamCalendar";

export default function CalendarPage() {

  const { activeSave } = useGame();

  // ---------------------------------------------------
  // SAFETY
  // ---------------------------------------------------

  if (!activeSave) {
    return null;
  }

return (

  <div className="flex-1 min-h-0">

    <TeamCalendar
      world={activeSave.world}
      teamId={activeSave.selectedTeam.id}
    />

  </div>

)};