import { h } from 'preact';
import { ButtonCounter } from './components/button-counter';
import './style.scss';

export const App = () => {
	const onChildClicked = (e: number) => {
		console.warn("callback from parent triggered", e);
	}

	return (
		<div className="container pt-2" >
			<h1>Preact Typescript Starter Template</h1>

			<p>
				Simple Preact Typescript TSX Template with a custom ButtonCounter Component.
            </p>

			<ButtonCounter name="click me" onClicked={(e) => onChildClicked(e)} />
		</div>
	);

}
