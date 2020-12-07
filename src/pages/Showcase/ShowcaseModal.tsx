import { h } from 'preact';
import { useState } from 'preact/hooks';
import { Button, Modal, ModalService } from '../../shared';

export const ShowcaseModal = () => {

	const modalService = new ModalService();

	const [isVisible, setIsVisible] = useState(false);

	const handleClickShowModal = () => {
		setIsVisible(!isVisible);
	}

	const handleClickTriggerModalService = () => {
		modalService.show('hello modal', 'some content').then(res => console.warn(res));
	}

	return (
		<div>
			<Button onClick={() => handleClickShowModal()}>
				show modal
			</Button>

			<Button onClick={() => handleClickTriggerModalService()}>
				trigger modal service
			</Button>

			{
				isVisible &&
				<Modal onBackdropClick={() => handleClickShowModal()}>
					some modal
				</Modal>
			}
		</div>
	);
}
