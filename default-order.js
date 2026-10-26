/* Default row order for the loan tracker.
   Rows maturing within the next 18 months, and not yet matured, come first
   (nearest maturity first). Later maturities follow, then already-matured
   rows (most recent first), then rows with no maturity. Months are computed
   by the page from each deal, so a data sweep cannot hard-code this order. */

export const NEAR_TERM_MONTHS = 18;

export function tier(months) {
  if (months == null || months !== months) return 3;
  if (months >= 0 && months <= NEAR_TERM_MONTHS) return 0;
  if (months > NEAR_TERM_MONTHS) return 1;
  return 2;
}

export function compareDefault(a, b) {
  const ta = tier(a.months);
  const tb = tier(b.months);
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
