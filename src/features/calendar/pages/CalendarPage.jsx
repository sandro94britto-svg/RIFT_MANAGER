import { useState } from "react";
import { useGame } from "../../../context/GameContext";
import MatchList from "../components/MatchList";
import MatchDetails from "../components/MatchDetails";

export default function CalendarPage() {

  const { activeSave } = useGame();

  const world = activeSave.world;
  const teamId = activeSave.selectedTeam.id;

  // ---------------------------------------------------
  // GET TEAM MATCHES
  // ---------------------------------------------------

  const matches = world.competitions.flatMap(
    (competition) =>
      competition.matches.filter(
        (match) =>
          match.homeTeamId === teamId ||
          match.awayTeamId === teamId
      )
  );

  // ---------------------------------------------------
  // SORT BY DATE
  // ---------------------------------------------------

  matches.sort(
    (a, b) =>
      new Date(a.scheduledDate) -
      new Date(b.scheduledDate)
  );

  // ---------------------------------------------------
  // SELECTED MATCH
  // ---------------------------------------------------

  const [selectedMatch, setSelectedMatch] =
    useState(matches[0] || null);

  return (
    <div className="
      grid
      grid-cols-12
      gap-6
      h-full
    ">

      {/* LEFT */}
      <div className="col-span-4 h-full">

        <MatchList
          matches={matches}
          selectedMatch={selectedMatch}
          setSelectedMatch={setSelectedMatch}
        />

      </div>

      {/* RIGHT */}
      <div className="col-span-8 h-full">

        <MatchDetails
          match={selectedMatch}
        />

      </div>

    </div>
  );
}