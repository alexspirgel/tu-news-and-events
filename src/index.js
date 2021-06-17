import React from 'react';
import ReactDOM from 'react-dom';
import PageBody from './components/page-body';
import './index.css';

class App extends React.Component {
	constructor() {
		super();
	}
	render() {
		return (
			<div className="app">
				<header className="persistent-header">persistant header {Date.now()}</header>
				<PageBody />
				<footer className="persistent-footer">persistent footer {Date.now()}</footer>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
