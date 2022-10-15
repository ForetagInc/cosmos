import { Component, Element, Prop, h } from '@stencil/core';
import { ITracking, TSize } from '../../types';

import { cva } from 'class-variance-authority';

const button = cva([
	'cursor:pointer outline:none ~all|100ms|ease p:6|12 f:semibold r:4'
], {
	variants: {
		variant: {
			primary: [
				'b:0',
				'primary',
				'bg:purple-40:hover',
			],
			secondary: ['bg:white b:1|solid|gray-90 f:eerie-black {bg:gray-90}:hover {bg:gray-20 b:1|solid|gray-10}@dark {bg:gray-10}:hover@dark']
		}
	}
});

@Component({
	tag: 'element-button',
})
export class Button {
	@Element() button: HTMLButtonElement;

	/**
	 * Size of the button
	 */
	@Prop() size: TSize = 'medium';

	/**
	 * Variant of the button
	 */
	@Prop() variant: 'primary' | 'secondary' = 'secondary';

	/**
	 * Visually disables the button and shows a loading spinner and also disables the button.
	 */
	@Prop({ mutable: true, attribute: 'loading' }) isLoading = false;

	/**
	 * Visually and functionally disable the Button.
	 */
	@Prop({ mutable: true }) disabled = this.isLoading ?? false;

	/**
	 * Label as a string
	 */
	@Prop({ mutable: true }) label = 'Button';

	/**
	 * Tracking data related to the `button`'s events
	 */
	@Prop() tracking?: ITracking;

	constructor() {
		console.log({ style: button(this) });

		if (this.tracking) {
			// .. setup tracking
		}
	}

	render() {
		return <button
			class={button(this)}
			disabled={this.disabled || this.isLoading}
		>
			{this.label}
		</button >;
	}
}