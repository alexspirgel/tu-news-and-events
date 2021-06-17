import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NewsList from "../news-list";
import NewsItem from "../news-item";

const PageBody = () => (
	<Router>
		<div className="page-body">
			<Switch>
				<Route exact path='/'>
					<NewsList limit="5" />
				</Route>
				<Route path='/:newsItem'>
					<NewsItem />
				</Route>
			</Switch>
		</div>
	</Router>
);

export default PageBody;