// =====================================================
// scheduleGenerator.js
// =====================================================

import {
  STAGE_TYPES,
  FORMAT_TYPES,
} from "./competitionFormats";

import { createMatch }
from "../matches/createMatch";

import { generateRoundRobin }
from "../generators/roundRobinGenerator";

import { generateSwissRound }
from "../generators/swissGenerator";

import {
  distributeMatchesIntoWeeks
}
from "../calendar/weeklyScheduler";

import {
  scheduleWeekMatches
}
from "../calendar/calendarScheduler";

import {
  generateCrossGroupPairings,
}
from "../generators/crossGroupGenerator";

// =====================================================

export function generateCompetitionSchedule(
  competition
) {

  const allMatches = [];

  let globalWeekOffset = 0;

  // ===================================================
  // LOOP STAGES
  // ===================================================

  for (const stage of competition.format.stages) {

    let pairings = [];

    // =================================================
    // REGULAR SEASON
    // =================================================

    if (

      stage.type ===
      STAGE_TYPES.REGULAR_SEASON
    ) {

      // ===============================================
      // SINGLE ROUND ROBIN
      // ===============================================

      if (

        stage.format ===
        FORMAT_TYPES.SINGLE_ROUND_ROBIN
      ) {

        pairings =
          generateRoundRobin(
            competition.teams,
            {
              doubleRoundRobin: false,
            }
          );
      }

      // ===============================================
      // DOUBLE ROUND ROBIN
      // ===============================================

      else if (

        stage.format ===
        FORMAT_TYPES.DOUBLE_ROUND_ROBIN
      ) {

        pairings =
          generateRoundRobin(
            competition.teams,
            {
              doubleRoundRobin: true,
            }
          );
      }

      // ===============================================
      // SWISS
      // ===============================================

      else if (

        stage.format ===
        FORMAT_TYPES.SWISS
      ) {

        pairings =
          generateSwissRound(
            competition.teams
          );
      }

      // ===============================================
      // CROSS GROUP
      // ===============================================

      else if (

        stage.format ===
        FORMAT_TYPES.CROSS_GROUP
      ) {

        pairings =
          generateCrossGroupPairings({

            groups:
              competition.format
                .initialGroups,
          });
      }

      // ===============================================
      // GROUPS
      // ===============================================

      else if (

        stage.format ===
        FORMAT_TYPES.GROUPS
      ) {

        pairings = [];
      }
    }

    // =================================================
    // DYNAMIC STAGES
    // =================================================

    else if (

      stage.type ===
      STAGE_TYPES.SEEDING_STAGE ||

      stage.type ===
      STAGE_TYPES.PLAY_IN ||

      stage.type ===
      STAGE_TYPES.PLAYOFFS ||

      stage.type ===
      STAGE_TYPES.KNOCKOUT
    ) {

      // IMPORTANT:
      // generated later dynamically

      continue;
    }

    // =================================================
    // DEBUG PAIRINGS
    // =================================================

    console.log(
      "PAIRINGS:",
      competition.id,
      pairings.map(p => ({
        round: p.round,
        home: p.homeTeamId,
        away: p.awayTeamId,
      }))
    );

    // =================================================
    // DISTRIBUTE INTO WEEKS
    // =================================================

    const weeks =
      distributeMatchesIntoWeeks({

        pairings,

        teams:
          competition.teams,

        totalWeeks:
          stage.calendarRules
            ?.totalWeeks || 3,

        matchesPerWeek:
          stage.calendarRules
            ?.matchesPerWeek || 15,
      });

    // =================================================
    // SCHEDULE WEEKS
    // =================================================

    for (const week of weeks) {

      const weekStartDate =
        new Date(
          competition.startDate
        );

      weekStartDate.setDate(

        weekStartDate.getDate() +

        (globalWeekOffset * 7)
      );

      const scheduledMatches =
        scheduleWeekMatches({

          weekMatches:
            week.matches,

          weekStartDate,

          allowedDays:
            stage.calendarRules
              ?.allowedDays || [6,0,1],

          matchesPerDay:
            stage.calendarRules
              ?.matchesPerDay || 5,
        });

      // ===============================================
      // CREATE MATCHES
      // ===============================================

      for (
        const pairing
        of scheduledMatches
      ) {

        const bestOf =

          stage.matchRules?.bestOf ||

          stage.matchRules?.early?.bestOf ||

          1;

        const match =
          createMatch({

            competitionId:
              competition.id,

            stageType:
              stage.type,

            round:
              pairing.round || 1,

            scheduledDate:
              pairing.scheduledDate,

            homeTeamId:
              pairing.homeTeamId,

            awayTeamId:
              pairing.awayTeamId,

            bestOf,

            fearlessDraft:
              stage.draftRules
                ?.fearlessDraft || false,
          });

        allMatches.push(match);
      }

      globalWeekOffset++;
    }
  }

  // ===================================================
  // DEBUG TEAM
  // ===================================================

  const debugTeam = "dk";

  const teamMatches =
    allMatches.filter(match =>

      match.homeTeamId === debugTeam ||

      match.awayTeamId === debugTeam
    );

  console.log(
    "DK MATCHES:",
    teamMatches.map(match => ({
      round: match.round,

      opponent:

        match.homeTeamId === debugTeam
          ? match.awayTeamId
          : match.homeTeamId,

      date: match.scheduledDate,
    }))
  );

  return allMatches;
}