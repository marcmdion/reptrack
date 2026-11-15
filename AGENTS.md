# Agent instructions

## Feature workflow

Before coding any new feature (not small fixes), state what done looks like in one plain sentence, agreed with Marc via grill-with-docs, after reading `docs/LESSONS.md`, `GLOSSARY.md` and `docs/adr/`. Build test-first (tdd).

After opening a PR, review it for drift against the done sentence, GLOSSARY, ADRs and LESSONS (not just style), and put a plain-English "What changed / How to check it in the app" section at the top of the PR body.

When something breaks in production, after the fix append one line to `docs/LESSONS.md`: `- YYYY-MM-DD: <what broke> | <what fixed it>`. Don't reword old lines.

When a feature is created or shipped, add one casual line to the same `docs/LESSONS.md` saying what it is and roughly when it shipped (for a complex feature, also a short `docs/features/` page on the why and trade-offs, linked from that line; reuse the folder if it exists), and prune any lines in the note that are no longer true or relevant.
