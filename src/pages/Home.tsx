import { h, Fragment } from 'preact';
import { useContext, useEffect } from 'preact/hooks';
import { AppContext } from '../AppContext';
import { ButtonCounter } from '../components/ButtonCounter';
import { Card, CardBody, CardText, CardTitle } from '../shared';

export const Home = () => {
	const { loggerService, httpService } = useContext(AppContext);

	useEffect(() => {
		init();
	}, []);

	const init = async () => {
		try {
			const data = await httpService.get('./public/test.json');
			loggerService.warn(data.data);
		} catch (err) { loggerService.error(err); }
	}

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
