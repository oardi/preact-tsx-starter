import { ComponentChildren, h } from 'preact';

export const CardTitle = ({ children }: { children: ComponentChildren }) => (
	<h5 class="card-title">
		{children}
	</h5>
);
