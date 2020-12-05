import { ComponentChildren, h } from 'preact';

interface IListItemProps {
	children: ComponentChildren;
	active?: boolean;
	isHoverable?: boolean;
	isDisabled?: boolean;
}

export const ListItem = ({
	children,
	active = false,
	isHoverable = true,
	isDisabled = false
}: IListItemProps) => {

	const getCssClasses = () => {
		const cssClasses: Array<string> = [];
		cssClasses.push('list-group-item d-flex align-items-center');
		if (active) {
			cssClasses.push(`active`);
		}
		if (isHoverable) {
			cssClasses.push(`list-group-item-action`);
		}
		if (isDisabled) {
			cssClasses.push(`disabled`);
		}
		return cssClasses.join(' ');
	}

	return (
		<li className={getCssClasses()}>
			{children}
		</li>
	);
}

