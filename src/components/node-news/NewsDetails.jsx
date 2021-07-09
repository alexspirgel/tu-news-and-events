import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";

import DataFetcher from "../../data-fetcher";
import PublishDate from "./components/PublishDate";
import Paragraphs from "../paragraphs";

export const NewsDetails = ({ node }) => {

  const [fieldComponents, setFieldComponents] = useState(undefined);

  useEffect(() => {
    if (node.relationships.field_components) {
      DataFetcher.getReferenceFieldData(node, 'field_components').then(response => {
        setFieldComponents(response);
      });
    }
  }, [node]);

  return (
    <div className="node--news node--news--details">
      <Link to='/'>View All News</Link>
      <h1 className="title">{node.attributes.title}</h1>
      <PublishDate node={node} />
      <Paragraphs data={fieldComponents} />
    </div>
  );

};