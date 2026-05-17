// =====================================================
// scheduleGenerator.js
// =====================================================

import { createMatch }
from "../matches/createMatch";

// =====================================================

export function generateCompetitionSchedule(
  competition
) {

  // ===================================================
  // REAL CALENDAR
  // ===================================================

  if (
    competition.realSchedule
  ) {

    return competition.realSchedule.map(
      match =>

        createMatch({

          competitionId:
            competition.id,

          stageType:
            "REGULAR_SEASON",

          round: 1,

          scheduledDate:
            match.date,

          homeTeamId:
            match.homeTeamId,

          awayTeamId:
            match.awayTeamId,

          bestOf:
            match.bestOf,

          fearlessDraft:
            false,
        })
    );
  }

  // ===================================================
  // FUTURE PROCEDURAL GENERATION
  // ===================================================

  return [];
}