// =====================================================
// roundRobinGenerator.js
// =====================================================

export function generateRoundRobin(teams, options = {}) {

  const {
    doubleRoundRobin = false,
    shuffle = true,
  } = options;

  let teamList = [...teams];

  // ---------------------------------------------------
  // RANDOMIZE
  // ---------------------------------------------------

  if (shuffle) {
    teamList.sort(() => Math.random() - 0.5);
  }

  // ---------------------------------------------------
  // BYE MANAGEMENT
  // ---------------------------------------------------

  const hasBye = teamList.length % 2 !== 0;

  if (hasBye) {
    teamList.push("BYE");
  }

  const rounds = [];
  const totalRounds = teamList.length - 1;
  const half = teamList.length / 2;

  // ---------------------------------------------------
  // CIRCLE METHOD
  // ---------------------------------------------------

  for (let round = 0; round < totalRounds; round++) {

    const matchups = [];

    for (let i = 0; i < half; i++) {

      const home = teamList[i];
      const away = teamList[teamList.length - 1 - i];

      if (home !== "BYE" && away !== "BYE") {

        matchups.push({
          round: round + 1,
          homeTeamId: home,
          awayTeamId: away,
        });

      }
    }

    rounds.push(matchups);

    // rotation
    const fixed = teamList[0];

    const rotating = teamList.slice(1);

    rotating.unshift(rotating.pop());

    teamList = [fixed, ...rotating];
  }

  // ---------------------------------------------------
  // DOUBLE ROUND ROBIN
  // ---------------------------------------------------

  if (doubleRoundRobin) {

    const reverseRounds = rounds.map((matches, index) => {

      return matches.map(match => ({
        round: totalRounds + index + 1,
        homeTeamId: match.awayTeamId,
        awayTeamId: match.homeTeamId,
      }));

    });

    rounds.push(...reverseRounds);
  }

  return rounds.flat();
}