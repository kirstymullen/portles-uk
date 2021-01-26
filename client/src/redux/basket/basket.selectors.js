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

export const selectBasketHidden = createSelector(
  [selectBasket],
  basket => basket.hidden
);

export const selectBasketTotalPrice = createSelector(
  [selectBasketItems],
  basketItems =>
    basketItems.reduce(
      (totalCount, basketItem) =>
        totalCount + basketItem.price * basketItem.quantity,
      0
    )
);
