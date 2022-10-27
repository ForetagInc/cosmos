import Master, { root } from '@master/css';
import config from './master.config';

export const css = new Master({ config, root })
	.observe();

export const updateTheme = (theme: 'xr' | 'screen') => {
	css.theme = theme;
};