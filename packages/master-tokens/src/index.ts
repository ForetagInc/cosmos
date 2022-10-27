interface IToken {
	$value: string;
	$description?: string;
}

const generateColors = (colors: object) => Object
	.entries(colors)
	.reduce((masterColors, [key, val]: [key: string, val: IToken]) => {
		if (!key.includes('$'))
			masterColors[key.replace(' ', '-')] = val.$value;
		return masterColors;
	}, {});

const processObject = (obj: object, config: object) => {
	for (const [key, value] of Object.entries(obj)) {
		if (typeof value === 'object'
			&& value.$type) {

			const type = value.$type;

			switch (type) {
				case 'color':
					config['colors'] = generateColors(value);
					break;

				default:
					processObject(value, config);
					break;
			}
		}
	}
}

export const generateDesignTokens = (tokens: object) => {
	const config = {};
	processObject(tokens, config);
	return config;
}