import { h } from 'preact';
import { useContext, useEffect, useState } from 'preact/hooks';
import { AppContext } from '../AppContext';
import { ButtonCounter } from '../components';
import { Card, CardBody, CardText, CardTitle } from '../shared';
import { Layout } from './Layout';
import marked from 'marked';

export const Home = () => {

	const [markup, setMarkup] = useState<string>(undefined);
	const { loggerService, httpService } = useContext(AppContext);

	useEffect(() => {
		init();
	}, []);

	const init = async () => {
		try {
			const data = await httpService.get<string>('./public/showcase/showcase-card.md', { responseType: 'arraybuffer' });
			setMarkup(marked(data.data));
		} catch (err) { loggerService.error(err); }
	}

	const onChildClicked = () => {
		loggerService.warn('callback from parent triggered');
	}

	return (
		<Layout title="Home">

			<div dangerouslySetInnerHTML={{ __html: markup }}>
				<span>I will be skipped</span>
				<p>So do I</p>
			</div>

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
