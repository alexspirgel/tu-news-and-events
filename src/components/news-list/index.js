import React from 'react';
import NodeNews from '../node-news';

export default class NewsList extends React.Component {

	constructor() {
		super();
	}

	get list() {
		try {
			const list = [];
			const keys = Object.keys(this.props.data).sort().reverse();
			keys.sort((a, b) => {
				if (parseInt(a) > parseInt(b)) {
					return -1;
				}
				else {
					return 1;
				}
			});
			let count = 0;
			for (const key of keys) {
				count += 1;
				if (count > this.props.limit) {
					break;
				}
				list.push(this.props.data[key]);
			}
			return list;
		}
		catch (error) {
			return undefined;
		}
	}

	get listItemsOutput() {
		let output = '';
		if (this.list) {
			output = this.list.map((item, index) => {
				return <li key={index.toString()}><NodeNews data={item} displayMode="teaser" pageBody={this.props.pageBody} /></li>
			});
		}
		return output; 
	}

	render() {
		return (
			<div className="news-list">
				<ul>
					{this.listItemsOutput}
				</ul>
			</div>
		);
	}
}