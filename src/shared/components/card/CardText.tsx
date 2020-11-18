import { ComponentChildren, h } from 'preact';

export const CardText = ({children}: { children: ComponentChildren }) => (
	<p class="card-text">
		{children}
	</p>
);
