import { h, Component } from 'preact';

interface IProps {
	name: string;
	onClicked: (e: number) => void;
}
interface IState {
	count: number;
}

export class ButtonCounter extends Component<IProps, IState> {
	componentDidMount() {
		this.setState({ count: 0 });
	}

	handleClick() {
		this.setState({ count: this.state.count + 1 });
		this.props.onClicked(this.state.count);
	}

	render() {
		return (
			<button onClick={() => this.handleClick()} class='btn btn-outline-secondary'>
				{this.props.name} - You clicked me {this.state.count} times
			</button>
		);
	}
}
