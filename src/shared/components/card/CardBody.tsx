import { ComponentChildren, h } from 'preact';

export const CardBody = ({ children }: { children: ComponentChildren }) => (
	<div class="card-body">
		{children}
	</div>
);
