---
target: home page
total_score: 20
p0_count: 2
p1_count: 2
timestamp: 2026-07-14T05-01-37Z
slug: src-app-page-tsx
---
# Critique: Home Page (src/app/page.tsx)

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 2 | Fake progress bar reaches 100% in 3s regardless of the real request |
| 2 | Match System / Real World | 3 | "Generation 1-5" framed in game-data jargon; tooltip answers a different question |
| 3 | User Control and Freedom | 2 | Theme popover flips upward and clips "None" off-screen; no generation cancel |
| 4 | Consistency and Standards | 2 | "Select a Pokemon" vs "Select A Theme"; Pokémon/Pokemon accent drift |
| 5 | Error Prevention | 3 | Required validation + double-submit block work; off-screen mis-tap possible |
| 6 | Recognition Rather Than Recall | 1 | 874-item flat dropdown, no search, no sprites; type-ahead invisible and touch-unusable |
| 7 | Flexibility and Efficiency | 2 | Hidden type-ahead + sticky theme; no search, no "surprise me" |
| 8 | Aesthetic and Minimalist Design | 3 | Clean, on-brand palette; but anonymous — ~60% dead space on desktop |
| 9 | Error Recovery | 1 | Raw server error dumped in a toast titled "Error!", then re-thrown unhandled |
| 10 | Help and Documentation | 1 | One hover-only tooltip; footer with all links hidden below md |
| **Total** | | **20/40** | **Acceptable — significant improvements needed** |

## Anti-Patterns Verdict

LLM assessment: borderline — escapes the banned tells (deterministic detector: 0 findings across all 8 home-page files, and the in-page overlay scan reported "No anti-patterns found") but reads as "shadcn starter with a red theme." The single most damning miss: a Pokémon product whose home page contains zero Pokémon. The palette system is real design work; the composition is default.

Detector evidence beyond slop: select/switch borders at 1.42:1 against the page (below the 3:1 non-text guideline, stock shadcn behavior, both themes); select trigger placeholder renders in full foreground color, indistinguishable from a chosen value; tap targets below minimums (switch 36x20, theme toggle 36x36, logo 35x35, footer links 17px hit height). All measured text contrast passes AA (subtitle 8.66:1 dark / 6.08:1 light; CTA text 4.64:1 dark / 5.59:1 light).

## Priority Issues

- [P0] 874-item flat Pokemon Select (generate-form.tsx) — fails recognition-over-recall, brutal on touch (no type-ahead, Garchomp ~445 rows deep). Fix: searchable combobox (cmdk) with sprite thumbnails per row.
- [P0] Accessibility cluster — WCAG AA currently failed: unnamed switch (no FormControl id wiring), invisible focus on the red CTA (1px red ring on red), unnamed mode-toggle, tooltip on a bare svg (keyboard/touch unreachable), zero prefers-reduced-motion handling (confetti + fade-ups), 1.42:1 control borders.
- [P1] No Pokémon on the home page — show the selected Pokémon's sprite immediately on selection; confirms the pick and delivers brand principle 1 pre-result.
- [P1] Fake loading bar (loading.tsx) — hardcoded timers hit 100% then stall; replace with honest indeterminate pokéball spinner + rotating flavor copy.
- [P2] Theme popover clips off-viewport (the "None" escape hatch unreachable by mouse/thumb).
- [P2] Empty states: "Previous Nicknames" opens a blank sheet for first-timers; sticky theme restores silently via a 250ms setTimeout hack; footer (all links/attribution) hidden entirely on mobile.

## Persona Red Flags

Jordan (first-timer): "Generation 1-5" meaningless without hover; most prominent nav item opens an empty sheet; raw exception text on API failure.
Casey (mobile one-handed): no search in an 874-row picker; hover-only tooltip; footer void on mobile; "None" out of thumb reach; sub-44px targets everywhere.
Sam (screen reader/keyboard): unnamed switch and mode-toggle; alt="logo"; invisible CTA focus; tooltip unreachable; Link-inside-Button in previous.tsx (double tab stops).

## Minor Observations

- "where as" -> "whereas" typo in tooltip; label capitalization drift.
- Fixed footer overlaps the form on short viewports.
- Theme badge colors (pure blue/darkviolet etc.) sit outside the brand system — the one place "one red, used with intent" breaks.
- Dead comments/empty HeaderProps left in shipped files.

## Questions to Consider

1. If the Pokémon is the hero, why does the pre-generation experience contain none — would you need a headline at all if a sprite appeared on selection?
2. Why do 874 creatures and 29 vibes get the identical widget?
3. What does a progress bar that always lies train users to believe the second time?

## What's Working

1. The palette system in globals.css is real design work — brand-tinted neutrals, elevation-by-lightness dark mode, one disciplined red.
2. The reveal moment lands: sprite-as-hero, confetti, shareable URL, per-result page titles. Peak-end thinking present at the destination.
3. Micro-efficiencies: select type-ahead (desktop), sticky last theme, proper disabled/spinner submit state.
