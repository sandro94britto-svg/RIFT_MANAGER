import { teams } from "../../../data/teams";
import { Link } from "react-router-dom";

export default function MatchDetails({
  match,
}) {

  if (!match) {
    return (
      <div className="
        bg-white/5
        rounded-xl
        flex
        items-center
        justify-center
      ">
        No match selected
      </div>
    );
  }

  const homeTeam = teams.find(
    (team) => team.id === match.homeTeamId
  );

  const awayTeam = teams.find(
    (team) => team.id === match.awayTeamId
  );

  return (
    <div className="
      bg-white/5
      rounded-xl
      p-8
      flex
      flex-col
    ">

      {/* DATE */}
      <div className="
        text-sm
        opacity-60
        mb-8
      ">
        {match.scheduledDate}
      </div>

      {/* TEAMS */}
      <div className="
        flex-1
        flex
        items-center
        justify-center
      ">

        <div className="
          flex
          items-center
          gap-16
        ">

          {/* HOME */}
          <div className="
            flex
            flex-col
            items-center
            gap-4
          ">

            <img
              src={homeTeam?.logo}
              alt={homeTeam?.name}
              className="w-28 h-28 object-contain"
            />

            <Link
              to={`/dashboard/club/${homeTeam?.id}`}
              onClick={(e) => e.stopPropagation()}
              className="
                text-sm
                hover:underline
                underline-offset-4
              "
            >
              {homeTeam?.name}
            </Link>

          </div>

          {/* SCORE */}
          <div className="
            text-4xl
            font-bold
            opacity-70
          ">
            VS
          </div>

          {/* AWAY */}
          <div className="
            flex
            flex-col
            items-center
            gap-4
          ">

            <img
              src={awayTeam?.logo}
              alt={awayTeam?.name}
              className="w-28 h-28 object-contain"
            />

            <Link
              to={`/dashboard/club/${awayTeam?.id}`}
              onClick={(e) => e.stopPropagation()}
              className="
                text-sm
                hover:underline
                underline-offset-4
              "
            >
              {awayTeam?.name}
            </Link>

          </div>

        </div>

      </div>

      {/* FOOTER */}
      <div className="
        flex
        justify-between
        text-sm
        opacity-60
      ">

        <span>
          {match.competitionId}
        </span>

        <span>
          BO{match.bestOf}
        </span>

      </div>

    </div>
  );
}