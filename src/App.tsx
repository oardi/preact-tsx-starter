import { h } from 'preact';
import { createHashHistory } from 'history';
import Router, { Route, RouterOnChangeArgs } from 'preact-router';
import './style.scss';
import { About, Home, Showcase, ShowcaseButton, ShowcaseCard, ShowcaseList, ShowcaseModal } from './pages';
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
						<Route path="/showcase" component={Showcase} />
						<Route path="/showcase/button" component={ShowcaseButton} />
						<Route path="/showcase/card" component={ShowcaseCard} />
						<Route path="/showcase/list" component={ShowcaseList} />
						<Route path="/showcase/modal" component={ShowcaseModal} />

						<div default>
							404
      					</div>
					</Router>

				</div>
			</div>
		</AppContext.Provider>
	);
}
