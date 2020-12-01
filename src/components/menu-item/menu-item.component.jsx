import React from 'react';
import PropTypes from 'prop-types';
import './menu-item.styles.scss';

const MenuItem = ({title, imageUrl, size}) => (
  <div className={`menu-item ${size ?? 'small'}`}>
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

export default MenuItem;

MenuItem.propTypes = {
  title: PropTypes.string,
  imageUrl: PropTypes.string,
  size: PropTypes.string,
};
