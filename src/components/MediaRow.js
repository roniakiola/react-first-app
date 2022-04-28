import React from 'react';
import PropTypes from 'prop-types';

const url = 'http://media.mw.metropolia.fi/wbma/uploads/';

const MediaRow = ({item}) => {
  return (
    <tr>
      <td className="container">
        <div>
          <img src={url + item.thumbnails.w160} alt={item.title} />
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
