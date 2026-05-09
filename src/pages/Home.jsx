import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="fixed inset-0">

      {/* BACKGROUND */}
        <img
          src="/background.png"
          className="absolute inset-0 w-full h-full object-cover -z-10"
        />

      {/* CONTENT */}
      <div className="relative h-full">

        <div className="absolute left-1/2 top-[60%] -translate-x-1/2">

          <div className="flex gap-20 bg-black/40 p-4 rounded-xl">

            <button
              onClick={() => navigate("/new-game")}
              className="bg-blue-600 hover:bg-blue-700 px-20 py-5 rounded text-white whitespace-nowrap"
            >
              Nouvelle Partie
            </button>

            <button className="bg-gray-700 hover:bg-gray-600 px-20 py-5 rounded text-white whitespace-nowrap">
              Charger Partie
            </button>

          </div>

        </div>

      </div>
    </div>
  );
}