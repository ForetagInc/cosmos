/// <reference types="webpack-env" />

import './globals';

export * from './public-api';
export * from './public-types';
// export * from './framework-api';

// optimization: stop HMR propagation in webpack
module?.hot?.decline();