import { h } from 'preact';
import { route } from 'preact-router';
import { ButtonCounter } from '../components';
import { loggerService } from '../shared';
import { Layout } from './Layout';

export const Home = () => {

	const onChildClicked = () => {
		loggerService.warn('callback from parent triggered');
	}

	const handleGoToAbout = () => {
		route('/about', true);
	}

	return (
		<Layout title="Home">
			<div>
				<ButtonCounter
					name="Click me"
					onClicked={(e) => onChildClicked()}
				/>
			</div>

			<div>
				<button class="btn btn-primary mt-2" onClick={handleGoToAbout}>
					go to about
				</button>
			</div>
		</Layout>
	);
}
