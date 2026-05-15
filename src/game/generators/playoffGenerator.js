// =====================================================
// playoffGenerator.js
// =====================================================

export function generatePlayoffBracket(teams) {

  const seeded = [...teams];

  const matches = [];

  let left = 0;
  let right = seeded.length - 1;

  while (left < right) {

    matches.push({
      homeTeamId: seeded[left],
      awayTeamId: seeded[right],
    });

    left++;
    right--;
  }

  return matches;
}