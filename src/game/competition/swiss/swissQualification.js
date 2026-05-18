// =====================================================
// swissQualification.js
// =====================================================

export function getQualifiedTeams(
  standings
) {

  const qualified =
    Object.values(standings)
      .filter(team => team.qualified);

  qualified.sort((a, b) => {

    const gameDiffA =
      a.gameWins - a.gameLosses;

    const gameDiffB =
      b.gameWins - b.gameLosses;

    // ============================================
    // GAME DIFFERENTIAL
    // ============================================

    if (
      gameDiffB !== gameDiffA
    ) {

      return gameDiffB - gameDiffA;
    }

    // ============================================
    // BUCHHOLZ
    // ============================================

    return b.buchholz - a.buchholz;
  });

  return qualified;
}