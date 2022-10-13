import { Component, Element, Prop, h } from '@stencil/core';
import { ITracking, TSize } from '../../types';

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
	@Prop({ mutable: true }) isLoading = false;

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
		if (this.tracking) {
			// .. setup tracking
		}
	}

	render() {
		return <button
			class={{
				'cursor:pointer outline:none ~all|100ms|ease p:6|12 f:semibold r:4': true,

				'bg:han-purple f:ghost-white {bg:purple-40}:hover b:0': this.variant === 'primary',

				'bg:white b:1|solid|gray-90 f:eerie-black {bg:gray-90}:hover {bg:gray-20 b:1|solid|gray-10}@dark {bg:gray-10}:hover@dark': this.variant === 'secondary',
			}}
			disabled={this.disabled || this.isLoading}
		>
			{this.label}
		</button >;
	}
}