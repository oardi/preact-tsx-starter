import { h } from 'preact';
import { route } from 'preact-router';
import { Layout } from './Layout';

export const About = () => {

	const handleGoBack = () => {
		route('/', true);
	}

	return (
		<Layout title="About">
			<div>
				<div>
					lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
				</div>

				<button class="btn btn-primary mt-2" onClick={handleGoBack}>
					handle go back
				</button>
			</div>
		</Layout>
	)
}
