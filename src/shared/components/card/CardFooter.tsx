import { ComponentChildren, h } from 'preact';

export const CardFooter = ({ children }: { children: ComponentChildren }) => (
	<div class="card-footer">
		{children}
	</div>
);
