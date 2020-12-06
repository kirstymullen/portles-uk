import React from 'react';
import './basket-icon.styles.scss';
import {ReactComponent as ShoppingIcon} from '../../assets/basket.svg';

const BasketIcon = () => (
  <div className='basket-icon'>
    <ShoppingIcon className='shopping-icon' />
    <span className='item-count'></span>
  </div>
);

export default BasketIcon;
