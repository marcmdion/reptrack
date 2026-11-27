import { afterEach, describe, expect, it, vi } from 'vitest';
import { SOFT_BEEP_COUNT, softBeepOffsets } from './softBeep.js';

describe('softBeepOffsets', () => {
  it('schedules three evenly spaced beeps', () => {
    expect(SOFT_BEEP_COUNT).toBe(3);
    expect(softBeepOffsets()).toEqual([0, 0.3, 0.6]);
  });
});

describe('rest timer audio session', () => {
  const originalNav = globalThis.navigator;
  const originalWindow = globalThis.window;
  const originalAudio = globalThis.Audio;

  afterEach(() => {
    Object.defineProperty(globalThis, 'navigator', { value: originalNav, configurable: true });
    if (originalWindow === undefined) delete globalThis.window;
    else globalThis.window = originalWindow;
    if (originalAudio === undefined) delete globalThis.Audio;
    else globalThis.Audio = originalAudio;
    vi.resetModules();
  });

  it('does not throw when Web Audio is unavailable', async () => {
    install({ ua: 'Mozilla/5.0 (Macintosh; Intel Mac OS X)', audio: false });
    const { armSoftBeep, confirmSoftBeep, disarmSoftBeep } = await load();
    expect(() => {
      armSoftBeep();
      disarmSoftBeep();
      confirmSoftBeep();
    }).not.toThrow();
  });

  it('plays one set of beeps per rest on desktop and suspends during the countdown', async () => {
    const { events, flush } = install({ ua: 'Mozilla/5.0 (Windows NT 10.0)', platform: 'Win32' });
    const { armSoftBeep, confirmSoftBeep } = await load();
    armSoftBeep();
    await flush();
    expect(events).toEqual(['type:ambient', 'context', 'resume', 'suspend']);
    confirmSoftBeep();
    await flush();
    expect(events.filter((event) => event === 'osc')).toHaveLength(3);
    expect(events).not.toContain('html-audio');
    confirmSoftBeep();
    await flush();
    expect(events.filter((event) => event === 'osc')).toHaveLength(3);
  });

  it('does not open an audio session on iPhone, iPad, or iPadOS, so Siri and podcasts keep the device', async () => {
    const devices = [
      {
        ua: 'Mozilla/5.0 (iPhone; CPU iPhone OS 18_5 like Mac OS X) AppleWebKit/605.1.15',
        platform: 'iPhone',
        touch: 5,
      },
      {
        ua: 'Mozilla/5.0 (iPad; CPU OS 17_5 like Mac OS X) AppleWebKit/605.1.15',
        platform: 'iPad',
        touch: 5,
      },
      {
        ua: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15',
        platform: 'MacIntel',
        touch: 5,
      },
    ];
    for (const device of devices) {
      const { events, session, flush } = install(device);
      const { armSoftBeep, confirmSoftBeep, disarmSoftBeep } = await load();
      armSoftBeep();
      confirmSoftBeep();
      disarmSoftBeep();
      await flush();
      expect(events).toEqual([]);
      expect(session.type).toBe('auto');
    }
  });

  it('plays no sound on Android when the browser cannot mix audio', async () => {
    const { events, flush } = install({
      ua: 'Mozilla/5.0 (Linux; Android 14; Pixel 8) AppleWebKit/537.36 Chrome/120.0.0.0 Mobile',
      platform: 'Linux',
      touch: 5,
      session: false,
    });
    const { armSoftBeep, confirmSoftBeep } = await load();
    armSoftBeep();
    confirmSoftBeep();
    await flush();
    expect(events).toEqual([]);
  });

  it('does not start audio when the session cannot stay ambient', async () => {
    const { events, flush } = install({
      ua: 'Mozilla/5.0 (Macintosh; Intel Mac OS X)',
      platform: 'MacIntel',
      lockPlayback: true,
    });
    const { armSoftBeep, confirmSoftBeep } = await load();
    armSoftBeep();
    confirmSoftBeep();
    await flush();
    expect(events).not.toContain('context');
    expect(events).not.toContain('html-audio');
  });

  it('a cancel during unlock does not leave the context running', async () => {
    const gates = [];
    const { events, flush } = install({
      ua: 'Mozilla/5.0 (X11; Linux x86_64)',
      platform: 'Linux',
      resume(ctx) {
        return new Promise((resolve) => {
          gates.push(() => {
            ctx.state = 'running';
            resolve();
          });
        });
      },
    });
    const { armSoftBeep, disarmSoftBeep } = await load();
    armSoftBeep();
    disarmSoftBeep();
    gates[0]();
    await flush();
    expect(events).toContain('suspend');
    expect(events).not.toContain('osc');
  });
});

function install({ ua, platform = '', touch = 0, audio = true, lockPlayback = false, session: withSession = true, resume }) {
  const events = [];
  const session = {
    type: lockPlayback ? 'playback' : 'auto',
  };
  if (!lockPlayback) {
    let type = 'auto';
    Object.defineProperty(session, 'type', {
      configurable: true,
      get() {
        return type;
      },
      set(value) {
        events.push(`type:${value}`);
        type = value;
      },
    });
  } else {
    Object.defineProperty(session, 'type', {
      configurable: true,
      get() {
        return 'playback';
      },
      set(value) {
        events.push(`type:${value}`);
      },
    });
  }
  const nav = { userAgent: ua, platform, maxTouchPoints: touch };
  if (withSession) nav.audioSession = session;
  Object.defineProperty(globalThis, 'navigator', {
    value: nav,
    configurable: true,
  });
  globalThis.Audio = class Audio {
    constructor() {
      events.push('html-audio');
    }
  };
  if (!audio) {
    delete globalThis.window;
  } else {
    globalThis.window = {
      AudioContext: class AudioContext {
        constructor() {
          events.push('context');
          this.state = 'suspended';
          this.currentTime = 0;
        }
        resume() {
          events.push('resume');
          if (resume) return resume(this);
          this.state = 'running';
          return Promise.resolve();
        }
        suspend() {
          events.push('suspend');
          this.state = 'suspended';
          return Promise.resolve();
        }
        createOscillator() {
          events.push('osc');
          return {
            frequency: { setValueAtTime() {} },
            connect() {},
            start() {},
            stop() {},
          };
        }
        createGain() {
          return {
            gain: { setValueAtTime() {}, linearRampToValueAtTime() {} },
            connect() {},
          };
        }
      },
    };
  }
  return { events, session, flush: () => Promise.resolve().then(() => Promise.resolve()) };
}

async function load() {
  vi.resetModules();
  return import('./softBeep.js');
}
