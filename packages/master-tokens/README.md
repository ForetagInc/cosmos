# MasterCSS Design Tokens

*For Master v2*

Add [DTCG tokens](https://www.w3.org/community/design-tokens/) to your Master CSS configuration.

## Features

- Colors
- Sizes and Spacing

## Usage

```ts
// master.css.js or master.css.ts
import designTokens from './design.tokens.json';
import { extendDesignTokens } from '@design-language/master-tokens';`

export default extend(
	{
 		classes: { },
		...
	},
	extendDesignTokens(designTokens)
)
```