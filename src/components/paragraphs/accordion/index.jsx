import React, {useEffect, useState} from 'react';
import DataFetcher from '../../../data-fetcher';
import parse from 'html-react-parser';
import Accordion from './accordion.js';

const ParagraphAccordion = ({data}) => {

	const [accordionItems, setAccordionItems] = useState([]);

	useEffect(() => {
		DataFetcher.getReferenceFieldData(data, 'field_accordion_item_container').then(response => {
			setAccordionItems(response);
		});
	}, [data]);

  useEffect(() => {
    let accordionInstance;
    if (accordionItems.length > 0) {
      accordionInstance = new Accordion.Accordion({
        elements: {
          bundle: '.paragraph--accordion',
          item: '.paragraph--accordion__item',
          trigger: '.paragraph--accordion__trigger',
          content: '.paragraph--accordion__content'
        }
      });
    }
    return () => {
      if (accordionInstance && accordionInstance.destroy) {
        accordionInstance.destroy();
      }
    };
  }, [accordionItems]);

  return (
    <ul className="paragraph paragraph--accordion">
      {accordionItems.map(accordionItem => (
        <li className="paragraph--accordion__item" key={accordionItem.id}>
        	<button className="paragraph--accordion__trigger">{accordionItem.attributes.field_accordion_header}</button>
        	<div className="paragraph--accordion__content">{parse(accordionItem.attributes.field_accordion_body.processed)}</div>
        </li>
      ))}
    </ul>
  );

};

export default ParagraphAccordion;