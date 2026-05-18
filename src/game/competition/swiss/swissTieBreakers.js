// =====================================================
// swissTiebreakers.js
// =====================================================

export function computeBuchholz(
  standings
) {

  for (const team of Object.values(standings)) {

    let score = 0;

    for (const opponentId of team.opponents) {

      const opponent =
        standings[opponentId];

      score += opponent.seriesWins;
    }

    team.buchholz = score;
  }
}