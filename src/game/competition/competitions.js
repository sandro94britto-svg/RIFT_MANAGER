// =====================================================
// competitions.js (WORLD LAYER - V2)
// =====================================================

import {
  competitionFormats,
  STAGE_TYPES
} from "./competitionFormats";

// -----------------------------------------------------
// HELPERS
// -----------------------------------------------------

const createCompetition = ({
  id,
  name,
  league,
  year,
  split,
  startDate,
  endDate,
  format,
  teams,
}) => ({
  id,
  name,
  league,
  year,
  split,
  startDate,
  endDate,
  format,
  teams,
});

// -----------------------------------------------------
// TEAMS (PLACEHOLDER IDS ONLY)
// -----------------------------------------------------
// IMPORTANT: on reste sur tes ids existants (g2, fnc, etc)

const LEC_TEAMS = [
  "g2", "fnc", "navi", "shft", "sk",
  "gx", "vit", "kc", "th", "mkoi"
];

const LCS_TEAMS = [
  "tl", "c9", "lyon", "dis", "fly",
  "sr", "sen", "dig"
];

const LCK_TEAMS = [
  "t1", "gen", "dk", "hle", "kt",
  "drx", "brion", "ns", "dns", "bnk"
];

const LPL_TEAMS = [
  "jdg", "tes", "blg", "lng", "wei",
  "edg", "ig", "lgd", "nip", "al",
  "omg", "up", "ttg", "we"
];

const CBLOL_TEAMS = [
  "loud", "pain", "fluxo", "leviatan",
  "furia", "redcanids", "vivokeyd", "los"
];

const LCP_TEAMS = [
  "cfo", "deep", "gam", "softbank",
  "dfm", "groundzero", "mvk", "tsw"
];

// -----------------------------------------------------
// COMPETITIONS
// -----------------------------------------------------

