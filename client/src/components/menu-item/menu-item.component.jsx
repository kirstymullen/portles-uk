import React from 'react';
import PropTypes from 'prop-types';
import {useHistory} from 'react-router-dom';
import './menu-item.styles.scss';

const MenuItem = ({title, imageUrl, size, match, linkUrl}) => {
  const history = useHistory();
  return (
    <div
      className={`menu-item ${size ?? 'small'}`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div
        style={{backgroundImage: `url(${imageUrl})`}}
        className='background-image'
      ></div>

      <div className='content'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <span className='subtitle'>SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;

MenuItem.propTypes = {
  title: PropTypes.string,
  imageUrl: PropTypes.string,
  size: PropTypes.string,
  match: PropTypes.object,
  linkUrl: PropTypes.string,
};
