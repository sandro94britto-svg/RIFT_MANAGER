// =====================================================
// competitionFormats.js - FULL WORLD V2
// Stage-based competitive engine
// =====================================================

// -----------------------------------------------------
// STAGE TYPES
// -----------------------------------------------------

export const STAGE_TYPES = {

  REGULAR_SEASON: "REGULAR_SEASON",
  PLAY_IN: "PLAY_IN",
  PLAYOFFS: "PLAYOFFS",
  KNOCKOUT: "KNOCKOUT",
  SEEDING_STAGE: "SEEDING_STAGE",
};

// -----------------------------------------------------
// FORMAT TYPES
// -----------------------------------------------------

export const FORMAT_TYPES = {

  SINGLE_ROUND_ROBIN:
    "SINGLE_ROUND_ROBIN",
  DOUBLE_ROUND_ROBIN:
    "DOUBLE_ROUND_ROBIN",
  SWISS:
    "SWISS",
  GROUPS:
    "GROUPS",
  DOUBLE_ELIMINATION:
    "DOUBLE_ELIMINATION",
  KING_OF_THE_HILL:
    "KING_OF_THE_HILL",
  CROSS_GROUP: "CROSS_GROUP",
  SEEDING_CROSS_GROUP: "SEEDING_CROSS_GROUP",
  LCS_WINTER_PLAYOFFS: "LCS_WINTER_PLAYOFFS",
};

// -----------------------------------------------------
// MATCH RULES
// -----------------------------------------------------

export const MATCH_RULES = {
  BO1: { bestOf: 1 },
  BO3: { bestOf: 3 },
  BO5: { bestOf: 5 },
};

// -----------------------------------------------------
// DRAFT RULES
// -----------------------------------------------------

export const DRAFT_RULES = {
  STANDARD: { fearlessDraft: false },
  FEARLESS: { fearlessDraft: true },
};

// -----------------------------------------------------
// TIEBREAKERS
// -----------------------------------------------------

export const TIEBREAKERS = {
  HEAD_TO_HEAD_WINS: "HEAD_TO_HEAD_WINS",
  HEAD_TO_HEAD_GAME_WIN_PERCENTAGE: "HEAD_TO_HEAD_GAME_WIN_PERCENTAGE",
  STRENGTH_OF_VICTORY: "STRENGTH_OF_VICTORY",
  GAME_DIFFERENCE: "GAME_DIFFERENCE",
};

// -----------------------------------------------------
// STAGE BUILDER
// -----------------------------------------------------

const stage = (config) => config;

// =====================================================
// LEC
// =====================================================

export const LEC_2026_WINTER = {
  stages: [
    stage({
      type: STAGE_TYPES.REGULAR_SEASON,
      format: FORMAT_TYPES.SINGLE_ROUND_ROBIN,
      matchRules: MATCH_RULES.BO1,
      draftRules: DRAFT_RULES.STANDARD,
      teamsQualified: 8,
    }),
    stage({
      id: "LEC_WINTER_PLAYOFFS",
      type:
        STAGE_TYPES.PLAYOFFS,
      format:
        FORMAT_TYPES.DOUBLE_ELIMINATION,
      qualifiedTeams: 8,
      matchRules: {
        early:
          MATCH_RULES.BO3,
        late:
          MATCH_RULES.BO5,
      },
      draftRules:
        DRAFT_RULES.FEARLESS,
      qualification: {
        firstStand: {
          qualifiedTeams: 1,
          source:
            "PLAYOFF_CHAMPION",
        },
      },
      bracket: [
        // =================================================
        // UPPER BRACKET QUARTERFINALS
        // =================================================
        {
          id: "M1",
          date: "2026-02-16",
          time: "17:00",
          timezone: "Europe/Berlin",
          round:
            "UPPER_QUARTERFINAL",
          bestOf: 3,
          sideA:
            "SEED_1",
          sideB:
            "SEED_5",
          winnerTo:
            "M5",
          loserTo:
            "M7",
        },
        {
          id: "M2",
          date: "2026-02-16",
          time: "19:00",
          timezone: "Europe/Berlin",
          round:
            "UPPER_QUARTERFINAL",
          bestOf: 3,
          sideA:
            "SEED_4",
          sideB:
            "SEED_7",
          winnerTo:
            "M5",
          loserTo:
            "M7",
        },
        {
          id: "M3",
          date: "2026-02-17",
          time: "17:00",
          timezone: "Europe/Berlin",
          round:
            "UPPER_QUARTERFINAL",
          bestOf: 3,
          sideA:
            "SEED_2",
          sideB:
            "SEED_8",
          winnerTo:
            "M6",
          loserTo:
            "M8",
        },
        {
          id: "M4",
          date: "2026-02-17",
          time: "19:00",
          timezone: "Europe/Berlin",
          round:
            "UPPER_QUARTERFINAL",
          bestOf: 3,
          sideA:
            "SEED_3",
          sideB:
            "SEED_6",
          winnerTo:
            "M6",
          loserTo:
            "M8",
        },
        // =================================================
        // UPPER SEMIFINALS
        // =================================================
        {
          id: "M5",
          date: "2026-02-20",
          time: "17:00",
          timezone: "Europe/Berlin",
          round:
            "UPPER_SEMIFINAL",
          bestOf: 3,
          sideA:
            "WINNER_M1",
          sideB:
            "WINNER_M2",
          winnerTo:
            "M11",
          loserTo:
            "M9",
        },
        {
          id: "M6",
          date: "2026-02-20",
          time: "19:00",
          timezone: "Europe/Berlin",
          round:
            "UPPER_SEMIFINAL",
          bestOf: 3,
          sideA:
            "WINNER_M3",
          sideB:
            "WINNER_M4",
          winnerTo:
            "M11",
          loserTo:
            "M10",
        },
        // =================================================
        // LOWER ROUND 1
        // =================================================
        {
          id: "M7",
          date: "2026-02-21",
          time: "17:00",
          timezone: "Europe/Berlin",
          round:
            "LOWER_ROUND_1",
          bestOf: 3,
          sideA:
            "LOSER_M1",
          sideB:
            "LOSER_M2",
          eliminationMatch:
            true,
          winnerTo:
            "M10",
        },
        {
          id: "M8",
          date: "2026-02-21",
          time: "19:00",
          timezone: "Europe/Berlin",
          round:
            "LOWER_ROUND_1",
          bestOf: 3,
          sideA:
            "LOSER_M3",
          sideB:
            "LOSER_M4",
          eliminationMatch:
            true,
          winnerTo:
            "M9",
        },
        // =================================================
        // LOWER ROUND 2
        // =================================================
        {
          id: "M9",
          date: "2026-02-22",
          time: "17:00",
          timezone: "Europe/Berlin",
          round:
            "LOWER_ROUND_2",
          bestOf: 3,
          sideA:
            "LOSER_M5",
          sideB:
            "WINNER_M8",
          winnerTo:
            "M12",
        },
        {
          id: "M10",
          date: "2026-02-22",
          time: "19:00",
          timezone: "Europe/Berlin",
          round:
            "LOWER_ROUND_2",
          bestOf: 3,
          sideA:
            "LOSER_M6",
          sideB:
            "WINNER_M7",
          winnerTo:
            "M12",
        },
        // =================================================
        // UPPER FINAL
        // =================================================
        {
          id: "M11",
          date: "2026-02-23",
          time: "17:00",
          timezone: "Europe/Berlin",
          round:
            "UPPER_FINAL",
          bestOf: 5,
          sideA:
            "WINNER_M5",
          sideB:
            "WINNER_M6",
          winnerTo:
            "M14",
        },
        // =================================================
        // LOWER ROUND 3
        // =================================================
        {
          id: "M12",
          date: "2026-02-27",
          time: "17:00",
          timezone: "Europe/Berlin",
          round:
            "LOWER_ROUND_3",
          bestOf: 5,
          sideA:
            "WINNER_M9",
          sideB:
            "WINNER_M10",
          winnerTo:
            "M13",
        },
        // =================================================
        // LOWER FINAL
        // =================================================
        {
          id: "M13",
          date: "2026-02-28",
          time: "17:00",
          timezone: "Europe/Berlin",
          round:
            "LOWER_FINAL",
          bestOf: 5,
          sideA:
            "LOSER_M11",
          sideB:
            "WINNER_M12",
          winnerTo:
            "M14",
        },
        // =================================================
        // GRAND FINAL
        // =================================================
        {
          id: "M14",
          date: "2026-03-01",
          time: "17:00",
          timezone: "Europe/Berlin",
          round:
            "GRAND_FINAL",
          bestOf: 5,
          sideA:
            "WINNER_M11",
          sideB:
            "WINNER_M13",
          championshipMatch:
            true,
        },
      ],
    }),
    ],
};

