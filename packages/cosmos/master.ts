import Master from '@master/css';
import config from './master.config';

export const css = new Master({ config })
	.observe();

export const updateTheme = (theme: 'xr' | 'screen') => {
	css.theme = theme;
};