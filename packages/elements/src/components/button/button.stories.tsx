import React from 'react';

import { Button } from './';

export default {
	title: 'Atoms/Button',
	component: Button,
};

export const Primary = () => <Button label='Primary' variant='primary' />;

export const Secondary = () => <Button label='Secondary' variant='secondary' />

export const Tertiary = () => <Button label='Secondary' variant='tertiary' />