/* export const LEC_2026_SPRING = {
  stages: [
    stage({
      type: STAGE_TYPES.REGULAR_SEASON,
      format: FORMAT_TYPES.SINGLE_ROUND_ROBIN,
      matchRules: MATCH_RULES.BO3,
      draftRules: DRAFT_RULES.FEARLESS,
      teamsQualified: 6,
      tiebreakers: [
        TIEBREAKERS.HEAD_TO_HEAD_WINS,
        TIEBREAKERS.HEAD_TO_HEAD_GAME_WIN_PERCENTAGE,
        TIEBREAKERS.STRENGTH_OF_VICTORY,
      ],
        calendarRules: {
        totalWeeks: 7,
        allowedDays: [6, 0, 1],
        matchesPerDay: 2,
        matchesPerWeek: 7,
      }
    }),
    stage({
      type: STAGE_TYPES.PLAYOFFS,
      format: FORMAT_TYPES.DOUBLE_ELIMINATION,
      matchRules: MATCH_RULES.BO5,
      draftRules: DRAFT_RULES.FEARLESS,
    }),
  ],
};

export const LEC_2026_SUMMER = {
  stages: [
    stage({
      type: STAGE_TYPES.REGULAR_SEASON,
      format: FORMAT_TYPES.SINGLE_ROUND_ROBIN,
      matchRules: MATCH_RULES.BO3,
      draftRules: DRAFT_RULES.FEARLESS,
      teamsQualified: 6,
      calendarRules: {
        totalWeeks: 7,
        allowedDays: [6, 0, 1],
        matchesPerDay: 2,
        matchesPerWeek: 7,
      }
    }),
    stage({
      type: STAGE_TYPES.PLAYOFFS,
      format: FORMAT_TYPES.DOUBLE_ELIMINATION,
      matchRules: MATCH_RULES.BO5,
      draftRules: DRAFT_RULES.FEARLESS,
    }),
  ],
};*/

// =====================================================
// LCS
// =====================================================

export const LCS_2026_WINTER = {
  stages: [
    stage({
      type: STAGE_TYPES.REGULAR_SEASON,
      format: FORMAT_TYPES.SWISS,
      matchRules: MATCH_RULES.BO3,
      draftRules: DRAFT_RULES.FEARLESS,
    }),
stage({
  id: "LCS_WINTER_PLAYOFFS",
  type:
    STAGE_TYPES.PLAYOFFS,
  format:
    FORMAT_TYPES.DOUBLE_ELIMINATION,
  qualifiedTeams: 6,
  matchRules:
    MATCH_RULES.BO5,
  draftRules:
    DRAFT_RULES.FEARLESS,
  qualification: {
    firstStand: {
      qualifiedTeams: 1,
      source:
        "PLAYOFF_CHAMPION",
    },
  },
  bracket: [
    // ============================================
    // UPPER BRACKET
    // ============================================
    {
      id: "M1",
      date: "2026-02-14",
      time: "13:00",
      timezone: "America/Los_Angeles",
      round:
        "UPPER_SEMIFINAL",
      sideA:
        "REMAINING_2_1_A",
      sideB:
        "REMAINING_2_1_B",
      bestOf: 5,
      winnerTo: "M3",
      loserTo: "M5",
    },
    {
      id: "M2",
      date: "2026-02-15",
      time: "13:00",
      timezone: "America/Los_Angeles",
      round:
        "UPPER_SEMIFINAL",
      sideA:
        "SEED_1",
      sideB:
        "SEED_1_CHOICE",
      bestOf: 5,
      winnerTo: "M3",
      loserTo: "M4",
    },
    // ============================================
    // UPPER FINAL
    // ============================================
    {
      id: "M3",
      date: "2026-02-20",
      time: "13:00",
      timezone: "America/Los_Angeles",
      round:
        "UPPER_FINAL",
      sideA:
        "WINNER_M1",
      sideB:
        "WINNER_M2",
      bestOf: 5,
      winnerTo: "M8",
      loserTo: "M7",
    },
    // ============================================
    // LOWER ROUND 1
    // ============================================
    {
      id: "M4",
      date: "2026-02-21",
      time: "13:00",
      timezone: "America/Los_Angeles",
      round:
        "LOWER_ROUND_1",
      sideA:
        "SEED_5",
      sideB:
        "LOSER_M2",
      bestOf: 5,
      eliminationMatch: true,
      winnerTo: "M6",
    },
    {
      id: "M5",      
      date: "2026-02-12",
      time: "13:00",
      timezone: "America/Los_Angeles",
      round:
        "LOWER_ROUND_1",
      sideA:
        "SEED_6",
      sideB:
        "LOSER_M1",
      bestOf: 5,
      eliminationMatch: true,
      winnerTo: "M6",
    },
    // ============================================
    // LOWER SEMI
    // ============================================
    {
      id: "M6",
      date: "2026-02-27",
      time: "13:00",
      timezone: "America/Los_Angeles",
      round:
        "LOWER_SEMIFINAL",
      sideA:
        "WINNER_M4",
      sideB:
        "WINNER_M5",
      bestOf: 5,
      winnerTo: "M7",
    },
    // ============================================
    // LOWER FINAL
    // ============================================
    {
      id: "M7",
      date: "2026-02-28",
      time: "13:00",
      timezone: "America/Los_Angeles",
      round:
        "LOWER_FINAL",
      sideA:
        "WINNER_M6",
      sideB:
        "LOSER_M3",
      bestOf: 5,
      winnerTo: "M8",
    },
    // ============================================
    // GRAND FINAL
    // ============================================
    {
      id: "M8",
      date: "2026-03-01",
      time: "13:00",
      timezone: "America/Los_Angeles",
      round:
        "GRAND_FINAL",
      sideA:
        "WINNER_M3",
      sideB:
        "WINNER_M7",
      bestOf: 5,
      championshipMatch: true,
    },
  ],
}),
  ],
};

