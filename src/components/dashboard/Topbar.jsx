// =====================================================
// TopBar.jsx
// =====================================================

import {
  useLocation,
  useNavigate,
  useParams,
}
from "react-router-dom";

import { useGame }
from "../../context/GameContext";

import { teams }
from "../../data/teams";

// =====================================================

export default function TopBar() {

  const navigate =
    useNavigate();

  const location =
    useLocation();

  const { teamId } =
    useParams();

  const { activeSave } =
    useGame();

  // ===================================================
  // SAFETY
  // ===================================================

  if (!activeSave) {

    return null;
  }

  // ===================================================
  // CURRENT TEAM CONTEXT
  // ===================================================

  const viewedTeam =

    teamId

      ? teams.find(
          team =>
            team.id === teamId
        )

      : activeSave.selectedTeam;

  // ===================================================
  // CURRENT LABEL
  // ===================================================

  let currentLabel =
    activeSave.selectedTeam.name;

  if (
    location.pathname.includes(
      "/calendar"
    )
  ) {
    currentLabel =
      "Calendrier";
  }

  if (
    location.pathname.includes(
      "/club/"
    )
  ) {
    currentLabel =
      viewedTeam?.name;
  }

  // ===================================================
  // DATE FORMAT
  // ===================================================

  const formattedDate =

    new Date(
      activeSave.world.currentDate
    ).toLocaleDateString(
      "fr-FR",
      {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      }
    );

  // ===================================================
  // RENDER
  // ===================================================

  return (

    <div className="
      h-[80px]
      border-b
      border-white/10
      bg-[#151922]
      flex
      items-center
      justify-between
      px-6
      shrink-0
    ">

      {/* LEFT */}

      <div className="
        flex
        items-center
        gap-6
      ">

        {/* NAVIGATION */}

        <div className="
          flex
          items-center
          gap-2
        ">

          <button
            onClick={() => navigate(-1)}
            className="
              w-10
              h-10
              rounded-lg
              bg-white/5
              hover:bg-white/10
              transition
            "
          >
            ←
          </button>

          <button
            onClick={() => navigate(1)}
            className="
              w-10
              h-10
              rounded-lg
              bg-white/5
              hover:bg-white/10
              transition
            "
          >
            →
          </button>

        </div>

        {/* CONTEXT */}

        <div className="
          flex
          items-center
          gap-4
        ">

          {viewedTeam?.logo && (

            <img
              src={viewedTeam.logo}
              alt={viewedTeam.name}
              className="
                w-12
                h-12
                object-contain
              "
            />

          )}

          <div>

            <div className="
              text-white
              text-xl
              font-bold
            ">
              {currentLabel}
            </div>

            <div className="
              text-sm
              text-white/40
            ">
              {viewedTeam?.league || ""}
            </div>

          </div>

        </div>

      </div>

      {/* CENTER */}

      <div className="
        text-white/70
        text-sm
        capitalize
      ">

        {formattedDate}
        {" — "}
        {activeSave.world.currentTime}

      </div>

      {/* RIGHT */}

      <div className="
        flex
        items-center
        gap-6
      ">

        <div className="
          text-white
          text-sm
        ">
          💰{" "}
          {activeSave.money.toLocaleString()}
          €
        </div>

        <button
          className="
            bg-green-600
            hover:bg-green-700
            transition
            px-5
            py-2
            rounded-xl
            font-semibold
            text-white
            shadow-lg
            shadow-green-900/30
          "
        >
          Avancer
        </button>

      </div>

    </div>

  );
}