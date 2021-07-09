import React from 'react';
import parse from 'html-react-parser';

const ParagraphBodyContent = ({data}) => {

  const field_body_content = parse(data.attributes.field_body_content.processed);

  return (
    <div className="paragraph paragraph--body-content">
      {field_body_content}
    </div>
  );

};

export default ParagraphBodyContent;