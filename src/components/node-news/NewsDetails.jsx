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
      <div class="header component js-viewport-transition entered-viewport in-viewport">
        <div class="header__color-block">
          <div class="header__left-container">
            <div class="header__content-container">
              <div class="header__text-container">
                <div class="header__subtitle">Subtitle</div>
                <h1 class="header__title">{node.attributes.title}</h1>
                <div class="header__description">A brief description will go here</div>
              </div>
            </div>
          </div>
          <div class="header__right-container">
            <div class="header__image-color-block"></div>
            <div class="header__image-area">
              <img class="header__image" src={'http://placehold.it/800x600'} alt="Person on ladder working in the forest trees." />
            </div>
          </div>
        </div>
        <div class="header__caption-container">
          <div class="header__caption">This is an optional header caption.</div>
        </div>
      </div>
      <Paragraphs data={fieldComponents} />
    </div>
  );

};