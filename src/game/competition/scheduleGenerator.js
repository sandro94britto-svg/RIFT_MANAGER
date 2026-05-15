// =====================================================
// scheduleGenerator.js
// =====================================================

import { STAGE_TYPES }
from "./competitionFormats";

import { createMatch }
from "../matches/createMatch";

import { addDays }
from "../matches/matchUtils";

import { generateRoundRobin }
from "../generators/roundRobinGenerator";

import { generateSwissRound }
from "../generators/swissGenerator";

import { generatePlayoffBracket }
from "../generators/playoffGenerator";

// =====================================================

export function generateCompetitionSchedule(
  competition
) {

  const allMatches = [];

  let currentDate = competition.startDate;

  // ---------------------------------------------------
  // LOOP STAGES
  // ---------------------------------------------------

  for (const stage of competition.format.stages) {

    let pairings = [];

    // -------------------------------------------------
    // REGULAR SEASON
    // -------------------------------------------------

    if (
      stage.type === STAGE_TYPES.REGULAR_SEASON
    ) {

      pairings = generateRoundRobin(
        competition.teams,
        {
          doubleRoundRobin:
            stage.format === "DOUBLE_ROUND_ROBIN",
        }
      );
    }

    // -------------------------------------------------
    // SWISS
    // -------------------------------------------------

    else if (
      stage.type === STAGE_TYPES.SWISS_STAGE
    ) {

      pairings = generateSwissRound(
        competition.teams
      );
    }

    // -------------------------------------------------
    // PLAYOFFS
    // -------------------------------------------------

    else if (
      stage.type === STAGE_TYPES.PLAYOFFS
    ) {

      pairings = generatePlayoffBracket(
        competition.teams.slice(0, 8)
      );
    }

    // -------------------------------------------------
    // CREATE MATCHES
    // -------------------------------------------------

    for (const pairing of pairings) {

      const bestOf =
        stage.matchRules.bestOf ||
        stage.matchRules.early?.bestOf ||
        1;

      const match = createMatch({

        competitionId: competition.id,

        stageType: stage.type,

        round: pairing.round || 1,

        scheduledDate: currentDate,

        homeTeamId: pairing.homeTeamId,
        awayTeamId: pairing.awayTeamId,

        bestOf,

        fearlessDraft:
          stage.draftRules.fearlessDraft,
      });

      allMatches.push(match);

      // next day
      currentDate = addDays(currentDate, 1);
    }
  }

  return allMatches;
}