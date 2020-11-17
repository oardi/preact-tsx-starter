import { h, render } from 'preact';
import { App } from './App';
import './style.scss';

render(<App />, document.body);

if (module.hot) {
	module.hot.accept();
}
