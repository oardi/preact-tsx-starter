import { h } from 'preact';
import { createHashHistory } from 'history';
import Router, { Link, Route } from 'preact-router';
import { About } from './pages/About';
import { Home } from './pages/Home';
import './style.scss';

export const App = () => {
	return (
		<div className="container pt-2" >
			<h1>Preact Typescript Starter Template</h1>

			<div>
				<Link class="btn btn-sm btn-primary" activeClassName="active" href="/">Home</Link>
				<Link class="btn btn-sm btn-primary" activeClassName="active" href="/about">About</Link>
			</div>

			<Router history={createHashHistory()}>
				<Route path="/" component={Home} />
				<Route path="/about" component={About} />

				<div default>
					404
      				</div>
			</Router>

		</div>
	);

}
