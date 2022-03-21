import React from 'react';
import PropTypes from 'prop-types';

const MediaRow = ({item}) => {
  return (
    <tr>
      <td className="container">
        <div>
          <img src={item.thumbnails.w160} alt="cat" />
        </div>
        <div>
          <h1>{item.title}</h1>
          <p>{item.description}</p>
        </div>
        <div className="link">
          <a href={item.filename}>view</a>
        </div>
      </td>
    </tr>
  );
};

MediaRow.propTypes = {
  item: PropTypes.object,
};

export default MediaRow;
