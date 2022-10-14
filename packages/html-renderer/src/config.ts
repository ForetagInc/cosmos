import { parameters as docsParams } from './docs/config';

export const parameters = { framework: 'html' as const, ...docsParams };
export { decorators, argTypesEnhancers } from './docs/config';
export { renderToDOM, render } from './render';