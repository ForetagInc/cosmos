// Loaded after bun-test-dom.ts, so `window` exists by the time these run.
// Mirrors packages/cosmos/vitest.setup.ts for Bun's runner.
import '@testing-library/jest-dom/vitest';

if (!window.matchMedia) {
	Object.defineProperty(window, 'matchMedia', {
		writable: true,
		value: (query: string) => ({
			matches: false,
			media: query,
			onchange: null,
			addListener: () => {},
			removeListener: () => {},
			addEventListener: () => {},
			removeEventListener: () => {},
			dispatchEvent: () => false,
		}),
	});
}
