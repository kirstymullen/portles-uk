import React from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';

import {toggleBasketHidden} from '../../redux/basket/basket.actions';

import './basket-icon.styles.scss';
import {ReactComponent as ShoppingIcon} from '../../assets/basket.svg';

const BasketIcon = ({toggleBasketHidden}) => (
  <div className='basket-icon' onClick={toggleBasketHidden}>
    <ShoppingIcon className='shopping-icon' />
    <span className='item-count'></span>
  </div>
);

const mapDispatchToProps = dispatch => ({
  toggleBasketHidden: () => dispatch(toggleBasketHidden()),
});

export default connect(null, mapDispatchToProps)(BasketIcon);

BasketIcon.propTypes = {
  toggleBasketHidden: PropTypes.func,
};
