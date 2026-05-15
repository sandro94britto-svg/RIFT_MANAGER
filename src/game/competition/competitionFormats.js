// =====================================================
// competitionFormats.js - FULL WORLD V2
// Stage-based competitive engine
// =====================================================

// -----------------------------------------------------
// STAGE TYPES
// -----------------------------------------------------

export const STAGE_TYPES = {
  REGULAR_SEASON: "REGULAR_SEASON",
  GROUP_STAGE: "GROUP_STAGE",
  SWISS_STAGE: "SWISS_STAGE",
  PLAY_IN: "PLAY_IN",
  PLAYOFFS: "PLAYOFFS",
  KNOCKOUT: "KNOCKOUT",
};

// -----------------------------------------------------
// FORMAT TYPES
// -----------------------------------------------------

export const FORMAT_TYPES = {
  SINGLE_ROUND_ROBIN: "SINGLE_ROUND_ROBIN",
  DOUBLE_ROUND_ROBIN: "DOUBLE_ROUND_ROBIN",
  SWISS: "SWISS",
  GROUPS: "GROUPS",
  DOUBLE_ELIMINATION: "DOUBLE_ELIMINATION",
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
      type: STAGE_TYPES.SWISS_STAGE,
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

export const LCS_2026_SPRING = {
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

export const LCS_2026_SUMMER = {
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
// LCK (SIMPLIFIED ENGINE LAYER)
// =====================================================

export const LCK_2026_WINTER = {
  stages: [
    stage({
      type: STAGE_TYPES.GROUP_STAGE,
      format: FORMAT_TYPES.GROUPS,
      matchRules: MATCH_RULES.BO3,
      draftRules: DRAFT_RULES.FEARLESS,
      notes: "Group Battle + Super Week system",
    }),
    stage({
      type: STAGE_TYPES.PLAYOFFS,
      format: FORMAT_TYPES.DOUBLE_ELIMINATION,
      matchRules: MATCH_RULES.BO5,
      draftRules: DRAFT_RULES.FEARLESS,
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
      type: STAGE_TYPES.GROUP_STAGE,
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
      type: STAGE_TYPES.GROUP_STAGE,
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
      type: STAGE_TYPES.GROUP_STAGE,
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
      type: STAGE_TYPES.SWISS_STAGE,
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