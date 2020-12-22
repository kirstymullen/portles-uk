import {BasketActionTypes} from './basket.types';
import {addItemToBasket, removeItemFromBasket} from './basket.utils';

const INITIAL_STATE = {
  hidden: true,
  basketItems: [],
};

const basketReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BasketActionTypes.TOGGLE_BASKET_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case BasketActionTypes.ADD_ITEM:
      return {
        ...state,
        basketItems: addItemToBasket(state.basketItems, action.payload),
      };
    case BasketActionTypes.REMOVE_ITEM:
      return {
        ...state,
        basketItems: removeItemFromBasket(state.basketItems, action.payload),
      };
    default:
      return state;
  }
};

export default basketReducer;
