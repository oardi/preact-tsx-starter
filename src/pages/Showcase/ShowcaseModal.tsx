import { h } from 'preact';
import { useState } from 'preact/hooks';
import { Button, Modal } from '../../shared';

export const ShowcaseModal = () => {

	const [isVisible, setIsVisible] = useState(false);

	const handleClick = () => {
		setIsVisible(!isVisible);
	}

	return (
		<div>
			<Button onClick={() => handleClick()}>
				show modal
			</Button>

			{
				isVisible &&
				<Modal onBackdropClick={() => handleClick()}>
					some modal
				</Modal>
			}
		</div>
	);
}
