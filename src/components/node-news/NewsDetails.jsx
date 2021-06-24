import React, {useEffect, useState} from 'react';
import { Link } from "react-router-dom";

import PublishDate from "./components/PublishDate";

export const NewsDetails = ({ node }) => {

  const [paragraphs, setParagraphs] = useState(undefined);

  useEffect(() => {
    setParagraphs(undefined);

    if (node.relationships.field_components) {
      // load here, setParagraphs(data);
    }
  }, [node]);

  return (
    <div className="node--news node--news--details">
      <Link to='/'>View All News</Link>

      <h1 className="title">{node.attributes.title}</h1>

      <PublishDate node={node} />

      <div className="components">
        components will go here.
        {paragraphs}
      </div>
    </div>
  )
};