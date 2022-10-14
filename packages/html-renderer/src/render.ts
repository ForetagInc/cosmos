/* eslint-disable no-param-reassign */
// @ts-expect-error (Converted from ts-ignore)
import global from 'global';

import { dedent } from 'ts-dedent';
import { simulatePageLoad, simulateDOMContentLoaded } from '@storybook/preview-web';
import type { RenderContext } from '@storybook/store';
import { ArgsStoryFn } from '@storybook/csf';
import type { HtmlFramework } from './types';

const { Node } = global;

export const render: ArgsStoryFn<HtmlFramework> = (args, context) => {
	const { id, component: Component } = context;

	console.log({ id, Component });

	if (typeof Component === 'string') {
		let output = Component;
		Object.keys(args).forEach((key) => {
			output = output.replace(`{{${key}}}`, args[key]);
		});
		return output;
	}
	if (Component instanceof HTMLElement) {
		const output = Component.cloneNode(true) as HTMLElement;
		Object.keys(args).forEach((key) => {
			output.setAttribute(
				key,
				typeof args[key] === 'string' ? args[key] : JSON.stringify(args[key])
			);
		});

		return output;
	}
	if (typeof Component === 'function') {
		return Component(args, context);
	}

	console.warn(dedent`
    Storybook's HTML renderer only supports rendering DOM elements and strings.
    Received: ${Component}
  `);
	throw new Error(`Unable to render story ${id}`);
};

export function renderToDOM(
	{ storyFn, kind, name, showMain, showError, forceRemount }: RenderContext<HtmlFramework>,
	domElement: Element
) {
	const element = storyFn();
	showMain();
	if (typeof element === 'string') {
		domElement.innerHTML = element;
		simulatePageLoad(domElement);
	} else if (element instanceof Node) {
		if (domElement.firstChild === element && forceRemount === false) {
			return;
		}

		domElement.innerHTML = '';
		domElement.appendChild(element);
		simulateDOMContentLoaded();
	} else {
		showError({
			title: `Expecting an HTML snippet or DOM node from the story: "${name}" of "${kind}".`,
			description: dedent`
        Did you forget to return the HTML snippet from the story?
        Use "() => <your snippet or node>" or when defining the story.
      `,
		});
	}
}