/*export const LCS_2026_SPRING = {
  stages: [
    stage({
      type: STAGE_TYPES.REGULAR_SEASON,
      format: FORMAT_TYPES.SINGLE_ROUND_ROBIN,
      matchRules: MATCH_RULES.BO3,
      draftRules: DRAFT_RULES.FEARLESS,
      calendarRules: {
        totalWeeks: 7,
        allowedDays: [6, 0],
        matchesPerDay: 2,
        matchesPerWeek: 7,
      }
    }),
    stage({
      type: STAGE_TYPES.PLAYOFFS,
      format: FORMAT_TYPES.DOUBLE_ELIMINATION,
      matchRules: MATCH_RULES.BO5,
      draftRules: DRAFT_RULES.FEARLESS,
    }),
  ],
};

export const LCS_2026_SUMMER = {
  stages: [
    stage({
      type: STAGE_TYPES.REGULAR_SEASON,
      format: FORMAT_TYPES.SINGLE_ROUND_ROBIN,
      matchRules: MATCH_RULES.BO3,
      draftRules: DRAFT_RULES.FEARLESS,
      calendarRules: {
        totalWeeks: 7,
        allowedDays: [6, 0],
        matchesPerDay: 2,
        matchesPerWeek: 7,
      }
    }),
    stage({
      type: STAGE_TYPES.PLAYOFFS,
      format: FORMAT_TYPES.DOUBLE_ELIMINATION,
      matchRules: MATCH_RULES.BO5,
      draftRules: DRAFT_RULES.FEARLESS,
    }),
  ],
};*/

// =====================================================
// LCK (SIMPLIFIED ENGINE LAYER)
// =====================================================

