import React, { useState, useEffect, useContext, useRef } from 'react';
import { createPortal } from 'react-dom';
import axios from 'axios';
import { useNavigate, Link } from 'react-router';
import { BasketContextData } from '../Context/BasketContext';
import { WishlistContextData } from '../Context/WishlistContext'; 
import { CompareContextData } from '../Context/CompareContext'; 
import { TbTruckDelivery, TbPlayerPlayFilled } from "react-icons/tb";
import { FaHeart, FaExchangeAlt, FaFilter } from "react-icons/fa"; 
import { IoIosArrowDown, IoIosArrowUp, IoMdClose } from "react-icons/io";
import wishlistIcon from '../assets/wishlist.svg';
import whitebasket from '../assets/whitebasket.svg';
import greenBasket from "../assets/greenBasket.svg";
import compareIcon from '../assets/compare.svg'; 
import redCompare from "../assets/redCompare.svg"; 
import VideoModal from '../Components/VideoModal';
import { createSlug } from '../Services/Slugify';

const ActionButtons = ({ onAddToCart, isInCart, isWishlist, onToggleWishlist, isCompare, onToggleCompare, isMobile = false }) => (
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

    {!isMobile && (
      <p 
        onClick={(e) => {
          e.stopPropagation();
          onToggleCompare(e);
        }}
        className="bg-[#f3f3f3] rounded-[8px] w-[34px] h-[34px] sm:w-[38px] sm:h-[38px] flex justify-center items-center cursor-pointer shrink-0 select-none transition-colors"
        title={isCompare ? "Müqayisədən çıxar" : "Müqayisəyə əlavə et"}
      >
        <img 
          src={isCompare ? redCompare : compareIcon} 
          alt="compare" 
          className="w-4 h-4 sm:w-auto sm:h-auto" 
        />
      </p>
    )}

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
        onClick={onAddToCart}
        className='bg-[#ff003c] flex items-center gap-1 h-[34px] sm:h-[38px] text-white font-[Montserrat,_sans-serif] justify-center flex-1 rounded-[8px] cursor-pointer transition-colors duration-200'
      >
        <img src={whitebasket} alt="whitebasket" className="w-4 h-4 sm:w-auto sm:h-auto" />
        <span className='text-[12px] sm:text-[14px] font-[500]'>Səbətə at</span>
      </p>
    )}
  </div>
);

