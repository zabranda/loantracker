# Czech Corporate Loans Market — Deal Tracker

A static, self-contained HTML view of major Czech corporate loan transactions
(syndicated/club loans, acquisition / LBO financing, refinancings, and commercial
real estate finance) covering 2021 – 2026.

Live page: **https://zabranda.github.io/loantracker/**

## What's tracked

Transactions involving Czech borrowers or Czech assets. Each row has borrower,
deal type, amount, date, lenders / mandated lead arrangers, purpose, a
confidence label (Confirmed / Likely / Inferred), a source link, a status
(`outstanding`, `refinanced`, `repaid`, or `not_a_bank_loan`), and an
instrument (bank loan, bond, equity, preferred equity, M&A / EV, mixed, mezzanine).
Corporate bonds in the tracker are EUR-denominated only. CZK loans stay; CZK bond issues do not.

On a fresh load the full list is shown. Rows maturing within the next 18
months, and not yet matured, are always first, nearest maturity first.
Later maturities follow, then facilities that have already matured, then
rows with no maturity date. That order is computed from each row's maturity
(`default-order.js`), so a monthly data update does not have to be sorted
by hand. Choosing Borrower or Amount changes the order until Maturity is
selected again.

Refinanced facilities point at a successor id when one is in the tracker.
A signing date known only to the year (or a quarter / half-year) gets a
flagged mid-period maturity.

Type, group, company, lender, signing year and the coal switch narrow the
list. They live in the URL hash and are not stored silently. The 18-month
order still applies to whatever is left on screen.

## House tags on the public page

WB role labels (incumbent, participant, opportunity) are illustrative working
tags for a personal pipeline. They are not a confirmation that any institution
holds that role. This site is published on GitHub Pages, so those tags are
visible to anyone who opens the page.

## How it's built

Single `index.html` plus `default-order.js`. No build step and no runtime
dependencies. The list is a compact native table (borrower, type, status,
urgency, WB role, amount, maturity, months, lenders, certainty, source),
the same shape as the pipeline page before the 25 Oct 2026 dashboard.
Build tag `2026-10-26.1`. The interface, filters and deal notes are in
English. Proper names of borrowers, places, banks and registries stay in
their original form. The house bank is labelled WB.

## Sources

Curated from public announcements only — Reuters, Property Forum, CEE Legal
Matters, EIB press releases, law firm announcements (Dentons, A&O Shearman,
White & Case, Clifford Chance, Kinstellar, Baker McKenzie), and issuer press
releases (Allwyn, CTP, EPH, Penta, Accolade, CPI Property Group, ČEZ).

Private club deals not publicly announced are excluded. Not investment advice.

## License

The deal data is compiled from public sources; the HTML is provided as-is for
research / informational purposes.
