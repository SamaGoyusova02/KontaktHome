import React, { useState, useEffect, useRef, useContext } from 'react';
import { useLocation, useNavigate, useParams, Link } from 'react-router';
import { FiChevronUp, FiChevronDown, FiBell } from 'react-icons/fi';
import { TbPlayerPlayFilled } from 'react-icons/tb';
import VideoModal from './VideoModal';
import { FaStar, FaHeart } from "react-icons/fa";
import { AiOutlineMessage } from "react-icons/ai";
import hand from "../assets/hand.svg";
import arrow from "../assets/arrow.svg";
import Calculator from './Calculator';
import Inform from './Inform';
import redinfo from '../assets/redinfo.svg';

import OneClick from './OneClick';
import DetailProperties from './DetailProperties';
import { createSlug } from '../Services/Slugify';

import { BasketContextData } from '../Context/BasketContext';
import { WishlistContextData } from '../Context/WishlistContext';
import { CompareContextData } from '../Context/CompareContext'; 
import greenBasket from "../assets/greenBasket.svg";
import whitebasket from "../assets/whitebasket.svg";
import wishlist from '../assets/wishlist.svg';
import compareIcon from '../assets/compare.svg'; 
import redCompare from "../assets/redCompare.svg"; 
import Comment from './Comment';

function Detail() {
  const location = useLocation();
  const navigate = useNavigate();
  const { slug } = useParams();


  const { addToCart, basket } = useContext(BasketContextData);
  const { toggleWishlist, isInWishlist } = useContext(WishlistContextData);
  const { toggleCompare, isInCompare } = useContext(CompareContextData);

  const { product, selectedVariant } = location.state || {};

  const [activeVariant, setActiveVariant] = useState(
    selectedVariant || (product?.variants ? product.variants[0] : null)
  );

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const scrollRef = useRef(null);

  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isInformOpen, setIsInformOpen] = useState(false);
  const [selectedStorage, setSelectedStorage] = useState('');

  const imagesList = activeVariant?.images || [];


  const isInCart = basket?.some((item) => item.id === product?.id);
  const isWish = isInWishlist ? isInWishlist(product?.id) : false;
  const isComp = isInCompare ? isInCompare(product?.id) : false;

 
  useEffect(() => {
    setSelectedImageIndex(0);

    if (activeVariant?.storages) {
      const keys = Object.keys(activeVariant.storages);
      if (keys.length > 0) {
        const firstAvailable = keys.find(
          (key) => activeVariant.storages[key] === true || (typeof activeVariant.storages[key] === 'object' && activeVariant.storages[key]?.inStock)
        );
        setSelectedStorage(firstAvailable || keys[0]);
      }
    } else {
      setSelectedStorage('');
    }
  }, [activeVariant]);

  useEffect(() => {
    if (scrollRef.current) {
      const itemHeight = 72;
      scrollRef.current.scrollTo({
        top: selectedImageIndex * itemHeight,
        behavior: 'smooth',
      });
    }
  }, [selectedImageIndex]);

  if (!product) {
    return (
      <div className="p-8 text-center pt-[10px]">
        <p className="text-red-500 font-bold">Məhsul tapılmadı!</p>
        <button
          onClick={() => navigate('/')}
          className="mt-4 bg-[#e31e24] text-white px-4 py-2 rounded-lg font-medium"
        >
          Ana Səhifəyə Qayıt
        </button>
      </div>
    );
  }

  const handlePrevImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : imagesList.length - 1
    );
  };

  const handleNextImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex < imagesList.length - 1 ? prevIndex + 1 : 0
    );
  };

  const handleVariantChange = (variant) => {
    setActiveVariant(variant);

    const availableStorages = variant.storages ? Object.keys(variant.storages) : [];
    const newStorage = availableStorages.includes(selectedStorage)
      ? selectedStorage
      : availableStorages[0] || '';

    const newSlug = createSlug(product.title, newStorage, variant.colorName);

    navigate(`/product/${newSlug}`, {
      replace: true,
      state: { product, selectedVariant: variant, selectedStorage: newStorage }
    });
  };

  const handleStorageChange = (storageSize) => {
    setSelectedStorage(storageSize);

    const newSlug = createSlug(product.title, storageSize, activeVariant?.colorName);

    navigate(`/product/${newSlug}`, {
      replace: true,
      state: { product, selectedVariant: activeVariant, selectedStorage: storageSize }
    });
  };

  const hasStorages = Boolean(activeVariant?.storages && Object.keys(activeVariant.storages).length > 0);
  const currentStorageItem = activeVariant?.storages?.[selectedStorage];

  const isCurrentInStock = hasStorages
    ? (typeof currentStorageItem === 'object' ? currentStorageItem?.inStock !== false : currentStorageItem === true)
    : (product?.inStock !== false);

  const [isOneclickOpen, setIsOneclickOpen] = useState(false);

  const currentPriceStr = (typeof currentStorageItem === 'object' && currentStorageItem?.price)
    ? currentStorageItem.price
    : (product?.price || "0");

  const currentDiscount = (typeof currentStorageItem === 'object' && currentStorageItem?.discount !== undefined)
    ? currentStorageItem.discount
    : (product?.discount || 0);

  const parsePriceVal = (str) => Number(str.toString().replace(/\./g, '').replace(',', '.'));

  const numericPrice = parsePriceVal(currentPriceStr);
  const numericDiscount = Number(currentDiscount);

  const finalCalculatedPrice = Math.trunc(numericPrice - (numericPrice * numericDiscount / 100));
  const calculatedDiscountAmount = Math.round(numericPrice * (numericDiscount / 100));

  const handleAddToCart = () => {
    addToCart(product, activeVariant, selectedStorage);
  };

  const handleToggleWishlist = () => {
    if (toggleWishlist) {
      toggleWishlist(product);
    }
  };

  const handleToggleCompare = () => {
    if (toggleCompare) {
      toggleCompare(product);
    }
  };
