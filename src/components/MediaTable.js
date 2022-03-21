import React from 'react';
import PropTypes from 'prop-types';

import MediaRow from './MediaRow';

const MediaTable = ({items}) => {
  return (
    <table className="media-table">
      <tbody>
        {items.map((item, index) => (
          <MediaRow key={index} item={item} />
        ))}
      </tbody>
    </table>
  );
};

MediaTable.propTypes = {
  items: PropTypes.array,
};

export default MediaTable;
