import { useGame } from "../context/GameContext";

export default function Dashboard() {

  const { activeSave } = useGame();

  if (!activeSave) {
    return (
      <div 
        className="text-white p-10"
       >
        Aucune partie chargée
      </div>
    );
  }

  return (
    <div 
        className="text-white p-10"
        >
      <h1>{activeSave.selectedTeam.name}</h1>
      <p>{activeSave.money} €</p>
    </div>
  );
}
