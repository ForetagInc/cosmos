export interface ITracking {
	events: ITrackingEvent[];
};

export interface ITrackingEvent<T = keyof HTMLElementEventMap> {
	event: T,
	data: string | object;
}

export type TSize = 'micro' | 'small' | 'medium' | 'large' | 'macro';