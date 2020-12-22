import React from 'react';
import './checkout-item.styles.scss';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {removeItem} from '../../redux/basket/basket.actions';

const CheckoutItem = ({basketItem, removeItem}) => {
  const {name, imageUrl, price, quantity} = basketItem;
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img alt='item' src={imageUrl} />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>{quantity}</span>
      <span className='price'>£{price}</span>
      <div className='remove-button' onClick={() => removeItem(basketItem)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  removeItem: item => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);

CheckoutItem.propTypes = {
  basketItem: PropTypes.object,
  removeItem: PropTypes.func,
};
