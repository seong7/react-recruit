import { serviceWorker } from './browser';

if (typeof window === 'undefined') {
  const { server } = require('./server');
  server.listen();
} else {
  const { serviceWorker } = require('./browser');
  serviceWorker.start();
}
