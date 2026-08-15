import { useEffect, useState } from 'react';
import { readThemeMode, type ResolvedThemeMode } from '../lib/theme';

/** Tracks the mode `applyTheme` wrote to the document root. */
export function useResolvedThemeMode(): ResolvedThemeMode {
	const [mode, setMode] = useState<ResolvedThemeMode>('light');

	useEffect(() => {
		const root = document.documentElement;
		const sync = () => setMode(readThemeMode(root));

		sync();

		const observer = new MutationObserver(sync);
		observer.observe(root, { attributeFilter: ['data-mode'] });

		return () => observer.disconnect();
	}, []);

	return mode;
}
