import React, {useCallback} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {toggleBasketHidden} from '../../redux/basket/basket.actions';
import {selectBasketItemsTotalCount} from '../../redux/basket/basket.selectors';

import './basket-icon.styles.scss';
import {ReactComponent as ShoppingIcon} from '../../assets/basket.svg';

const BasketIcon = () => {
  const dispatch = useDispatch();
  const toggleBasketHiddenCallback = useCallback(
    () => dispatch(toggleBasketHidden()),
    [dispatch]
  );
  const itemCount = useSelector(selectBasketItemsTotalCount);

  return (
    <div className='basket-icon' onClick={toggleBasketHiddenCallback}>
      <ShoppingIcon className='shopping-icon' />
      {itemCount > 0 ? <div className='item-count'>{itemCount}</div> : null}
    </div>
  );
};

export default BasketIcon;
