// =====================================================
// swissRoundResolver.js
// =====================================================

export function swissRoundResolver({
  standings,
  matches,
}) {

  // ===================================================
  // LOOP MATCHES
  // ===================================================

  for (const match of matches) {

    // IMPORTANT
    // skip unfinished matches

    if (
      !match.winnerTeamId
    ) {
      continue;
    }

    // =================================================
    // IDS
    // =================================================

    const winnerId =
      match.winnerTeamId;

    const loserId =

      match.homeTeamId === winnerId
        ? match.awayTeamId
        : match.homeTeamId;

    // =================================================
    // STANDINGS REFERENCES
    // =================================================

    const winner =
      standings[winnerId];

    const loser =
      standings[loserId];

    // =================================================
    // MATCH RECORD
    // =================================================

    winner.wins += 1;

    loser.losses += 1;

    // =================================================
    // GAME SCORE
    // =================================================

    const homeScore =
      match.homeScore || 0;

    const awayScore =
      match.awayScore || 0;

    // -----------------------------------------------
    // WINNER SIDE
    // -----------------------------------------------

    if (
      match.homeTeamId === winnerId
    ) {

      winner.gameWins +=
        homeScore;

      winner.gameLosses +=
        awayScore;

      loser.gameWins +=
        awayScore;

      loser.gameLosses +=
        homeScore;
    }

    // -----------------------------------------------
    // AWAY SIDE
    // -----------------------------------------------

    else {

      winner.gameWins +=
        awayScore;

      winner.gameLosses +=
        homeScore;

      loser.gameWins +=
        homeScore;

      loser.gameLosses +=
        awayScore;
    }

    // =================================================
    // OPPONENT HISTORY
    // =================================================

    if (
      !winner.opponents.includes(
        loserId
      )
    ) {

      winner.opponents.push(
        loserId
      );
    }

    if (
      !loser.opponents.includes(
        winnerId
      )
    ) {

      loser.opponents.push(
        winnerId
      );
    }
  }

  // ===================================================
  // RETURN UPDATED STANDINGS
  // ===================================================

  return standings;
}