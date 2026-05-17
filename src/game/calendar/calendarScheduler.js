// =====================================================
// calendarScheduler.js
// =====================================================

import { addDays }
from "../matches/matchUtils";

// =====================================================

export function scheduleWeekMatches({

  weekMatches,

  weekStartDate,

  allowedDays,

  matchesPerDay = 2,
}) {

  const scheduledMatches = [];

  // ===================================================
  // CREATE PLAYDAYS
  // ===================================================

  const playdays =
    allowedDays.map(day => ({

      day,

      matches: [],

      teamsUsed: new Set(),
    }));

  // ===================================================
  // ASSIGN MATCHES
  // ===================================================

  for (const match of weekMatches) {

    const {

      homeTeamId,
      awayTeamId,

    } = match;

    let assigned = false;

    // =================================================
    // TRY EACH PLAYDAY
    // =================================================

    for (const playday of playdays) {

      // max matches reached
      if (
        playday.matches.length >=
        matchesPerDay
      ) {
        continue;
      }

      // one BO/day/team
      if (

        playday.teamsUsed.has(
          homeTeamId
        ) ||

        playday.teamsUsed.has(
          awayTeamId
        )
      ) {
        continue;
      }

      // ===============================================
      // ASSIGN
      // ===============================================

      playday.matches.push(match);

      playday.teamsUsed.add(
        homeTeamId
      );

      playday.teamsUsed.add(
        awayTeamId
      );

      assigned = true;

      break;
    }

    // =================================================
    // FAILSAFE
    // =================================================

    if (!assigned) {

      // force into least loaded day

      const fallbackDay =
        [...playdays]
          .sort(
            (a, b) =>
              a.matches.length -
              b.matches.length
          )[0];

      fallbackDay.matches.push(match);
    }
  }

  // ===================================================
  // BUILD DATES
  // ===================================================

  for (const playday of playdays) {

    const baseDate =
      new Date(weekStartDate);

    const currentDay =
      baseDate.getDay();

    let diff =
      playday.day - currentDay;

    if (diff < 0) {
      diff += 7;
    }

    const scheduledDate =
      addDays(
        weekStartDate,
        diff
      );

    for (const match of playday.matches) {

      scheduledMatches.push({

        ...match,

        scheduledDate,
      });
    }
  }
console.log(
  "SCHEDULED WEEK:",
  scheduledMatches.map(match => ({
    round: match.round,
    home: match.homeTeamId,
    away: match.awayTeamId,
    date: match.scheduledDate,
  }))
);
  return scheduledMatches;
}