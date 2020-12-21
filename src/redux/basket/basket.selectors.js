import {createSelector} from 'reselect';

const selectBasket = state => state.basket;

export const selectBasketItems = createSelector(
  [selectBasket],
  basket => basket.basketItems
);

export const selectBasketItemsTotalCount = createSelector(
  [selectBasketItems],
  basketItems =>
    basketItems.reduce(
      (totalCount, basketItem) => totalCount + basketItem.quantity,
      0
    )
);
