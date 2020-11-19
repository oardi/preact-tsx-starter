import { h } from "preact";
import { route, } from 'preact-router';
import { useEffect, useState } from 'preact/hooks';
import './Sidebar.scss';

export class SidebarItemModel {
	constructor(
		public id: string,
		public path: string,
		public icon?: string,
		public isActive?: boolean,
		public items?: Array<SidebarItemModel>) {
	}
}

interface ISidebarProps {
	title: string;
	items: Array<SidebarItemModel>;
	currentUrl: string;
}

export const Sidebar = ({ title, items, currentUrl }: ISidebarProps) => {

	const [menuItems, setMenuItems] = useState<Array<SidebarItemModel>>([]);

	useEffect(() => {
		if (items && items.length > 0) {
			initMenuItems();
		}
	}, [items]);

	useEffect(() => {
		const changedMenuItems = menuItems.map(item => ({ ...item, isActive: isMenuItemActive(item.path) }));
		setMenuItems(changedMenuItems);
	}, [currentUrl]);

	const initMenuItems = () => {
		const newItems = items.map(item => new SidebarItemModel(
			item.id,
			item.path,
			item.icon,
			isMenuItemActive(item.path),
			item.items && item.items.map(subItem => new SidebarItemModel(
				subItem.id,
				subItem.path,
				subItem.icon,
				isMenuItemActive(`${item.path}/${subItem.path}`),
			))
		));
		setMenuItems(newItems);
	}

	const isMenuItemActive = (path: string) => {
		return path === currentUrl || ("/" + path) === currentUrl;
	}

	const navigate = (path: string) => {
		route(path, true);
	}

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

				{menuItems.map(item =>
					<li class={"nav-item level-0 " + (item.isActive ? "active" : "")}>
						<a class="nav-link" onClick={() => navigate(item.path)}>{item.id}</a>

						{item.items && item.items.map(subItem => (
							<li class={"nav-item level-1 " + (subItem.isActive ? "active" : "")}>
								<a class="nav-link" onClick={() => navigate(`${item.path}/${subItem.path}`)}>{subItem.id}</a>
							</li>
						))}
					</li>
				)}
			</ul>
		</nav>
	);
}
