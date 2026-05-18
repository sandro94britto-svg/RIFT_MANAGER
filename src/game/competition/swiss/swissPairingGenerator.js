// =====================================================
// swissPairingGenerator.js
// =====================================================

function shuffle(array) {

  return [...array]
    .sort(() => Math.random() - 0.5);
}

// =====================================================

export function generateSwissRound({

  standings,
  round,
}) {

  const activeTeams =
    Object.values(standings)
      .filter(team =>

        !team.qualified &&
        !team.eliminated
      );

  // ============================================
  // GROUP BY RECORD
  // ============================================

  const groups = {};

  for (const team of activeTeams) {

    const key =
      `${team.seriesWins}-${team.seriesLosses}`;

    if (!groups[key]) {

      groups[key] = [];
    }

    groups[key].push(team.teamId);
  }

  // ============================================
  // CREATE PAIRINGS
  // ============================================

  const pairings = [];

  for (const record in groups) {

    const teams =
      shuffle(groups[record]);

    while (teams.length >= 2) {

      const home =
        teams.shift();

      const away =
        teams.shift();

      pairings.push({

        round,

        homeTeamId: home,
        awayTeamId: away,
      });
    }
  }

  return pairings;
}