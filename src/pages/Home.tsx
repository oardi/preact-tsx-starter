import { h } from 'preact';
import { useContext } from 'preact/hooks';
import { AppContext } from '../AppContext';
import { ButtonCounter } from '../components';
import { Card, CardBody, CardText, CardTitle } from '../shared';
import { Layout } from './Layout';

export const Home = () => {
	const { loggerService } = useContext(AppContext);

	const onChildClicked = () => {
		loggerService.warn('callback from parent triggered');
	}

	return (
		<Layout title="Home">
			<Card>
				<CardBody>
					<CardTitle>some title</CardTitle>
					<CardText>
						a card
					</CardText>
				</CardBody>
			</Card>

			<ButtonCounter
				name="Click me"
				onClicked={(e) => onChildClicked()}
			/>
		</Layout>
	);
}
