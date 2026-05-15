// =====================================================
// standings.js
// =====================================================

export function generateStandings(
  competition
) {

  const standings =
    competition.teams.map(teamId => ({

      teamId,

      wins: 0,
      losses: 0,

      gameWins: 0,
      gameLosses: 0,

      points: 0,

    }));

  // ---------------------------------------------------
  // ALPHABETICAL ORDER
  // ---------------------------------------------------

  standings.sort((a, b) =>
    a.teamId.localeCompare(b.teamId)
  );

  return standings;
}