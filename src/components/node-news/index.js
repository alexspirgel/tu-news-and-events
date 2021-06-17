import React from 'react';
import {Link} from 'react-router-dom';
import parse from 'html-react-parser';

export default class NodeNews extends React.Component {

	constructor() {
		super();
	}

	get backLinkOutput() {
		return <Link to='/' onClick={() => {this.props.pageBody.update('/')}}>View All News</Link>;
	}

	get title() {
		try {
			return this.props.data.attributes.title;
		}
		catch (error) {
			return undefined;
		}
	}

	get titleOutput() {
		let output = '';
		if (this.title) {
			if (this.props.displayMode === 'details-page') {
				output = <h1 className="title">{this.title}</h1>;
			}
			else if (this.props.displayMode === 'teaser') {
				output = <Link to={this.props.data.attributes.path.alias} onClick={() => {this.props.pageBody.update(this.props.data.attributes.path.alias)}}><div className="title">{this.title}</div></Link>;
			}
		}
		return output;
	}

	get publishDate() {
		try {
			return this.props.data.attributes.field_publish_date;
		}
		catch (error) {
			return undefined;
		}
	}

	get publishDateOutput() {
		let output = '';
		if (this.publishDate) {
			output = <div className="publish-date">Published On: {this.publishDate}</div>;
		}
		return output;
	}

	get summary() {
		try {
			return this.props.data.attributes.field_summary.processed;
		}
		catch (error) {
			return undefined;
		}
	}

	get summaryOutput() {
		let output = '';
		if (this.summary) {
			output = <div className="summary">{parse(this.summary)}</div>;
		}
		return output;
	}

	get componentsOutput() {
		return <div className="components">components will go here</div>;
	}

	render() {
		if (this.props.displayMode === 'details-page') {
			return (
				<div className="node-news">
					{this.backLinkOutput}
					{this.titleOutput}
					{this.publishDateOutput}
					{this.componentsOutput}
				</div>
			);
		}
		else if (this.props.displayMode === 'teaser') {
			return (
				<div className="node-news">
					{this.titleOutput}
					{this.publishDateOutput}
					{this.summaryOutput}
				</div>
			);
		}
	}
}