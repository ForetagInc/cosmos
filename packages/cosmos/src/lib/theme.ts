export const APP_THEMES = ['marble', 'graphene', 'euclid'] as const;

export type AppTheme = (typeof APP_THEMES)[number];

export const DEFAULT_THEME: AppTheme = 'marble';

export const APP_THEME_MODES = ['light', 'dark', 'system'] as const;

export type AppThemeMode = (typeof APP_THEME_MODES)[number];

export type ResolvedThemeMode = Exclude<AppThemeMode, 'system'>;

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
