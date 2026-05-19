import { useParams } from "react-router-dom";
import { competitions } from "../game/competition/competitions";

export default function TeamPage() {

  const { teamId } = useParams();

  // ===================================================
  // FIND TEAM
  // ===================================================

  const allTeams = competitions.flatMap(
    comp => comp.teams
  );

  const uniqueTeams =
    [...new Set(allTeams)];

  const foundTeam =
    uniqueTeams.find(
      team => {

        if (
          typeof team === "string"
        ) {
          return team === teamId;
        }

        return team.id === teamId;
      }
    );

  // ===================================================
  // NOT FOUND
  // ===================================================

  if (!foundTeam) {

    return (

      <div className="text-white p-10">
        Team not found
      </div>
    );
  }

  // ===================================================
  // RENDER
  // ===================================================

  return (

    <div className="min-h-screen bg-[#111827] text-white p-8">

      <div className="flex items-center gap-6">

        {foundTeam.logo && (

          <img
            src={foundTeam.logo}
            alt={foundTeam.name}
            className="w-24 h-24 object-contain"
          />
        )}

        <div>

          <h1 className="text-4xl font-bold">
            {foundTeam.name || foundTeam}
          </h1>

          <p className="opacity-70">
            Team Page
          </p>

        </div>

      </div>

    </div>
  );
}