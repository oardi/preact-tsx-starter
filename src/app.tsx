import { h, render, Component } from 'preact';
import './style.scss';
import { ButtonCounter } from './app/button-counter';

export class App extends Component<{}, {}> {
    onChildClicked(e: number) {
        console.warn('callback from parent triggered', e);
    }

    render() {
        return (
            <div class="container pt-2">
                <h1>Preact Typescript Starter Template</h1>

                <p>
                    Simple Preact Typescript TSX Template with a custom ButtonCounter Component.
                </p>

                <ButtonCounter name="Preact TSX" onClicked={(e) => this.onChildClicked(e)} />
            </div>
        )
    }
}

render(<App />, document.body);