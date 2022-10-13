export default {
	title: 'Atoms/Button',
	component: 'element-button'
};

const Template = (args) => `<element-button
	size='${args.size}'
	label='${args.label}'
	variant='${args.variant ?? 'secondary'}'
	is-loading='${args.isLoading ?? false}'
	disabled='${args.disabled ?? false}'
></element-button>`;

export const Default = Template.bind({});
Default.args = {
	label: 'Secondary',
};

export const Primary = Template.bind({});
Primary.args = {
	label: 'Primary',
	variant: 'primary',
};