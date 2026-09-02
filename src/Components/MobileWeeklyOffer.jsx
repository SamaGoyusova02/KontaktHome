import React, { useContext, useState, useEffect } from 'react';
import { DATA } from '../Context/DataContext';
import Time from './Time';
import { SlBasket } from "react-icons/sl";

function MobileWeeklyOffer() {
  const { products } = useContext(DATA);
  const [currentIndex, setCurrentIndex] = useState(0);

  const targetIds = [9, 19, 2, 45];
  const offerProducts = (products || []).filter((product) =>
    targetIds.map(String).includes(String(product.id))
  );

  useEffect(() => {
    if (offerProducts.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % offerProducts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [offerProducts.length]);

  if (offerProducts.length === 0) return null;

  const currentProduct = offerProducts[currentIndex];
  const defaultVariant = currentProduct?.variants?.[0];
  const imageUrl = defaultVariant?.images?.[0] || '';

  const numericPrice = Number(currentProduct?.price?.toString().replace(/\./g, '').replace(',', '.')) || 0;
  const numericDiscount = Number(currentProduct?.discount) || 0;
  const finalPrice = Math.trunc(numericPrice - (numericPrice * numericDiscount / 100));

  return (
    <div className="md:hidden w-full bg-white rounded-[16px] p-4 shadow-sm border border-gray-100 my-4 font-[Montserrat,_sans-serif]">
      <div className="flex items-center justify-between pb-3 mb-3 border-b border-gray-100">
        <h3 className="text-[#111111] font-[700] text-[17px]">
          Həftənin təklifləri
        </h3>
        <div className="scale-85 origin-right">
          <Time />
        </div>
      </div>
      <div className="flex items-center gap-3 pt-1 pb-1 min-h-[140px]">
        <div className="w-[130px] h-[130px] shrink-0 flex items-center justify-center">
          <img
            src={imageUrl}
            alt={currentProduct?.title}
            className="max-w-full max-h-full object-contain"
          />
        </div>

        <div className="flex flex-col justify-between flex-1 min-w-0 h-[130px] pl-1">
          <div>
            <h4 className="text-[#323232] text-[13px] font-[500] leading-snug line-clamp-2">
              {currentProduct?.title}
            </h4>

            <div className="flex items-center gap-2 mt-2">
              <span className="text-[#ff003c] font-[700] text-[16px]">
                {finalPrice.toLocaleString('az-AZ')} ₼
              </span>
              {numericDiscount > 0 && (
                <span className="line-through text-[#8e8e93] text-[13px] font-[500]">
                  {currentProduct?.price} ₼
                </span>
              )}
            </div>

            {currentProduct?.month && (
              <p className="text-[#777777] text-[11px] font-[500] mt-1">
                0% {currentProduct.month} ay
              </p>
            )}
          </div>

          <button className="bg-[#f3f3f3] active:bg-[#e2e2e2] flex items-center justify-center gap-2 py-2 px-4 rounded-[10px] w-fit text-[#222222] transition-colors">
            <SlBasket/>
            <span className="text-[13px] font-[600]">Səbətə at</span>
          </button>
        </div>
      </div>

      <div className="flex justify-center items-center gap-1.5 mt-3">
        {offerProducts.map((_, idx) => (
          <span
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className="w-2 h-2 rounded-full bg-gray-200 cursor-pointer"
          />
        ))}
      </div>
    </div>
  );
}

export default MobileWeeklyOffer;