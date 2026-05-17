import { useNavigate } from "react-router-dom";
import { regions } from "../data/regions";

export default function NewGame() {

  const navigate = useNavigate();

  // ===================================================
  // ONLY PLAYABLE REGIONS
  // ===================================================

  const playableRegions =
    regions.filter(
      (region) => region.isPlayable !== false
    );

  return (

    <div className="fixed inset-0">

      {/* BACKGROUND */}
      <img
        src="/background.png"
        className="
          absolute inset-0
          w-full h-full
          object-cover
          -z-10
        "
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/50" />

      {/* CONTENT */}
      <div
        className="
          relative
          h-full
          flex
          flex-col
          items-center
          justify-start
          pt-115
          gap-10
        "
      >

        {/* TITLE */}
        <h1
          className="
            text-white
            text-4xl
            font-bold
          "
        >
          Choisis ta région
        </h1>

        {/* GRID */}
        <div
          className="
            grid
            grid-cols-6
            gap-3
            justify-center
          "
        >

          {playableRegions.map((region) => (

            <button
              key={region.id}
              onClick={() =>
                navigate(`/teams/${region.id}`)
              }
              className="
                w-64
                h-40
                bg-white/10
                hover:bg-white/20
                backdrop-blur-md
                rounded-xl
                flex
                flex-col
                items-center
                justify-center
                gap-3
                text-white
                transition
              "
            >

              <img
                src={region.logo}
                className="
                  w-32
                  h-32
                  object-contain
                "
              />

              <span
                className="
                  text-lg
                  font-semibold
                "
              >
                {region.name}
              </span>

            </button>

          ))}

        </div>

        {/* BACK BUTTON */}
        <button
          onClick={() => navigate("/")}
          className="
            mt-6
            text-white/70
            hover:text-white
            transition
          "
        >
          Retour
        </button>

      </div>

    </div>
  );
}