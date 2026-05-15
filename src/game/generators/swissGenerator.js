// =====================================================
// swissGenerator.js
// =====================================================

export function generateSwissRound(teams) {

  const shuffled = [...teams]
    .sort(() => Math.random() - 0.5);

  const matches = [];

  for (let i = 0; i < shuffled.length; i += 2) {

    matches.push({
      homeTeamId: shuffled[i],
      awayTeamId: shuffled[i + 1],
    });
  }

  return matches;
}