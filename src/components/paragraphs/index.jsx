import React from 'react';
import BodyComponent from "./body-content";
// import AccordionComponent from "./accordion";

const Paragraphs = ({data}) => {

	const paragraphSelector = (paragraph) => {
		if (paragraph) {
			if (paragraph.type === 'paragraph--body_content') {
				return <BodyComponent key={paragraph.id} data={paragraph} />
			}
			// else if (paragraph.type === 'paragraph--accordion') {
			// 	return <AccordionComponent key={paragraph.id} data={paragraph} />
			// }
		}
	};

	if (!data) {
		return null;
	}

	return (
		<div className="paragraphs">
			{data.map(paragraphSelector)}
		</div>
	)

};

export default Paragraphs;