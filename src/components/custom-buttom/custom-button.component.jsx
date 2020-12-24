import React from 'react';
import PropTypes from 'prop-types';
import {CustomButtonContainer} from './custom-button.styles';

const CustomButton = ({children, ...props}) => (
  <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
);

export default CustomButton;

CustomButton.propTypes = {
  children: PropTypes.any,
};
