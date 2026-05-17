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
      realCalendar: true,
      teamsQualified: 8,
      calendarRules: {
        totalWeeks: 4,
        allowedDays: [6, 0, 1],
        matchesPerDay: 6,
        matchesPerWeek: 18,
      }
    }),
    stage({
      type: STAGE_TYPES.PLAYOFFS,
      format: FORMAT_TYPES.DOUBLE_ELIMINATION,
      matchRules: {
        early: MATCH_RULES.BO3,
        late: MATCH_RULES.BO5,
      },
      draftRules: DRAFT_RULES.FEARLESS,
    }),
  ],
};

export const LEC_2026_SPRING = {
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
};

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
      calendarRules: {
        totalWeeks: 3,
        allowedDays: [6, 0],
        matchesPerDay: 2,
        matchesPerWeek: 5,
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

export const LCS_2026_SPRING = {
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
};

// =====================================================
// LCK (SIMPLIFIED ENGINE LAYER)
// =====================================================

export const LCK_2026_WINTER = {
  // =================================================
  // INITIAL GROUPS
  // =================================================
  initialGroups: {
    A: [
      "t1",
      "gen",
      "kt",
      "ns",
      "brion",
    ],
    B: [
      "dk",
      "hle",
      "drx",
      "dns",
      "bnk",
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
        DRAFT_RULES.STANDARD,
      calendarRules: {
        totalWeeks: 2,
        allowedDays: [
          3,4,5,6,0
        ],
        matchesPerDay: 2,
        matchesPerWeek: 12,
      },
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
      calendarRules: {
        totalWeeks: 1,
        allowedDays: [
          3,4,5,6,0
        ],
        matchesPerDay: 1,
        matchesPerWeek: 6,
      },
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
      qualificationRules: {
        fromWinnerGroup: [
          3,4,5
        ],
        fromLoserGroup: [
          2,3,4
        ],
      },
      qualifiedTeams: 3,
      eliminatedTeams: 3,
      matchRules:
        MATCH_RULES.BO5,
      draftRules:
        DRAFT_RULES.FEARLESS,
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
      qualificationRules: {
        fromWinnerGroup: [
          1,2
        ],
        fromLoserGroup: [
          1
        ],
        fromPlayIn: 3,
      },
      matchRules:
        MATCH_RULES.BO5,
      draftRules:
        DRAFT_RULES.FEARLESS,
    }),
  ],
};

export const LCK_2026_SPRING = {
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
};

// =====================================================
// LPL (SIMPLIFIED MULTI-STAGE ENGINE)
// =====================================================

export const LPL_2026_WINTER = {
  stages: [
    stage({
      type: STAGE_TYPES.REGULAR_SEASON,
      format: FORMAT_TYPES.GROUPS,
      matchRules: MATCH_RULES.BO3,
      draftRules: DRAFT_RULES.FEARLESS,
      notes: "Ascend / Perseverance / Nirvana system",
    }),
    stage({
      type: STAGE_TYPES.KNOCKOUT,
      format: FORMAT_TYPES.DOUBLE_ELIMINATION,
      matchRules: MATCH_RULES.BO5,
      draftRules: DRAFT_RULES.FEARLESS,
    }),
  ],
};

export const LPL_2026_SPRING = {
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
};

// =====================================================
// CBLOL
// =====================================================

export const CBLOL_2026_WINTER = {
  stages: [
    stage({
      type: STAGE_TYPES.REGULAR_SEASON,
      format: FORMAT_TYPES.SINGLE_ROUND_ROBIN,
      matchRules: MATCH_RULES.BO1,
      draftRules: DRAFT_RULES.STANDARD,
      teamsQualified: 8,
    }),
    stage({
      type: STAGE_TYPES.PLAYOFFS,
      format: FORMAT_TYPES.DOUBLE_ELIMINATION,
      matchRules: {
        early: MATCH_RULES.BO3,
        late: MATCH_RULES.BO5,
      },
      draftRules: DRAFT_RULES.FEARLESS,
    }),
  ],
};

export const CBLOL_2026_SPRING = {
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
};

// =====================================================
// LCP
// =====================================================

export const LCP_2026_WINTER = {
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

export const LCP_2026_SPRING = {
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
};

export const competitionFormats = {

  // LEC
  LEC_2026_WINTER,
  LEC_2026_SPRING,
  LEC_2026_SUMMER,

  // LCS
  LCS_2026_WINTER,
  LCS_2026_SPRING,
  LCS_2026_SUMMER,

  // LCK
  LCK_2026_WINTER,
  LCK_2026_SPRING,
  LCK_2026_SUMMER,

  // LPL
  LPL_2026_WINTER,
  LPL_2026_SPRING,
  LPL_2026_SUMMER,

  // CBLOL
  CBLOL_2026_WINTER,
  CBLOL_2026_SPRING,
  CBLOL_2026_SUMMER,

  // LCP
  LCP_2026_WINTER,
  LCP_2026_SPRING,
  LCP_2026_SUMMER,
};