import React from 'react';
import './checkout-item.styles.scss';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

const CheckoutItem = ({basketItem: {name, imageUrl, price, quantity}}) => (
  <div className='checkout-item'>
    <div className='image-container'>
      <img alt='item' src={imageUrl} />
    </div>
    <span className='name'>{name}</span>
    <span className='quantity'>{quantity}</span>
    <span className='price'>£{price}</span>
    <div className='remove-button'>&#10005;</div>
  </div>
);

export default connect()(CheckoutItem);

CheckoutItem.propTypes = {
  basketItem: PropTypes.object,
  name: PropTypes.string,
  imageUrl: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number,
};
