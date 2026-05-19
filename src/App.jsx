import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NewGame from "./pages/NewGame";
import Teams from "./pages/SelectTeam";
import Dashboard from "./pages/Dashboard";
import LoadGame from "./pages/LoadGame";
import NewManager from "./pages/NewManager";

import  TeamPage from "./pages/TeamPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new-game" element={<NewGame />} />
      <Route path="/teams/:regionId" element={<Teams />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/load-game" element={<LoadGame />} />
      <Route path="/new-manager" element={<NewManager />} />

      <Route path="/team/:teamId" element={<TeamPage />}/>
    </Routes>
  );
}