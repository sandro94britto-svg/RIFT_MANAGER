// =====================================================
// initializeWorld.js
// =====================================================

import { competitions }
from "../competition/competitions";

import { generateCompetitionSchedule }
from "../competition/scheduleGenerator";

// =====================================================

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

  const matches = [];

  for (const competition of activeCompetitions) {

    const generated =
      generateCompetitionSchedule(
        competition
      );

    matches.push(...generated);
  }

  // ---------------------------------------------------
  // INITIAL WORLD
  // ---------------------------------------------------

  return {

    currentDate: "2026-01-01",

    competitions: activeCompetitions,

    matches,

  };
}