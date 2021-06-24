import React from 'react';
import { Link } from "react-router-dom";

import PublishDate from "./components/PublishDate";
import Summary from "./components/Summary";

export const NewsTeaser = ({ node }) => (
  <div className="node--news node--news--teaser">
    {node.attributes.title && (
      <Link to={node.attributes.path.alias}>
        <div className="title">
          {node.attributes.title}
        </div>
      </Link>
    )}
    <PublishDate node={node} />
    <Summary node={node} />
  </div>
);
