import {BasketActionTypes} from './basket.types';

export const toggleBasketHidden = () => ({
  type: BasketActionTypes.TOGGLE_BASKET_HIDDEN,
});

export const addItem = item => ({
  type: BasketActionTypes.ADD_ITEM,
  payload: item,
});

export const decreaseItemQuantity = item => ({
  type: BasketActionTypes.DECREASE_ITEM_QUANTITY,
  payload: item,
});

export const removeItem = item => ({
  type: BasketActionTypes.REMOVE_ITEM,
  payload: item,
});
