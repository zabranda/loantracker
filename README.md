# Czech Corporate Loans Market — Deal Tracker

A static, self-contained HTML view of major Czech corporate loan transactions
(syndicated/club loans, acquisition / LBO financing, refinancings, and commercial
real estate finance) covering 2021 – Q1 2026.

Live page: **https://zabranda.github.io/loantracker/**

## What's tracked

~33 transactions involving Czech borrowers or Czech assets, with for each deal:
borrower, deal type, amount, date, lenders / mandated lead arrangers, purpose,
and a source link.

Filters by deal type and year; selections persist in `localStorage`.

## How it's built

Single `index.html` file. Grid.js loaded from CDN; no build step, no dependencies.

## Sources

Curated from public announcements only — Reuters, Property Forum, CEE Legal
Matters, EIB press releases, law firm announcements (Dentons, A&O Shearman,
White & Case, Clifford Chance, Kinstellar, Baker McKenzie), and issuer press
releases (Allwyn, CTP, EPH, Penta, Accolade, CPI Property Group, ČEZ).

Private club deals not publicly announced are excluded. Not investment advice.

## License

The deal data is compiled from public sources; the HTML is provided as-is for
research / informational purposes.
