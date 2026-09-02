import React, { useContext, useMemo, useState } from 'react';
import { useNavigate, Link } from 'react-router';
import { DATA } from '../Context/DataContext';
import { BasketContextData } from '../Context/BasketContext';
import { WishlistContextData } from '../Context/WishlistContext';
import { CompareContextData } from '../Context/CompareContext'; 
import { TbTruckDelivery, TbPlayerPlayFilled } from "react-icons/tb";
import { FaHeart } from "react-icons/fa";
import wishlist from '../assets/wishlist.svg';
import whitebasket from '../assets/whitebasket.svg';
import greenBasket from "../assets/greenBasket.svg";
import compareIcon from '../assets/compare.svg'; 
import redCompare from "../assets/redCompare.svg"; 
import VideoModal from './VideoModal';
import { createSlug } from '../Services/Slugify';

const ActionButtons = ({ onAddToCart, isInCart, isWishlist, onToggleWishlist, isCompare, onToggleCompare, isMobile = false }) => (
  <div className="flex items-center gap-2 sm:gap-3 w-full" onClick={(e) => e.stopPropagation()}>
    <button 
      onClick={(e) => {
        e.stopPropagation();
        onToggleWishlist(e);
      }} 
      className={`bg-gray-100 hover:bg-gray-200 transition-colors shrink-0 flex items-center justify-center rounded-[10px] ${
        isMobile ? 'w-[34px] h-[34px]' : 'w-[50px] h-[50px]'
      }`}
    >
      {isWishlist ? (
        <FaHeart className={`text-[#ff003c] shrink-0 ${isMobile ? 'text-base' : 'text-xl'}`} />
      ) : (
        <img src={wishlist} alt="wishlist" className={`shrink-0 object-contain ${isMobile ? 'w-4 h-4' : 'w-6 h-6'}`} />
      )}
    </button>

    {!isMobile && (
      <button 
        onClick={(e) => {
          e.stopPropagation();
          onToggleCompare(e);
        }}
        className="bg-[#f3f3f3] hover:bg-gray-200 rounded-[10px] flex justify-center items-center cursor-pointer shrink-0 select-none transition-colors w-[50px] h-[50px]"
        title={isCompare ? "Müqayisədən çıxar" : "Müqayisəyə əlavə et"}
      >
        <img 
          src={isCompare ? redCompare : compareIcon} 
          alt="compare" 
          className="shrink-0 object-contain w-6 h-6" 
        />
      </button>
    )}

    {isInCart ? (
      <Link 
        to="/Səbət"
        onClick={(e) => e.stopPropagation()}
        className={`flex-1 border border-[#22c55e] bg-white text-[#22c55e] font-semibold flex items-center justify-center gap-2 transition-colors no-underline ${
          isMobile ? 'py-2 rounded-[10px] text-xs' : 'py-3 rounded-[10px] text-base'
        }`}
      >
        <img src={greenBasket} alt="greenbasket" className={`shrink-0 object-contain ${isMobile ? 'w-4 h-4' : 'w-5 h-5'}`} />
        <span>Səbətdə</span>
      </Link>
    ) : (
      <button 
        onClick={(e) => {
          e.stopPropagation();
          onAddToCart(e);
        }}
        className={`flex-1 bg-[#ff003c] hover:bg-[#e00035] text-white font-bold flex items-center justify-center gap-2 transition-colors shadow-sm active:scale-98 ${
          isMobile ? 'py-2 rounded-xl text-xs' : 'py-3.5 rounded-[10px] text-base'
        }`}
      >
        <img src={whitebasket} alt="whitebasket" className={`shrink-0 object-contain ${isMobile ? 'w-4 h-4' : 'w-5 h-5'}`} />
        <span>Səbətə at</span>
      </button>
    )}
  </div>
);