export const LCK_2026_WINTER = {
  // =================================================
  // INITIAL GROUPS
  // =================================================
  initialGroups: {
    A: [
      "gen",
      "t1",
      "ns",
      "dbs",
      "brion",
    ],
    B: [
      "bnk",
      "dk",
      "drx",
      "kt",
      "hle",
    ],
  },
  // =================================================
  // GROUP POINT RULES
  // =================================================
  groupPointRules: {
    BO3: 1,
    BO5: 2,
  },
  // =================================================
  // STAGES
  // =================================================
  stages: [
    // ===============================================
    // WEEKS 1-2
    // CROSS GROUP BO3
    // ===============================================
    stage({
      id: "CROSS_GROUP_STAGE",
      type:
        STAGE_TYPES.REGULAR_SEASON,
      format:
        FORMAT_TYPES.CROSS_GROUP,
      generatedWeeks: 2,
      matchRules:
        MATCH_RULES.BO3,
      draftRules:
        DRAFT_RULES.FEARLESS,
    }),
    // ===============================================
    // WEEK 3
    // SEEDED CROSS GROUP BO5
    // ===============================================
    stage({
      id: "SEEDED_STAGE",
      type:
        STAGE_TYPES.SEEDING_STAGE,
      format:
        FORMAT_TYPES.SEEDING_CROSS_GROUP,
      seedingRules: {
        pairings: [
          [1,1],
          [2,2],
          [3,3],
          [4,4],
          [5,5],
        ],
      },
      matchRules:
        MATCH_RULES.BO5,
      draftRules:
        DRAFT_RULES.FEARLESS,
    }),
    // ===============================================
    // PLAY-IN
    // ===============================================
    stage({
    id: "PLAY_IN",
    type:
    STAGE_TYPES.PLAY_IN,
    format:
    FORMAT_TYPES.DOUBLE_ELIMINATION,
    qualifiedTeams: 3,
    eliminatedTeams: 3,
    matchRules:
    MATCH_RULES.BO5,
    draftRules:
    DRAFT_RULES.FEARLESS,
    qualificationRules: {
    // ============================================
    // DIRECT PLAYOFF QUALIFICATION
    // ============================================
    directQualified: [
      "WINNER_GROUP_SEED_1",
      "WINNER_GROUP_SEED_2",
      "LOSER_GROUP_SEED_1",
    ],

    // ============================================
    // DIRECT ELIMINATION
    // ============================================
    directEliminated: [
      "LOSER_GROUP_SEED_5",
    ],
    // ============================================
    // PLAY-IN PARTICIPANTS
    // ============================================
    playInTeams: [
      "WINNER_GROUP_SEED_3",
      "WINNER_GROUP_SEED_4",
      "WINNER_GROUP_SEED_5",

      "LOSER_GROUP_SEED_2",
      "LOSER_GROUP_SEED_3",
      "LOSER_GROUP_SEED_4",
    ],
    // ============================================
    // PLAY-IN SEEDING RULES
    // ============================================
    seedingRules: [
      "BEST_BO_SCORE",
      "GAME_DIFFERENTIAL",
    ],
    },
    bracket: [
    // ============================================
    // ROUND 1
    // ============================================
    {
      id: "M1",
      date: "2026-02-06",
      time: "17:00",
      timezone: "Asia/Seoul",
      round:
        "PLAY_IN_ROUND_1",
      sideA:
        "PLAY_IN_SEED_3",
      sideB:
        "PLAY_IN_SEED_6",
      bestOf: 3,
      winnerTo:
        "M3",
      eliminationMatch:
        false,
    },
    {
      id: "M2",
      date: "2026-02-06",
      time: "19:00",
      timezone: "Asia/Seoul",
      round:
        "PLAY_IN_ROUND_1",
      sideA:
        "PLAY_IN_SEED_4",
      sideB:
        "PLAY_IN_SEED_5",
      bestOf: 3,
      winnerTo:
        "M4",
      eliminationMatch:
        false,
    },
    // ============================================
    // ROUND 2
    // ============================================
    {
      id: "M3",
      date: "2026-02-07",
      time: "17:00",
      timezone: "Asia/Seoul",
      round:
        "PLAY_IN_ROUND_2",
      sideA:
        "PLAY_IN_SEED_1",
      sideB:
        "WINNER_M1",
      bestOf: 3,
      qualificationMatch:
        true,
      winnerQualified:
        true,
      loserTo:
        "M5",
    },
    {
      id: "M4",
      date: "2026-02-07",
      time: "19:00",
      timezone: "Asia/Seoul",
      round:
        "PLAY_IN_ROUND_2",
      sideA:
        "PLAY_IN_SEED_2",
      sideB:
        "WINNER_M2",
      bestOf: 3,
      qualificationMatch:
        true,
      winnerQualified:
        true,
      loserTo:
        "M5",
    },
    // ============================================
    // LAST CHANCE
    // ============================================
    {
      id: "M5",
      date: "2026-02-08",
      time: "17:00",
      timezone: "Asia/Seoul",
      round:
        "PLAY_IN_LAST_CHANCE",
      sideA:
        "LOSER_M3",
      sideB:
        "LOSER_M4",
      bestOf: 5,
      qualificationMatch:
        true,
      eliminationMatch:
        true,
      winnerQualified:
        true,
    },
    ],
    }),
        // ===============================================
        // PLAYOFFS
        // ===============================================
    stage({
    id: "PLAYOFFS",
    type:
    STAGE_TYPES.PLAYOFFS,
    format:
    FORMAT_TYPES.DOUBLE_ELIMINATION,
    matchRules:
    MATCH_RULES.BO5,
    draftRules:
    DRAFT_RULES.FEARLESS,
    qualification: {
        firstStand: {
          qualifiedTeams: 1,

          source:
            "PLAYOFF_CHAMPION",
        },
      },
    qualificationRules: {
    // ============================================
    // DIRECT QUALIFICATION
    // ============================================
    fromWinnerGroup: [
      1,
      2,
    ],
    fromLoserGroup: [
      1,
    ],
    fromPlayIn: 3,
    },
    bracket: [
    // ============================================
    // ROUND 1
    // ============================================
    {
      id: "M1",
      date: "2026-02-12",
      time: "17:00",
      timezone: "Asia/Seoul",
      round:
        "ROUND_1",
      sideA:
        "LOSER_GROUP_SEED_1",
      sideB:
        "LG1_CHOSEN_PLAYIN_TEAM",
      bestOf: 5,
      winnerTo:
        "M4",
      loserTo:
        "M3",
    },

    {
      id: "M2",
      date: "2026-02-13",
      time: "17:00",
      timezone: "Asia/Seoul",
      round:
        "ROUND_1",
      sideA:
        "REMAINING_PLAYIN_TEAM_A",
      sideB:
        "REMAINING_PLAYIN_TEAM_B",
      bestOf: 5,
      winnerTo:
        "M5",
      loserTo:
        "M3",
    },
    // ============================================
    // LOWER ROUND 1
    // ============================================
    {
      id: "M3",
      date: "2026-02-14",
      time: "17:00",
      timezone: "Asia/Seoul",
      round:
        "LOWER_ROUND_1",
      sideA:
        "LOSER_M1",
      sideB:
        "LOSER_M2",
      bestOf: 5,
      eliminationMatch:
        true,
      winnerTo:
        "M6",
    },
    // ============================================
    // ROUND 2
    // ============================================
    {
      id: "M4",
      date: "2026-02-15",
      time: "17:00",
      timezone: "Asia/Seoul",
      round:
        "ROUND_2",
      sideA:
        "WINNER_GROUP_SEED_1",
      sideB:
        "WG1_CHOSEN_ROUND1_WINNER",
      bestOf: 5,
      winnerTo:
        "M8",
      loserTo:
        "M6",
    },
    {
      id: "M5",
      date: "2026-02-19",
      time: "17:00",
      timezone: "Asia/Seoul",
      round:
        "ROUND_2",
      sideA:
        "WINNER_GROUP_SEED_2",
      sideB:
        "REMAINING_ROUND1_WINNER",
      bestOf: 5,
      winnerTo:
        "M8",
      loserTo:
        "M7",
    },
    // ============================================
    // LOWER ROUND 2
    // ============================================
    {
      id: "M6",
      date: "2026-02-20",
      time: "17:00",
      timezone: "Asia/Seoul",
      round:
        "LOWER_ROUND_2",
      sideA:
        "LOSER_M4",
      sideB:
        "WINNER_M3",
      bestOf: 5,
      eliminationMatch:
        true,
      winnerTo:
        "M7",
    },
    // ============================================
    // LOWER ROUND 3
    // ============================================
    {
      id: "M7",
      date: "2026-02-21",
      time: "17:00",
      timezone: "Asia/Seoul",
      round:
        "LOWER_ROUND_3",
      sideA:
        "LOSER_M5",
      sideB:
        "WINNER_M6",
      bestOf: 5,
      eliminationMatch:
        true,
      winnerTo:
        "M9",
    },
    // ============================================
    // UPPER FINAL
    // ============================================
    {
      id: "M8",
      date: "2026-02-22",
      time: "17:00",
      timezone: "Asia/Seoul",
      round:
        "UPPER_FINAL",
      sideA:
        "WINNER_M4",
      sideB:
        "WINNER_M5",
      bestOf: 5,
      winnerTo:
        "M10",
      loserTo:
        "M9",
    },
    // ============================================
    // LOWER FINAL
    // ============================================
    {
      id: "M9",
      date: "2026-02-28",
      time: "17:00",
      timezone: "Asia/Seoul",
      round:
        "LOWER_FINAL",
      sideA:
        "LOSER_M8",
      sideB:
        "WINNER_M7",
      bestOf: 5,
      eliminationMatch:
        true,
      winnerTo:
        "M10",
    },
    // ============================================
    // GRAND FINAL
    // ============================================
    {
      id: "M10",
      date: "2026-03-01",
      time: "17:00",
      timezone: "Asia/Seoul",
      round:
        "GRAND_FINAL",
      sideA:
        "WINNER_M8",
      sideB:
        "WINNER_M9",
      bestOf: 5,
      championshipMatch:
        true,
    },
  ],
  }),
  ],
};

/* export const LCK_2026_SPRING = {
  stages: [
    stage({
      type: STAGE_TYPES.REGULAR_SEASON,
      format: FORMAT_TYPES.SINGLE_ROUND_ROBIN,
      matchRules: MATCH_RULES.BO3,
      draftRules: DRAFT_RULES.FEARLESS,
    }),
    stage({
      type: STAGE_TYPES.PLAYOFFS,
      format: FORMAT_TYPES.DOUBLE_ELIMINATION,
      matchRules: MATCH_RULES.BO5,
      draftRules: DRAFT_RULES.FEARLESS,
    }),
  ],
};

export const LCK_2026_SUMMER = {
  stages: [
    stage({
      type: STAGE_TYPES.REGULAR_SEASON,
      format: FORMAT_TYPES.SINGLE_ROUND_ROBIN,
      matchRules: MATCH_RULES.BO3,
      draftRules: DRAFT_RULES.FEARLESS,
    }),
    stage({
      type: STAGE_TYPES.PLAYOFFS,
      format: FORMAT_TYPES.DOUBLE_ELIMINATION,
      matchRules: MATCH_RULES.BO5,
      draftRules: DRAFT_RULES.FEARLESS,
    }),
  ],
};*/

