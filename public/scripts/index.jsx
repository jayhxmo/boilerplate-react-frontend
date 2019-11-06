import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Switch, BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { TransitionGroup, Transition } from 'react-transition-group';
import _ from 'underscore';

require('../styles/styles.scss');

export default class Index extends React.Component {
	constructor() {
		super();
		this.state = {};
	}

	componentDidMount() {}

	componentWillUnmount() {}

	onPopstate = () => {};

	onPopstateWithSpamHandler = popstateSpamDelay => {
		if (this.state.isAnimating) {
			setTimeout(() => {
				this.onPopstateWithSpamHandler(100);
			}, popstateSpamDelay);
		} else {
			this.onPopstate();
		}
	};

	onWindowResizeHandler = () => {};

	RouteApp = ({ location }) => {
		this.location = location;

		return <>Dylan Mullins</>;
	};

	render() {
		return (
			<Router>
				<Route path="/" component={this.RouteApp} />
			</Router>
		);
	}
}

document.addEventListener('DOMContentLoaded', function() {
	const root = document.getElementById('root');
	ReactDOM.render(<Index />, root);
});
