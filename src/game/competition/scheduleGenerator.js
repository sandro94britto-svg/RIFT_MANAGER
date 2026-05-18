// =====================================================
// scheduleGenerator.js
// =====================================================

import {
  STAGE_TYPES,
}
from "./competitionFormats";

import {
  createMatch
}
from "../matches/createMatch";

// =====================================================

export function generateCompetitionSchedule(
  competition
) {

  const allMatches = [];

  // ===================================================
  // REAL RIOT SCHEDULE
  // ===================================================

  if (
    competition.realSchedule &&
    competition.realSchedule.length > 0
  ) {

    for (
      const [index, matchData]
      of competition.realSchedule.entries()
    ) {

      const match =
        createMatch({

          id:
            `${competition.id}_real_${index}`,

          competitionId:
            competition.id,

          stageType:
            STAGE_TYPES.REGULAR_SEASON,

          round:
            matchData.round || 1,

          scheduledDate:
            matchData.date,

          homeTeamId:
            matchData.homeTeamId,

          awayTeamId:
            matchData.awayTeamId,

          bestOf:
            matchData.bestOf || 1,

          fearlessDraft:
            true,
        });

      allMatches.push(match);
    }
  }

  // ===================================================
  // DEBUG
  // ===================================================

  console.log(
    competition.id,
    allMatches.length
  );

  return allMatches;
}