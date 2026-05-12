import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import {
	Button,
	Dialog,
	DialogContent,
	DialogDescription,
	DialogTitle,
	Input,
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
	Sidebar,
	SidebarContent,
	SidebarProvider,
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from '../index';

describe('Cosmos UI primitives', () => {
	test('renders button', () => {
		render(<Button>Launch</Button>);
		expect(screen.getByRole('button', { name: 'Launch' })).toBeInTheDocument();
	});

	test('renders input', () => {
		render(<Input aria-label="Search" placeholder="Search components" />);
		expect(
			screen.getByPlaceholderText('Search components'),
		).toBeInTheDocument();
	});

	test('renders select structure', () => {
		render(
			<Select>
				<SelectTrigger aria-label="Theme">
					<SelectValue placeholder="Choose theme" />
				</SelectTrigger>
				<SelectContent>
					<SelectItem value="marble">Marble</SelectItem>
					<SelectItem value="graphene">Graphene</SelectItem>
				</SelectContent>
			</Select>,
		);
		expect(screen.getByRole('combobox')).toBeInTheDocument();
	});

	test('renders dialog structure', () => {
		render(
			<Dialog open>
				<DialogContent>
					<DialogTitle>Confirm</DialogTitle>
					<DialogDescription>Do you want to proceed?</DialogDescription>
				</DialogContent>
			</Dialog>,
		);
		expect(screen.getByText('Confirm')).toBeInTheDocument();
	});

	test('renders tabs', () => {
		render(
			<Tabs defaultValue="a">
				<TabsList>
					<TabsTrigger value="a">A</TabsTrigger>
					<TabsTrigger value="b">B</TabsTrigger>
				</TabsList>
				<TabsContent value="a">Panel A</TabsContent>
				<TabsContent value="b">Panel B</TabsContent>
			</Tabs>,
		);
		expect(screen.getByRole('tab', { name: 'A' })).toBeInTheDocument();
		expect(screen.getByText('Panel A')).toBeInTheDocument();
	});

	test('renders sidebar', () => {
		render(
			<SidebarProvider>
				<Sidebar>
					<SidebarContent>Navigation</SidebarContent>
				</Sidebar>
			</SidebarProvider>,
		);
		expect(screen.getByText('Navigation')).toBeInTheDocument();
	});
});
