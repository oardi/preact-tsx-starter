import { ComponentChildren, Fragment, h, VNode } from 'preact';
import { useEffect } from 'preact/hooks';
import { ModalHeader } from './ModalHeader';
import { ModalBody } from './ModalBody';
import { ModalBackdrop } from './ModalBackdrop';

interface IModalProps {
	children: ComponentChildren;
	header?: string;
	footer?: string | VNode;
	onHeaderCloseClick?: Function;
	onBackdropClick?: Function;
}

export const Modal = ({
	children,
	header,
	footer,
	onHeaderCloseClick,
	onBackdropClick
}: IModalProps) => {

	let clickListener: EventListener;

	const removeClickListener = () => {
		if (clickListener) {
			document.removeEventListener('click', clickListener);
			clickListener = () => { };
		}
	};

	const initClickBackdropListener = () => {
		clickListener = (e: Event) => {
			const modalDialog = document.querySelector('.modal-dialog');
			const clickedOutside = modalDialog && !modalDialog.contains(e.target as Node);
			if (clickedOutside) {
				removeClickListener();
				if (onBackdropClick) {
					onBackdropClick();
				}
			}
		};
		document.addEventListener('click', clickListener);
	};

	useEffect(() => {
		document.body.classList.add('modal-open');
		initClickBackdropListener();
		return () => {
			document.body.classList.remove('modal-open');
			removeClickListener();
		};
	}, []);

	return (
		<Fragment>
			<div className="modal show" style={{ display: 'block' }}>
				<div className="modal-dialog" role="document">
					<div className="modal-content">
						{
							header &&
							<ModalHeader onClose={() => onHeaderCloseClick && onHeaderCloseClick()}>
								{header}
							</ModalHeader>
						}
						<ModalBody>{children}</ModalBody>
						{footer &&
							<div class="modal-footer">
								{footer}
							</div>
						}
					</div>
				</div>
			</div>
			<ModalBackdrop />
		</Fragment>
	);
};
