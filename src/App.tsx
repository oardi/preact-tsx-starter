import { h } from 'preact';
import { createHashHistory } from 'history';
import Router, { Route, RouterOnChangeArgs } from 'preact-router';
import './style.scss';
import { About, Home } from './pages';
import { HttpService, LoggerService } from './shared';
import { AppSidebar } from './components';
import { AppContext } from './AppContext';
import { useState } from 'preact/hooks';

export const App = () => {
	const appContext = {
		httpService: new HttpService(),
		loggerService: new LoggerService(),
		// languageService: new LanguageService()
	}

	const [currentRoute, setCurrentRoute] = useState<string>('');
	const onRouteChange = (e: RouterOnChangeArgs) => {
		setCurrentRoute(e.url);
	};

	return (
		<AppContext.Provider value={appContext}>
			<div class="app">
				<AppSidebar currentRoute={currentRoute} />

				<div className="container-fluid pt-2" >
					<Router onChange={(e) => onRouteChange(e)} history={createHashHistory()}>
						<Route path="/" component={Home} />
						<Route path="/about" component={About} />

						<div default>
							404
      					</div>
					</Router>

				</div>
			</div>
		</AppContext.Provider>
	);
}
