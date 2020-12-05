import { ComponentChildren, h } from 'preact';

export const CardSubtitle = ({ children }: { children: ComponentChildren }) => (
	<div class="text-muted mb-2">
		{children}
	</div>
);
