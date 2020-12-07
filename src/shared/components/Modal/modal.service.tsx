import { h, render } from 'preact';
import { GlobalModal } from './GlobalModal';
import { unmountComponentAtNode } from 'preact/compat';
import { MODALRESULT } from './modal.enum';

export class ModalService {

	container: HTMLElement;

	show(title: string, description: string) {
		this.container = document.createElement('div');
		document.body.appendChild(this.container);

		return new Promise((resolve, reject) => {
			render(
				<GlobalModal
					title={title}
					onCancel={() => {
						resolve(MODALRESULT.CANCEL);
						this.hide();
					}}
					onOk={() => {
						resolve(MODALRESULT.OK);
						this.hide();
					}}>
					{description}
				</GlobalModal>,
				this.container
			);
		})
	}

	private hide() {
		if (this.container) {
			unmountComponentAtNode(this.container);
			document.body.removeChild(this.container);
		}
	}

}
