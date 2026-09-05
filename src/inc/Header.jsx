import React, { useEffect, useState, useContext } from 'react';
import { Link, useLocation } from 'react-router';
import axios from 'axios';
import logo from '../assets/logo.svg';
import euronics from '../assets/euronics-header-logo.svg';
import { FaMagnifyingGlass as SearchIcon } from "react-icons/fa6";
import userIcon from '../assets/user-icon.svg';
import { MdKeyboardArrowDown, MdChevronRight } from "react-icons/md";
import { IoCloseOutline } from "react-icons/io5"; 
import squareUnfill from '../assets/squares-unfill.svg';
import square from '../assets/squares.svg';
import wishlistIcon from '../assets/wishlist.svg';
import compare from '../assets/compare.svg';
import basketIcon from '../assets/basket-icon.svg';
import CatalogMenu from '../Components/CatalogMenu';
import SearchModal from '../Components/SearchModal';
import MonthPay1 from "../assets/MonthPay1.webp";
import MonthPay2 from "../assets/MonthPay2.webp";
import MonthPay3 from "../assets/MonthPay3.webp";
import { BasketContextData } from '../Context/BasketContext';
import { WishlistContextData } from '../Context/WishlistContext';
import { CompareContextData } from '../Context/CompareContext'; 
import MobileCatalogMenu from '../Components/MobileCatalogMenu';
import Chat from '../Components/chat';

