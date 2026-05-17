// =====================================================
// weeklyScheduler.js
// =====================================================

export function distributeMatchesIntoWeeks({

  pairings,

  totalWeeks,

  matchesPerWeek,
}) {

  // ===================================================
  // GROUP BY ROUND
  // ===================================================

  const roundsMap = {};

  for (const pairing of pairings) {

    const round =
      pairing.round || 1;

    if (!roundsMap[round]) {
      roundsMap[round] = [];
    }

    roundsMap[round].push(pairing);
  }

  // ===================================================
  // CONVERT TO ARRAY
  // ===================================================

  const rounds =
    Object.entries(roundsMap)
      .map(([round, matches]) => ({

        round:
          Number(round),

        matches,
      }))
      .sort((a, b) =>
        a.round - b.round
      );

  // ===================================================
  // CREATE WEEKS
  // ===================================================

  const weeks = Array.from(
    { length: totalWeeks },
    (_, index) => ({

      week: index + 1,

      matches: [],
    })
  );

  // ===================================================
  // DISTRIBUTE ROUNDS
  // ===================================================

  let currentWeek = 0;

  for (const round of rounds) {

    weeks[currentWeek]
      .matches.push(
        ...round.matches
      );

    currentWeek++;

    // loop
    if (currentWeek >= totalWeeks) {
      currentWeek = 0;
    }
  }

  return weeks;
}