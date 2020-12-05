import { ComponentChildren, h } from 'preact';

import { COLOR, VARIANT } from '../component.enums';

interface IButtonProps {
	block?: boolean;
	children: ComponentChildren;
	color?: COLOR;
	disabled?: boolean;
	isRounded?: boolean;
	isActive?: boolean;
	onClick?: (e: MouseEvent) => void;
	variant?: VARIANT;
}

export const Button = ({
	children,
	block = false,
	color = COLOR.primary,
	disabled = false,
	isRounded = false,
	isActive = false,
	onClick,
	variant = VARIANT.normal
}: IButtonProps) => {

	const getCssClasses = () => {
		const cssClasses: Array<string> = [];
		cssClasses.push(`btn`);
		if (variant !== 'outline' && variant !== 'text') {
			cssClasses.push(`btn-${color}`);
		}
		if (variant === 'outline') {
			cssClasses.push(`btn-outline-${color}`);
		}
		if (variant === 'text') {
			cssClasses.push(`btn-link`);
			cssClasses.push(`btn-link-${color}`);
		}
		if (isRounded && variant !== 'text') {
			cssClasses.push(`rounded-pill`);
		}
		if (block) {
			cssClasses.push('btn-block');
		}
		if (isActive) {
			cssClasses.push('active');
		}
		return cssClasses.join(' ');
	};

	const handleClick = (e: MouseEvent) => {
		onClick ? onClick(e) : undefined;
	};

	return (
		<button
			type="button"
			className={getCssClasses()}
			disabled={disabled}
			onClick={(e) => handleClick(e)}
		>
			{children}
		</button>
	);
};
