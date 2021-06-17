export default class DataFetcher {
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
    const allNewsJSON = await this.getJSON('https://contenthub-tu-news-and-events.pantheonsite.io/api/content/news');
    return allNewsJSON.data;
  }
  static async getNewsByPath(path, allNewsData) {
    if (!allNewsData) {
      allNewsData = await this.getAllNewsData();
    }
    const newsData = allNewsData.find((item) => {
      if (item.attributes.path.alias === path) {
        return true;
      }
    });
    return newsData;
  }
};