import React, { createContext, useState, useEffect } from 'react';

export const CompareContextData = createContext();

export const CompareProvider = ({ children }) => {
  const [compareList, setCompareList] = useState(() => {
    const saved = localStorage.getItem('compareList');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('compareList', JSON.stringify(compareList));
  }, [compareList]);


  const toggleCompare = (product) => {
    setCompareList((prevList) => {
      const exists = prevList.some((item) => item.id === product.id);
      if (exists) {
        return prevList.filter((item) => item.id !== product.id);
      } else {
        return [...prevList, product];
      }
    });
  };

  const removeFromCompare = (id) => {
    setCompareList((prevList) => prevList.filter((item) => item.id !== id));
  };

  
  const clearCompare = () => {
    setCompareList([]);
  };


  const isInCompare = (id) => {
    return compareList.some((item) => item.id === id);
  };

  return (
    <CompareContextData.Provider
      value={{
        compareList,
        toggleCompare,
        removeFromCompare,
        clearCompare,
        isInCompare,
      }}
    >
      {children}
    </CompareContextData.Provider>
  );
};