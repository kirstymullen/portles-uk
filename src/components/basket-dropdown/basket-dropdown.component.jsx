import React from 'react';
import CustomButton from '../custom-buttom/custom-button.component';
import './basket-dropdown.styles.scss';

const BasketDropDown = () => (
  <div className='basket-dropdown'>
    <div className='basket-items'></div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

export default BasketDropDown;
