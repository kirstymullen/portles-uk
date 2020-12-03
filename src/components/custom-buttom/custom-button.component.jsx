import React from 'react';
import PropTypes from 'prop-types';
import './custom-button.styles.scss';

const CustomButton = ({children, ...otherProps}) => (
  <button className='custom-button' {...otherProps}>
    {children}
  </button>
);

export default CustomButton;

CustomButton.propTypes = {
  children: PropTypes.any,
};
