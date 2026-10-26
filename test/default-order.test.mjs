import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import { compareDefault, NEAR_TERM_MONTHS, tier } from "../default-order.js";

test("near-term maturities stay first, nearest first, and the rest follow", () => {
  const rows = [
    { name: "Later", months: 30, year: 2024 },
    { name: "Past recent", months: -2, year: 2024 },
    { name: "Unknown", months: null, year: 2025 },
    { name: "Far near", months: NEAR_TERM_MONTHS, year: 2024 },
    { name: "Soon", months: 2, year: 2024 },
    { name: "This month", months: 0, year: 2026 },
    { name: "Just outside", months: NEAR_TERM_MONTHS + 1, year: 2024 },
    { name: "Old past", months: -40, year: 2020 },
  ];
  const names = rows.slice().sort(compareDefault).map(r => r.name);
  assert.deepEqual(names, [
    "This month",
    "Soon",
    "Far near",
    "Just outside",
    "Later",
    "Past recent",
    "Old past",
    "Unknown",
  ]);
  assert.equal(tier(0), 0);
  assert.equal(tier(NEAR_TERM_MONTHS), 0);
  assert.equal(tier(-1), 2);
  assert.equal(tier(null), 3);
});

test("equal months break ties by borrower name", () => {
  const names = [
    { name: "Beta", months: 4, year: 2024 },
    { name: "Alpha", months: 4, year: 2024 },
  ].sort(compareDefault).map(r => r.name);
  assert.deepEqual(names, ["Alpha", "Beta"]);
});

test("the page uses this order and no longer ships the removed tools", () => {
  const html = readFileSync(new URL("../index.html", import.meta.url), "utf8");
  assert.match(html, /from "\.\/default-order\.js"/);
  assert.match(html, /compareDefault\(/);
  assert.match(html, /2026-10-26\.1/);
  assert.equal(html.includes("Copy for email"), false);
  assert.equal(html.includes("text/calendar"), false);
  assert.equal(html.includes('id="chart"'), false);
  assert.equal(html.includes("buildIcs"), false);
  assert.equal(html.includes("copyMail"), false);
  assert.match(html, /labelled WB/);
  assert.equal(NEAR_TERM_MONTHS, 18);
});