const hasColors = Boolean(
    product.variants && 
    product.variants.some(v => v.colorRGB)
  );
  return (
    <div className="container mx-auto py-0 lg:py-6 max-w-[1480px] lg:mt-[120px] mt-[150px]">
      <div className="grid grid-cols-1 w-full lg:grid-cols-12 gap-2 p-0 lg:p-6 rounded-none lg:rounded-2xl select-none h-auto overflow-visible lg:h-[620px]">

        {/* SOL HİSSƏ: SLIDER */}
        <div className="lg:col-span-6 flex items-center justify-center bg-white p-3 rounded-none lg:rounded-[10px] gap-6 h-full">
          <div className="flex flex-col items-center gap-2">
            <button
              onClick={handlePrevImage}
              className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-black transition-colors"
            >
              <FiChevronUp size={22} />
            </button>

            <div
              ref={scrollRef}
              className="flex flex-col gap-2 h-[280px] overflow-y-auto no-scrollbar scroll-smooth p-1"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {imagesList.map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedImageIndex(idx)}
                  className={`w-[80px] h-[84px] min-h-[64px] rounded-lg border cursor-pointer overflow-hidden flex items-center justify-center p-1 bg-[#fbfbfb] transition-all ${
                    selectedImageIndex === idx
                      ? 'border-[#e31e24]'
                      : 'border-gray-200 bg-white hover:border-gray-300'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-contain" />
                </div>
              ))}
            </div>

            <button
              onClick={handleNextImage}
              className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-black transition-colors"
            >
              <FiChevronDown size={22} />
            </button>
          </div>

          <div className="relative flex-1 h-full max-h-[420px] flex items-center justify-center p-2">
            {/* Mobil üçün tam yuxarıda (top-2, mt-0) yan-yana duran Compare və Wishlist düymələri */}
            <div className="absolute top-2 right-2 mt-0 flex lg:hidden items-center gap-2 z-10">
              <button 
                onClick={handleToggleWishlist}
                className="h-[40px] w-[40px] flex items-center justify-center bg-[#f7f5f5] rounded-[10px] shadow-sm hover:bg-[#eaeaea] transition-colors cursor-pointer"
              >
                {isWish ? (
                  <FaHeart className="text-[#ff003c] text-[16px]" />
                ) : (
                  <img src={wishlist} alt="wishlist" className="w-4 h-4" />
                )}
              </button>

              <button 
                onClick={handleToggleCompare}
                className="h-[40px] w-[40px] flex items-center justify-center bg-[#f7f5f5] rounded-[10px] shadow-sm hover:bg-[#eaeaea] transition-colors cursor-pointer"
                title={isComp ? "Müqayisədən çıxar" : "Müqayisəyə əlavə et"}
              >
                <img 
                  src={isComp ? redCompare : compareIcon} 
                  alt="compare" 
                  className="w-4 h-4" 
                />
              </button>
            </div>

            <img
              src={imagesList[selectedImageIndex] || imagesList[0]}
              alt={product.title}
              className="max-w-full max-h-full object-contain transition-all duration-300"
            />

            {product?.video && (
              <button
                onClick={() => setIsVideoModalOpen(true)}
                className="absolute bottom-2 right-2 w-9 h-9 bg-black text-white rounded-lg flex items-center justify-center shadow-md hover:bg-gray-800 transition-transform active:scale-95"
              >
                <TbPlayerPlayFilled size={16} />
              </button>
            )}
          </div>
        </div>

        {/* SAĞ HİSSƏ */}
        <div className="lg:col-span-6 flex flex-col gap-1 bg-white text-[#111] rounded-none lg:rounded-[10px] h-full overflow-y-auto p-4 detailScroll">

          <a href="#brand" className="text-[#379fc6] text-[14px]">
            Brand səhifəsinə keç
          </a>

          <h2 className="font-[Montserrat,_sans-serif] font-[600] lg:text-[21px]">
            {product.title}{activeVariant?.colorName && ` ${activeVariant.colorName}`}
          </h2>

          <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
            <div className="flex items-center gap-2">
              <span className="bg-[#edf8f0] text-[#17a539] px-2.5 py-1 rounded-[4px]">
                çatdırılma 0₼
              </span>
              <span className="bg-[#edf8f0] text-[#17a539] px-2.5 py-1 rounded-[4px]">
                2 saata qapında
              </span>
            </div>
          </div>

          <div className='flex justify-between items-center mt-2 flex-wrap gap-2 lg:gap-0 md:gap-0'>
            <div className="flex items-center gap-3 text-sm text-gray-600">
              <div className="flex items-center gap-1 font-[Montserrat,_sans-serif] border border-[#eaeaea] rounded-[20px] px-3 py-1">
                <span className='text-[#ff9933]'><FaStar /></span>
                <span className='text-[#323232] font-[Montserrat,_sans-serif] text-[12px]'>{product?.rating}</span>
              </div>
              <button href="#Comments" className="flex items-center gap-0.5 font-[Montserrat,_sans-serif] border border-[#eaeaea] rounded-[20px] px-3 py-1 text-[#323232]">
                <AiOutlineMessage />
                <span  className='text-[12px] font-[500]'>Rəylər 6</span>
              </button>
            </div>
            <div className='flex items-center gap-1'>
              <div  className={`font-[Montserrat,_sans-serif] text-[13px] font-[500] ${isCurrentInStock ? 'text-[#17a539]' : 'text-[#ff003c]'}`}>
                {isCurrentInStock ? 'Mövcuddur' : <div className='flex items-center gap-1'><img src={redinfo} alt="redinfo" /><span> Mövcud deyil</span></div> }
              </div>
              <p className='font-[Montserrat,_sans-serif] text-[#777777] font-[500] text-[13px]'>TM-DG-SBP-1105-SM-2468</p>
            </div>
          </div>

          <hr className='text-[#f3f3f3] my-3' />
         
            {/* RƏNG SEÇİMİ */}
           {hasColors && (
           <>
             <div>
               <div className="flex gap-3 items-center">
                 {product.variants?.map((v, index) => {
                   if (!v.colorRGB) return null;
                   const isActive = activeVariant?.colorName === v.colorName;
                   return (
                     <button
                       key={index}
                       style={{ backgroundColor: v.colorRGB }}
                       onClick={() => handleVariantChange(v)}
                       className={`w-5.5 h-5.5 rounded-full border transition-all ${
                         isActive
                           ? 'ring-1 ring-offset-2'
                           : 'border-gray-300'
                       }`}
                       title={v.colorName}
                     />
                   );
                 })}
               </div>
             </div>
           </>
         )}

          {/* YADDAŞ SEÇİMİ */}
          {hasStorages && (
            <div className="mt-4">
              <div className="flex flex-wrap gap-2">
                {Object.entries(activeVariant.storages).map(([storageSize, storageData], idx) => {
                  const isSelected = selectedStorage === storageSize;
                  const isAvailable = typeof storageData === 'object' ? storageData?.inStock !== false : storageData === true;

                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => handleStorageChange(storageSize)}
                      className={`text-[13px] relative rounded-[6px] px-2.5 py-1 transition-all border cursor-pointer overflow-hidden ${
                        !isAvailable
                          ? isSelected
                            ? 'bg-[#f7f5f5] text-[#bfbfbf] font-medium'
                            : 'bg-[#f7f5f5] text-[#bfbfbf] border-transparent hover:border-gray-300'
                          : isSelected
                            ? 'bg-white text-[#323232] font-medium shadow-sm'
                            : 'bg-white text-[#323232] hover:border-gray-300'
                      }`}
                    >
                      {storageSize}

                      {!isAvailable && (
                        <span className="absolute left-1/2 top-1/2 w-[120%] h-[1px] bg-[#bfbfbf] -translate-x-1/2 -translate-y-1/2 -rotate-25 pointer-events-none" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
      
          <hr className='text-[#f3f3f3] my-3' />

          {/* QİYMƏT VƏ ENDİRİM */}
          <div>
            {numericDiscount > 0 && (
              <div>
                <span className="bg-[#ff003c] text-white text-[12px] font-[600] py-1 px-1.5 rounded-[4px] font-[Montserrat,_sans-serif]">
                  -{calculatedDiscountAmount}₼
                </span>
              </div>
            )}
            <div className='flex items-center gap-2 mt-1'>
              <p className="text-[#ff003c] font-[Montserrat,_sans-serif] font-[600] text-[21px]">
                {finalCalculatedPrice}₼
              </p>
              {numericDiscount > 0 && (
                <p className="text-[#777777] line-through font-[Montserrat,_sans-serif] font-[600] text-[21px] mr-2">
                  {currentPriceStr}₼
                </p>
              )}
            </div>
          </div>

          {/* DÜYMƏLƏR */}
        <div className="flex items-center justify-between gap-2 mt-2 w-full">
            {isCurrentInStock ? (
              <div className="flex items-center gap-2 flex-1">
                {isInCart ? (
                  <Link
                    to="/Səbət"
                    className="flex-1 min-w-[120px] sm:min-w-[200px] border border-[#22c55e] bg-white text-[#22c55e] font-[Montserrat,_sans-serif] h-[50px] px-2 sm:px-4 rounded-[10px] font-[500] flex items-center justify-center gap-2 text-sm no-underline cursor-pointer"
                  >
                    <img src={greenBasket} alt="greenbasket" className="w-5 h-5 shrink-0" />
                    <span>Səbətdə</span>
                  </Link>
                ) : (
                  <button 
                    onClick={handleAddToCart}
                    className="flex-1 min-w-[120px] sm:min-w-[200px] bg-[#ff003c] font-[Montserrat,_sans-serif] text-white h-[50px] px-2 sm:px-4 rounded-[10px] font-[500] flex items-center justify-center gap-2 text-sm hover:bg-[#e00035] transition-colors cursor-pointer"
                  >
                    <img src={whitebasket} alt="whitebasket" className="w-5 h-5 shrink-0" />
                    <span>Səbətə at</span>
                  </button>
                )}

                <button onClick={() => setIsOneclickOpen(true)} className="flex-1 min-w-[120px] sm:min-w-[180px] border border-[#323232] font-[Montserrat,_sans-serif] text-[#323232] h-[50px] px-2 rounded-[10px] font-[500] transition-colors flex items-center justify-center gap-2 text-sm hover:bg-gray-50 cursor-pointer">
                  <img src={hand} alt="hand" className="shrink-0" />
                  <span>Bir kliklə al</span>
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-2 flex-1">
                <button
                  onClick={() => setIsInformOpen(true)}
                  className="h-[50px] px-6 bg-[#ff9431] font-[Montserrat,_sans-serif] text-white rounded-[10px] font-[500] flex items-center justify-center gap-2 text-sm hover:bg-[#f08520] transition-colors cursor-pointer shrink-0"
                >
                  <FiBell size={18} className="shrink-0" />
                  <span>Mövcud olanda bildirək</span>
                </button>
              </div>
            )}

            {/* Desktop  */}
            <div className="hidden lg:flex items-center gap-2 shrink-0">
              <button 
                onClick={handleToggleCompare}
                className="h-[50px] w-[50px] flex items-center justify-center bg-[#f7f5f5] rounded-[10px] shrink-0 hover:bg-[#eaeaea] transition-colors cursor-pointer"
                title={isComp ? "Müqayisədən çıxar" : "Müqayisəyə əlavə et"}
              >
                <img 
                  src={isComp ? redCompare : compareIcon} 
                  alt="compare" 
                  className="w-4 h-4 sm:w-auto sm:h-auto" 
                />
              </button>

              <button 
                onClick={handleToggleWishlist}
                className="h-[50px] w-[50px] flex items-center justify-center bg-[#f7f5f5] rounded-[10px] shrink-0 hover:bg-[#eaeaea] transition-colors cursor-pointer"
              >
                {isWish ? (
                  <FaHeart className="text-[#ff003c] text-[18px]" />
                ) : (
                  <img src={wishlist} alt="wishlist" className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          <hr className='text-[#f3f3f3] my-3' />

          <div className="flex flex-col gap-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-1 sm:p-3 rounded-xl">
              <div className='flex items-start gap-2.5'>
                <img className='w-5 h-5 mt-0.5 shrink-0' src={arrow} alt="arrow" />
                <div>
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <span className='text-[14px] font-semibold text-[#323232]'>Trade-in</span>
                    <span className='bg-[#7233f7] text-white text-[9px] px-2 py-0.5 rounded-[5px] font-medium'>Breezy</span>
                  </div>
                  <p className='text-[12px] text-[#555] leading-tight'>
                    Cihazını Trade-in ilə dəyişərək sərfəli şərtlər əldə et
                  </p>
                </div>
              </div>

              <button className='w-full sm:w-auto bg-[#17a539] hover:bg-[#148f31] transition-colors text-white text-[13px] rounded-[10px] sm:rounded-[6px] font-medium py-2.5 sm:py-1.5 px-4 flex justify-center items-center shrink-0 mt-1 sm:mt-0'>
                Cihazı qiymətləndir
              </button>
            </div>

            <hr className='text-[#f3f3f3]' />
            <Calculator price={currentPriceStr} discount={currentDiscount} isAvailable={isCurrentInStock} />
          </div>
        </div>
      </div>
         
      <DetailProperties
        product={product}
        selectedVariant={activeVariant}
        selectedStorage={selectedStorage}
        selectedColor={activeVariant?.colorName}
      />
      <Comment product={product}  />
      <VideoModal
        videoUrl={product?.video}
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
      />
      <Inform
        isOpen={isInformOpen}
        onClose={() => setIsInformOpen(false)}
      />
      <OneClick
        isOpen={isOneclickOpen}
        onClose={() => setIsOneclickOpen(false)}
        price={finalCalculatedPrice}
      />

    </div>
  );
}

export default Detail;