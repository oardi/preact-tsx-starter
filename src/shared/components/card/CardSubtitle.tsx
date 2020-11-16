import { h } from 'preact';

export const CardSubtitle = ({ children }) => {
	return (
		<h5 class="card-subtitle mb-2">
			{children}
		</h5>
	);
}
