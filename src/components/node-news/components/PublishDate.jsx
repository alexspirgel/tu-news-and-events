import React from 'react';
import { DateTime } from 'luxon';

const PublishDate = ({ node }) =>
  node.attributes.field_publish_date ? (
      <div className="publish-date">
        Published On: {
          DateTime
            .fromISO(node.attributes.field_publish_date)
            .toLocaleString(DateTime.DATETIME_SHORT_WITH_SECONDS)
        }
      </div>
    ) : null;

export default PublishDate;