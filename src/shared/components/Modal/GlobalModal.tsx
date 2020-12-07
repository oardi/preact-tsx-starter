import { ComponentChildren, Fragment, h } from 'preact';
import { Button } from '../Button';
import { COLOR } from '../component.enums';
import { Modal } from './Modal';

interface IModalProps {
	children: ComponentChildren;
	title?: string;
	description?: string;
	onOk?: () => void;
	onCancel?: () => void;
}

export const GlobalModal = ({ children, title, onOk, onCancel }: IModalProps) => {
	return (
		<Modal
			header={title}
			onHeaderCloseClick={onCancel}
			footer={
				<Fragment>
					<Button onClick={onOk}>ok</Button>
					<Button color={COLOR.secondary} onClick={onCancel}>cancel</Button>
				</Fragment>
			}>
			{children}
		</Modal>
	);
}
