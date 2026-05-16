import { useGame } from "../../../context/GameContext";
import { getNextMatch } from "../../../game/world/selector";
import { teams } from "../../../data/teams";

export default function UpcomingMatchWidget() {

  const { activeSave } = useGame();
  const world = activeSave.world;

  const teamId = activeSave.selectedTeam.id;

  const nextMatch = getNextMatch(world, teamId);

  if (!nextMatch) {
    return <div>Aucun match prévu</div>;
  }

  // -----------------------------------
  // TEAM DATA
  // -----------------------------------

  const homeTeam = teams.find(
    (team) => team.id === nextMatch.homeTeamId
  );

  const awayTeam = teams.find(
    (team) => team.id === nextMatch.awayTeamId
  );

  const formattedDateRaw = new Date(nextMatch.scheduledDate).toLocaleDateString(
    "fr-FR",
    {
      weekday: "long",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }
  );
  const formattedDate =
  formattedDateRaw.charAt(0).toUpperCase() +
  formattedDateRaw.slice(1);

  return (
    <div className="
      bg-white/5
      rounded-xl
      p-4
      h-full
      flex
      flex-col
    ">

      {/* TITLE */}
      <h2 className="text-sm font-semibold opacity-80 mb-4">
        Prochain match
      </h2>

      {/* CENTER */}
      <div className="
        flex-1
        flex
        items-center
        justify-center
        relative
      ">

        <div className="
          flex
          items-center
          gap-8
        ">

          {/* HOME TEAM */}
          <div className="
            flex
            flex-col
            items-center
            gap-2
            w-24
          ">

            <img
              src={homeTeam?.logo}
              alt={homeTeam?.name}
              className="w-16 h-16 object-contain"
            />

            <span className="
              text-sm
              font-medium
              text-center
            ">
              {homeTeam?.shortname}
            </span>

          </div>

          {/* VS */}
          <div className="
            text-xl
            font-bold
            opacity-50
          ">
            VS
          </div>

          {/* AWAY TEAM */}
          <div className="
            flex
            flex-col
            items-center
            gap-2
            w-24
          ">

            <img
              src={awayTeam?.logo}
              alt={awayTeam?.name}
              className="w-16 h-16 object-contain"
            />

            <span className="
              text-sm
              font-medium
              text-center
            ">
              {awayTeam?.shortname}
            </span>

          </div>

        </div>
          <div className="
            absolute
            bottom-4
            text-sm
            opacity-60
          ">
            {formattedDate}
          </div>

      </div>

    </div>
  );
}