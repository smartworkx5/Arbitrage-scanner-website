// Kill switch for the CryptoScanner app service worker that was registered on
// this origin while cryptoscopia.com briefly served the scanner app.
// (Deploy note: project output directory reset to the Next.js default;
// the previous "dist" setting was a leftover from the Vite episode.)
// Any browser still running that old worker will fetch this file as an
// update, install it, and then this worker unregisters itself, deletes all
// caches, and reloads open pages so they load the real website from the
// network instead of the cached app shell.
self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(keys.map((key) => caches.delete(key)));
      await self.registration.unregister();
      const clients = await self.clients.matchAll({
        type: 'window',
        includeUncontrolled: true,
      });
      for (const client of clients) {
        // Do NOT reload /app pages: the scanner app registers /sw.js on
        // every load, so reloading an /app page would reinstall this
        // kill-switch and reload again in a loop. Website pages never
        // register a worker, so reloading them is safe and clears the
        // trapped cached app shell.
        let path = '';
        try {
          path = new URL(client.url).pathname;
        } catch (_) {
          path = '';
        }
        if (
          'navigate' in client &&
          path !== '/app' &&
          !path.startsWith('/app/')
        ) {
          client.navigate(client.url);
        }
      }
    })(),
  );
});
