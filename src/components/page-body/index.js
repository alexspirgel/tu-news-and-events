import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import NodeNews from '../node-news';
import NewsList from '../news-list';
import DataFetcher from '../../data-fetcher';

export default class PageBody extends React.Component {

	constructor() {
		super();
		this.initialize();
	}

	async initialize() {
		await this.getAllNewsData();
		await this.update();
		this.initialized = true;
	}

	async update(path) {
		if(!path) {
			path = window.location.pathname;
		}
		if (path.length > 1) {
			await this.getNewsNodeData(path, this.allNewsData);
		}
		else {
			this.nodeData = undefined;
		}
		this.forceUpdate();
	}

	async getAllNewsData() {
		this.allNewsData = await DataFetcher.getAllNewsData();
		return this.allNewsData;
	}

	async getNewsNodeData(path) {
		this.nodeData = await DataFetcher.getNewsByPath(path, this.allNewsData);
		return this.nodeData;
	}

	render() {
		return (
			<Router>
				<div className="page-body">
					<Switch>
			      <Route exact path='/'>
			        <NewsList data={this.allNewsData} limit="5" pageBody={this} />
			      </Route>
			      <Route path='/*'>
			        <NodeNews data={this.nodeData} displayMode="details-page" pageBody={this} />
			      </Route>
			    </Switch>
		    </div>
	    </Router>
		);
		// if (this.nodeData) {
		// 	return (
		// 		<div className="page-body">
		// 			<NodeNews data={this.nodeData} displayMode="details-page" />
		// 		</div>
		// 	);
		// }
		// else if (this.allNewsData) {
		// 	return (
		// 		<div className="page-body">
		// 			<NewsList data={this.allNewsData} limit="5" />
		// 		</div>
		// 	);
		// }
		// else if (this.initialized) {
		// 	return (<div>404</div>);
		// }
		// else {
		// 	return (<div>loading...</div>);
		// }
	}
}