export default class DataFetcher {

	static get contentHubRoot() {
		return 'https://contenthub-tu-news-and-events.pantheonsite.io';
	}

	static async getJSON(path) {
		const promise = fetch(path, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		});
		const response = await promise;
		if (response.ok) {
			const json = await response.json();
			return json;
		}
		else {
			throw new Error(response.status + ' ' + response.statusText + ' ' + response.url);
		}
	}

	static async getAllNewsData() {
		// TODO: pagination/limits should be implemented.
		const allNewsJSON = await this.getJSON(this.contentHubRoot + '/api/content/news');
		return allNewsJSON.data;
	}

	static async getNewsByPath(path, allNewsData) {
		if (!allNewsData) {
			// TODO: there should be an endpoint to fetch a single item by path.
			allNewsData = await this.getAllNewsData();
		}
		return allNewsData.find((item) =>
			item.attributes.path && item.attributes.path.alias === '/' + path
		);
	}

	static async getReferenceFieldData(entityData, field) {
		if (entityData.relationships.[field]) {
			try {
				const json = await this.getJSON(entityData.relationships[field].links.related.href);
				return json.data;
			}
			catch (error) {
				throw new Error(`No data`);
			}
		}
	}

};