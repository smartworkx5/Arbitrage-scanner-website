// Kill switch for the CryptoScanner app service worker that was registered on
// this origin while cryptoscopia.com briefly served the scanner app.
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
        if ('navigate' in client) {
          client.navigate(client.url);
        }
      }
    })(),
  );
});
