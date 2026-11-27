# Lessons

One line per entry. Breakages: `- YYYY-MM-DD: <what broke> | <what fixed it>`. Features: casual one-liner saying what shipped and roughly when.

- 2026-11-27: Rest timer paused podcasts and disabled Siri on iPhone because starting it held a Now Playing audio session (silent unlock buffer plus beeps scheduled for the whole rest; audio-element fallback is playback) | iOS timer never opens an audio session
- 2026-10-29: Rest timer held a multi-minute media track that ducked podcasts for the whole rest | Play a brief end-only alert instead (#35)
- 2026-10-26: Rest timer stalled when the app was backgrounded | Switch to wall-clock endsAt (#29)
- 2026-10-17: Today's Plan stuck on loading while Firestore synced | Stop blocking the plan UI on sync (#23)
- 2026-10-15: Graphify page 404'd because the service worker served the SPA shell | Denylist graphify from navigateFallback (#21/#22)
- 2026-07-07: Live GitHub Pages site served raw unbuilt index.html | Publish Vite build output to docs/ (#4)
