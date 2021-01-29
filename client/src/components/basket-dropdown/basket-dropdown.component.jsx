import React from 'react';
import CustomButton from '../custom-buttom/custom-button.component';
import './basket-dropdown.styles.scss';

import {selectBasketItems} from '../../redux/basket/basket.selectors';
import BasketItem from '../basket-item/basket-item.component';
import {useSelector, useDispatch} from 'react-redux';

import {toggleBasketHidden} from '../../redux/basket/basket.actions';

import {useHistory} from 'react-router-dom';

const BasketDropDown = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const basketItems = useSelector(selectBasketItems);

  return (
    <div className='basket-dropdown'>
      <div className='basket-items'>
        {basketItems.length > 0 ? (
          basketItems.map(basketItem => (
            <BasketItem key={basketItem.id} item={basketItem} />
          ))
        ) : (
          <span>Your basket is empty.</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push('/checkout');
          dispatch(toggleBasketHidden());
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

export default BasketDropDown;
