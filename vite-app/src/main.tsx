import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { registerSW } from 'virtual:pwa-register';

// Register PWA service worker with autoUpdate
registerSW({
  immediate: true,
  onNeedRefresh() {
    console.log('New PWA version available, auto-updating...');
  },
  onOfflineReady() {
    console.log('PWA app ready for offline usage!');
  },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
