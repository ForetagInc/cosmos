export const APP_THEME_MODES = ['light', 'dark', 'system'] as const;

export type AppThemeMode = (typeof APP_THEME_MODES)[number];

export type ResolvedThemeMode = Exclude<AppThemeMode, 'system'>;

export const APP_THEME_DEFINITIONS = {
	marble: { label: 'Marble', modes: ['light', 'dark'] },
	graphene: { label: 'Graphene', modes: ['dark'] },
	euclid: { label: 'Euclid', modes: ['light'] },
	doomsday: { label: 'Doomsday', modes: ['dark'] },
} as const satisfies Record<
	string,
	{ label: string; modes: readonly ResolvedThemeMode[] }
>;

export type AppTheme = keyof typeof APP_THEME_DEFINITIONS;

export const APP_THEMES = Object.keys(APP_THEME_DEFINITIONS) as AppTheme[];

export const DEFAULT_THEME: AppTheme = 'marble';

export const DEFAULT_THEME_MODE: AppThemeMode = 'system';

export function isAppTheme(value: string): value is AppTheme {
	return APP_THEMES.includes(value as AppTheme);
}

export function normalizeTheme(value?: string | null): AppTheme {
	if (!value) return DEFAULT_THEME;
	return isAppTheme(value) ? value : DEFAULT_THEME;
}

export function isAppThemeMode(value: string): value is AppThemeMode {
	return APP_THEME_MODES.includes(value as AppThemeMode);
}

export function normalizeThemeMode(value?: string | null): AppThemeMode {
	if (!value) return DEFAULT_THEME_MODE;
	return isAppThemeMode(value) ? value : DEFAULT_THEME_MODE;
}

export function resolveThemeMode(
	mode: AppThemeMode,
	systemMode: ResolvedThemeMode,
): ResolvedThemeMode {
	return mode === 'system' ? systemMode : mode;
}

export function getSystemThemeMode(): ResolvedThemeMode {
	return typeof window !== 'undefined' &&
		window.matchMedia('(prefers-color-scheme: dark)').matches
		? 'dark'
		: 'light';
}

export function resolveThemeAppearance(
	theme: AppTheme,
	mode: AppThemeMode,
	systemMode: ResolvedThemeMode = getSystemThemeMode(),
): ResolvedThemeMode {
	const resolved = resolveThemeMode(mode, systemMode);
	const supported: readonly ResolvedThemeMode[] =
		APP_THEME_DEFINITIONS[theme].modes;
	return supported.includes(resolved) ? resolved : supported[0];
}

/** Reads back what `applyTheme` wrote, falling back to the OS preference. */
export function readThemeMode(root: HTMLElement): ResolvedThemeMode {
	const mode = root.dataset.mode;
	if (mode === 'dark' || mode === 'light') return mode;
	return getSystemThemeMode();
}

export function applyTheme(
	root: HTMLElement,
	theme: AppTheme,
	mode: AppThemeMode,
	systemMode: ResolvedThemeMode = getSystemThemeMode(),
): ResolvedThemeMode {
	const resolvedMode = resolveThemeAppearance(theme, mode, systemMode);

	root.dataset.theme = theme;
	root.dataset.themeMode = mode;
	root.dataset.mode = resolvedMode;
	root.classList.toggle('dark', resolvedMode === 'dark');
	root.style.colorScheme = resolvedMode;

	return resolvedMode;
}
