interface IToken {
	$value: string;
	$description?: string;
}

const formatKey = (key: string) =>
	key.replaceAll(' ', '-')
		.replaceAll('_', '-');

const generateColors = (colors: object) => Object
	.entries(colors)
	.reduce((masterColors, [key, val]: [key: string, val: IToken]) => {
		if (!key.includes('$'))
			masterColors[formatKey(key)] = val.$value;
		return masterColors;
	}, {});

const generateSizes = (sizes: object) => {
	const values = {},
		sizeClasses = ['width', 'height', 'margin', 'padding'];

	for (const sizeClass of sizeClasses) {
		values[sizeClass] = Object
			.entries(sizes)
			.reduce((masterColors, [key, val]: [key: string, val: IToken]) => {
				if (!key.includes('$'))
					masterColors[formatKey(key)] = val.$value;

				return masterColors;
			}, {});
	}

	return values;
};

const processObject = (obj: object, config: object) => {
	for (const [key, value] of Object.entries(obj)) {
		if (typeof value === 'object'
			&& value.$type) {

			const type = value.$type;

			switch (type) {
				case 'color':
					config['colors'] = generateColors(value);
					break;

				case 'size':
					config['values'] = generateSizes(value);
					break;

				default:
					processObject(value, config);
					break;
			}
		}
	}
}

export const extendDesignTokens = (tokens: object) => {
	const config = {};
	processObject(tokens, config);
	return config;
}