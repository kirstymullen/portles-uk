import {BasketActionTypes} from './basket.types';

const INITIAL_STATE = {
  hidden: true,
};

const basketReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BasketActionTypes.TOGGLE_BASKET_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    default:
      return state;
  }
};

export default basketReducer;
