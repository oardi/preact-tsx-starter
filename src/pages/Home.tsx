import { h, Fragment } from 'preact';
import { useContext } from 'preact/hooks';
import { AppContext } from '../AppContext';
import { ButtonCounter } from '../components/ButtonCounter';
import { Card, CardBody, CardText, CardTitle } from '../shared';

export const Home = () => {
	const { loggerService } = useContext(AppContext);

	const onChildClicked = () => {
		loggerService.warn('callback from parent triggered');
	}

	return (
		<Fragment>
			<h1>
				Home
			</h1>

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
		</Fragment>
	);
}
