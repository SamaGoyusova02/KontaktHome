import { createContext, useEffect, useState } from "react";
import { getAddress, getCategory, getData } from "../Services/Api";

export const DATA = createContext([]);

function DataContext({ children }) {
  const [products, setProducts] = useState([]);
  const [category , setCategory] = useState([]) ;
  const [address , setAddress] = useState([])

  useEffect(() => {
    getData().then(res => setProducts(res));
    getCategory().then(res => setCategory(res) ) ;
    getAddress().then(res => setAddress(res))
  }, []); 

  return (
    <DATA.Provider value={{ products , category , address }}>
      {children}
    </DATA.Provider>
  );
}

export default DataContext;