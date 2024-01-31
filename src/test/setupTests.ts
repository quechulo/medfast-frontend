import { server } from './server/index';

// Enable API mocking before tests.
beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));

// Disable API mocking after the tests are done.
afterAll(() => server.close());

// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers());