function Header() {
  const [isMobileCatalogOpen, setIsMobileCatalogOpen] = useState(false);

  const { compareList } = useContext(CompareContextData);
  const [opendrop, setOpendrop] = useState(false);
  const [inputSearch, setInputSearch] = useState(false);
  const [scroll, setScroll] = useState(false);
  
  const { basket } = useContext(BasketContextData);
  const { wishlist } = useContext(WishlistContextData);
  
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [productsData, setProductsData] = useState([]);

  const location = useLocation();

  useEffect(() => {
    handleCloseSearch();
    setIsCatalogOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const Scroll = () => {
      if (window.scrollY > 40) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    
    window.addEventListener('scroll', Scroll);
    return () => window.removeEventListener('scroll', Scroll);
  }, []);
const BaseUrl = "https://kontakt-home-data.vercel.app/"

  useEffect(() => {
    axios.get(`${BaseUrl}api/Products`)
      .then(res => setProductsData(res.data))
      .catch(err => console.error("Axios API xətası:", err));
  }, []);

  const handleCloseSearch = () => {
    setIsSearchOpen(false);
    setSearchQuery('');
  };

  return (
    <>
      {(isSearchOpen && searchQuery.trim()) && (
        <div 
          className="fixed inset-0 bg-black/20 z-40 transition-opacity duration-300"
          onClick={handleCloseSearch}
        />
      )}

      <header className='shadow-[0_0_9px_#f3f3f3] w-full fixed top-0 transition-all bg-white z-50'>
        <Chat/>
        <div className='bg-[#ff003c] text-white text-center py-0.5 lg:py-0 relative z-10 font-[Montserrat,_sans-serif] flex flex-nowrap justify-center'>
          <h2 className="text-[18px] lg:text-[24px] font-[700] whitespace-nowrap">-50%-dək endirimi 24 ayadək böl</h2>
        </div>
      
        <div className={`flex justify-between items-center transition-all duration-300 ease-in-out lg:mx-10 mx-3 ${scroll ? 'h-0 opacity-0 overflow-hidden pointer-events-none' : 'h-[60px] max-h-[60px] opacity-100'} `}>
          <div className='flex items-center gap-2 mr-4 lg:mr-8 shrink-0'>
            <Link to="/"> <img className='w-[120px] lg:w-[160px]' src={logo} alt="logo" /></Link>
            <img className='w-[25px] lg:w-[30px]' src={euronics} alt="euronics" />
          </div>

          <div className='flex items-center gap-3 lg:gap-8 xl:gap-12'>
            <ul className='items-center gap-4 xl:gap-6 hidden xl:flex shrink-0'>
              <li className='text-[#ff0000] font-[Montserrat,_sans-serif] hover:underline duration-300 whitespace-nowrap'><Link to="Kampaniyalar">Kampaniyalar</Link></li>
              <li className='font-[Montserrat,_sans-serif] hover:underline duration-300 whitespace-nowrap'><Link to="Mağazalar">Mağazalar</Link></li>
              <li className='font-[Montserrat,_sans-serif] hover:underline duration-300 whitespace-nowrap'><Link to="Korporativ satışlar">Korporativ satışlar</Link></li>
            </ul>

            <div className='flex items-center gap-3 lg:gap-5 shrink-0'>
              <h2 className='lg:text-[22px] md:text-[20px] font-[500] font-[Montserrat,_sans-serif]'><span className='text-[#ff0000]'>*</span>6060</h2>
              <button 
                onClick={() => setIsPaymentModalOpen(true)}
                className='hidden md:flex lg:flex text-[#17a539] border border-[#17a539] font-[Montserrat,_sans-serif] px-3 lg:px-4 py-1.5 rounded-[10px] text-[13px] lg:text-[14px] whitespace-nowrap transition-colors duration-300'>Aylıq Ödəniş </button> 
            </div>
            
            <img 
              className='xl:hidden cursor-pointer w-6 h-6' 
              src={userIcon} 
              alt="userIcon" 
              onClick={() => setIsMobileMenuOpen(true)}
            />
          </div>
        </div>
        <hr className='text-[#f3f3f3]'/>

       
        <div className='hidden md:flex justify-between lg:mx-10 mx-4 items-center shrink-0 h-[60px] gap-2 relative'>
          <div 
            onClick={() => {
              if (window.innerWidth < 1024) {
                setIsMobileCatalogOpen(true);
              } else {
                setIsCatalogOpen(!isCatalogOpen);
              }
            }} 
            className='flex items-center gap-1 cursor-pointer select-none shrink-0'
          >
            <img src={isCatalogOpen ? square : squareUnfill} alt="square" />
            <span className='text-[#4b5563] font-[Montserrat,_sans-serif] font-medium hover:text-[#ff0000] transition-colors'>Kataloq</span>
          </div>

          <div className='relative flex items-center w-full min-w-0 flex-1 max-w-[800px] justify-center mx-6 z-50'>
            <input 
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setIsSearchOpen(true);
              }}
              onFocus={() => {
                setInputSearch(true);
                setIsSearchOpen(true);
              }}
              onBlur={() => setInputSearch(false)}
              className='bg-[#f3f3f3] focus:bg-white focus:border-[#ff0000] w-full pl-3 border border-[#f3f3f3] hover:border-[#ff0000] duration-300 ease-in-out outline-none h-[42px] rounded-[10px]' 
              type="text" 
              placeholder='Axtarış' 
            />

            {(inputSearch || searchQuery.trim()) && (
              <div className='h-[42px] w-[40px] right-0 absolute bg-[#ff4d77] flex justify-center items-center rounded-[10px] cursor-pointer pointer-events-none'>
                <SearchIcon className='text-white text-[20px]' />
              </div>
            )}

            <SearchModal 
              isOpen={isSearchOpen} 
              onClose={handleCloseSearch} 
              products={productsData} 
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
          </div>

          <div className='flex gap-5 lg:gap-6 items-center shrink-0'>
            <Link to="Compare" className="relative flex items-center justify-center">
              <img className='shrink-0' src={compare} alt="compare" />
              {compareList && compareList.length > 0 && (
                <span className="absolute -top-1.5 -right-2 bg-[#ff003c] text-white text-[11px] font-[700] font-[Montserrat,_sans-serif] w-4 h-4 rounded-full flex items-center justify-center pointer-events-none">
                  {compareList.length}
                </span>
              )}
            </Link>
            <span className='bg-[#f3f3f3] h-[30px] w-[1.3px]'></span>
            <Link to="Seçilmişlər" className="relative flex items-center justify-center">
              <img className='shrink-0' src={wishlistIcon} alt="wishlist" />
              {wishlist && wishlist.length > 0 && (
                <span className="absolute -top-1.5 -right-2 bg-[#ff003c] text-white text-[11px] font-[700] font-[Montserrat,_sans-serif] w-4 h-4 rounded-full flex items-center justify-center pointer-events-none">
                  {wishlist.length}
                </span>
              )}
            </Link>
            <span className='bg-[#f3f3f3] h-[30px] w-[1.3px]'></span>
            <Link to="Səbət" className="relative flex items-center justify-center">
              <img className='shrink-0' src={basketIcon} alt="basket" />
              {basket && basket.length > 0 && (
                <span className="absolute -top-1.5 -right-2 bg-[#ff003c] text-white text-[11px] font-[700] font-[Montserrat,_sans-serif] w-4 h-4 rounded-full flex items-center justify-center pointer-events-none">
                  {basket.length}
                </span>
              )}
            </Link>
          </div>  

     
{isCatalogOpen && (
  <div className={`fixed inset-x-0 ${scroll ? 'top-[95px]' : 'top-[135px] lg:top-[155px]'} bottom-0 bg-white z-50  overflow-hidden flex flex-col`}>
    <div className="w-full h-full max-w-[1480px] mx-auto bg-white flex flex-col">
      <CatalogMenu />
    </div>
  </div>
)}
        </div>

        {/* MOBİL */}
        <div className="flex md:hidden items-center h-[54px] border-t border-b border-gray-100 bg-white">
          <div 
            onClick={() => setIsMobileCatalogOpen(true)}
            className="w-[54px] h-full flex items-center justify-center border-r border-gray-100 cursor-pointer shrink-0"
          >
            <img src={squareUnfill} alt="kataloq" className="w-5 h-5" />
          </div>

          <div 
            className="flex-1 flex items-center h-full px-3 gap-2.5 cursor-pointer relative"
            onClick={() => setIsSearchOpen(true)}
          >
            <SearchIcon className="text-gray-700 text-[18px] shrink-0" />
            <span className="text-gray-400 text-[14px] font-[Montserrat,_sans-serif] truncate">
              {searchQuery || "Axtarış..."}
            </span>

            <SearchModal 
              isOpen={isSearchOpen} 
              onClose={handleCloseSearch} 
              products={productsData} 
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
          </div>

          <Link 
            to="Səbət" 
            className="w-[54px] h-full flex items-center justify-center border-l border-gray-100 relative shrink-0"
          >
            <img src={basketIcon} alt="səbət" className="w-5 h-5" />
            {basket && basket.length > 0 && (
              <span className="absolute top-2 right-2 bg-[#ff003c] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {basket.length}
              </span>
            )}
          </Link>
        </div>
      </header>

    
      <MobileCatalogMenu 
        isOpen={isMobileCatalogOpen} 
        onClose={() => setIsMobileCatalogOpen(false)} 
      />

      {/* AYLIK ÖDƏNİŞ MODALI */}
      {isPaymentModalOpen && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/50 p-4" onClick={() => setIsPaymentModalOpen(false)}>
          <div className="bg-white rounded-2xl p-6 w-full max-w-[550px] shadow-2xl relative" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-[#323232] font-medium text-[16px]">Aylıq Ödəniş</h3>
              <button onClick={() => setIsPaymentModalOpen(false)} className="text-gray-400 hover:text-gray-600">
                <IoCloseOutline className="text-2xl" />
              </button>
            </div>
            <div className="grid grid-cols-3 gap-3 pb-5">
              <div className="bg-[#f8f9fa] rounded-xl p-4 flex justify-center items-center h-[70px]">
                <a href="https://www.million.az/services/ecommerce/KontaktHome" target='_blank' rel="noreferrer"><img src={MonthPay1} alt="MonthPay1" /></a>
              </div>
              <div className="bg-[#f8f9fa] rounded-xl p-4 flex justify-center items-center h-[70px]">
                <a href="https://portmanat.az/project/kontaktHome" target='_blank' rel="noreferrer"><img src={MonthPay2} alt="MonthPay2" /></a>
              </div>
              <div className="bg-[#f8f9fa] rounded-xl p-4 flex justify-center items-center h-[70px]">
                <a href="https://hesab.az/unregistered/#/direct-pay/store/kontakthome/parameters?portalPay=kontakt&lang=az" target='_blank' rel="noreferrer"><img src={MonthPay3} alt="MonthPay3" /></a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MOBİL MENUBAR */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 w-screen h-screen bg-[#f8f9fa] z-[9999] p-5 flex flex-col justify-between overflow-y-auto font-[Montserrat,_sans-serif]">
          <div>
            <div className="flex justify-between items-center pb-4 mb-4 border-b border-gray-200">
              <img className='w-[130px]' src={logo} alt="logo" />
              <button onClick={() => setIsMobileMenuOpen(false)} className="text-gray-700 text-3xl">
                <IoCloseOutline />
              </button>
            </div>

            <div className="bg-white rounded-2xl p-2 mb-4 shadow-sm">
              <Link 
                to="Compare" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-between p-3.5 border-b border-gray-100 last:border-0"
              >
                <div className="flex items-center gap-3">
                  <img src={compare} alt="Müqayisə" className="w-5 h-5" />
                  <span className="text-[16px] font-medium text-gray-800">Müqayisə</span>
                  {compareList && compareList.length > 0 && (
                    <span className="bg-pink-100 text-[#ff003c] text-[12px] font-bold px-2 py-0.5 rounded-full">
                      {compareList.length}
                    </span>
                  )}
                </div>
                <MdChevronRight className="text-gray-400 text-2xl" />
              </Link>

              <Link 
                to="Seçilmişlər" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-between p-3.5"
              >
                <div className="flex items-center gap-3">
                  <img src={wishlistIcon} alt="Seçilmişlər" className="w-5 h-5" />
                  <span className="text-[16px] font-medium text-gray-800">Seçilmişlər</span>
                  {wishlist && wishlist.length > 0 && (
                    <span className="bg-pink-100 text-[#ff003c] text-[12px] font-bold px-2 py-0.5 rounded-full">
                      {wishlist.length}
                    </span>
                  )}
                </div>
                <MdChevronRight className="text-gray-400 text-2xl" />
              </Link>
            </div>

            <div className="bg-white rounded-2xl p-2 mb-6 shadow-sm">
              <Link 
                to="Kampaniyalar" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-between p-3.5 border-b border-gray-100"
              >
                <span className="text-[16px] font-semibold text-[#ff0000]">Kampaniyalar</span>
                <MdChevronRight className="text-gray-400 text-2xl" />
              </Link>

              <Link 
                to="Mağazalar" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-between p-3.5 border-b border-gray-100"
              >
                <span className="text-[16px] font-medium text-gray-800">Mağazalar</span>
                <MdChevronRight className="text-gray-400 text-2xl" />
              </Link>

              <Link 
                to="Korporativ satışlar" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-between p-3.5"
              >
                <span className="text-[16px] font-medium text-gray-800">Korporativ satışlar</span>
                <MdChevronRight className="text-gray-400 text-2xl" />
              </Link>
            </div>

            <button 
              onClick={() => {
                setIsMobileMenuOpen(false);
                setIsPaymentModalOpen(true);
              }}
              className="w-full bg-white border border-[#17a539] text-[#17a539] font-medium py-3.5 rounded-xl flex items-center justify-center gap-2 text-[16px] shadow-sm active:bg-gray-50 transition-colors"
            >
              Aylıq Ödəniş
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;