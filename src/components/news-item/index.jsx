import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

import DataFetcher from "../../data-fetcher";

import Loading from "../loading";
import { NewsDetails } from "../node-news";

const NewsItem = () => {
  const { newsItem } = useParams();

  const [node, setNode] = useState(undefined);

  useEffect(() => {
    setNode(undefined);
    DataFetcher.getNewsByPath(newsItem).then(response => {
      setNode(response);
    })
  }, [newsItem]);

  if (!node) {
    return <Loading />;
  }

  return (
    <NewsDetails node={node} />
  )
}

export default NewsItem;