// =====================================================
// LPL (SIMPLIFIED MULTI-STAGE ENGINE)
// =====================================================

export const LPL_2026_WINTER = {
  stages: [
    // =================================================
    // GROUP STAGE
    // =================================================
    stage({
      id: "GROUP_STAGE",
      type:
        STAGE_TYPES.REGULAR_SEASON,
      format:
        FORMAT_TYPES.GROUPS,
      matchRules:
        MATCH_RULES.BO3,
      draftRules:
        DRAFT_RULES.FEARLESS,
      groups: {
        ASCEND: {
          teams: 6,
          doubleRoundRobin: true,
        },
        PERSEVERANCE: {
          teams: 4,
          doubleRoundRobin: true,
        },
        NIRVANA: {
          teams: 4,
          doubleRoundRobin: true,
        },
      },
      tiebreakers: [
        "SERIES_WINS",
        "GAME_DIFFERENCE",
        "HEAD_TO_HEAD_SERIES",
        "HEAD_TO_HEAD_GAMES",
        "BO3_TIEBREAKER",
      ],
      advancement: {
        knockoutStage: {
          ASCEND: [1,2,3,4],
        },
        knightsRivalsRound1: {
          ASCEND: [5,6],
          PERSEVERANCE: [1,2],
        },
        knightsRivalsRound2: {
          PERSEVERANCE: [3,4],
          NIRVANA: [1,2],
        },
        eliminated: {
          NIRVANA: [3,4],
        },
      },
    }),
    // =================================================
    // KNIGHTS RIVALS
    // =================================================
    stage({
      id: "KNIGHTS_RIVALS",
      type:
        STAGE_TYPES.PLAY_IN,
      format:
        FORMAT_TYPES.HYBRID_ELIMINATION,
      matchRules:
        MATCH_RULES.BO5,
      draftRules:
        DRAFT_RULES.FEARLESS,
      qualifiedTeams: 4,
      bracket: [
        // =============================================
        // ROUND 1
        // =============================================
        {
          id: "KR1",
          date: "2026-02-09",
          time: "15:00",
          timezone: "Asia/Beijing",
          round:
            "ROUND_1",
          sideA:
            "ASCEND_SEED_5",
          sideB:
            "PERSEVERANCE_SEED_2",
          bestOf: 5,
          winnerQualifies:
            true,
          loserTo:
            "KR5",
        },
        {
          id: "KR2",
          date: "2026-02-09",
          time: "19:00",
          timezone: "Asia/Beijing",
          round:
            "ROUND_1",
          sideA:
            "ASCEND_SEED_6",
          sideB:
            "PERSEVERANCE_SEED_1",
          bestOf: 5,
          winnerQualifies:
            true,
          loserTo:
            "KR6",
        },
        // =============================================
        // ROUND 2
        // =============================================
        {
          id: "KR3",
          date: "2026-02-10",
          time: "15:00",
          timezone: "Asia/Beijing",
          round:
            "ROUND_2",
          sideA:
            "PERSEVERANCE_SEED_3",
          sideB:
            "NIRVANA_SEED_2",
          bestOf: 5,
          loserEliminated:
            true,
          winnerTo:
            "KR5",
        },
        {
          id: "KR4",
          date: "2026-02-10",
          time: "15:00",
          timezone: "Asia/Beijing",
          round:
            "ROUND_2",
          sideA:
            "PERSEVERANCE_SEED_4",
          sideB:
            "NIRVANA_SEED_1",
          bestOf: 5,
          loserEliminated:
            true,
          winnerTo:
            "KR6",
        },
        // =============================================
        // ROUND 3
        // =============================================
        {
          id: "KR5",
          date: "2026-02-11",
          time: "15:00",
          timezone: "Asia/Beijing",
          round:
            "ROUND_3",
          sideA:
            "LOSER_KR2",
          sideB:
            "WINNER_KR3",
          bestOf: 5,
          winnerQualifies:
            true,
          loserEliminated:
            true,
        },
        {
          id: "KR6",
          date: "2026-02-11",
          time: "15:00",
          timezone: "Asia/Beijing",
          round:
            "ROUND_3",
          sideA:
            "LOSER_KR1",
          sideB:
            "WINNER_KR4",
          bestOf: 5,
          winnerQualifies:
            true,
          loserEliminated:
            true,
        },
      ],
    }),

// =================================================
// KNOCKOUT STAGE
// =================================================
stage({
  id: "KNOCKOUT_STAGE",
  type:
    STAGE_TYPES.PLAYOFFS,
  format:
    FORMAT_TYPES.DOUBLE_ELIMINATION,
  matchRules:
    MATCH_RULES.BO5,
  draftRules:
    DRAFT_RULES.FEARLESS,
  qualification: {
    firstStand: {
      qualifiedTeams: 1,
      source:
        "PLAYOFF_CHAMPION",
    },
  },
  notes:
    "Ascend seeds choose opponents in order",
  bracket: [
    // =============================================
    // UPPER BRACKET QUARTERFINALS
    // =============================================
    {
      id: "M1",
      date: "2026-02-24",
      time: "15:00",
      timezone: "Asia/Beijing",
      round:
        "UPPER_QUARTERFINAL",
      sideA:
        "ASCEND_SEED_4",
      sideB:
        "ASCEND_SEED_4_CHOICE",
      bestOf: 5,
      winnerTo: "M7",
      loserTo: "M5",
    },
    {
      id: "M2",
      date: "2026-02-24",
      time: "18:00",
      timezone: "Asia/Beijing",
      round:
        "UPPER_QUARTERFINAL",
      sideA:
        "ASCEND_SEED_1",
      sideB:
        "ASCEND_SEED_1_CHOICE",
      bestOf: 5,
      winnerTo: "M7",
      loserTo: "M5",
    },
    {
      id: "M3",
      date: "2026-02-25",
      time: "15:00",
      timezone: "Asia/Beijing",
      round:
        "UPPER_QUARTERFINAL",
      sideA:
        "ASCEND_SEED_3",
      sideB:
        "ASCEND_SEED_3_CHOICE",
      bestOf: 5,
      winnerTo: "M8",
      loserTo: "M6",
    },
    {
      id: "M4",
      date: "2026-02-25",
      time: "18:00",
      timezone: "Asia/Beijing",
      round:
        "UPPER_QUARTERFINAL",
      sideA:
        "ASCEND_SEED_2",
      sideB:
        "REMAINING_KNIGHTS_RIVALS_TEAM",
      bestOf: 5,
      winnerTo: "M8",
      loserTo: "M6",
    },
    // =============================================
    // LOWER BRACKET ROUND 1
    // =============================================

    {
      id: "M5",
      date: "2026-02-28",
      time: "17:00",
      timezone: "Asia/Beijing",
      round:
        "LOWER_ROUND_1",
      sideA:
        "LOSER_M1",
      sideB:
        "LOSER_M2",
      bestOf: 5,
      eliminationMatch: true,
      winnerTo: "M10",
    },
    {
      id: "M6",
      date: "2026-03-01",
      time: "17:00",
      timezone: "Asia/Beijing",
      round:
        "LOWER_ROUND_1",
      sideA:
        "LOSER_M3",
      sideB:
        "LOSER_M4",
      bestOf: 5,
      eliminationMatch: true,
      winnerTo: "M9",
    },

    // =============================================
    // UPPER BRACKET SEMIFINALS
    // =============================================

    {
      id: "M7",
      date: "2026-02-26",
      time: "17:00",
      timezone: "Asia/Beijing",
      round:
        "UPPER_SEMIFINAL",
      sideA:
        "WINNER_M1",
      sideB:
        "WINNER_M2",
      bestOf: 5,
      winnerTo: "M12",
      loserTo: "M10",
    },

    {
      id: "M8",
      date: "2026-02-27",
      time: "17:00",
      timezone: "Asia/Beijing",
      round:
        "UPPER_SEMIFINAL",
      sideA:
        "WINNER_M3",
      sideB:
        "WINNER_M4",
      bestOf: 5,
      winnerTo: "M12",
      loserTo: "M9",
    },
    // =============================================
    // LOWER BRACKET QUARTERFINALS
    // =============================================
    {
      id: "M9",
      date: "2026-03-02",
      time: "17:00",
      timezone: "Asia/Beijing",
      round:
        "LOWER_QUARTERFINAL",
      sideA:
        "LOSER_M8",
      sideB:
        "WINNER_M6",
      bestOf: 5,
      eliminationMatch: true,
      winnerTo: "M11",
    },
    {
      id: "M10",
      date: "2026-03-03",
      time: "17:00",
      timezone: "Asia/Beijing",
      round:
        "LOWER_QUARTERFINAL",
      sideA:
        "LOSER_M7",
      sideB:
        "WINNER_M5",
      bestOf: 5,
      eliminationMatch: true,
      winnerTo: "M11",
    },
    // =============================================
    // LOWER BRACKET SEMIFINAL
    // =============================================
    {
      id: "M11",
      date: "2026-03-05",
      time: "17:00",
      timezone: "Asia/Beijing",
      round:
        "LOWER_SEMIFINAL",
      sideA:
        "WINNER_M9",
      sideB:
        "WINNER_M10",
      bestOf: 5,
      eliminationMatch: true,
      winnerTo: "M13",
    },
    // =============================================
    // UPPER BRACKET FINAL
    // =============================================
    {
      id: "M12",
      date: "2026-03-04",
      time: "17:00",
      timezone: "Asia/Beijing",
      round:
        "UPPER_FINAL",
      sideA:
        "WINNER_M7",
      sideB:
        "WINNER_M8",
      bestOf: 5,
      winnerTo: "M14",
      loserTo: "M13",
    },
    // =============================================
    // LOWER BRACKET FINAL
    // =============================================
    {
      id: "M13",
      date: "2026-03-07",
      time: "17:00",
      timezone: "Asia/Beijing",
      round:
        "LOWER_FINAL",
      sideA:
        "WINNER_M11",
      sideB:
        "LOSER_M12",
      bestOf: 5,
      eliminationMatch: true,
      winnerTo: "M14",
    },
    // =============================================
    // GRAND FINAL
    // =============================================
    {
      id: "M14",
      date: "2026-03-08",
      time: "17:00",
      timezone: "Asia/Beijing",
      round:
        "GRAND_FINAL",
      sideA:
        "WINNER_M12",
      sideB:
        "WINNER_M13",
      bestOf: 5,
      championshipMatch: true,
    },
  ],
}),
  ]
}

