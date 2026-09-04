import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router';
import { BasketContextData } from '../Context/BasketContext';
import Basketempty from "../assets/Basketempty.svg";
import { FiTrash2, FiMinus, FiPlus, FiX } from "react-icons/fi";
import OneClick from '../Components/OneClick';

function Basket() {
  const { 
    basket, 
    updateCount, 
    removeFromCart, 
    toggleSelect, 
    toggleSelectAll, 
    removeSelected 
  } = useContext(BasketContextData);

  const [isOneClickOpen, setIsOneClickOpen] = useState(false);

  useEffect(() => {
    document.title = "Səbət";
  }, []);

  if (!basket || basket.length === 0) {
    return (
      <div className="bg-[#f5f5f5] mx-3 lg:mx-9 mt-[166px] pb-10">
        <div className="mx-auto space-y-4">
          <div className="bg-white p-5 rounded-lg">
            <h2 className="text-[#323232] font-[600]">
              Səbət <span className="font-[500] text-[#323232]">( Məhsul sayı: 0 )</span>
            </h2>
          </div>
          <div className="bg-white rounded-[10px] px-4 py-10 md:py-12 flex flex-col items-center justify-center text-center">
            <div className="mb-4">
              <img src={Basketempty} alt="Boş Səbət" className="w-20 h-20 md:w-28 md:h-28 object-contain" />
            </div>
            <h2 className="text-lg md:text-[22px] font-[600] text-[#323232] mb-2">
              Səbətində məhsul yoxdur
            </h2>
            <p className="text-[#777777] text-xs md:text-[15px] font-[500] mb-6">
              İstədiyin məhsulu səbətinə əlavə et.
            </p>
            <Link
              to="/"
              className="px-8 py-3 border border-gray-800 text-gray-800 rounded-lg text-sm font-medium hover:bg-gray-800 hover:text-white transition-colors duration-200"
            >
              Əsas səhifə
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const basketTotalCount = basket.reduce((acc, item) => acc + item.count, 0);

  const selectedItems = basket.filter((item) => item.selected);
  const isAllSelected = basket.length > 0 && basket.every((item) => item.selected);

  const totalOriginalPrice = selectedItems.reduce((acc, item) => acc + item.originalPrice * item.count, 0);
  const totalFinalPrice = selectedItems.reduce((acc, item) => acc + item.price * item.count, 0);
  const totalDiscount = totalOriginalPrice - totalFinalPrice;
  const totalCount = selectedItems.reduce((acc, item) => acc + item.count, 0);

  const formatPrice = (val) => Math.round(val).toLocaleString('az-AZ');

  return (
    <div className="bg-[#f5f5f5] min-h-screen px-3 lg:px-9 pt-[166px] pb-10 font-[Montserrat,_sans-serif]">
      <div className="mx-auto space-y-4">

        <div className="flex flex-col lg:flex-row gap-2 items-start">
          
          {/* SOL TƏRƏF */}
          <div className="w-full lg:w-[72%] flex flex-col gap-2">
            
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="p-4 sm:p-5 border-b border-gray-100">
                <h2 className="text-[#323232] font-[600] text-base sm:text-lg">
                  Səbət <span className="font-[500] text-[#777777]">( Məhsul sayı: {basketTotalCount} )</span>
                </h2>
              </div>
              <div className="p-3 sm:p-4 flex items-center gap-3">
                <button
                  onClick={() => toggleSelectAll(!isAllSelected)}
                  className="bg-[#f3f3f3] hover:bg-gray-200 text-[#323232] text-xs sm:text-sm font-[500] py-2 px-4 rounded-full transition-colors cursor-pointer"
                >
                  {isAllSelected ? 'Seçimi qaldır' : 'Hamısını seç'}
                </button>
                <button
                  onClick={removeSelected}
                  disabled={selectedItems.length === 0}
                  className="bg-[#f3f3f3] hover:bg-gray-200 text-[#777777] disabled:opacity-50 text-xs sm:text-sm font-[500] py-2 px-4 rounded-full flex items-center gap-2 transition-colors cursor-pointer"
                >
                  <FiTrash2 className="text-base" />
                  <span>Seçilənləri sil</span>
                </button>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm divide-y divide-gray-100 overflow-hidden">
              {basket.map((item) => {
                const itemImage = item.image && item.image.trim() !== "" ? item.image : null;

                return (
                  <div key={item.cartItemId} className="p-3 sm:p-5 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 relative">
                 
                    <div className="flex sm:hidden justify-between items-center pb-2 border-b border-gray-100">
                      <label className="flex items-center gap-2 cursor-pointer text-sm font-[500] text-[#323232]">
                        <input
                          type="checkbox"
                          checked={item.selected}
                          onChange={() => toggleSelect(item.cartItemId)}
                          className="w-5 h-5 accent-[#323232] rounded"
                        />
                        <span>Seçmək</span>
                      </label>
                      <button 
                        onClick={() => removeFromCart(item.cartItemId)}
                        className="text-gray-400 hover:text-[#ff003c] p-1 transition-colors"
                      >
                        <FiX className="text-xl" />
                      </button>
                    </div>

                    <div className="flex items-start sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
                      <input
                        type="checkbox"
                        checked={item.selected}
                        onChange={() => toggleSelect(item.cartItemId)}
                        className="hidden sm:block w-5 h-5 accent-[#323232] cursor-pointer rounded"
                      />

                      <div className="w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0 flex items-center justify-center p-1 border border-gray-100 rounded-lg">
                        {itemImage ? (
                          <img src={itemImage} alt={item.title} className="max-w-full max-h-full object-contain" />
                        ) : (
                          <div className="w-full h-full bg-gray-100 flex items-center justify-center text-xs text-gray-400 rounded">Şəkil yoxdur</div>
                        )}
                      </div>

                      <div className="flex flex-col gap-1.5 flex-grow">
                     
                        <h3 className="text-[#323232] font-[600] text-sm sm:text-base leading-snug">
                          {item.title} {item.storage} {item.colorName}
                        </h3>

                        <div className="flex sm:hidden items-center justify-between mt-1">
                          <div className="flex items-baseline gap-1.5">
                            <span className="text-[#ff003c] font-[700] text-base">
                              {formatPrice(item.price * item.count)} ₼
                            </span>
                            {item.originalPrice > item.price && (
                              <span className="line-through text-[#777777] text-xs font-[500]">
                                {formatPrice(item.originalPrice * item.count)} ₼
                              </span>
                            )}
                          </div>

                          <div className="flex items-center gap-2 border border-gray-200 rounded-full py-0.5 px-2">
                            <button onClick={() => updateCount(item.cartItemId, -1)} className="text-gray-500 hover:text-black transition-colors">
                              <FiMinus className="text-xs" />
                            </button>
                            <span className="text-xs font-[600] text-[#323232] min-w-[12px] text-center">{item.count}</span>
                            <button onClick={() => updateCount(item.cartItemId, 1)} className="text-gray-500 hover:text-black transition-colors">
                              <FiPlus className="text-xs" />
                            </button>
                          </div>
                        </div>
                    
                      </div>
                    </div>

                   

                    <div className="hidden sm:flex items-center gap-6 w-auto">
                      <div className="flex items-center gap-3 border border-gray-200 rounded-full py-1 px-3">
                        <button onClick={() => updateCount(item.cartItemId, -1)} className="text-gray-500 hover:text-black transition-colors cursor-pointer">
                          <FiMinus className="text-sm" />
                        </button>
                        <span className="text-sm font-[600] text-[#323232] min-w-[16px] text-center">{item.count}</span>
                        <button onClick={() => updateCount(item.cartItemId, 1)} className="text-gray-500 hover:text-black transition-colors cursor-pointer">
                          <FiPlus className="text-sm" />
                        </button>
                      </div>

                      <div className="flex flex-col items-end">
                        <span className="text-[#ff003c] font-[700] text-base sm:text-lg">
                          {formatPrice(item.price * item.count)} ₼
                        </span>
                        {item.originalPrice > item.price && (
                          <span className="line-through text-[#777777] text-xs sm:text-sm font-[500]">
                            {formatPrice(item.originalPrice * item.count)} ₼
                          </span>
                        )}
                      </div>

                      <button 
                        onClick={() => removeFromCart(item.cartItemId)}
                        className="text-gray-400 hover:text-[#ff003c] p-1 transition-colors cursor-pointer"
                      >
                        <FiX className="text-xl" />
                      </button>
                    </div>

                  </div>
                );
              })}
            </div>

          </div>

          {/* SAĞ PANEL */}
          <div className="w-full lg:w-[28%] bg-white p-5 rounded-xl shadow-sm space-y-4 lg:sticky lg:top-[110px] overflow-hidden">
            <div className="flex justify-between items-center border-b border-gray-100 pb-3">
              <span className="text-[#323232] font-[600] text-sm">Məhsul sayı:</span>
              <span className="text-[#323232] font-[600] text-sm">{totalCount} əd.</span>
            </div>

            <div className="space-y-2">
              {selectedItems.map((item) => (
                <div key={item.cartItemId} className="flex justify-between items-start text-xs sm:text-sm gap-2">
               
                  <span className="text-[#323232] font-[500] line-clamp-2">
                    {item.title} {item.storage} {item.colorName} <span className="text-[#ff9933] font-[500]">({item.count} ədəd)</span>
                  </span>
                  <div className="text-right flex-shrink-0">
                    {item.originalPrice > item.price && (
                      <div className="line-through text-[#777777] text-[11px]">
                        {formatPrice(item.originalPrice * item.count)} ₼
                      </div>
                    )}
                    <div className="text-[#ff003c] font-[700]">
                      {formatPrice(item.price * item.count)} ₼
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-[#f9f9f9] -mx-5 px-5 py-3 space-y-3">
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-[#323232] font-[500]">Ümumi məbləğ:</span>
                  <span className="text-[#323232] font-[600]">{formatPrice(totalOriginalPrice)} ₼</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-[#323232] font-[500]">Endirim məbləği:</span>
                  <span className="text-[#ff003c] font-[600]">{formatPrice(totalDiscount)} ₼</span>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-3 flex justify-between items-center">
                <span className="text-[#323232] font-[500] text-base">Yekun məbləğ:</span>
                <span className="text-[#323232] font-[700] text-lg sm:text-[18px]">
                  {formatPrice(totalFinalPrice)} ₼
                </span>
              </div>
            </div>

            <div className="space-y-2 pt-2">
              <button 
                onClick={() => setIsOneClickOpen(true)}  
                className="w-full bg-white border border-black hover:bg-gray-50 text-black font-[600] py-3 rounded-xl transition-colors text-sm cursor-pointer"
              >
                Bir kliklə al
              </button>
            </div>

          </div>

        </div>
      </div>

      <OneClick 
        isOpen={isOneClickOpen} 
        onClose={() => setIsOneClickOpen(false)} 
        price={totalFinalPrice}
      />
    </div>
  );
}

export default Basket;