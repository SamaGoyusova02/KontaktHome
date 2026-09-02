import React, { useEffect, useState, useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useNavigate, Link } from "react-router";
import "swiper/css";
import whitebasket from "../assets/whitebasket.svg";
import greenBasket from "../assets/greenBasket.svg";
import { DATA } from "../Context/DataContext";
import { BasketContextData } from "../Context/BasketContext";
import { createSlug } from "../Services/Slugify";

const TARGET_IDS = ["8", "16", "19", "22", "28", "50" , "55" , "74" , "82" , "95"];

function SliderSmall({ productsData }) {
  const { products: contextProducts } = useContext(DATA);
  const { basket, addToCart } = useContext(BasketContextData);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const listToFilter = productsData || contextProducts || [];
    if (listToFilter.length > 0) {
      const filtered = listToFilter.filter((item) =>
        TARGET_IDS.includes(String(item.id))
      );
      setProducts(filtered.length > 0 ? filtered : listToFilter.slice(0, 5));
    }
  }, [productsData, contextProducts]);

  const goToDetail = (product) => {
    const defaultVar = product.variants ? product.variants[0] : null;
    const firstStorage = defaultVar?.storages ? Object.keys(defaultVar.storages)[0] : '';
    const slug = createSlug(product.title, firstStorage, defaultVar?.colorName);

    navigate(`/product/${slug}`, {
      state: {
        product,
        selectedVariant: defaultVar,
        selectedStorage: firstStorage
      }
    });
  };

  const parsePrice = (priceStr) => {
    if (!priceStr) return 0;
    return Number(priceStr.toString().replace(/\./g, '').replace(',', '.'));
  };

  const checkIsInCart = (product) => {
    const defaultVariant = product.variants?.[0];
    const firstStorageKey = defaultVariant?.storages ? Object.keys(defaultVariant.storages)[0] : '';
    const cartItemId = `${product.id}-${defaultVariant?.colorName || ''}-${firstStorageKey}`;

    return basket?.some((item) => item.cartItemId === cartItemId || item.id === product.id);
  };

  const handleAddToCart = (e, product) => {
    e.stopPropagation();

    const defaultVariant = product.variants?.[0];
    const firstStorageKey = defaultVariant?.storages ? Object.keys(defaultVariant.storages)[0] : '';
    const storagePriceStr = defaultVariant?.storages?.[firstStorageKey];

    const rawPrice = storagePriceStr || product.price || "0";
    const numericPrice = parsePrice(rawPrice);
    const numericDiscount = Number(product.discount) || 0;
    const finalPrice = Math.trunc(numericPrice - (numericPrice * numericDiscount / 100));

    const itemToAdd = {
      id: product.id,
      title: product.title,
      colorName: defaultVariant?.colorName || '',
      storage: firstStorageKey,
      image: defaultVariant?.images?.[0] || '',
      price: finalPrice,
      originalPrice: numericPrice,
      count: 1
    };

    addToCart(itemToAdd);
  };

  return (
    <div className="w-full h-full overflow-hidden bg-white p-4 flex flex-col justify-between rounded-[10px]">
      <Swiper
        className="mySwiper w-full h-full"
        modules={[Autoplay]}
        slidesPerView={1}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        grabCursor
      >
        {products.map((product) => {
          const defaultVariant = product.variants?.[0];
          const imgUrl = defaultVariant?.images?.[0] || "";

          const rawPrice = product.price || "0";
          const numericPrice = parsePrice(rawPrice);
          const numericDiscount = Number(product.discount) || 0;

          const finalPrice = Math.trunc(numericPrice - (numericPrice * numericDiscount / 100));
          const inCart = checkIsInCart(product);

          return (
            <SwiperSlide
              key={product.id}
              className="w-full h-full bg-white flex flex-col justify-between items-center select-none"
            >
              <div 
                className="flex flex-col justify-center items-center gap-1 w-full cursor-pointer"
                onClick={() => goToDetail(product)}
              >
                <div className="text-center px-2 flex justify-center">
                  <h2 className="text-[#323232] font-[Montserrat,_sans-serif] font-bold text-base text-center w-[70%] leading-tight line-clamp-2">
                    {product.title}
                  </h2>
                </div>

                <div className="flex gap-2 items-center mt-2">
                  <p className="text-[#ff003c] font-[Montserrat,_sans-serif] font-bold text-lg">
                    {finalPrice.toLocaleString('az-AZ')} ₼
                  </p>
                  {numericDiscount > 0 && (
                    <p className="line-through text-[#777777] font-[Montserrat,_sans-serif] font-medium text-sm">
                      {product.price} ₼
                    </p>
                  )}
                </div>

                {product.month && (
                  <p className="text-[#777777] font-[Montserrat,_sans-serif] text-xs font-medium">
                    0% {product.month} ay
                  </p>
                )}

                <div className="w-full h-[140px] flex items-center justify-center my-3">
                  <img
                    src={imgUrl}
                    alt={product.title}
                    className="max-h-full object-contain hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              <div className="flex justify-center flex-col items-center gap-2 w-full mt-8">
                {inCart ? (
                  <Link
                    to="/Səbət"
                    onClick={(e) => e.stopPropagation()}
                    className=" text-[#22c55e] border border-[#22c55e]  flex items-center justify-center gap-2 w-full py-3 max-w-[190px] rounded-[10px] text-sm  transition-colors  active:scale-95"
                  >
                    <img src={greenBasket} alt="basket" className="w-4 h-4" />
                    <span>Səbətdə</span>
                  </Link>
                ) : (
                  <button 
                    onClick={(e) => handleAddToCart(e, product)}
                    className="bg-[#ff003c] text-white hover:bg-[#e00035] flex items-center justify-center gap-2 w-full py-3 max-w-[190px] rounded-[10px] text-sm font-semibold transition-colors shadow-sm active:scale-95 cursor-pointer"
                  >
                    <img src={whitebasket} alt="basket" className="w-4 h-4" />
                    <span>Səbətə at</span>
                  </button>
                )}

                <p 
                  onClick={() => navigate('/')} 
                  className="text-[#323232] font-[Montserrat,_sans-serif] text-xs font-medium text-center cursor-pointer hover:text-[#ff003c] transition-colors"
                >
                  Bütün təklifləri gör
                </p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default SliderSmall;