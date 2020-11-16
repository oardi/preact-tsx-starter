import { h } from "preact";
import { route, } from 'preact-router';
import { useEffect, useState } from 'preact/hooks';
import './Sidebar.scss';

export interface ISidebarItem {
	id: string;
	path: string;
	icon?: string;
	isActive?: boolean;
}

interface ISidebarProps {
	title: string;
	items: Array<ISidebarItem>;
	currentUrl: string;
}

export const Sidebar = ({ title, items, currentUrl }: ISidebarProps) => {

	const [menuItems, setMenuItems] = useState<Array<ISidebarItem>>([]);

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
		const test = items.map(item => ({
			id: item.id,
			path: item.path,
			icon: item.icon,
			isActive: isMenuItemActive(item.path)
		} as ISidebarItem));
		setMenuItems(test);
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
					<li class={"nav-item " + (item.isActive ? "active" : "")}>
						<a class="nav-link" onClick={() => navigate(item.path)}>{item.id}</a>
					</li>
				)}
			</ul>
		</nav>
	);
}
