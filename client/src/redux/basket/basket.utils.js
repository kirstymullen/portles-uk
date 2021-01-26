export const addItemToBasket = (existingBasketItems, newBasketItem) => {
  const existingBasketItem = existingBasketItems.find(
    item => item.id === newBasketItem.id
  );

  if (existingBasketItem) {
    return existingBasketItems.map(item =>
      item.id === newBasketItem.id
        ? {...item, quantity: item.quantity + 1}
        : item
    );
  }

  return [...existingBasketItems, {...newBasketItem, quantity: 1}];
};

export const decreaseItemQuantity = (existingBasketItems, basketItem) => {
  const existingBasketItem = existingBasketItems.find(
    item => item.id === basketItem.id
  );

  if (existingBasketItem.quantity === 1) {
    return removeItemFromBasket(existingBasketItems, basketItem);
  }

  return existingBasketItems.map(item =>
    item.id === basketItem.id ? {...item, quantity: item.quantity - 1} : item
  );
};

export const removeItemFromBasket = (
  existingBasketItems,
  basketItemToRemove
) => {
  return existingBasketItems.filter(item => item.id !== basketItemToRemove.id);
};
