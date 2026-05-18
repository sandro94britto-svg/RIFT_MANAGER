// =====================================================
// generatePlayoffBracket.js
// =====================================================

export function generatePlayoffBracket({

  standings,
  bracket,
}) {

  return bracket.map((match) => ({

    id:
      match.id,

    round:
      match.round,

    bestOf:
      match.bestOf,

    sideA:
      resolveSide({
        value: match.sideA,
        standings,
      }),

    sideB:
      resolveSide({
        value: match.sideB,
        standings,
      }),

    winnerTo:
      match.winnerTo,

    loserTo:
      match.loserTo,

    championshipMatch:
      match.championshipMatch || false,

    eliminationMatch:
      match.eliminationMatch || false,
  }));
}

// =====================================================

function resolveSide({

  value,
  standings,
}) {

  // ---------------------------------------------------
  // SEED
  // ---------------------------------------------------

  if (
    value.startsWith("SEED_")
  ) {

    const seed =
      parseInt(
        value.replace("SEED_", "")
      );

    return standings[seed - 1];
  }

  // ---------------------------------------------------
  // WINNER / LOSER PLACEHOLDER
  // ---------------------------------------------------

  return value;
}
