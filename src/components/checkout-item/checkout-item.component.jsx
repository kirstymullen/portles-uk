import React from 'react';
import './checkout-item.styles.scss';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {
  removeItem,
  addItem,
  decreaseItemQuantity,
} from '../../redux/basket/basket.actions';

const CheckoutItem = ({
  basketItem,
  removeItem,
  addItem,
  decreaseItemQuantity,
}) => {
  const {name, imageUrl, price, quantity} = basketItem;
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img alt='item' src={imageUrl} />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className='arrow' onClick={() => decreaseItemQuantity(basketItem)}>
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={() => addItem(basketItem)}>
          &#10095;
        </div>
      </span>
      <span className='price'>£{price}</span>
      <div className='remove-button' onClick={() => removeItem(basketItem)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  removeItem: item => dispatch(removeItem(item)),
  addItem: item => dispatch(addItem(item)),
  decreaseItemQuantity: item => dispatch(decreaseItemQuantity(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);

CheckoutItem.propTypes = {
  basketItem: PropTypes.object,
  removeItem: PropTypes.func,
  decreaseItemQuantity: PropTypes.func,
  addItem: PropTypes.func,
};
