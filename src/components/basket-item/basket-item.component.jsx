import React from 'react';
import PropTypes from 'prop-types';
import './basket-item.styles.scss';

const BasketItem = ({item: {imageUrl, price, name, quantity}}) => (
  <div className='basket-item'>
    <img src={imageUrl} alt='item' />
    <div className='item-details'>
      <span className='name'>{name}</span>
      <span className='price'>
        {quantity} x £{price}
      </span>
    </div>
  </div>
);

export default BasketItem;

BasketItem.propTypes = {
  item: PropTypes.object,
};
