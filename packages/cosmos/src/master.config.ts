import { extend } from '@master/css';
import { extendDesignTokens } from '@design-language/master-tokens';

import designTokens from './design.tokens.json';

export default extend(
	{
		themes: {
			xr: {},
			screen: {},
		},
		mediaQueries: {
			watch: '(max-device-width:42mm) and (min-device-width:38mm)'
		},
	},
	extendDesignTokens(designTokens)
);