import React from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';

import {toggleBasketHidden} from '../../redux/basket/basket.actions';
import {selectBasketItemsTotalCount} from '../../redux/basket/basket.selectors';

import './basket-icon.styles.scss';
import {ReactComponent as ShoppingIcon} from '../../assets/basket.svg';

const BasketIcon = ({toggleBasketHidden, itemCount}) => (
  <div className='basket-icon' onClick={toggleBasketHidden}>
    <ShoppingIcon className='shopping-icon' />
    {itemCount > 0 ? <div className='item-count'>{itemCount}</div> : null}
  </div>
);

const mapDispatchToProps = dispatch => ({
  toggleBasketHidden: () => dispatch(toggleBasketHidden()),
});

const mapStateToProps = state => ({
  itemCount: selectBasketItemsTotalCount(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(BasketIcon);

BasketIcon.propTypes = {
  toggleBasketHidden: PropTypes.func,
  itemCount: PropTypes.number,
};
