---
name: feature-workflow
description: >-
  Default workflow for every new feature in any app repo: define done in one
  sentence with grill-with-docs, review the PR for drift against the docs with a
  plain-English summary, and log production breakages to the repo's lessons
  note, plus a one-line note for each feature shipped.
---
# Feature workflow (default for every new feature)

Run this without waiting to be told: when Marc raises a new feature, open by asking him the first grilling question, and after he merges, do step 4 (and its prune) yourself.

Small fixes (typos, colours, copy tweaks) skip step 1. Everything else follows the steps below.

## 1. Before coding: define done, grilled with docs
1. Read the repo's `docs/LESSONS.md` (if it exists) and pull out any lines relevant to this feature. Also read `GLOSSARY.md` / `docs/adr/` if present.
2. Run the `grill-with-docs` skill with the owner: one question at a time, raising relevant lessons as questions ("last time X broke because Y, how should this handle it?").
3. Finish with ONE plain sentence that says what done looks like (the acceptance criteria), confirmed by the owner. Record it at the top of the spec / issue / cloud-agent brief.
4. Build test-first with the `tdd` skill. A cloud coding agent can't load skills, so write these steps into its brief: done sentence, relevant lessons, write a failing test per behaviour first, keep GLOSSARY/ADRs updated.

## 2. After the pull request: review for drift, then a plain-English summary
1. Review the PR against the done sentence, GLOSSARY.md, ADRs and LESSONS.md: does it do what was agreed, does it contradict any recorded decision, does it reintroduce a past breakage? Code style is secondary.
2. Send the owner a short plain-English summary: what changed, what to tap/click to check it works in the running app (preview or live URL), and any drift found.
3. The owner verifies by running the app, then merges or asks for changes. Deploy only when the owner says so.

## 3. When something breaks in production
After it is fixed, append ONE line to the repo's `docs/LESSONS.md` (via a small commit/PR):
`- YYYY-MM-DD: <what broke> | <what fixed it>`
Don't reword old lines (step 4's prune pass may remove ones that are no longer true). Step 1 reads this file for every future feature.

## 4. When a feature is created or shipped
Add one line to the same `docs/LESSONS.md` note saying what the feature is and roughly when it shipped, e.g. `- Nov 2026: shipped client photo upload`. Keep it casual, one line, no fuss.
If the feature is complex, also add a short feature page in `docs/features/` (why it exists and the trade-offs made) and link it from that line, like Consult Notes does.
While you're there, do a quick prune: delete any lines in the note that are no longer true or relevant.