function ClimateProducts() {
  const [climateProductsData, setClimateProductsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { addToCart, basket } = useContext(BasketContextData);
  const { toggleWishlist, isInWishlist } = useContext(WishlistContextData); 
  const { toggleCompare, isInCompare } = useContext(CompareContextData); 

  const navigate = useNavigate();
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [cardCoords, setCardCoords] = useState({ top: 0, left: 0, width: 0 });
  const cardRefs = useRef([]);

  const [selectedFilters, setSelectedFilters] = useState({
    'Brend': ['HOFFMANN']
  });

  const [minPrice, setMinPrice] = useState('0');
  const [maxPrice, setMaxPrice] = useState('5000');
  const [appliedMinPrice, setAppliedMinPrice] = useState(0);
  const [appliedMaxPrice, setAppliedMaxPrice] = useState(5000);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8; 

  const [openSections, setOpenSections] = useState({
    price: true,
    'Brend': true,
  });

  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [sortType, setSortType] = useState('low-high');
  const BaseUrl = "https://kontakt-home-data.vercel.app/"
  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${BaseUrl}api/Products`);
        const filteredById = response.data.filter(item => item.id >= 53 && item.id <= 79);
        setClimateProductsData(filteredById);
      } catch (err) {
        setError(err.message || 'Məlumatları yükləmək mümkün olmadı!');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const handleScrollOrResize = () => {
      setHoveredIndex(null);
    };

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

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const parsePrice = (priceStr) => {
    if (!priceStr) return 0;
    const cleanStr = String(priceStr).replace(/\./g, '').replace(',', '.').replace(/[^0-9.]/g, '');
    return Number(cleanStr) || 0;
  };

  const filterCategories = React.useMemo(() => {
    const cats = {
      'Brend': new Set(),
      'Mühərrik növü': new Set(),
      'Tövsiyə olunan otaq sahəsi': new Set(),
      'Səmərəlilik': new Set(),
      'Freon növü': new Set(),
      'Səs səviyyəsi (daxili blok)': new Set(),
      'Soyutma rejiminin gücü': new Set(),
      'Rəng': new Set(),
      'İstehsalçı ölkə': new Set(),
      'Xüsusiyyətlər': new Set(),
      'Wi-Fi': new Set()
    };
    
    climateProductsData.forEach(item => {
      if (item.brand) cats['Brend'].add(item.brand);
      if (item.propertiesList && Array.isArray(item.propertiesList)) {
        item.propertiesList.forEach(prop => {
          if (prop.label && prop.value && cats[prop.label]) {
            cats[prop.label].add(prop.value);
          }
        });
      }
    });

    const result = {};
    Object.keys(cats).forEach(key => {
      const arr = Array.from(cats[key]);
      if (arr.length > 0) result[key] = arr;
    });
    return result;
  }, [climateProductsData]);

  const toggleSection = (section) => {
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const handleCheckboxChange = (categoryKey, value) => {
    setSelectedFilters(prev => {
      const currentList = prev[categoryKey] || [];
      const updatedList = currentList.includes(value)
        ? currentList.filter(item => item !== value)
        : [...currentList, value];
      return { ...prev, [categoryKey]: updatedList };
    });
    setCurrentPage(1);
  };

  const handleApplyFilter = () => {
    setAppliedMinPrice(minPrice === '' ? 0 : Number(minPrice));
    setAppliedMaxPrice(maxPrice === '' ? 5000 : Number(maxPrice));
    setIsMobileFilterOpen(false);
    setCurrentPage(1);
  };

  const totalActiveFilters = Object.values(selectedFilters).reduce((acc, curr) => acc + curr.length, 0);

 const filteredList = climateProductsData.filter(item => {
    const numericPrice = parsePrice(item.price);
    const numericDiscount = Number(item.discount) || 0;
    const discountAmount = Math.round(numericPrice * (numericDiscount / 100));
    const finalPrice = Math.trunc(numericPrice - discountAmount);

    const matchesPrice = finalPrice >= appliedMinPrice && finalPrice <= appliedMaxPrice;

    const matchesDynamicFilters = Object.keys(selectedFilters).every(catKey => {
      const selectedValues = selectedFilters[catKey];
      if (!selectedValues || selectedValues.length === 0) return true;

      let matchFound = false;
      if (catKey === 'Brend') {
        matchFound = selectedValues.some(val => {
          const brandStr = String(item.brand || '').trim().toLowerCase();
          const titleStr = String(item.title || '').trim().toLowerCase();
          const targetVal = val.trim().toLowerCase();
          return brandStr === targetVal || brandStr.includes(targetVal) || titleStr.includes(targetVal);
        });
      } else if (item.propertiesList) {
        const propMatch = item.propertiesList.find(p => p.label === catKey);
        if (propMatch) {
          matchFound = selectedValues.some(val => 
            val.trim().toLowerCase() === String(propMatch.value).trim().toLowerCase()
          );
        }
      }
      return matchFound;
    });

    return matchesPrice && matchesDynamicFilters;
  });

  const sortedList = [...filteredList].sort((a, b) => {
    const getFinal = (prod) => {
      const np = parsePrice(prod.price);
      const nd = Number(prod.discount) || 0;
      return Math.trunc(np - Math.round(np * (nd / 100)));
    };
    if (sortType === 'low-high') return getFinal(a) - getFinal(b);
    if (sortType === 'high-low') return getFinal(b) - getFinal(a);
    return 0;
  });

  const totalPages = Math.ceil(sortedList.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = sortedList.slice(indexOfFirstItem, indexOfLastItem);

  const handleCardClick = (product, variant) => {
    const colorName = variant?.colorName || '';
    const firstStorage = variant?.storages ? Object.keys(variant.storages)[0] : '';
    const slug = createSlug(product.title, firstStorage, colorName);

    navigate(`/product/${slug}`, { 
      state: { product, selectedVariant: variant, selectedStorage: firstStorage } 
    });
  };

  if (loading) return <div className="flex justify-center items-center min-h-[400px] text-gray-500 font-[Montserrat,_sans-serif] mt-[166px]">Məhsullar yüklənir...</div>;
  if (error) return <div className="flex justify-center items-center min-h-[400px] text-[#ff003c] font-[Montserrat,_sans-serif] mt-[166px]">Xəta baş verdi: {error}</div>;

  return (
    <div className="max-w-[1450px] mx-auto px-4 mt-[166px] font-[Montserrat,_sans-serif] pb-16">
      
      {/* Mobil Filter və Sıralama */}
      <div className="flex lg:hidden gap-3 mb-6">
        <div className="relative flex-1">
          <button 
            onClick={() => { setIsSortOpen(!isSortOpen); setIsMobileFilterOpen(false); }}
            className="w-full bg-white h-[42px] max-w-[155px] rounded-[10px] flex items-center justify-center gap-3 text-[14px] text-[#323232]"
          >
            <span className="flex items-center gap-2">
              <FaExchangeAlt className="rotate-90 text-gray-500 text-sm" /> Çeşidləmə
            </span>
            <IoIosArrowDown className={`transition-transform ${isSortOpen ? 'rotate-180' : ''}`} />
          </button>

          {isSortOpen && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-[12px] shadow-lg z-30 overflow-hidden">
              <div onClick={() => { setSortType('low-high'); setIsSortOpen(false); }} className="px-4 py-3 text-[13px] text-gray-700 hover:bg-gray-50 cursor-pointer border-b border-gray-100">Ucuzdan bahaya</div>
              <div onClick={() => { setSortType('high-low'); setIsSortOpen(false); }} className="px-4 py-3 text-[13px] text-gray-700 hover:bg-gray-50 cursor-pointer">Bahadan ucuzə</div>
            </div>
          )}
        </div>

        <button 
          onClick={() => { setIsMobileFilterOpen(true); setIsSortOpen(false); }}
          className="flex-1 bg-[#3b3b3b] text-white h-[42px] max-w-[155px] rounded-[10px] flex items-center justify-center gap-3 text-[14px]"
        >
          <span className="flex items-center gap-2">
            <FaFilter className="text-sm" /> Filtrlər
          </span>
          {totalActiveFilters > 0 ? (
            <span className="bg-[#ff003c] text-white text-[12px] w-[22px] h-[22px] rounded-full flex items-center justify-center font-bold shrink-0">
              {totalActiveFilters}
            </span>
          ) : (
            <span className="w-[22px]" />
          )}
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 items-start">
        
      
        <div className={`
          fixed lg:relative inset-0 z-50 lg:z-auto bg-white 
          w-full lg:w-[280px] lg:border lg:border-gray-200 lg:rounded-[12px] 
          p-5 lg:sticky lg:top-[90px] lg:max-h-[calc(100vh-100px)] 
          overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] transition-all shadow-sm
          ${isMobileFilterOpen ? 'block' : 'hidden lg:block'}
        `}>
          <div className="flex lg:hidden justify-between items-center pb-4 mb-4 border-b border-gray-100">
            <span className="font-bold text-[18px] text-[#222]">Filtrlər</span>
            <button onClick={() => setIsMobileFilterOpen(false)} className="p-2 text-gray-500 hover:text-black">
              <IoMdClose className="text-2xl" />
            </button>
          </div>
          
         
          <div className="border-b border-gray-100 pb-3 mb-3">
            <div onClick={() => toggleSection('price')} className="flex justify-between items-center py-1 cursor-pointer select-none">
              <span className="font-semibold text-[15px] text-[#222]">Qiymət</span>
              {openSections.price ? <IoIosArrowUp className="text-gray-500 text-lg" /> : <IoIosArrowDown className="text-gray-500 text-lg" />}
            </div>
            {openSections.price && (
              <div className="pt-2">
                <div className="flex items-center gap-2 mb-3">
                  <div className="border border-gray-300 rounded-lg px-3 py-2 flex items-center w-1/2">
                    <input 
                      type="number" 
                      value={minPrice} 
                      onChange={(e) => setMinPrice(e.target.value)} 
                      className="w-full outline-none text-[13px] text-gray-700 bg-transparent [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" 
                    />
                    <span className="text-gray-400 text-xs ml-1">₼</span>
                  </div>
                  <span className="text-gray-400">-</span>
                  <div className="border border-gray-300 rounded-lg px-3 py-2 flex items-center w-1/2">
                    <input 
                      type="number" 
                      value={maxPrice} 
                      onChange={(e) => setMaxPrice(e.target.value)} 
                      className="w-full outline-none text-[13px] text-gray-700 bg-transparent [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" 
                    />
                    <span className="text-gray-400 text-xs ml-1">₼</span>
                  </div>
                </div>
                <button onClick={handleApplyFilter} className="w-full bg-[#ff003c] text-white font-medium py-2.5 rounded-lg text-[14px] hover:bg-[#e00035] transition-colors">
                  Tətbiq et
                </button>
              </div>
            )}
          </div>

          {Object.keys(filterCategories).map((categoryName, index) => {
            const isSectionOpen = openSections[categoryName] ?? false;
            const valuesList = filterCategories[categoryName];

            return (
              <div key={index} className="border-b border-gray-100 pb-3 mb-3 last:border-none last:pb-0 last:mb-0">
                <div onClick={() => toggleSection(categoryName)} className="flex justify-between items-center py-1 cursor-pointer select-none">
                  <span className="font-semibold text-[15px] text-[#222]">{categoryName}</span>
                  {isSectionOpen ? <IoIosArrowUp className="text-gray-500 text-lg" /> : <IoIosArrowDown className="text-gray-500 text-lg" />}
                </div>

                {isSectionOpen && (
                  <div className="space-y-2 pt-2 pb-1">
                    {valuesList.map((val, vIdx) => {
                      const isChecked = selectedFilters[categoryName]?.includes(val) || false;
                      return (
                        <label key={vIdx} className="flex items-center gap-3 cursor-pointer text-[13px] text-gray-700 select-none">
                          <input 
                            type="checkbox" 
                            checked={isChecked} 
                            onChange={() => handleCheckboxChange(categoryName, val)} 
                            className="w-4 h-4 accent-[#ff003c] rounded border-gray-300 cursor-pointer" 
                          />
                          <span>{val}</span>
                        </label>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Sağ Tərəf  */}
        <div className="flex-1 w-full flex flex-col justify-between">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-1.5">
            {currentProducts.length > 0 ? (
              currentProducts.map((product, i) => {
                const defaultVariant = product.variants ? product.variants[0] : null;
                const numericPrice = parsePrice(product.price);
                const numericDiscount = Number(product.discount) || 0;
                
                const discountAmount = Math.round(numericPrice * (numericDiscount / 100));
                const finalPrice = Math.trunc(numericPrice - discountAmount);

                const isHovered = hoveredIndex === i;
                
                const isInCart = basket?.some((item) => item.id === product.id);
                const isWish = isInWishlist ? isInWishlist(product.id) : false;
                const isCompare = isInCompare ? isInCompare(product.id) : false;

                const handleAddToCartClick = (e) => {
                  e.stopPropagation();
                  addToCart(product, defaultVariant);
                };

                const handleToggleWishlistClick = (e) => {
                  e.stopPropagation();
                  if (toggleWishlist) toggleWishlist(product);
                };

                const handleToggleCompareClick = (e) => {
                  e.stopPropagation();
                  if (toggleCompare) toggleCompare(product);
                };

                return (
                  <div 
                    key={product.id || i}
                    ref={(el) => (cardRefs.current[i] = el)}
                    onMouseEnter={() => handleMouseEnter(i)}
                    onMouseLeave={handleMouseLeave}
                    className={`product-card group/card bg-white p-3 sm:p-4 shadow-md cursor-pointer transition-all duration-300 relative flex flex-col justify-between ${
                      isHovered ? 'rounded-t-xl rounded-b-none shadow-2xl z-20' : 'rounded-xl'
                    }`}
                  >
                    <div>
                      {defaultVariant && defaultVariant.images && (
                        <div className='flex relative items-center justify-center pt-2'>
                          <img 
                            src={defaultVariant.images[0]} 
                            alt={product.title} 
                            className="w-full max-w-[160px] sm:max-w-[200px] h-44 sm:h-48 object-contain rounded"
                            onClick={() => handleCardClick(product, defaultVariant)}
                          />

                          {numericDiscount > 0 && (
                            <div className='bg-[#ff003c] text-white w-[38px] h-[38px] sm:w-[45px] sm:h-[45px] text-[10px] sm:text-[14px] absolute top-[0px] right-[2px] font-[700] font-[Montserrat,_sans-serif] flex justify-center items-center rounded-full shadow-sm z-10'>
                              <span>-{numericDiscount}%</span>
                            </div>
                          )}

                          {product.delivery && (
                            <span className='text-[#17a539] bg-[#edf8f0] absolute left-0 top-0 text-[10px] font-[500] px-2 py-0.5 whitespace-nowrap flex justify-center items-center gap-1 rounded-[5px]'>
                              <TbTruckDelivery className='text-black' /> 2 saat/0.0₼
                            </span>
                          )}

                          {product.video && (
                            <div 
                              onClick={(e) => { e.stopPropagation(); setSelectedVideo(product.video); setIsVideoModalOpen(true); }}
                              className='flex items-center bg-white gap-1 border border-[#ff003c] p-1 rounded-[4px] absolute left-0 bottom-2'
                            >
                              <p className='text-[#ff003c] bg-white w-[17px] h-[17px] rounded-full flex items-center justify-center border border-[#ff003c] text-[10px]'>
                                <TbPlayerPlayFilled />
                              </p>
                              <span className='text-[#ff003c] font-[500] text-[10px]'>Video</span>
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
                                isSelected 
                                  ? 'ring-1 ring-[#323232] ring-offset-1' 
                                  : 'border border-gray-300'
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

                      <h3 className="text-[#323232] mt-3 text-[12px] sm:text-[13px] font-[500] line-clamp-2 min-h-[36px] flex items-center">
                        {product.title}
                      </h3>

                      <div className="mt-1 h-[22px]">
                        {numericDiscount > 0 && (
                          <span className="bg-[#ff003c] text-white text-[10px] sm:text-[11px] font-[500] py-0.5 px-1.5 rounded-[4px] inline-block">
                            -{discountAmount}₼
                          </span>
                        )}
                      </div>

                      <div className="mt-1">
                        {numericDiscount > 0 && (
                          <span className="line-through text-[#777777] text-[12px] block">{product.price} ₼</span>
                        )}
                        <div className='flex justify-between items-center mt-1'>
                          <span className="text-[#ff003c] font-bold text-[15px] sm:text-[16px]">{finalPrice} ₼</span>
                          {product.month && <span className='text-[11px] sm:text-[12px] text-gray-600 font-[500]'>0% {product.month} ay</span>}
                        </div>
                      </div>

                      <hr className='text-[#f7f5f5] my-2'/>
                      <div className='flex items-center gap-1 text-[#323232] text-[12px] mb-2'>
                        <TbTruckDelivery className='text-gray-500'/> <span className='font-[500] text-[11px]'>0 ₼</span>
                      </div>
                    </div>

                  
                    <div className='lg:hidden mt-2'>
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
                          isCompare={isCompare}
                          onToggleCompare={handleToggleCompareClick}
                          isMobile={false}
                        />

                        <div className='mt-3 flex flex-col gap-1'>
                          {product.specs && (
                            <>
                              {product.specs.btu && (
                                <div className='flex justify-between items-center'>
                                  <p className='text-[#777777] text-[10px] font-[600]'>BTU gücü:</p>
                                  <p className='text-[#323232] font-[600] text-[10px]'>{product.specs.btu}</p>
                                </div>
                              )}
                              {product.specs.area && (
                                <div className='flex justify-between items-center'>
                                  <p className='text-[#777777] text-[10px] font-[600]'>Tövsiyə olunan sahə:</p>
                                  <p className='text-[#323232] font-[600] text-[10px]'>{product.specs.area} m²</p>
                                </div>
                              )}
                              {product.specs.inverter !== undefined && (
                                <div className='flex justify-between items-center'>
                                  <p className='text-[#777777] text-[10px] font-[600]'>İnverter:</p>
                                  <p className='text-[#323232] font-[600] text-[10px]'>{product.specs.inverter ? 'Var' : 'Yox'}</p>
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
              })
            ) : (
              <div className="col-span-full py-12 text-center text-gray-500 bg-white border border-gray-200 rounded-[12px]">
                Axtarışınıza uyğun məhsul tapılmadı.
              </div>
            )}
          </div>

          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-8">
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index + 1}
                  onClick={() => { setCurrentPage(index + 1); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className={`w-10 h-10 rounded-lg font-medium text-[14px] transition-colors ${
                    currentPage === index + 1 
                      ? 'bg-[#ff003c] text-white shadow-md' 
                      : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          )}
        </div>

      </div>

      <VideoModal videoUrl={selectedVideo} isOpen={isVideoModalOpen} onClose={() => setIsVideoModalOpen(false)} />
    </div>
  );
}

export default ClimateProducts;