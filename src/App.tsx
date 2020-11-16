import { h } from 'preact';
import { createHashHistory } from 'history';
import Router, { Route } from 'preact-router';
import { About, Home } from './pages';
import { HttpService, LoggerService } from './shared';
import { AppContext } from './AppContext';
import { AppSidebar } from './components/AppSidebar';
import './style.scss';

export const App = () => {
	const appContext = {
		httpService: new HttpService(),
		loggerService: new LoggerService(),
		// languageService: new LanguageService()
	}

	return (
		<AppContext.Provider value={appContext}>
			<div class="app">
				<AppSidebar />

				<div className="container pt-2" >
					<Router history={createHashHistory()}>
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
