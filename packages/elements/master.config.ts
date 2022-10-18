import { Style, init } from '@master/css';
import tokens from '../../design.tokens.json';

const handleScheme = () => {
	const localScheme = localStorage.getItem('scheme');
	const scheme = window.matchMedia('(prefers-color-scheme: dark)');
	const { classList } = document.documentElement;
	const isDark = () => localScheme === 'dark' || scheme.matches || false;

	const toggleScheme = () => {
		const dark = isDark();

		classList.toggle('dark', dark);
		classList.toggle('light', !dark);
	};

	if (localScheme === null)
		scheme.addEventListener('change', toggleScheme);

	toggleScheme();

	return { toggleScheme };
};

export const { toggleScheme } = handleScheme();

const filterColor = (color) => color.replaceAll('#', '');

Style.extend('colors', {
	'han-purple': filterColor(tokens.color['han purple'].$value),
	'eerie-black': filterColor(tokens.color['eerie black'].$value),
	'ghost-white': filterColor(tokens.color['ghost white'].$value),
	'sonic-silver': filterColor(tokens.color['sonic silver'].$value),

	'primary': filterColor(tokens.color['han purple'].$value)
});

Style.extend('classes', {
	'primary': 'bg:han-purple f:ghost-white bg:purple-40:hover'
});

init();