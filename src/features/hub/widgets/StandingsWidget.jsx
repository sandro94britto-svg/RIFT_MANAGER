import { useGame } from "../../../context/GameContext";
import { generateStandings } from "../../../game/world/standings";
import { teams } from "../../../data/teams";

export default function StandingsWidget() {

  const { activeSave } = useGame();

  if (!activeSave?.world?.competitions) {
    return (
      <div className="bg-white/5 p-4 rounded-xl h-full flex items-center justify-center">
        Loading standings...
      </div>
    );
  }

  const regions = ["LEC", "LCK", "LPL", "LCS", "CBLOL", "LCP"];

  const getCompetitionByRegion = (region) => {
    return activeSave.world.competitions.find((c) =>
      c.id.toLowerCase().startsWith(region.toLowerCase())
    );
  };

const getTeamData = (teamId) => {

  console.log(
    "SEARCHING:",
    `"${teamId}"`,
    teams.map(t => `"${t.id}"`)
  );

  return teams.find(
    (team) => team.id === teamId
  );
};
  return (
    <div className="bg-white/5 p-3 rounded-xl h-full flex flex-col">

      {/* GRID REGIONS */}
      <div className="
        grid
        grid-cols-6
        gap-2
        flex-1
        min-h-0
        items-stretch
      ">

        {regions.map((region) => {

          const competition = getCompetitionByRegion(region);

          if (!competition) {
            return (
              <div
                key={region}
                className="
                  bg-white/5
                  p-1.5
                  rounded
                  h-full
                  flex
                  flex-col
                  justify-center
                  items-center
                "
              >
                <h1 className="text-xl font-bold mb-1 opacity-90">
                  {region}
                </h1>
                <p className="text-xs opacity-50">
                  No data
                </p>
              </div>
            );
          }

          const standings = generateStandings(competition);

          return (
            <div
              key={region}
              className="
                bg-white/5
                p-2
                rounded
                h-full
                flex
                flex-col
                overflow-hidden
              "
            >

              {/* HEADER */}
              <h3 className="text-s font-bold mb-2 opacity-90">
                {region}
              </h3>

              {/* LIST */}
              <div className="flex-1 min-h-0 space-y-[5px] overflow-hidden">

                {standings.slice(0, 14).map((team, index) => {
                  const teamData = getTeamData(team.teamId);
                  console.log(team);
                  console.log(team.teamId);
                  return (
                  <div
                    key={team.teamId}
                    className="
                      flex
                      items-center
                      gap-1
                      text-[14px]
                      leading-none
                      opacity-80
                      whitespace-nowrap
                    "
                  >
                    <span className="opacity-50">
                      {index + 1}
                    </span>

                    <img
                        src={teamData?.logo}
                        alt={teamData?.name}
                        className="w-5 h-5 object-contain"
                    />
                    <span className="truncate">
                     {teamData?.name || team.teamId}
                    </span>
                    <span className="ml-auto">
                      {team.wins}-{team.losses}
                    </span>
                  </div>
                );})}

              </div>
            </div>
          );
        })}

      </div>
    </div>
  );
}