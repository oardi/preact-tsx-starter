import { h } from 'preact';

export const Card = ({ children }) => {
	return (
		<div class='card shadow-sm'>
			{children}
		</div>
	);
}
