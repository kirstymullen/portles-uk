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

export const removeItemFromBasket = (
  existingBasketItems,
  basketItemToRemove
) => {
  return existingBasketItems.filter(item => item.id !== basketItemToRemove.id);
};
