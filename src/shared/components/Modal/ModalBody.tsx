import { ComponentChildren, h } from 'preact';

interface IModalBodyProps {
	children: ComponentChildren;
}

export const ModalBody = ({ children }: IModalBodyProps) => <div className="modal-body">{children}</div>;
