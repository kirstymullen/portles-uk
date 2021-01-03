import React from 'react';
import {SpinnerOverlay, SpinnerContainer} from './with-spinner.styles';
import PropTypes from 'prop-types';

const WithSpinner = WrappedComponent => {
  const Spinner = ({isLoading, ...otherProps}) => {
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrappedComponent {...otherProps} />
    );
  };

  Spinner.propTypes = {
    isLoading: PropTypes.bool,
  };

  return Spinner;
};

export default WithSpinner;
