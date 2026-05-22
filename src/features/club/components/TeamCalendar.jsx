// =====================================================
// TeamCalendar.jsx
// =====================================================

import { useState } from "react";

import MatchList
from "../../calendar/components/MatchList";

import MatchDetails
from "../../calendar/components/MatchDetails";

export default function TeamCalendar({
  world,
  teamId,
}) {

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
    min-h-0
    overflow-hidden
  ">

    {/* LEFT */}

    <div className="
      col-span-4
      h-full
      min-h-0
    ">

      <MatchList
        matches={matches}
        selectedMatch={selectedMatch}
        setSelectedMatch={setSelectedMatch}
      />

    </div>

    {/* RIGHT */}

    <div className="
      col-span-8
      h-full
      min-h-0
    ">

      <MatchDetails
        match={selectedMatch}
      />

    </div>

  </div>
);
}