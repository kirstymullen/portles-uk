import React from 'react';
import './checkout.styles.scss';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {PropTypes} from 'prop-types';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeButton from '../../components/stripe-button/stripe-button.component';

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
    {basketItems.map(basketItem => (
      <CheckoutItem key={basketItem.id} basketItem={basketItem} />
    ))}

    <div className='total'>
      <span>TOTAL: £{totalPrice}</span>
    </div>

    <div className='test-card-details'>
      <h4>Test card details</h4>
      <div>
        Number <span>4242 4242 4242 4242</span>
      </div>
      <div>
        Exp date <span>01/22</span>
      </div>
      <div>
        CVC <span>123</span>
      </div>
    </div>

    <div className='checkout-button'>
      <StripeButton price={totalPrice} />
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
