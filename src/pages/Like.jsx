import React, { useContext, useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate, Link } from 'react-router';
import { WishlistContextData } from '../Context/WishlistContext';
import { BasketContextData } from '../Context/BasketContext';
import { TbTruckDelivery, TbPlayerPlayFilled } from "react-icons/tb";
import { FaHeart } from "react-icons/fa";
import { FiMinusCircle } from "react-icons/fi";

import wishlistIcon from '../assets/wishlist.svg';
import whitebasket from '../assets/whitebasket.svg';
import greenBasket from "../assets/greenBasket.svg";
import bearLike from '../assets/bearLike.png'; 

import VideoModal from '../Components/VideoModal'; 
import { createSlug } from '../Services/Slugify';

const ActionButtons = ({ onAddToCart, isInCart, isWishlist, onToggleWishlist }) => (
  <div className='flex justify-between items-center gap-1'>
    <p 
      onClick={(e) => {
        e.stopPropagation();
        onToggleWishlist(e);
      }}
      className='bg-[#f3f3f3] rounded-[8px] w-[34px] h-[34px] sm:w-[38px] sm:h-[38px] flex justify-center items-center cursor-pointer shrink-0 select-none'
    >
      {isWishlist ? (
        <FaHeart className="text-[#ff003c] text-[16px] sm:text-[18px]" />
      ) : (
        <img src={wishlistIcon} alt="wishlist" className="w-4 h-4 sm:w-auto sm:h-auto" />
      )}
    </p>

    {isInCart ? (
      <Link 
        to="/Səbət"
        onClick={(e) => e.stopPropagation()}
        className='border border-[#22c55e] bg-white flex items-center gap-1.5 h-[34px] sm:h-[38px] text-[#22c55e] font-[Montserrat,_sans-serif] justify-center flex-1 rounded-[8px] cursor-pointer transition-colors duration-200 no-underline'
      >
        <img src={greenBasket} alt="greenbasket" className='w-4 h-4' />
        <span className='text-[12px] sm:text-[14px] font-[500]'>Səbətdə</span>
      </Link>
    ) : (
      <p 
        onClick={(e) => {
          e.stopPropagation();
          onAddToCart(e);
        }}
        className='bg-[#ff003c] flex items-center gap-1 h-[34px] sm:h-[38px] text-white font-[Montserrat,_sans-serif] justify-center flex-1 rounded-[8px] cursor-pointer transition-colors duration-200'
      >
        <img src={whitebasket} alt="whitebasket" className="w-4 h-4 sm:w-auto sm:h-auto" />
        <span className='text-[12px] sm:text-[14px] font-[500]'>Səbətə at</span>
      </p>
    )}
  </div>
);