/* export const LPL_2026_SPRING = {
  stages: [
    stage({
      type: STAGE_TYPES.REGULAR_SEASON,
      format: FORMAT_TYPES.GROUPS,
      matchRules: MATCH_RULES.BO3,
      draftRules: DRAFT_RULES.FEARLESS,
    }),
    stage({
      type: STAGE_TYPES.KNOCKOUT,
      format: FORMAT_TYPES.DOUBLE_ELIMINATION,
      matchRules: MATCH_RULES.BO5,
      draftRules: DRAFT_RULES.FEARLESS,
    }),
  ],
};

export const LPL_2026_SUMMER = {
  stages: [
    stage({
      type: STAGE_TYPES.REGULAR_SEASON,
      format: FORMAT_TYPES.GROUPS,
      matchRules: MATCH_RULES.BO3,
      draftRules: DRAFT_RULES.FEARLESS,
    }),
    stage({
      type: STAGE_TYPES.PLAYOFFS,
      format: FORMAT_TYPES.DOUBLE_ELIMINATION,
      matchRules: MATCH_RULES.BO5,
      draftRules: DRAFT_RULES.FEARLESS,
    }),
  ],
};*/

// =====================================================
// CBLOL
// =====================================================

export const CBLOL_2026_WINTER = {
  stages: [
    // =================================================
    // REGULAR SEASON
    // =================================================
    stage({
      id: "REGULAR_SEASON",
      type:
        STAGE_TYPES.REGULAR_SEASON,
      format:
        FORMAT_TYPES.SINGLE_ROUND_ROBIN,
      matchRules:
        MATCH_RULES.BO1,
      draftRules:
        DRAFT_RULES.STANDARD,
      teamsQualified: 8,
      standingsRules: {
        tiebreakers: [
          "HEAD_TO_HEAD",
          "GAME_DIFFERENCE",
          "BO1_TIEBREAKER",
        ],
      },
      qualification: {
        playoffsRound2: [1,2],
        playoffsRound1: [3,4],
        playIn: [5,6,7,8],
      },
    }),
    // =================================================
    // PLAY-IN
    // =================================================
    stage({
      id: "PLAY_IN",
      type:
        STAGE_TYPES.PLAY_IN,
      format:
        FORMAT_TYPES.HYBRID_ELIMINATION,
      matchRules:
        MATCH_RULES.BO5,
      draftRules:
        DRAFT_RULES.FEARLESS,
      qualifiedTeams: 2,
      eliminatedTeams: 1,
      bracket: [

        // =============================================
        // MATCH 1
        // =============================================
        {
          id: "PI1",
          date: "2026-02-02",
          time: "13:00",
          timezone: "America/Sao_Paulo",
          round:
            "PLAY_IN_ROUND_1",
          sideA:
            "SEED_5",
          sideB:
            "SEED_6",
          bestOf: 3,
          winnerQualifies:
            true,
          loserTo:
            "PI3",
        },
        // =============================================
        // MATCH 2
        // =============================================
        {
          id: "PI2",
          date: "2026-02-03",
          time: "13:00",
          timezone: "America/Sao_Paulo",
          round:
            "PLAY_IN_ROUND_1",
          sideA:
            "SEED_7",
          sideB:
            "SEED_8",
          bestOf: 3,
          loserEliminated:
            true,
          winnerTo:
            "PI3",
        },
        // =============================================
        // LAST CHANCE
        // =============================================
        {
          id: "PI3",
          date: "2026-02-03",
          time: "15:00",
          timezone: "America/Sao_Paulo",
          round:
            "LAST_CHANCE",
          sideA:
            "LOSER_PI1",
          sideB:
            "WINNER_PI2",
          bestOf: 5,
          winnerQualifies:
            true,
          loserEliminated:
            true,
        },
      ],
    }),
    // =================================================
    // PLAYOFFS
    // =================================================
    stage({
      id: "PLAYOFFS",
      type:
        STAGE_TYPES.PLAYOFFS,
      format:
        FORMAT_TYPES.DOUBLE_ELIMINATION,
      matchRules: {
        early:
          MATCH_RULES.BO3,
        late:
          MATCH_RULES.BO5,
      },
      draftRules:
        DRAFT_RULES.FEARLESS,
      qualification: {
        firstStand: {
          qualifiedTeams: 1,
          source:
            "PLAYOFF_CHAMPION",
        },
      },
      bracket: [
        // =============================================
        // ROUND 1
        // =============================================
        {
          id: "M1",
          date: "2026-02-07",
          time: "13:00",
          timezone: "America/Sao_Paulo",
          round:
            "UPPER_ROUND_1",
          sideA:
            "SEED_4",
          sideB:
            "PLAY_IN_WINNER_1",
          bestOf: 3,
          winnerTo:
            "M4",
          loserTo:
            "M3",
        },
        {
          id: "M2",
          date: "2026-02-07",
          time: "15:00",
          timezone: "America/Sao_Paulo",
          round:
            "UPPER_ROUND_1",
          sideA:
            "SEED_3",
          sideB:
            "PLAY_IN_WINNER_2",
          bestOf: 3,
          winnerTo:
            "M5",
          loserTo:
            "M3",
        },
        // =============================================
        // LOWER ROUND 1
        // =============================================
        {
          id: "M3",
          date: "2026-02-14",
          time: "13:00",
          timezone: "America/Sao_Paulo",
          round:
            "LOWER_ROUND_1",
          sideA:
            "LOSER_M1",
          sideB:
            "LOSER_M2",
          bestOf: 5,
          eliminationMatch:
            true,
          winnerTo:
            "M6",
        },
        // =============================================
        // ROUND 2
        // =============================================
        {
          id: "M4",
          date: "2026-02-08",
          time: "13:00",
          timezone: "America/Sao_Paulo",
          round:
            "UPPER_SEMIFINAL",
          sideA:
            "SEED_1",
          sideB:
            "SEED_1_CHOICE",
          bestOf: 3,
          winnerTo:
            "M8",
          loserTo:
            "M7",
        },
        {
          id: "M5",
          date: "2026-02-08",
          time: "15:00",
          timezone: "America/Sao_Paulo",
          round:
            "UPPER_SEMIFINAL",
          sideA:
            "SEED_2",
          sideB:
            "REMAINING_UPPER_WINNER",
          bestOf: 3,
          winnerTo:
            "M8",
          loserTo:
            "M6",
        },

        // =============================================
        // LOWER ROUND 2
        // =============================================
        {
          id: "M6",
          date: "2026-02-15",
          time: "13:00",
          timezone: "America/Sao_Paulo",
          round:
            "LOWER_ROUND_2",
          sideA:
            "WINNER_M3",
          sideB:
            "LOSER_M5",
          bestOf: 5,
          eliminationMatch:
            true,
          winnerTo:
            "M7",
        },
        // =============================================
        // LOWER ROUND 3
        // =============================================
        {
          id: "M7",
          date: "2026-02-21",
          time: "13:00",
          timezone: "America/Sao_Paulo",
          round:
            "LOWER_ROUND_3",
          sideA:
            "WINNER_M6",
          sideB:
            "LOSER_M4",
          bestOf: 5,
          eliminationMatch:
            true,
          winnerTo:
            "M9",
        },
        // =============================================
        // UPPER FINAL
        // =============================================
        {
          id: "M8",
          date: "2026-02-22",
          time: "13:00",
          timezone: "America/Sao_Paulo",
          round:
            "UPPER_FINAL",
          sideA:
            "WINNER_M4",
          sideB:
            "WINNER_M5",
          bestOf: 5,
          winnerTo:
            "M10",
          loserTo:
            "M9",
        },
        // =============================================
        // LOWER FINAL
        // =============================================
        {
          id: "M9",
          date: "2026-02-28",
          time: "13:00",
          timezone: "America/Sao_Paulo",
          round:
            "LOWER_FINAL",
          sideA:
            "WINNER_M7",
          sideB:
            "LOSER_M8",
          bestOf: 5,
          eliminationMatch:
            true,
          winnerTo:
            "M10",
        },
        // =============================================
        // GRAND FINAL
        // =============================================
        {
          id: "M10",
          date: "2026-03-01",
          time: "13:00",
          timezone: "America/Sao_Paulo",
          round:
            "GRAND_FINAL",
          sideA:
            "WINNER_M8",
          sideB:
            "WINNER_M9",
          bestOf: 5,
          championshipMatch:
            true,
        },
      ],
    }),
  ],
};

