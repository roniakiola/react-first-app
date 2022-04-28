import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const url = 'https://media.mw.metropolia.fi/wbma/uploads/';

const MediaRow = ({file}) => {
  return (
    <tr>
      <td>
        <img src={url + file.thumbnails.w160} alt={file.title} />
      </td>
      <td>
        <h4>{file.title}</h4>
        <p>{file.description}</p>
      </td>
      <td>
        <Link to={'/single'} state={{file}}>
          View
        </Link>
      </td>
    </tr>
  );
};

MediaRow.propTypes = {
  file: PropTypes.object,
};

export default MediaRow;
