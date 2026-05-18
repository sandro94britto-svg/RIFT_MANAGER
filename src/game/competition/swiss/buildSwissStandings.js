// =====================================================
// swissStandings.js
// =====================================================

export function buildSwissStandings(
  teams
) {

  const standings = {};

  for (const teamId of teams) {

    standings[teamId] = {

      teamId,

      seriesWins: 0,
      seriesLosses: 0,

      gameWins: 0,
      gameLosses: 0,

      opponents: [],

      buchholz: 0,

      qualified: false,
      eliminated: false,
    };
  }

  return standings;
}

// =====================================================

export function registerSwissResult({

  standings,
  winnerId,
  loserId,

  winnerGames,
  loserGames,
}) {

  standings[winnerId]
    .seriesWins++;

  standings[loserId]
    .seriesLosses++;

  standings[winnerId]
    .gameWins += winnerGames;

  standings[winnerId]
    .gameLosses += loserGames;

  standings[loserId]
    .gameWins += loserGames;

  standings[loserId]
    .gameLosses += winnerGames;

  standings[winnerId]
    .opponents.push(loserId);

  standings[loserId]
    .opponents.push(winnerId);

  // ============================================
  // QUALIFICATION
  // ============================================

  if (
    standings[winnerId]
      .seriesWins >= 3
  ) {

    standings[winnerId]
      .qualified = true;
  }

  if (
    standings[loserId]
      .seriesLosses >= 3
  ) {

    standings[loserId]
      .eliminated = true;
  }
}