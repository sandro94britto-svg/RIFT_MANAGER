import { useGame } from "../context/GameContext";
import { useNavigate } from "react-router-dom";

export default function LoadGame() {

  const { saves, loadSave } = useGame();

  const navigate = useNavigate();

  return (
    <div className="fixed inset-0 bg-[#1B1F2A] text-white p-10">

      <h1 className="text-3xl font-bold mb-8">
        Charger une partie
      </h1>

      <div className="flex flex-col gap-4">

        {saves.length === 0 && (
          <p>Aucune sauvegarde trouvée</p>
        )}

        {saves.map(save => (
          <button
            key={save.id}
            onClick={() => {
              loadSave(save.id);
              navigate("/dashboard");
            }}
            className="
              bg-white/10
              hover:bg-white/20
              transition
              p-5
              rounded-xl
              text-left
            "
          >
        <div className="flex items-center gap-5">

            <img
                src={save.selectedTeam.logo}
                className="w-16 h-16 object-contain"
            />
            <div>
                <div className="text-sm opacity-70 mt-1">
                 Semaine {save.currentWeek}
             </div>

                <div className="text-sm opacity-70">
                 {save.money.toLocaleString()} €
                </div>
            </div>
        </div>

          </button>
        ))}
        <button
          onClick={() => navigate("/")}
          className="mt-4 text-white/60 hover:text-white transition"
        >
          ← Retour
        </button>
      </div>

    </div>
  );
}