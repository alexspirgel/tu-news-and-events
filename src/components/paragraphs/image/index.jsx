import React, {useEffect, useState} from 'react';
import DataFetcher from '../../../data-fetcher';

const ParagraphImage = ({data}) => {

	const [image, setImage] = useState(undefined);

	useEffect(() => {
    console.log(data);
		DataFetcher.getReferenceFieldData(data, 'field_image').then(response => {
      console.log(response);
      DataFetcher.getReferenceFieldData(response, 'field_media_image_2').then(response => {
        console.log(response);
  			setImage(response.attributes.uri.url);
      });
		});
	}, [data]);

  useEffect(() => {
  }, [image]);

  return (
    <div className="paragraph paragraph--image">
      <img src={DataFetcher.contentHubRoot + image} />
    </div>
  );

};

export default ParagraphImage;