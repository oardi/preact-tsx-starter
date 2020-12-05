import { ComponentChildren, h } from 'preact';

interface IModalFooterProps {
	children: ComponentChildren;
}

export const ModalFooter = ({ children }: IModalFooterProps) => <div className="modal-body">{children}</div>;
