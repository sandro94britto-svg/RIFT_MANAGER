import { teams } from "../../../data/teams";
import { Link } from "react-router-dom";

export default function MatchListItem({
  match,
  selected,
  onClick,
}) {

  const homeTeam = teams.find(
    (team) => team.id === match.homeTeamId
  );

  const awayTeam = teams.find(
    (team) => team.id === match.awayTeamId
  );

  const formattedDate = new Date(
    match.scheduledDate
  ).toLocaleDateString("fr-FR", {
    weekday: "short",
    day: "2-digit",
    month: "2-digit",
  });

  return (
    <button
      onClick={onClick}
      className={`
        w-full
        p-3
        rounded-lg
        text-left
        transition
        border

        ${
          selected
            ? "bg-blue-500/20 border-blue-500"
            : "bg-white/5 border-white/10 hover:bg-white/10"
        }
      `}
    >

      <div className="
        text-xs
        opacity-60
        mb-2
      ">
        {formattedDate}
      </div>

      <div className="
        flex
        items-center
        justify-between
      ">

        <div className="
          flex
          items-center
          gap-2
        ">

          <img
            src={homeTeam?.logo}
            alt={homeTeam?.name}
            className="w-6 h-6 object-contain"
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

        <span className="opacity-50">
          VS
        </span>

        <div className="
          flex
          items-center
          gap-2
        ">

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

          <img
            src={awayTeam?.logo}
            alt={awayTeam?.name}
            className="w-6 h-6 object-contain"
          />

        </div>

      </div>

    </button>
  );
}