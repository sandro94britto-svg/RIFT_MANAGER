// =====================================================
// crossGroupGenerator.js
// =====================================================

// =====================================================
// SHUFFLE
// =====================================================

function shuffle(array) {

  return [...array].sort(
    () => Math.random() - 0.5
  );
}

// =====================================================
// CROSS GROUP GENERATOR
// =====================================================

export function generateCrossGroupPairings({

  groups,
}) {

  const pairings = [];

  const groupA = [...groups.A];
  const groupB = [...groups.B];

  // ===================================================
  // GENERATE 4 ROUNDS
  // ===================================================

  for (let round = 0; round < 4; round++) {

    for (let i = 0; i < 5; i++) {

      const opponentIndex =
        (i + round) % 5;

      pairings.push({

        round:
          round < 2
            ? 1
            : 2,

        homeTeamId:
          groupA[i],

        awayTeamId:
          groupB[opponentIndex],
      });
    }
  }

  return pairings;
}

// =====================================================
// SEEDED WEEK 3
// =====================================================

export function generateSeededCrossGroupPairings({

  groups,

  previousMatchups = [],
}) {

  const pairings = [];

  const groupA = groups.A;
  const groupB = groups.B;

  // ===================================================
  // TRACK EXISTING MATCHUPS
  // ===================================================

  const existing =
    new Set();

  for (const match of previousMatchups) {

    const key = [

      match.homeTeamId,
      match.awayTeamId,

    ].sort().join("_");

    existing.add(key);
  }

  // ===================================================
  // BUILD SEEDING MATCHES
  // ===================================================

  const usedB = new Set();

  for (let i = 0; i < 5; i++) {

    const teamA = groupA[i];

    let foundOpponent = null;

    for (let j = 0; j < 5; j++) {

      const teamB = groupB[j];

      if (usedB.has(teamB)) {
        continue;
      }

      const key = [

        teamA,
        teamB,

      ].sort().join("_");

      // avoid rematch
      if (existing.has(key)) {
        continue;
      }

      foundOpponent = teamB;

      usedB.add(teamB);

      break;
    }

    // fallback
    if (!foundOpponent) {

      foundOpponent =
        groupB.find(
          team => !usedB.has(team)
        );

      usedB.add(foundOpponent);
    }

    pairings.push({

      round: 3,

      homeTeamId: teamA,

      awayTeamId: foundOpponent,
    });
  }

  return pairings;
}