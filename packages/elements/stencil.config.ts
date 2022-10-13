import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';

export const config: Config = {
	namespace: 'elements',
	outputTargets: [
		// reactOutputTarget({
		// 	componentCorePackage: '@foretag/elements',
		// 	proxiesFile: '../react/index.ts',
		// 	includeDefineCustomElements: true,
		// }),
		{
			type: 'dist',
			esmLoaderPath: '../loader',
			transformAliasedImportPathsInCollection: true
		},
		{
			type: 'dist-custom-elements',
			generateTypeDeclarations: true,
		},
		{
			type: 'docs-readme',
		},
		{
			type: 'docs-json',
			file: './dist/docs.json'
		},
		{
			type: 'stats',
			file: './dist/stats.json' // optional
		},
		{
			type: 'www',
			serviceWorker: null, // disable service workers
		},
	],
};