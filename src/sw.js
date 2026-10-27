import { cleanupOutdatedCaches, createHandlerBoundToURL, precacheAndRoute } from 'workbox-precaching';
import { clientsClaim } from 'workbox-core';
import { NavigationRoute, registerRoute } from 'workbox-routing';

self.skipWaiting();
clientsClaim();

precacheAndRoute(self.__WB_MANIFEST);
cleanupOutdatedCaches();

registerRoute(
  new NavigationRoute(createHandlerBoundToURL('/reptrack/index.html'), {
    denylist: [/^\/reptrack\/graphify(\/|$)/],
  }),
);

let restAlarmTimer = null;

self.addEventListener('message', (event) => {
  const data = event.data;
  if (!data || data.type !== 'REST_ALARM') return;
  clearTimeout(restAlarmTimer);
  restAlarmTimer = null;
  if (data.cancel) return;

  const delay = Math.max(0, data.endsAt - Date.now());
  restAlarmTimer = setTimeout(() => {
    restAlarmTimer = null;
    void self.registration.showNotification('Rest complete', {
      body: 'Ready for your next set',
      tag: 'reptrack-rest',
      renotify: true,
    });
  }, delay);
});
