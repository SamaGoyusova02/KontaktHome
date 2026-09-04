import React, { useContext, useState, useMemo, useEffect } from 'react';
import { CompareContextData } from '../Context/CompareContext';
import { BasketContextData } from '../Context/BasketContext';
import { Link } from 'react-router';

export default function ComparePage() {
  useEffect(() => {
      document.title = "Products Comparison List - Kontakt";
    }, []);
  
  const { compareList, removeFromCompare, clearCompare } = useContext(CompareContextData);
  const { addToCart, basket } = useContext(BasketContextData);

  const [selectedCategory, setSelectedCategory] = useState("");
  const [filterMode, setFilterMode] = useState("all");

  const parsePrice = (priceStr) => {
    if (!priceStr) return 0;
    return Number(priceStr.toString().replace(/\./g, '').replace(',', '.'));
  };

  const categories = useMemo(() => {
    return Array.from(new Set(compareList.map(p => p.category))).filter(Boolean);
  }, [compareList]);

  useEffect(() => {
    if (categories.length > 0 && (!selectedCategory || !categories.includes(selectedCategory))) {
      setSelectedCategory(categories[0]);
    }
  }, [categories, selectedCategory]);

  const categoryProducts = useMemo(() => {
    if (!selectedCategory) return [];
    return compareList.filter(p => p.category === selectedCategory);
  }, [compareList, selectedCategory]);

  const allLabels = useMemo(() => {
    const labelsSet = new Set();

    categoryProducts.forEach(p => {
      if (Array.isArray(p.propertiesList)) {
        p.propertiesList.forEach(item => {
          if (item?.label) labelsSet.add(item.label.trim());
        });
      }

      if (p.specs && typeof p.specs === 'object') {
        Object.keys(p.specs).forEach(key => labelsSet.add(key.trim()));
      }
    });

    return Array.from(labelsSet);
  }, [categoryProducts]);

  const getPropValue = (product, label) => {
    if (Array.isArray(product.propertiesList)) {
      const found = product.propertiesList.find(
        item => item?.label?.toLowerCase().trim() === label.toLowerCase().trim()
      );
      if (found && found.value !== undefined && found.value !== null && found.value !== "") {
        return String(found.value);
      }
    }

    if (product.specs && product.specs[label] !== undefined && product.specs[label] !== null && product.specs[label] !== "") {
      const val = product.specs[label];
      if (typeof val === 'boolean') return val ? 'Var' : 'Yox';
      return String(val);
    }

    return "-";
  };

  const filteredLabels = useMemo(() => {
    if (filterMode === "all") return allLabels;

    return allLabels.filter(label => {
      const values = categoryProducts.map(p => getPropValue(p, label));
      const isAllSame = values.every(v => v === values[0] && v !== "-");

      if (filterMode === "similar") return isAllSame;
      if (filterMode === "different") return !isAllSame;
      return true;
    });
  }, [allLabels, categoryProducts, filterMode]);

  if (!compareList || compareList.length === 0) {
    return (
      <div className="bg-[#f2f2f2] min-h-screen pt-[166px] pb-12 px-4 lg:px-10 font-[Montserrat,_sans-serif] text-[#2c2c2c]">
        <div className="max-w-[1450px] mx-auto flex flex-col gap-2.5">
          <div className="bg-white rounded-[10px] p-6 shadow-xs flex justify-between items-center">
            <h1 className="text-xl font-bold text-[#2c2c2c]">Müqayisə</h1>
          </div>

          <div className="bg-white rounded-[10px] min-h-[400px] shadow-xs flex flex-col items-center justify-center p-8 text-center">
            <h2 className="text-[#777777] font-medium  mb-1">
              Müqayisə siyahısı boşdur.
            </h2>
            <p className="text-[#777777]  mb-6">
              Kataloqdan istədiyin məhsulları müqayisəyə əlavə et.
            </p>
            <Link 
              to="/" 
              className="border border-[#2c2c2c] text-[#2c2c2c] px-8 py-2.5 rounded-xl text-sm font-medium  transition-colors duration-200"
            >
              Əsas səhifə
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#f2f2f2] min-h-screen pt-[160px] pb-16 px-4 lg:px-8 font-[Montserrat,_sans-serif] text-[#2c2c2c]">
    
      <div className="hidden lg:flex max-w-[1450px] mx-auto bg-white rounded-[10px] px-6 py-4 shadow-xs mb-6 items-center justify-between">
        <h1 className="text-xl sm:text-2xl font-bold text-[#2c2c2c]">Müqayisə</h1>

        {categories.length > 0 && (
          <div className="relative w-auto min-w-[180px] sm:min-w-[220px]">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full bg-[#f4f4f5] hover:bg-gray-200 border-none rounded-[10px] px-4 py-2.5 text-xs sm:text-sm font-medium focus:outline-none cursor-pointer appearance-none transition-colors pr-8 text-gray-700"
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500 text-[10px]">
              ▼
            </div>
          </div>
        )}
      </div>

    
      <div className="flex lg:hidden bg-white rounded-[10px] p-5 shadow-xs mb-6 flex-col gap-4">
        <h1 className="text-xl font-bold text-[#2c2c2c]">Müqayisə</h1>

        {categories.length > 0 && (
          <div className="relative w-full">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full bg-[#f4f4f5] border-none rounded-xl px-4 py-3 text-sm font-medium focus:outline-none cursor-pointer appearance-none text-gray-600"
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500 text-xs">
              ▼
            </div>
          </div>
        )}

        <div className="flex items-center gap-2 pt-1">
          <button
            onClick={() => setFilterMode("all")}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
              filterMode === "all" ? "bg-[#2c2c2c] text-white" : "bg-[#f4f4f5] text-[#2c2c2c]"
            }`}
          >
            Hamısı
          </button>
          <button
            onClick={() => setFilterMode("similar")}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
              filterMode === "similar" ? "bg-[#2c2c2c] text-white" : "bg-[#f4f4f5] text-[#2c2c2c]"
            }`}
          >
            Oxşarlıqlar
          </button>
          <button
            onClick={() => setFilterMode("different")}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
              filterMode === "different" ? "bg-[#2c2c2c] text-white" : "bg-[#f4f4f5] text-[#2c2c2c]"
            }`}
          >
            Fərqlər
          </button>
        </div>

        <div className="flex items-center justify-between text-xs text-gray-500 pt-2 border-t border-gray-100">
          <span className="font-bold text-[#2c2c2c]">
            Əlavə olunub: {categoryProducts.length}
          </span>
          <button 
            onClick={clearCompare} 
            className="flex items-center gap-1.5 text-gray-400 hover:text-[#ff003c] transition-colors cursor-pointer font-medium"
          >
            🗑 Hamısını sil
          </button>
        </div>
      </div>

      {/* MÜQAYİSƏ CƏDVƏLİ */}
      <div className="max-w-[1450px] mx-auto overflow-x-auto pb-6 scrollbar-thin">
        <div className="flex gap-4 min-w-max items-start">
          
      
          <div className="hidden lg:flex w-[280px] bg-white rounded-2xl p-5 shadow-xs shrink-0 flex-col">
          
            <div className="h-[310px] flex flex-col gap-5 pb-4">
              <div>
                <p className="text-[13px] font-bold text-[#2c2c2c] mb-1">
                  Əlavə olunub: {categoryProducts.length}
                </p>
                <button 
                  onClick={clearCompare}
                  className="text-[12px] text-gray-400 hover:text-[#ff003c] flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  🗑 Hamısını sil
                </button>
              </div>

              <div>
                <p className="font-bold text-[13px] mb-3 text-[#2c2c2c]">Göstər:</p>
                <div className="flex flex-col gap-2.5 text-[13px]">
                  <label className="flex items-center gap-3 cursor-pointer font-medium text-gray-700">
                    <input
                      type="radio"
                      name="filter"
                      checked={filterMode === "all"}
                      onChange={() => setFilterMode("all")}
                      className="accent-[#00a046] w-4 h-4 cursor-pointer"
                    />
                    Hamısı
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer font-medium text-gray-700">
                    <input
                      type="radio"
                      name="filter"
                      checked={filterMode === "similar"}
                      onChange={() => setFilterMode("similar")}
                      className="accent-[#00a046] w-4 h-4 cursor-pointer"
                    />
                    Oxşarlıqlar
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer font-medium text-gray-700">
                    <input
                      type="radio"
                      name="filter"
                      checked={filterMode === "different"}
                      onChange={() => setFilterMode("different")}
                      className="accent-[#00a046] w-4 h-4 cursor-pointer"
                    />
                    Fərqlər
                  </label>
                </div>
              </div>
            </div>

            <div className="flex flex-col">
              {filteredLabels.map(label => (
                <div key={label} className="h-[48px] flex items-center text-[15px] text-gray-500 border-b border-gray-100 font-medium pr-2">
                  {label}
                </div>
              ))}
            </div>
          </div>

          {/* Məhsul Kartları */}
          <div className="flex gap-4">
            {categoryProducts.map((product) => {
              const defaultVariant = product.variants?.[0];
              const mainImage = defaultVariant?.images?.[0] || "";

              const rawPrice = product.price || "0";
              const numericPrice = parsePrice(rawPrice);
              const numericDiscount = Number(product.discount) || 0;

              const finalPrice = numericDiscount > 0 
                ? Math.trunc(numericPrice - (numericPrice * numericDiscount / 100))
                : numericPrice;

              const isInCart = basket?.some((item) => item.id === product.id);

              return (
                <div key={product.id} className="w-[280px] sm:w-[300px] bg-white rounded-[10px] p-5 shadow-xs shrink-0 flex flex-col">
                  
                  
                  <div className="h-[310px] flex flex-col justify-between relative pb-3">
                    <button 
                      onClick={() => removeFromCompare(product.id)}
                      className="absolute top-0 right-0 w-6 h-6 rounded-full border border-[#323232] flex items-center justify-center text-[#323232] text-[22px] transition-colors z-10 cursor-pointer"
                      title="Siyahıdan çıxar"
                    >
                      -
                    </button>

                    <div>
                      <h3 className="font-semibold text-[13px] line-clamp-2 pr-6 text-[#2c2c2c] leading-snug min-h-[36px]">
                        {product.title}
                      </h3>
                      
                      <div className="h-28 my-2 flex items-center justify-center">
                        {mainImage && (
                          <img src={mainImage} alt={product.title} className="max-h-full object-contain" />
                        )}
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 w-full">
                      <div className="flex items-baseline gap-2">
                        <span className="text-[#ff003c] font-[600] text-[17px] tracking-tight">
                          {finalPrice.toLocaleString('az-AZ')} ₼
                        </span>
                        {numericDiscount > 0 && (
                          <span className="text-[#777777] line-through font-[550] text-[17px]">
                            {numericPrice.toLocaleString('az-AZ')} ₼
                          </span>
                        )}
                      </div>

                      <div className="w-full">
                        {isInCart ? (
                          <Link
                            to="/Səbət"
                            className="block w-full border border-[#22c55e] text-[#22c55e] text-center py-2.5 rounded-[10px] text-xs font-bold shadow-xs transition-all"
                          >
                            Səbətdə
                          </Link>
                        ) : (
                          <button 
                            onClick={(e) => {
                              e.stopPropagation();
                              addToCart && addToCart(product, defaultVariant);
                            }}
                            className="w-full bg-[#ff003c] text-[#fff] py-2.5 rounded-[10px] text-xs font-bold transition-colors shadow-xs cursor-pointer"
                          >
                            Səbətə at
                          </button>
                        )}
                      </div>
                    </div>
                  </div>

               
                  <div className="flex flex-col">
                    {filteredLabels.map(label => {
                      const val = getPropValue(product, label);
                      return (
                        <div key={label} className="h-[48px] flex flex-col justify-center border-b border-gray-100 pr-2">
                          <span className="lg:hidden text-[11px] text-[#777777] font-medium leading-none mb-0.5">
                            {label}
                          </span>
                          
                          <span className="text-[14px] text-[#323232] font-[500] leading-tight line-clamp-1">
                            {val}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </div>

    </div>
  );
}