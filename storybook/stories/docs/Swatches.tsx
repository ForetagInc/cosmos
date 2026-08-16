export function Swatches({ tokens }: { tokens: string[] }) {
	return (
		<div
			style={{
				display: 'grid',
				gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
				gap: 12,
				margin: '16px 0',
			}}
		>
			{tokens.map((token) => (
				<div
					key={token}
					style={{
						display: 'flex',
						alignItems: 'center',
						gap: 10,
						padding: 8,
						border: '1px solid var(--border)',
						borderRadius: 8,
					}}
				>
					<span
						style={{
							width: 32,
							height: 32,
							flexShrink: 0,
							borderRadius: 6,
							border: '1px solid var(--border)',
							background: `var(--${token})`,
						}}
					/>
					<code style={{ fontSize: 12 }}>--{token}</code>
				</div>
			))}
		</div>
	);
}
