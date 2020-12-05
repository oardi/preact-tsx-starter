import { h } from 'preact';
import { Card, CardBody, CardFooter, CardSubtitle, CardText, CardTitle } from '../../shared';

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
				<CardFooter>
					Footer
				</CardFooter>
			</Card>
		</div>
	);
}
