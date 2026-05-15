import { useGame } from "../../../context/GameContext";
import { players }  from "../../../data/players";




export default function StarterRosterWidget() {

  const { activeSave } = useGame();

  const teamPlayers = players.filter(
  player => player.teamId === activeSave.selectedTeam.id
);

  return (
    <div className="
      bg-white/5
      rounded-2xl
      h-full
      flex
      flex-col
      justify-between
      py-1
    ">

      {/* HEADER */}

      {/* PLAYERS */}
      <div className="
        grid
        grid-cols-5
        gap-4
        flex-1
      ">

        {teamPlayers.map((player) => (

          <div
            key={player.id}
            className="
              bg-white/5
              hover:bg-white/10
              transition
              rounded-xl
              p-0
              flex
              flex-col
              items-center
              justify-center
            "
          >

            {/* IMAGE */}
            <img
              src={player.picture}
              className="
                w-30
                h-30
                object-cover
                mb-0
              "
            />

            {/* ROLE */}
            <div className="text-xs text-white/40 uppercase mb-1">
              {player.role}
            </div>

            {/* ALIAS */}
            <div className="text-white font-bold text-lg">
              {player.alias}
            </div>


            {/* RATING */}
            <div className={`
              px-3
              py-1
              rounded-lg
              text-sm
              font-bold

              ${player.rating >= 90
                ? "bg-purple-500 text-white"
                : player.rating >= 80
                ? "bg-blue-500 text-white"
                : player.rating >= 70
                ? "bg-yellow-500 text-black"
                : "bg-gray-500 text-white"
              }
            `}>
              {player.rating}
            </div>

          </div>

        ))}

      </div>

    </div>
  );
}