function SuperOffer({ productsData }) {
  const { products: contextProducts } = useContext(DATA);
  const { addToCart, basket } = useContext(BasketContextData);
  const { toggleWishlist, isInWishlist } = useContext(WishlistContextData);
  const { toggleCompare, isInCompare } = useContext(CompareContextData); 
  const navigate = useNavigate();

  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const randomProducts = useMemo(() => {
    const list = productsData || contextProducts || [];
    const pool = list.slice(0, 50);
    const shuffled = [...pool].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 12);
  }, [productsData, contextProducts]);

  const handleCardClick = (product) => {
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

  const handleVideoClick = (e, videoUrl) => {
    e.stopPropagation();
    if (videoUrl) {
      setSelectedVideo(videoUrl);
      setIsVideoModalOpen(true);
    }
  };

  const parsePrice = (priceStr) => {
    if (!priceStr) return 0;
    return Number(priceStr.toString().replace(/\./g, '').replace(',', '.'));
  };

  return (
    <div className="w-full py-4 overflow-hidden">
      <div className="flex gap-5 overflow-x-auto scrollbar-none pb-4 snap-x snap-mandatory w-full">
        {randomProducts.map((product) => {
          const defaultVariant = product.variants ? product.variants[0] : null;
          const rawPrice = product.price || "0";
          const numericPrice = parsePrice(rawPrice);
          const numericDiscount = Number(product.discount) || 0;

          const discountAmount = Math.round(numericPrice * (numericDiscount / 100));
          const finalPrice = Math.trunc(numericPrice - (numericPrice * numericDiscount / 100));
          
          const isInCart = basket?.some((item) => item.id === product.id);
          const isWish = isInWishlist ? isInWishlist(product.id) : false;
          const isCompare = isInCompare ? isInCompare(product.id) : false;

          const handleAddToCartClick = (e) => {
            e.stopPropagation();
            addToCart(product, defaultVariant);
          };

          const handleToggleWishlistClick = (e) => {
            e.stopPropagation();
            if (toggleWishlist) {
              toggleWishlist(product);
            }
          };

          const handleToggleCompareClick = (e) => {
            e.stopPropagation();
            if (toggleCompare) {
              toggleCompare(product);
            }
          };

          return (
            <div
              key={product.id}
              className="bg-white rounded-[10px] lg:p-10 p-6 transition-shadow shrink-0 snap-start
                         w-[280px] sm:w-[320px] lg:w-[900px] lg:min-w-[700px] lg:min-h-[380px] border border-gray-100 flex flex-col justify-between"
            >
              
              <div className="hidden lg:flex gap-8 h-full items-center relative">
                <div className="relative w-[280px] h-[340px] shrink-0 flex items-center justify-center bg-white rounded-2xl">
                  {numericDiscount > 0 && (
                    <div className="absolute top-0 right-0 bg-[#ff003c] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm z-10 shadow-sm pointer-events-none">
                      -{numericDiscount}%
                    </div>
                  )}

                  <img
                    src={defaultVariant?.images?.[0]}
                    alt={product.title}
                    onClick={() => handleCardClick(product)}
                    className="max-h-full max-w-full object-contain p-2 cursor-pointer"
                  />

                  {product.video && (
                    <div 
                      onClick={(e) => handleVideoClick(e, product.video)}
                      className="absolute bottom-2 left-0 flex items-center gap-1.5 border border-[#ff003c] px-2.5 py-1 rounded-[5px] text-[#ff003c] text-xs font-semibold bg-white cursor-pointer transition-colors duration-300"
                    >
                      <TbPlayerPlayFilled className="text-sm shrink-0" />
                      <span>Video</span>
                    </div>
                  )}
                </div>
                
                <div className="flex flex-col justify-between h-[340px] flex-1 py-2">
                  <div>
                    <h3 
                      onClick={() => handleCardClick(product)}
                      className="text-[#323232] font-bold text-xl line-clamp-2 leading-snug cursor-pointer transition-colors"
                    >
                      {product.title}
                    </h3>

                    <div className="flex items-center gap-1.5 text-gray-500 text-sm mt-8 border-b border-gray-100 pb-4">
                      <TbTruckDelivery className="text-lg shrink-0" />
                      <span>0 ₼</span>
                    </div>
                  </div>

                  <div>
                    {numericDiscount > 0 && (
                      <span className="bg-[#ff003c] text-white text-xs font-bold px-2.5 py-1 rounded-md inline-block mb-2">
                        -{discountAmount}₼
                      </span>
                    )}

                    <div className="flex items-baseline justify-between mb-4">
                      <div className="flex items-baseline gap-3">
                        <span className="text-[#ff003c] font-bold text-[17px]">
                          {finalPrice.toLocaleString('az-AZ')} ₼
                        </span>
                        {numericDiscount > 0 && (
                          <span className="line-through text-gray-400 text-[17px]">
                            {product.price} ₼
                          </span>
                        )}
                      </div>
                      {product.month && (
                        <span className="text-gray-700 text-sm font-semibold">
                          0% {product.month} ay
                        </span>
                      )}
                    </div>

                    <ActionButtons 
                      onAddToCart={handleAddToCartClick} 
                      isInCart={isInCart} 
                      isWishlist={isWish}
                      onToggleWishlist={handleToggleWishlistClick}
                      isCompare={isCompare}
                      onToggleCompare={handleToggleCompareClick}
                      isMobile={false} 
                    />
                  </div>
                </div>

              </div>

              <div className="flex lg:hidden flex-col justify-between h-full relative">
                <div className="relative w-full h-[180px] flex items-center justify-center my-2">
                  {numericDiscount > 0 && (
                    <div className="absolute top-2 right-2 bg-[#ff003c] text-white w-15 h-15 rounded-full flex items-center justify-center font-bold text-xs z-10 pointer-events-none">
                      -{numericDiscount}%
                    </div>
                  )}

                  <img
                    src={defaultVariant?.images?.[0]}
                    alt={product.title}
                    onClick={() => handleCardClick(product)}
                    className="max-h-full max-w-full object-contain cursor-pointer"
                  />

                  {product.video && (
                    <div 
                      onClick={(e) => handleVideoClick(e, product.video)}
                      className="absolute bg-white bottom-0 left-0 flex items-center gap-1 border border-[#ff003c] px-2 py-0.5 rounded text-[#ff003c] text-[11px] font-semibold cursor-pointer"
                    >
                      <TbPlayerPlayFilled className="shrink-0" />
                      <span>Video</span>
                    </div>
                  )}
                </div>

                <h3 
                  onClick={() => handleCardClick(product)}
                  className="text-[#323232] text-xs sm:text-sm line-clamp-2 h-[36px] mt-1 cursor-pointer hover:text-[#ff003c] transition-colors"
                >
                  {product.title}
                </h3>

                <div className="mt-2">
                  {numericDiscount > 0 && (
                    <span className="bg-[#ff003c] text-white text-[10px] font-semibold px-2 py-0.5 rounded inline-block">
                      -{discountAmount}₼
                    </span>
                  )}
                </div>

                <div className="mt-1">
                  {numericDiscount > 0 && (
                    <span className="line-through text-[#777777] font-[600] text-xs block">
                      {product.price} ₼
                    </span>
                  )}
                  <div className="flex items-center justify-between">
                    <span className="text-[#ff003c] font-bold text-base">
                      {finalPrice.toLocaleString('az-AZ')} ₼
                    </span>
                    {product.month && (
                      <span className="text-gray-600 text-[11px] font-medium">
                        0% {product.month} ay
                      </span>
                    )}
                  </div>
                </div>

                <div className="mt-3">
                  <ActionButtons 
                    onAddToCart={handleAddToCartClick} 
                    isInCart={isInCart} 
                    isWishlist={isWish}
                    onToggleWishlist={handleToggleWishlistClick}
                    isCompare={isCompare}
                    onToggleCompare={handleToggleCompareClick}
                    isMobile={true} 
                  />
                </div>
              </div>

            </div>
          );
        })}
      </div>

      <VideoModal 
        videoUrl={selectedVideo} 
        isOpen={isVideoModalOpen} 
        onClose={() => setIsVideoModalOpen(false)} 
      />
    </div>
  );
}

export default SuperOffer;