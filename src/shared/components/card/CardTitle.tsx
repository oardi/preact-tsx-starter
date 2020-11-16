import { h } from 'preact';

export const CardTitle = ({ children }) => {
	return (
		<h5 class="card-title">
			{children}
		</h5>
	);
}
