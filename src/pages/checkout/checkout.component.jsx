import React from 'react';
import './checkout.styles.scss';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {PropTypes} from 'prop-types';

import {
  selectBasketItems,
  selectBasketTotalPrice,
} from '../../redux/basket/basket.selectors';

const CheckoutPage = ({basketItems, totalPrice}) => (
  <div className='checkout-page'>
    <div className='checkout-header'>
      <div className='header-block'>
        <span>Product</span>
      </div>
      <div className='header-block'>
        <span>Description</span>
      </div>
      <div className='header-block'>
        <span>Quantity</span>
      </div>
      <div className='header-block'>
        <span>Price</span>
      </div>
      <div className='header-block'>
        <span>Remove</span>
      </div>
    </div>
    {basketItems.map(basketItem => basketItem.name)}

    <div className='total'>
      <span>TOTAL: £{totalPrice}</span>
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  basketItems: selectBasketItems,
  totalPrice: selectBasketTotalPrice,
});

export default connect(mapStateToProps)(CheckoutPage);

CheckoutPage.propTypes = {
  basketItems: PropTypes.array,
  totalPrice: PropTypes.number,
};
