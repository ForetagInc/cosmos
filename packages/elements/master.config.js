import { Style, init } from '@master/css';
import tokens from '../../design.tokens.json';

const filterColor = (color) => color.replaceAll('#', '');

Style.extend('colors', {
	'han-purple': filterColor(tokens.color['han purple'].$value),
	'eerie-black': filterColor(tokens.color['eerie black'].$value),
	'ghost-white': filterColor(tokens.color['ghost white'].$value),
	'sonic-silver': filterColor(tokens.color['sonic silver'].$value),
});

Style.extend('classes', {
	'primary': 'bg:han-purple f:ghost-white bg:purple-40:hover'
});

init();