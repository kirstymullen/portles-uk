import React from 'react';
import Spinner from '../spinner/spinner.component';
import PropTypes from 'prop-types';

const WithSpinner = WrappedComponent => {
  return ({isLoading, ...otherProps}) => {
    return isLoading ? <Spinner /> : <WrappedComponent {...otherProps} />;
  };
};

WithSpinner.propTypes = {
  isLoading: PropTypes.bool,
};

export default WithSpinner;
