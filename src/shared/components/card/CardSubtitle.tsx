import { ComponentChildren, h } from 'preact';

export const CardSubtitle = ({ children }: { children: ComponentChildren }) => (
	<h5 class="card-subtitle mb-2">
		{children}
	</h5>
);
