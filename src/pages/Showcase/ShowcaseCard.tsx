import { h } from 'preact';
import { Card, CardBody, CardSubtitle, CardText, CardTitle } from '../../shared';

export const ShowcaseCard = () => {
	return (
		<div>
			<Card>
				<CardBody>
					<CardTitle>Title</CardTitle>
					<CardSubtitle>SubTitle</CardSubtitle>
					<CardText>
						some card
					</CardText>
				</CardBody>
			</Card>
		</div>
	);
}
