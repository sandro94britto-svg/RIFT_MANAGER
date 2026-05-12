import { useGame } from "../context/GameContext";
import { useNavigate } from "react-router-dom";
import { Trash2 } from "lucide-react";
import { useState } from "react";

export default function LoadGame() {

  const { saves, loadSave, deleteSave } = useGame();

  const navigate = useNavigate();
  const [saveToDelete, setSaveToDelete] = useState(null);

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

        <div
            key={save.id}
            className="
            relative
            bg-white/10
            hover:bg-white/20
            transition
            p-5
            rounded-xl
            text-left
            cursor-pointer
            "
            onClick={() => {
            loadSave(save.id);
            navigate("/dashboard");
            }}
        >

            <div className="flex items-center gap-5">

            <img
                src={save.selectedTeam.logo}
                className="w-16 h-16 object-contain"
            />

            <div>

                <div className="text-lg font-bold">
                {save.selectedTeam.name}
                </div>

                <div className="text-sm opacity-70 mt-1">
                Semaine {save.currentWeek}
                </div>

                <div className="text-sm opacity-70">
                {save.money.toLocaleString()} €
                </div>

            </div>

            </div>

            {/* DELETE BUTTON */}
            <button
            onClick={(e) => {
                e.stopPropagation();
                setSaveToDelete(save);
            }}
            className="
                absolute
                top-4
                right-4
                p-2
                rounded-lg
                bg-red-500/20
                hover:bg-red-500/40
                transition
            "
            >
            <Trash2 size={18} />
            </button>

        </div>

        ))}
        <button
          onClick={() => navigate("/")}
          className="mt-4 text-white/60 hover:text-white transition"
        >
          ← Retour
        </button>
      </div>
      {saveToDelete && (

  <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">

    <div className="bg-[#252A38] p-8 rounded-2xl w-[400px]">

      <h2 className="text-2xl font-bold mb-4">
        Supprimer la sauvegarde ?
      </h2>

      <p className="opacity-70 mb-8">
        Cette action est irréversible.
      </p>

      <div className="flex justify-end gap-4">

        <button
          onClick={() => setSaveToDelete(null)}
          className="
            px-5 py-2
            bg-white/10
            hover:bg-white/20
            rounded-lg
          "
        >
          Annuler
        </button>

        <button
          onClick={() => {
            deleteSave(saveToDelete.id);
            setSaveToDelete(null);
          }}
          className="
            px-5 py-2
            bg-red-600
            hover:bg-red-500
            rounded-lg
          "
        >
          Supprimer
        </button>

      </div>

    </div>

  </div>
)}
    </div>
  );
}