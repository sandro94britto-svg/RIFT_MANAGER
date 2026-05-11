import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { teams } from "../data/teams";
import { players } from "../data/players";
import { regions } from "../data/regions";
import { useGame } from "../context/GameContext";

export default function SelectTeam() {
  const { regionId } = useParams();
  const currentRegion = regions.find((region) => region.id === regionId);

  const navigate = useNavigate();
  const { createSave } = useGame();
  const [selectedTeam, setSelectedTeam] = useState(null);
  const teamsInRegion = teams.filter(
    (team) => team.regionId === regionId
  );
  const playersInTeam = players.filter(
    (p) => p.teamId === selectedTeam?.id
  );

  const roleIcons = {
    TOP: "/roles/top.png",
    JGL: "/roles/jgl.png",
    MID: "/roles/mid.png",
    ADC: "/roles/adc.png",
    SUP: "/roles/sup.png",
  };

  const roleOrder = ["TOP", "JGL", "MID", "ADC", "SUP"];

  const getRatingStyle = (rating) => {
    if (rating >= 90) return "bg-purple-500/20 text-purple-300";
    if (rating >= 85) return "bg-blue-500/20 text-blue-300";
    if (rating >= 80) return "bg-green-500/20 text-green-300";
    if (rating >= 70) return "bg-yellow-500/20 text-yellow-300";
    return "bg-gray-500/20 text-gray-300";
  };

  return (
    <div className="fixed inset-0 flex overflow-hidden">

      {/* BACKGROUND */}
      <img
        src="/background.png"
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />
      <div className="absolute inset-0 bg-black/60 -z-10" />

      {/* LEFT — TEAMS */}
      <div className="w-1/3 flex flex-col h-full p-6">

<div className="flex justify-center items-center mb-2">
  <img
    src={currentRegion?.banner}
    className="h-20 object-contain drop-shadow-[0_0_20px_rgba(255,255,255,0.25)]"
  />
</div>

        <div className={`
             grid gap-2 flex-1 auto-rows-fr
             ${teamsInRegion.length > 12 ? "grid-cols-2" : "grid-cols-1"}
           `}>
          {teamsInRegion.map((team) => (
            <button
              key={team.id}
              onClick={() => setSelectedTeam(team)}
              className={`flex items-center gap-3 p-3 rounded-xl transition
                bg-white/20 backdrop-blur-md border border-white/20
                hover:bg-white/30 hover:scale-[1.02]
                ${selectedTeam?.id === team.id ? "border-white/60 bg-white/30" : ""}
              `}
            >
              <img src={team.logo} 
              className="h-[70%] max-h-10 object-contain"
              style={{
                gridTemplateRows: `repeat(${Math.max(teamsInRegion.length, 1)}, minmax(0, 1fr))`,
              }} 
                />
        
              <span className="text-white text-sm font-medium truncate">
              {team.name}
              </span>
            </button>
          ))}
        </div>

        {/* RETOUR */}
        <button
          onClick={() => navigate("/new-game")}
          className="mt-4 text-white/60 hover:text-white transition"
        >
          ← Retour
        </button>
      </div>

      {/* RIGHT — PLAYERS */}
      <div className="w-2/3 p-10 pt-16 flex flex-col">

        {selectedTeam && (
          <>
            <h2 className="text-white text-3xl font-bold mb-40">
              {selectedTeam.name}
            </h2>

            <div className="grid grid-cols-5 gap-6">
              {playersInTeam
                .sort((a, b) => roleOrder.indexOf(a.role) - roleOrder.indexOf(b.role))
                .map((p) => (
                  <div
                    key={p.id}
                    className={`
                      flex flex-col items-center text-white
                      bg-white/20 hover:bg-white/30 p-4 rounded-xl
                      transition hover:scale-105}
                    `}
                  >
                    <img
                      src={p.picture}
                      className="w-50 h-50 object-cover rounded-xl mb-4"
                    />
                     <img
                      src={roleIcons[p.role]}
                      className="w-10 h-10 mb-2 opacity-80"
                    />

                    <div className="font-bold text-center">
                      {p.alias}
                    </div>

                    <div className="text-sm text-white/70 mb-2">
                      {p.role}
                    </div>

                    <div className={`px-3 py-1 rounded-full text-sm font-semibold ${getRatingStyle(p.rating)}`}>
                      {p.rating}
                    </div>
                  </div>
                ))}
            </div>

            {/* VALIDATE BUTTON */}
            <div className="mt-auto flex justify-end pt-10">
              <button
                onClick={() => {
                  setTimeout(() => {
                    navigate("/new-manager", {
                      state : {
                        selectedTeam,
                      }
                    });
                  }, 0);
                }}
              className="px-6 py-3 bg-green-600 hover:bg-green-500 text-white rounded-lg"
            >
              Valider
            </button>
          </div>
          </>
        )}

        {!selectedTeam && (
          <div className="text-white/60">
            Sélectionne une équipe
          </div>
        )}
      </div>
    </div>
  );
}
