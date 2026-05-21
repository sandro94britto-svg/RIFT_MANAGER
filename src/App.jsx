// =====================================================
// App.jsx
// =====================================================

import {
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/Home";
import NewGame from "./pages/NewGame";
import Teams from "./pages/SelectTeam";
import Dashboard from "./pages/Dashboard";
import LoadGame from "./pages/LoadGame";
import NewManager from "./pages/NewManager";

import HubPage
from "./features/hub/pages/HubPage";

import CalendarPage
from "./features/calendar/pages/CalendarPage";

import ClubPage
from "./features/club/pages/ClubPage";

// =====================================================

export default function App() {

  return (

    <Routes>

      <Route
        path="/"
        element={<Home />}
      />

      <Route
        path="/new-game"
        element={<NewGame />}
      />

      <Route
        path="/teams/:regionId"
        element={<Teams />}
      />

      <Route
        path="/load-game"
        element={<LoadGame />}
      />

      <Route
        path="/new-manager"
        element={<NewManager />}
      />

      {/* DASHBOARD */}

      <Route
        path="/dashboard"
        element={<Dashboard />}
      >

        <Route
          index
          element={<HubPage />}
        />

        <Route
          path="calendar"
          element={<CalendarPage />}
        />

        <Route
          path="club/:teamId"
          element={<ClubPage />}
        />

      </Route>

    </Routes>
  );
}