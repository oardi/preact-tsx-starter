import { h, Fragment, ComponentChildren } from 'preact';

interface ILayoutProps {
	children: ComponentChildren;
	title: string;
}

export const Layout = ({ children, title }: ILayoutProps) =>
	<Fragment>
		<h1>{title}</h1>
		{children}
	</Fragment>