export default function Like() {
  const { wishlist, toggleWishlist, isInWishlist } = useContext(WishlistContextData);
  const { addToCart, basket } = useContext(BasketContextData);

  const navigate = useNavigate();
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [cardCoords, setCardCoords] = useState({ top: 0, left: 0, width: 0 });

  const cardRefs = useRef([]);

  useEffect(() => {
    const handleScrollOrResize = () => setHoveredIndex(null);
    window.addEventListener('scroll', handleScrollOrResize, true);
    window.addEventListener('resize', handleScrollOrResize);
    return () => {
      window.removeEventListener('scroll', handleScrollOrResize, true);
      window.removeEventListener('resize', handleScrollOrResize);
    };
  }, []);

  const handleMouseEnter = (index) => {
    if (window.matchMedia('(hover: hover)').matches) {
      const cardEl = cardRefs.current[index];
      if (cardEl) {
        const rect = cardEl.getBoundingClientRect();
        let calculatedLeft = rect.left + window.scrollX;
        const cardWidth = rect.width;

        if (rect.left + cardWidth > window.innerWidth) {
          calculatedLeft = window.innerWidth + window.scrollX - cardWidth - 12;
        }
        if (calculatedLeft < 0) {
          calculatedLeft = 12;
        }

        setCardCoords({
          top: rect.bottom + window.scrollY - 1,
          left: calculatedLeft,
          width: cardWidth,
        });
        setHoveredIndex(index);
      }
    }
  };

  const handleMouseLeave = () => setHoveredIndex(null);

  const handleCardClick = (product, variant) => {
    const colorName = variant?.colorName || '';
    const firstStorage = variant?.storages ? Object.keys(variant.storages)[0] : '';
    const slug = createSlug(product.title, firstStorage, colorName);

    navigate(`/product/${slug}`, { 
      state: { product, selectedVariant: variant, selectedStorage: firstStorage } 
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

 
  if (!wishlist || wishlist.length === 0) {
    return (
      <div className="lg:mx-10 mx-3 mt-[166px] mb-12 font-[Montserrat,_sans-serif]">
       
        <div className="bg-white h-[60px] sm:h-[80px] mb-3 flex items-center pl-6 rounded-lg shadow-sm">
          <h2 className="text-[18px] sm:text-[20px] font-[600] text-[#1c1c1c]">
            Seçilmişlər
          </h2>
        </div>

       
        <div className="bg-white rounded-lg shadow-sm p-8 sm:p-12 flex flex-col items-center justify-center text-center min-h-[420px]">
          <div className="w-40 sm:w-52 mb-4 flex items-center justify-center">
            <img 
              src={bearLike} 
              alt="Seçilmişlər ayı" 
              className="w-full h-auto object-contain"
            />
          </div>

          <h3 className="text-[18px] sm:text-[22px] font-[700] text-[#1c1c1c] mb-2">
            Seçilmişlərdən arzular siyahısını yaratmağa başla!
          </h3>

          <p className="text-[#666666] text-[13px] sm:text-[14px] max-w-[520px] leading-relaxed mb-6 font-[400]">
            Məhsullara ürək qoyaraq “Seçilmişlərim” siyahısına əlavə et ki, onlar hər zaman əlinin altında olsun.
          </p>

          <Link 
            to="/" 
            className="bg-[#12b342] hover:bg-[#0f9e3a] text-white font-[500] px-6 py-2.5 rounded-[8px] transition-colors text-[14px] sm:text-[15px] inline-block no-underline"
          >
            Alış-verişə başla
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="lg:mx-10 mx-3 mt-[166px]">
      <div className="bg-white h-[80px] mb-3 flex items-center pl-4">
        <h2 className="font-[Montserrat,_sans-serif] text-[20px] font-[600] text-[#323232]">
          Bəyəndiklərim
        </h2>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-5 gap-3">
        {wishlist.map((product, i) => {
          const defaultVariant = product.variants ? product.variants[0] : null;
          const rawPrice = product.price || "0";
          const numericPrice = parsePrice(rawPrice);
          const numericDiscount = Number(product.discount) || 0;

          const discountAmount = Math.round(numericPrice * (numericDiscount / 100));
          const finalPrice = Math.trunc(numericPrice - (numericPrice * numericDiscount / 100));

          const isHovered = hoveredIndex === i;
          const isInCart = basket?.some((item) => item.id === product.id);
          const isWish = isInWishlist(product.id);

          const firstStorage = defaultVariant?.storages ? Object.keys(defaultVariant.storages)[0] : '';

          const handleAddToCartClick = (e) => {
            e.stopPropagation();
            
            const formattedItem = {
              id: product.id,
              cartItemId: `${product.id}-${firstStorage}-${defaultVariant?.colorName || ''}`,
              title: product.title,
              image: defaultVariant?.images?.[0] || '',
              storage: firstStorage,
              colorName: defaultVariant?.colorName || '',
              originalPrice: numericPrice,
              price: finalPrice,
              count: 1,
              selected: true
            };

            addToCart(formattedItem);
          };

          const handleToggleWishlistClick = (e) => {
            e.stopPropagation();
            toggleWishlist(product);
          };

          const imageUrl = defaultVariant?.images?.[0];

          return (
            <div 
              key={product.id || i} 
              ref={(el) => (cardRefs.current[i] = el)}
              onMouseEnter={() => handleMouseEnter(i)}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleCardClick(product, defaultVariant)}
              className={`product-card group/card bg-white p-2.5 sm:p-4 w-full shadow-md cursor-pointer transition-all duration-300 relative shrink-0 ${
                isHovered ? 'rounded-t-xl rounded-b-none shadow-2xl z-20' : 'rounded-xl'
              }`}
            >
              {isWish && (
                <button 
                  onClick={handleToggleWishlistClick}
                  className="absolute top-2 right-2 z-10 text-[#323232] hover:text-[#ff003c] transition-colors p-1"
                  title="Seçilmişlərdən çıxar"
                >
                  <FiMinusCircle className="text-[20px] sm:text-[22px]" />
                </button>
              )}

              {defaultVariant && defaultVariant.images && (
                <div className='flex relative items-center justify-center'>
                  {Boolean(imageUrl) && (
                    <img 
                      src={imageUrl} 
                      alt={product.title} 
                      className="w-full max-w-[160px] sm:max-w-[200px] h-44 sm:h-64 object-contain rounded"
                    />
                  )}

                  {numericDiscount > 0 && (
                    <div className={`bg-[#ff003c] text-white w-[38px] h-[38px] sm:w-[50px] sm:h-[50px] text-[10px] sm:text-[14px] absolute ${isWish ? 'top-[35px] sm:top-[40px]' : 'top-[10px] sm:top-[30px]'} right-[4px] sm:right-[6px] font-[700] font-[Montserrat,_sans-serif] flex justify-center items-center rounded-full`}>
                      <span>-{numericDiscount}%</span>
                    </div>
                  )}

                  {product.delivery && (
                    <span className='text-[#17a539] bg-[#edf8f0] absolute left-0 top-0 text-[0.65em] sm:text-[.7em] font-[500] px-1.5 sm:px-2 font-[Montserrat,_sans-serif] whitespace-nowrap flex justify-center items-center gap-1 rounded-[5px]'>
                      <TbTruckDelivery className='text-black' />
                      2 saat/0.0₼
                    </span>
                  )}

                  {product.video && (
                    <div 
                      onClick={(e) => handleVideoClick(e, product.video)}
                      className='flex items-center bg-white gap-1 border border-[#ff003c] p-0.5 sm:p-1 rounded-[4px] absolute left-0 bottom-[10px] sm:bottom-[47px] transition-colors duration-300'
                    >
                      <p className='text-[#ff003c] bg-white w-[15px] h-[15px] sm:w-[17px] sm:h-[17px] rounded-full flex items-center justify-center border border-[#ff003c] text-[8px] sm:text-[10px]'>
                        <TbPlayerPlayFilled />
                      </p>
                      <span className='text-[#ff003c] font-[Montserrat,_sans-serif] font-[500] text-[9px] sm:text-[10px]'>
                        Video
                      </span>
                    </div>
                  )}
                </div>
              )}

              <div className="flex gap-1.5 sm:gap-2 justify-center items-center mt-2 h-5">
                {product.variants && product.variants.map((item, index) => {
                  if (!item.colorRGB) return null;
                  const isSelected = index === 0;

                  return (
                    <div 
                      key={index} 
                      style={{ backgroundColor: item.colorRGB }} 
                      className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full transition-transform cursor-pointer ${
                        isSelected ? 'ring-1 ring-[#323232] ring-offset-1 ' : 'border border-gray-300'
                      }`}
                      title={item.colorName}
                      onClick={(e) => {
                        e.stopPropagation(); 
                        handleCardClick(product, item);
                      }}
                    />
                  );
                })}
              </div>

              <h3 className="text-[#323232] font-[Montserrat,_sans-serif] mt-2 sm:mt-3 text-[12px] sm:text-[13px] font-[500] line-clamp-2 h-[45px] sm:h-[55px] flex items-center">
                {product.title}
                {firstStorage && ` ${firstStorage}`}
                {defaultVariant?.colorName && ` ${defaultVariant.colorName}`}
              </h3>

              <div className="mt-1 h-[22px]">
                {numericDiscount > 0 && (
                  <span className="bg-[#ff003c] text-white text-[10px] sm:text-[12px] font-[500] py-0.5 px-1.5 rounded-[4px] font-[Montserrat,_sans-serif] inline-block">
                    -{discountAmount}₼
                  </span>
                )}
              </div>

              <div className="mt-1 h-[42px] flex flex-col justify-end">
                <div className="h-[18px]">
                  {numericDiscount > 0 && (
                    <span className="line-through text-[#777777] font-[Montserrat,_sans-serif] font-[550] text-[0.8em] sm:text-[.9em]">{product.price} ₼</span>
                  )}
                </div>
                <div className='flex justify-between items-center gap-1'>
                  <span className="text-[#ff003c] font-[650] font-[Montserrat,_sans-serif] text-[14px] sm:text-[16px]">
                    {finalPrice.toLocaleString('az-AZ')} ₼
                  </span>
                  {product.month && (
                    <span className='font-[Montserrat,_sans-serif] font-[500] text-[11px] sm:text-[13px] whitespace-nowrap'>0% {product.month} ay</span>
                  )}
                </div>
              </div>

              <hr className='text-[#f7f5f5] mt-1 mb-0.5 '/>
              <div className='flex items-center gap-1 text-[#323232] font-[Montserrat,_sans-serif] text-[12px] mb-2'>
                <TbTruckDelivery/> <span className='font-[500] text-[10px]'>0 ₼</span>
              </div>

              <div className='lg:hidden mt-2'>
                <ActionButtons 
                  onAddToCart={handleAddToCartClick} 
                  isInCart={isInCart} 
                  isWishlist={isWish}
                  onToggleWishlist={handleToggleWishlistClick}
                />
              </div>

              {isHovered && createPortal(
                <div 
                  style={{ 
                    position: 'absolute', 
                    top: `${cardCoords.top}px`, 
                    left: `${cardCoords.left}px`, 
                    width: `${cardCoords.width}px`,
                    zIndex: 99999 
                  }}
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={handleMouseLeave}
                  className="bg-white p-4 rounded-b-xl rounded-t-none shadow-2xl border-t-0 pointer-events-auto box-border"
                >
                  <ActionButtons 
                    onAddToCart={handleAddToCartClick} 
                    isInCart={isInCart} 
                    isWishlist={isWish}
                    onToggleWishlist={handleToggleWishlistClick}
                  />

                  <div className='mt-2 flex flex-col gap-0.5'>
                    {product.specs && (
                      <>
                        {product.specs.screen && (
                          <div className='flex justify-between items-center'>
                            <p className='text-[#777777] text-[10px] font-[Montserrat,_sans-serif] font-[600]'>Ekran :</p>
                            <p className='text-[#323232] font-[Montserrat,_sans-serif] font-[600] text-[10px]'>{product.specs.screen}"</p>
                          </div>
                        )}
                        {product.specs.mainCamera && (
                          <div className='flex justify-between items-center'>
                            <p className='text-[#777777] text-[10px] font-[Montserrat,_sans-serif] font-[600]'>Əsas Kamera :</p>
                            <p className='text-[#323232] font-[Montserrat,_sans-serif] font-[600] text-[10px]'>{product.specs.mainCamera}</p>
                          </div>
                        )}
                        {product.specs.os && (
                          <div className='flex justify-between items-center'>
                            <p className='text-[#777777] text-[10px] font-[Montserrat,_sans-serif] font-[600]'>Əməliyyat sistemi :</p>
                            <p className='text-[#323232] font-[Montserrat,_sans-serif] font-[600] text-[10px]'>{product.specs.os}</p>
                          </div>
                        )}
                        {product.specs.nfc !== undefined && (
                          <div className='flex justify-between items-center'>
                            <p className='text-[#777777] text-[10px] font-[Montserrat,_sans-serif] font-[600]'>NFC :</p>
                            <p className='text-[#323232] font-[Montserrat,_sans-serif] font-[600] text-[10px]'>{product.specs.nfc ? 'Var' : 'Yox'}</p>
                          </div>
                        )}
                        {product.specs.fastCharging !== undefined && (
                          <div className='flex justify-between items-center'>
                            <p className='text-[#777777] text-[10px] font-[Montserrat,_sans-serif] font-[600]'>Sürətli enerji yığma :</p>
                            <p className='text-[#323232] font-[Montserrat,_sans-serif] font-[600] text-[10px]'>{product.specs.fastCharging ? 'Var' : 'Yox'}</p>
                          </div>
                        )}
                      </>
                    )}
                  </div>
                </div>,
                document.body
              )}
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