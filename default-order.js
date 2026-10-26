/* Default row order for the loan tracker.
   Outstanding rows maturing within the next 18 months, and not yet matured,
   come first (nearest maturity first). Later maturities follow, then
   already-matured rows (most recent first), then rows with no maturity.
   A row with live:false (refinanced, repaid, or not a loan) stays out of
   that first block. Months are computed by the page from each deal, so a
   data sweep cannot hard-code this order. */

export const NEAR_TERM_MONTHS = 18;

export function tier(row) {
  const months = row && typeof row === "object" ? row.months : row;
  const live = !(row && typeof row === "object" && row.live === false);
  if (months == null || months !== months) return 3;
  if (live && months >= 0 && months <= NEAR_TERM_MONTHS) return 0;
  if (months >= 0) return 1;
  return 2;
}

export function compareDefault(a, b) {
  const ta = tier(a);
  const tb = tier(b);
  if (ta !== tb) return ta - tb;
  if (ta === 0 || ta === 1) {
    if (a.months !== b.months) return a.months - b.months;
  } else if (ta === 2) {
    if (a.months !== b.months) return b.months - a.months;
  } else {
    const ay = a.year || 0;
    const by = b.year || 0;
    if (ay !== by) return by - ay;
  }
  return String(a.name || "").localeCompare(String(b.name || ""), "en", { sensitivity: "base" });
}
