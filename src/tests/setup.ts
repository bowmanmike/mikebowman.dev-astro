// Global test setup
import { afterEach, vi } from 'vitest';
import { JSDOM } from 'jsdom';

// Setup global browser environment for tests
const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>', {
  url: 'http://localhost',
});

// Make DOM elements available globally
global.window = dom.window;
global.document = dom.window.document;
global.HTMLElement = dom.window.HTMLElement;
global.DOMParser = dom.window.DOMParser;

// Clean up after each test
afterEach(() => {
  vi.resetAllMocks();
});