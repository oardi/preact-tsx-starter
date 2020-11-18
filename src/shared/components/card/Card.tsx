import { ComponentChildren, h } from 'preact';

export const Card = ({ children }: { children: ComponentChildren }) => (
	<div class='card shadow-sm'>
		{children}
	</div>
);
