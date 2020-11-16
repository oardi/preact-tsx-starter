import { h } from "preact";
import './Sidebar.scss';

export const Sidebar = () => {
	return (
		<nav class="sidebar navbar navbar-expand-lg navbar-dark bg-primary align-items-start">
			<ul class="navbar-nav navbar-dark accordion d-flex flex-column">
				<a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
					<div class="sidebar-brand-icon rotate-n-15">
						<i class="fas fa-laugh-wink"></i>
					</div>
					<div class="sidebar-brand-text mx-3">Preact TSX</div>
				</a>
				<li class="nav-item">
					<a class="nav-link" href="index.html">
						<i class="fas fa-fw fa-tachometer-alt"></i>
						<span>Dashboard</span></a>
				</li>
			</ul>
		</nav>
	);
}
