import { h } from "preact";
import { Link } from 'preact-router';
import './Sidebar.scss';

export interface ISidebarItems {
	id: string;
	path: string;
	icon?: string;
}

interface ISidebarProps {
	title: string;
	items: Array<ISidebarItems>;
}

export const Sidebar = ({ title, items }: ISidebarProps) => {

	return (
		<nav class="sidebar navbar navbar-expand-lg navbar-dark bg-primary align-items-start">
			<ul class="navbar-nav navbar-dark accordion d-flex flex-column">
				<a class="sidebar-brand">
					<div class="sidebar-brand-icon rotate-n-15">
					</div>
					<div class="sidebar-brand-text mx-3">
						{title}
					</div>
				</a>

				{items.map(item =>
					<li class="nav-item">
						<Link class="nav-link" activeClassName="active" href={"/" + item.path}>
							{item.id}
						</Link>
					</li>
				)}
			</ul>
		</nav>
	);
}
