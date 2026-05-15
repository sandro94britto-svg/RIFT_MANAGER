// =====================================================
// selectors.js
// =====================================================

// -----------------------------------------------------
// NEXT MATCH
// -----------------------------------------------------

export function getNextMatch(
  world,
  teamId
) {

  return world.matches.find(match =>

    (match.homeTeamId === teamId ||
     match.awayTeamId === teamId)

    &&

    match.status === "SCHEDULED"
  );
}

// -----------------------------------------------------
// RECENT RESULTS
// -----------------------------------------------------

export function getRecentResults(
  world,
  teamId,
  limit = 5
) {

  return world.matches

    .filter(match =>

      (match.homeTeamId === teamId ||
       match.awayTeamId === teamId)

      &&

      match.status === "COMPLETED"
    )

    .slice(-limit);
}

// -----------------------------------------------------
// RECENT FORM
// -----------------------------------------------------

export function getRecentForm(
  world,
  teamId,
  limit = 5
) {

  return getRecentResults(
    world,
    teamId,
    limit
  ).map(match => {

    return match.winnerTeamId === teamId
      ? "W"
      : "L";
  });
}