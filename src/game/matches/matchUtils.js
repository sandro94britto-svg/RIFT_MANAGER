// =====================================================
// matchUtils.js
// =====================================================

export function addDays(dateString, days) {

  const date = new Date(dateString);

  date.setDate(date.getDate() + days);

  return date.toISOString().split("T")[0];
}