import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useGame } from "../context/GameContext";
import { initializeWorld } from "../game/world/initializeWorld";

export default function CreateManager() {

  const navigate = useNavigate();
  const location = useLocation();

  const { selectedTeam } = location.state || {};
  const { createSave } = useGame();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [nickname, setNickname] = useState("");
  const [avatar, setAvatar] = useState(null);

  if (!selectedTeam) {
    return (
      <div className="text-white p-10">
        Aucune équipe sélectionnée
      </div>
    );
  }

  // Convert image file -> base64
  const handleAvatarUpload = (file) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setAvatar(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="fixed inset-0 bg-[#1B1F2A] text-white flex items-center justify-center">

      <div className="bg-black/30 p-10 rounded-2xl w-[500px]">

        <div className="flex flex-col items-center">

          <img
            src={selectedTeam.logo}
            className="w-20 h-20 object-contain mb-4"
          />

          <h1 className="text-2xl font-bold mb-6">
            Création du manager
          </h1>

          {/* AVATAR */}
          <label className="mb-4 cursor-pointer">
            <div className="w-24 h-24 rounded-full bg-white/10 flex items-center justify-center overflow-hidden">
              {avatar ? (
                <img src={avatar} className="w-full h-full object-cover" />
              ) : (
                <span className="text-sm opacity-70">Avatar</span>
              )}
            </div>

            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => handleAvatarUpload(e.target.files[0])}
            />
          </label>

          {/* INPUTS */}
          <input
            placeholder="Prénom"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full bg-white/10 p-2 rounded mb-2"
          />

          <input
            placeholder="Nom"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-full bg-white/10 p-2 rounded mb-2"
          />

          <input
            placeholder="Pseudo"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            className="w-full bg-white/10 p-2 rounded mb-6"
          />

          {/* BUTTON */}
          <button
            disabled={!firstName || !lastName || !nickname}
            onClick={() => {

              const world = initializeWorld();
              const newSave = {
                selectedTeam,

                manager: {
                  firstName,
                  lastName,
                  nickname,
                  avatar,
                },

                money: 500000,
                currentWeek: 1,
                currentSplit: 1,
                world,
              };

              createSave(newSave);

              navigate("/dashboard");
            }}
            className="bg-blue-600 hover:bg-blue-700 disabled:opacity-50 px-10 py-3 rounded-xl"
          >
            Commencer la carrière
          </button>

        </div>

      </div>

    </div>
  );
}