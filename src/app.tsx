import { h } from 'preact';
import { createHashHistory } from 'history';
import Router, { Link, Route } from 'preact-router';
import { About, Home } from './pages';
import { HttpService, LoggerService } from './shared';
import { AppContext } from './AppContext';
import './style.scss';

export const App = () => {
	const appContext = {
		httpService: new HttpService(),
		loggerService: new LoggerService(),
		// languageService: new LanguageService()
	}

	return (
		<AppContext.Provider value={appContext}>
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
		</AppContext.Provider>
	);

}
