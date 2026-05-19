// =====================================================
// initializeWorld.js
// =====================================================

import { competitions }
from "../competition/competitions";

import {
  generateCompetitionSchedule
}
from "../competition/scheduleGenerator";

// =====================================================

console.log(
  "INITIALIZE WORLD CALLED"
);

export function initializeWorld() {

  // ---------------------------------------------------
  // WINTER SPLITS ONLY
  // ---------------------------------------------------

  const activeCompetitions =
    competitions.filter(
      comp => comp.split === "WINTER"
    );

  // ---------------------------------------------------
  // GENERATE MATCHES
  // ---------------------------------------------------

  const initializedCompetitions = [];

  const matches = [];

  for (
    const competition
    of activeCompetitions
  ) {
    console.log(
  "GENERATING:",
  competition.id
);

    const generatedMatches =
      generateCompetitionSchedule(
        competition
      );
      console.log(
  competition.id,
  generatedMatches.length
);

    const initializedCompetition = {

      ...competition,

      matches:
        generatedMatches,
    };

    initializedCompetitions.push(
      initializedCompetition
    );

    matches.push(
      ...generatedMatches
    );
  }

  // ---------------------------------------------------
  // INITIAL WORLD
  // ---------------------------------------------------

  return {

    currentDate:
      "2026-01-01",

    competitions:
      initializedCompetitions,

    matches,
  };
}