import { root } from '@master/css';

export default {
	...root,
	themes: {
		xr: {},
		screen: {},
	},
	mediaQueries: {
		watch: '(max-device-width:42mm) and (min-device-width:38mm)'
	},
};