export const competitions = [

  // =====================================================
  // LEC
  // =====================================================

  createCompetition({
    id: "lec_winter_2026",
    name: "LEC Winter Split 2026",
    league: "LEC",
    year: 2026,
    split: "WINTER",
    startDate: "2026-01-17",
    endDate: "2026-03-01",
    format: competitionFormats.LEC_2026_WINTER,
    teams: LEC_TEAMS,
  }),

  createCompetition({
    id: "lec_spring_2026",
    name: "LEC Spring Split 2026",
    league: "LEC",
    year: 2026,
    split: "SPRING",
    startDate: "2026-03-28",
    endDate: "2026-06-07",
    format: competitionFormats.LEC_2026_SPRING,
    teams: LEC_TEAMS,
  }),

  createCompetition({
    id: "lec_summer_2026",
    name: "LEC Summer 2026",
    league: "LEC",
    year: 2026,
    split: "SUMMER",
    startDate: "2026-06-15",
    endDate: "2026-09-01",
    format: competitionFormats.LEC_2026_SUMMER,
    teams: LEC_TEAMS,
  }),

  // =====================================================
  // LCS
  // =====================================================

  createCompetition({
    id: "lcs_winter_2026",
    name: "LCS Winter Split 2026",
    league: "LCS",
    year: 2026,
    split: "WINTER",
    startDate: "2026-01-10",
    endDate: "2026-03-01",
    format: competitionFormats.LCS_2026_WINTER,
    teams: LCS_TEAMS,
  }),

  createCompetition({
    id: "lcs_spring_2026",
    name: "LCS Spring Split 2026",
    league: "LCS",
    year: 2026,
    split: "SPRING",
    startDate: "2026-03-20",
    endDate: "2026-06-01",
    format: competitionFormats.LCS_2026_SPRING,
    teams: LCS_TEAMS,
  }),

  createCompetition({
    id: "lcs_summer_2026",
    name: "LCS Summer Split 2026",
    league: "LCS",
    year: 2026,
    split: "SUMMER",
    startDate: "2026-06-10",
    endDate: "2026-09-10",
    format: competitionFormats.LCS_2026_SUMMER,
    teams: LCS_TEAMS,
  }),

  // =====================================================
  // LCK
  // =====================================================

  createCompetition({
    id: "lck_winter_2026",
    name: "LCK Winter Split 2026",
    league: "LCK",
    year: 2026,
    split: "WINTER",
    startDate: "2026-01-14",
    endDate: "2026-03-01",
    format: competitionFormats.LCK_2026_WINTER,
    teams: LCK_TEAMS,
  }),

  createCompetition({
    id: "lck_spring_2026",
    name: "LCK Spring Split 2026",
    league: "LCK",
    year: 2026,
    split: "SPRING",
    startDate: "2026-04-01",
    endDate: "2026-06-30",
    format: competitionFormats.LCK_2026_SPRING,
    teams: LCK_TEAMS,
  }),

  createCompetition({
    id: "lck_summer_2026",
    name: "LCK Summer Split 2026",
    league: "LCK",
    year: 2026,
    split: "SUMMER",
    startDate: "2026-07-10",
    endDate: "2026-09-30",
    format: competitionFormats.LCK_2026_SUMMER,
    teams: LCK_TEAMS,
  }),

  // =====================================================
  // LPL
  // =====================================================

  createCompetition({
    id: "lpl_winter_2026",
    name: "LPL Winter Split 2026",
    league: "LPL",
    year: 2026,
    split: "WINTER",
    startDate: "2026-01-05",
    endDate: "2026-03-10",
    format: competitionFormats.LPL_2026_WINTER,
    teams: LPL_TEAMS,
  }),

  createCompetition({
    id: "lpl_spring_2026",
    name: "LPL Spring Split 2026",
    league: "LPL",
    year: 2026,
    split: "SPRING",
    startDate: "2026-03-20",
    endDate: "2026-06-15",
    format: competitionFormats.LPL_2026_SPRING,
    teams: LPL_TEAMS,
  }),

  createCompetition({
    id: "lpl_summer_2026",
    name: "LPL Summer Split 2026",
    league: "LPL",
    year: 2026,
    split: "SUMMER",
    startDate: "2026-06-20",
    endDate: "2026-09-25",
    format: competitionFormats.LPL_2026_SUMMER,
    teams: LPL_TEAMS,
  }),

  // =====================================================
  // CBLOL
  // =====================================================

  createCompetition({
    id: "cblol_winter_2026",
    name: "CBLOL Winter Split 2026",
    league: "CBLOL",
    year: 2026,
    split: "WINTER",
    startDate: "2026-01-12",
    endDate: "2026-03-05",
    format: competitionFormats.CBLOL_2026_WINTER,
    teams: CBLOL_TEAMS,
  }),

  createCompetition({
    id: "cblol_spring_2026",
    name: "CBLOL Spring Split 2026",
    league: "CBLOL",
    year: 2026,
    split: "SPRING",
    startDate: "2026-03-25",
    endDate: "2026-06-10",
    format: competitionFormats.CBLOL_2026_SPRING,
    teams: CBLOL_TEAMS,
  }),

  createCompetition({
    id: "cblol_summer_2026",
    name: "CBLOL Summer Split 2026",
    league: "CBLOL",
    year: 2026,
    split: "SUMMER",
    startDate: "2026-06-15",
    endDate: "2026-09-20",
    format: competitionFormats.CBLOL_2026_SUMMER,
    teams: CBLOL_TEAMS,
  }),

  // =====================================================
  // LCP
  // =====================================================

  createCompetition({
    id: "lcp_winter_2026",
    name: "LCP Winter Split 2026",
    league: "LCP",
    year: 2026,
    split: "WINTER",
    startDate: "2026-01-10",
    endDate: "2026-03-01",
    format: competitionFormats.LCP_2026_WINTER,
    teams: LCP_TEAMS,
  }),

  createCompetition({
    id: "lcp_spring_2026",
    name: "LCP Spring Split 2026",
    league: "LCP",
    year: 2026,
    split: "SPRING",
    startDate: "2026-03-20",
    endDate: "2026-06-05",
    format: competitionFormats.LCP_2026_SPRING,
    teams: LCP_TEAMS,
  }),

  createCompetition({
    id: "lcp_summer_2026",
    name: "LCP Summer Split 2026",
    league: "LCP",
    year: 2026,
    split: "SUMMER",
    startDate: "2026-06-10",
    endDate: "2026-09-15",
    format: competitionFormats.LCP_2026_SUMMER,
    teams: LCP_TEAMS,
  }),
];