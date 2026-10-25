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

The action list counts **outstanding bank loans** inside a refi window of
12, 18, 24, or 36 months (default 18). Refinanced facilities point at a
successor id when one is in the tracker. A signing date known only to the
year (or a quarter / half-year) gets a flagged mid-period maturity so the
loan can enter the radar; it stays on the Doplnit splatnost list until a
real month is known.

Filters (window, WB role, type, group, maturity year, confirmed-only, search)
live in the URL hash, so a view can be shared. They are not stored silently.
Last visit, personal WB-role overrides, notes, stars, and leads stay in
`localStorage` on this browser only.

## House tags on the public page

WB role labels (incumbent, participant, opportunity) are illustrative working
tags for a personal pipeline. They are not a confirmation that any institution
holds that role. This site is published on GitHub Pages, so those tags are
visible to anyone who opens the page.

## How it's built

Single `index.html` file. No build step and no runtime dependencies. The
action list is a native table so column sorting and keyboard access stay
in the page. Build tag `2026-10-25.1`.

## Sources

Curated from public announcements only — Reuters, Property Forum, CEE Legal
Matters, EIB press releases, law firm announcements (Dentons, A&O Shearman,
White & Case, Clifford Chance, Kinstellar, Baker McKenzie), and issuer press
releases (Allwyn, CTP, EPH, Penta, Accolade, CPI Property Group, ČEZ).

Private club deals not publicly announced are excluded. Not investment advice.

## License

The deal data is compiled from public sources; the HTML is provided as-is for
research / informational purposes.
