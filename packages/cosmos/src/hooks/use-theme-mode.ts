import { useEffect, useState } from 'react';
import { type ResolvedThemeMode, readThemeMode } from '../lib/theme';

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