/* export const CBLOL_2026_SPRING = {
  stages: [
    stage({
      type: STAGE_TYPES.REGULAR_SEASON,
      format: FORMAT_TYPES.SINGLE_ROUND_ROBIN,
      matchRules: MATCH_RULES.BO3,
      draftRules: DRAFT_RULES.FEARLESS,
    }),
    stage({
      type: STAGE_TYPES.PLAYOFFS,
      format: FORMAT_TYPES.DOUBLE_ELIMINATION,
      matchRules: MATCH_RULES.BO5,
      draftRules: DRAFT_RULES.FEARLESS,
    }),
  ],
};

export const CBLOL_2026_SUMMER = {
  stages: [
    stage({
      type: STAGE_TYPES.REGULAR_SEASON,
      format: FORMAT_TYPES.SINGLE_ROUND_ROBIN,
      matchRules: MATCH_RULES.BO3,
      draftRules: DRAFT_RULES.FEARLESS,
    }),
    stage({
      type: STAGE_TYPES.PLAYOFFS,
      format: FORMAT_TYPES.DOUBLE_ELIMINATION,
      matchRules: MATCH_RULES.BO5,
      draftRules: DRAFT_RULES.FEARLESS,
    }),
  ],
};*/

// =====================================================
// LCP
// =====================================================

