import { createContext, useEffect, useState } from "react";

export const BasketContextData = createContext();

function BasketContext({ children }) {
  const [basket, setBasket] = useState(() => {
    const localData = localStorage.getItem("basket");
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basket));
  }, [basket]);

  const addToCart = (product, selectedVariant, chosenStorage) => {
    const rawPrice = product.price || "0";
    const numericPrice = Number(rawPrice.toString().replace(/\./g, '').replace(',', '.'));
    const discount = Number(product.discount) || 0;
    const finalPrice = discount > 0 ? numericPrice - (numericPrice * discount / 100) : numericPrice;

   
    const variant = selectedVariant || product.variants?.[0];

  
    const storage = chosenStorage || (variant?.storages ? Object.keys(variant.storages)[0] : '');

    const itemId = `${product.id || product.title}-${variant?.colorName || ''}-${storage}`;

    setBasket((prev) => {
      const existingItem = prev.find((item) => item.cartItemId === itemId);
      if (existingItem) {
        return prev.map((item) =>
          item.cartItemId === itemId ? { ...item, count: item.count + 1 } : item
        );
      }
      return [
        ...prev,
        {
          cartItemId: itemId,
          id: product.id,
          title: product.title,
          image: variant?.images?.[0] || '',
          colorName: variant?.colorName || '',
          storage: storage,
          originalPrice: numericPrice,
          price: finalPrice,
          count: 1,
          selected: true
        }
      ];
    });
  };

  const updateCount = (cartItemId, delta) => {
    setBasket((prev) =>
      prev
        .map((item) => {
          if (item.cartItemId === cartItemId) {
            const newCount = item.count + delta;
            return newCount > 0 ? { ...item, count: newCount } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

 
  const removeFromCart = (cartItemId) => {
    setBasket((prev) => prev.filter((item) => item.cartItemId !== cartItemId));
  };

  const toggleSelect = (cartItemId) => {
    setBasket((prev) =>
      prev.map((item) =>
        item.cartItemId === cartItemId ? { ...item, selected: !item.selected } : item
      )
    );
  };


  const toggleSelectAll = (selectAll) => {
    setBasket((prev) => prev.map((item) => ({ ...item, selected: selectAll })));
  };

 
  const removeSelected = () => {
    setBasket((prev) => prev.filter((item) => !item.selected));
  };

  return (
    <BasketContextData.Provider
      value={{ basket , addToCart , updateCount , removeFromCart , toggleSelect , toggleSelectAll , removeSelected }}>
      {children}
    </BasketContextData.Provider>
  );
}

export default BasketContext;