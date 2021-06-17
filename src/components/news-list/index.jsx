import React, { useEffect, useState } from 'react';

import DataFetcher from '../../data-fetcher';

import Loading from '../loading';
import { NewsTeaser } from "../node-news/";

const NewsList = ({ limit }) => {
  const [newsData, setNewsData] = useState(undefined);

  useEffect(() => {
    DataFetcher.getAllNewsData().then(response => {
      setNewsData(response.reverse().splice(0, limit));
    });
  }, [limit]);

  if (!newsData) {
    return <Loading />;
  }

  return (
    <div className="news-list">
      <ul>
        {newsData.map(newsItem => (
          <li key={newsItem.id}>
            <NewsTeaser node={newsItem} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default NewsList;