export const LCP_2026_WINTER = {
  stages: [
    // =================================================
    // REGULAR SEASON
    // =================================================
    stage({
      id: "REGULAR_SEASON",
      type:
        STAGE_TYPES.REGULAR_SEASON,
      format:
        FORMAT_TYPES.SINGLE_ROUND_ROBIN,
      matchRules:
        MATCH_RULES.BO3,
      draftRules:
        DRAFT_RULES.STANDARD,
      teamsQualified: 6,
      standingsRules: {
        tiebreakers: [
          "SERIES_WINS",
          "GAME_DIFFERENCE",
          "HEAD_TO_HEAD",
        ],
      },
      qualification: {
        playoffsRound2: [1,2],
        playoffsRound1: [3,4,5,6],
        eliminated: [7,8],
      },
    }),
    // =================================================
    // PLAYOFFS
    // =================================================
    stage({
      id: "PLAYOFFS",
      type:
        STAGE_TYPES.PLAYOFFS,
      format:
        FORMAT_TYPES.DOUBLE_ELIMINATION,
      matchRules:
        MATCH_RULES.BO5,
      draftRules:
        DRAFT_RULES.FEARLESS,
      qualification: {
        firstStand: {
          qualifiedTeams: 1,
          source:
            "PLAYOFF_CHAMPION",
        },
      },
      bracket: [
        // =============================================
        // ROUND 1
        // =============================================
        {
          id: "M1",
          date: "2026-02-12",
          time: "18:00",
          timezone: "Asia/Taipei",
          round:
            "UPPER_ROUND_1",
          sideA:
            "SEED_3",
          sideB:
            "SEED_6",
          bestOf: 5,
          winnerTo:
            "M3",
        },
        {
          id: "M2",
          date: "2026-02-13",
          time: "18:00",
          timezone: "Asia/Taipei",
          round:
            "UPPER_ROUND_1",
          sideA:
            "SEED_4",
          sideB:
            "SEED_5",
          bestOf: 5,
          winnerTo:
            "M4",
        },
        // =============================================
        // ROUND 2
        // =============================================
        {
          id: "M3",
          date: "2026-02-14",
          time: "18:00",
          timezone: "Asia/Taipei",
          round:
            "UPPER_SEMIFINAL",
          sideA:
            "SEED_1",
          sideB:
            "WINNER_M1",
          bestOf: 5,
          winnerTo:
            "M6",
          loserTo:
            "M5",
        },
        {
          id: "M4",
          date: "2026-02-15",
          time: "18:00",
          timezone: "Asia/Taipei",
          round:
            "UPPER_SEMIFINAL",
          sideA:
            "SEED_2",
          sideB:
            "WINNER_M2",
          bestOf: 5,
          winnerTo:
            "M6",
          loserTo:
            "M5",
        },
        // =============================================
        // LOWER BRACKET
        // =============================================
        {
          id: "M5",
          date: "2026-02-26",
          time: "18:00",
          timezone: "Asia/Taipei",
          round:
            "LOWER_FINAL",
          sideA:
            "LOSER_M3",
          sideB:
            "LOSER_M4",
          bestOf: 5,
          eliminationMatch:
            true,
          winnerTo:
            "M7",
        },
        // =============================================
        // UPPER FINAL
        // =============================================
        {
          id: "M6",
          date: "2026-02-27",
          time: "18:00",
          timezone: "Asia/Taipei",
          round:
            "UPPER_FINAL",
          sideA:
            "WINNER_M3",
          sideB:
            "WINNER_M4",
          bestOf: 5,
          winnerTo:
            "M8",
          loserTo:
            "M7",
        },
        // =============================================
        // LOWER FINAL
        // =============================================
        {
          id: "M7",
          date: "2026-02-28",
          time: "18:00",
          timezone: "Asia/Taipei",
          round:
            "LOWER_FINAL",
          sideA:
            "WINNER_M5",
          sideB:
            "LOSER_M6",
          bestOf: 5,
          eliminationMatch:
            true,
          winnerTo:
            "M8",
        },
        // =============================================
        // GRAND FINAL
        // =============================================
        {
          id: "M8",
          date: "2026-03-01",
          time: "18:00",
          timezone: "Asia/Taipei",
          round:
            "GRAND_FINAL",
          sideA:
            "WINNER_M6",
          sideB:
            "WINNER_M7",
          bestOf: 5,
          championshipMatch:
            true,
        },
      ],
    }),
  ],
};

/* export const LCP_2026_SPRING = {
  stages: [
    stage({
      type: STAGE_TYPES.REGULAR_SEASON,
      format: FORMAT_TYPES.SINGLE_ROUND_ROBIN,
      matchRules: MATCH_RULES.BO3,
      draftRules: DRAFT_RULES.STANDARD,
      teamsQualified: 6,
    }),
    stage({
      type: STAGE_TYPES.PLAYOFFS,
      format: FORMAT_TYPES.DOUBLE_ELIMINATION,
      matchRules: MATCH_RULES.BO5,
      draftRules: DRAFT_RULES.FEARLESS,
    }),
  ],
};

export const LCP_2026_SUMMER = {
  stages: [
    stage({
      type: STAGE_TYPES.REGULAR_SEASON,
      format: FORMAT_TYPES.SWISS,
      matchRules: MATCH_RULES.BO3,
      draftRules: DRAFT_RULES.FEARLESS,
    }),
    stage({
      type: STAGE_TYPES.PLAYOFFS,
      format: FORMAT_TYPES.DOUBLE_ELIMINATION,
      matchRules: MATCH_RULES.BO5,
      draftRules: DRAFT_RULES.FEARLESS,
    }),
  ],
};*/

export const competitionFormats = {

  // LEC
  LEC_2026_WINTER,
  //LEC_2026_SPRING,
 // LEC_2026_SUMMER,

  // LCS
  //LCS_2026_WINTER,
  //LCS_2026_SPRING,
  //LCS_2026_SUMMER,

  // LCK
  //LCK_2026_WINTER,
  //LCK_2026_SPRING,
  //LCK_2026_SUMMER,

  // LPL
  //LPL_2026_WINTER,
  //LPL_2026_SPRING,
  //LPL_2026_SUMMER,

  // CBLOL
  //CBLOL_2026_WINTER,
  //CBLOL_2026_SPRING,
  //CBLOL_2026_SUMMER,

  // LCP
  //LCP_2026_WINTER,
  //LCP_2026_SPRING,
  //LCP_2026_SUMMER,
};