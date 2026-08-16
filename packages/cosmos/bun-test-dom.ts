// `bun test` uses Bun's own runner, which ignores vitest.config.ts and so has no
// DOM. Registering happy-dom here is the equivalent of vitest's `environment: 'jsdom'`.
import { GlobalRegistrator } from '@happy-dom/global-registrator';

GlobalRegistrator.register();
