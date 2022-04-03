import { setupWorker, SetupWorkerApi } from 'msw';
import { handlers } from './handlers';

export const serviceWorker: SetupWorkerApi = setupWorker(...handlers());
