import { h } from 'preact';
import { createHashHistory } from 'history';
import Router, { Route } from 'preact-router';
import './style.scss';
import { About, Home } from './pages';

export const App = () => {

	return (
		<div class="app">

			<div className="container-fluid pt-2" >
				<Router history={createHashHistory() as any}>
					<Route path="/" component={Home} />
					<Route path="/about" component={About} />

					<div default>
						404
					</div>
				</Router>

			</div>
		</div>
	);
}
