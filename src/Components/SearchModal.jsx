import React from 'react';
import { useNavigate } from 'react-router';
import { IoCloseOutline } from "react-icons/io5";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { createSlug } from '../Services/Slugify';

function SearchModal({ isOpen, onClose, products, searchQuery, setSearchQuery }) {
  const navigate = useNavigate();

  if (!isOpen) return null;

 
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  if (!isMobile && !searchQuery.trim()) {
    return null;
  }

  const filteredProducts = products.filter(product => {
    if (!product.title) return false;
    const titleLower = product.title.trim().toLowerCase();
    const queryLower = searchQuery.trim().toLowerCase();

    if (!queryLower) return true;

    return titleLower.startsWith(queryLower);
  });

  const getProductImage = (product) => {
    if (product.variants && product.variants.length > 0) {
      const activeVariant = product.variants.find(v => v.images && v.images.length > 0);
      if (activeVariant && activeVariant.images[0]) {
        return activeVariant.images[0];
      }
    }
    const rawImg = product.image || product.img || product.thumbnail || (Array.isArray(product.images) && product.images[0]);
    if (rawImg) {
      if (rawImg.startsWith('http://') || rawImg.startsWith('https://')) return rawImg;
      return `http://localhost:3000${rawImg.startsWith('/') ? '' : '/'}${rawImg}`;
    }
    return 'https://via.placeholder.com/150';
  };

  const handleClose = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    if (setSearchQuery) setSearchQuery('');
    if (onClose) onClose();
  };

  const handleCardClick = (product) => {
    const defaultVar = product.variants ? product.variants[0] : null;
    const firstStorage = defaultVar?.storages ? Object.keys(defaultVar.storages)[0] : '';
    const slug = createSlug(product.title, firstStorage, defaultVar?.colorName);

    if (setSearchQuery) setSearchQuery('');
    if (onClose) onClose();

    navigate(`/product/${slug}`, {
      state: {
        product,
        selectedVariant: defaultVar,
        selectedStorage: firstStorage
      }
    });
  };

  return (
    <div className="fixed md:absolute inset-0 md:inset-auto md:top-full left-0 right-0 w-screen md:w-full h-screen md:h-auto bg-white shadow-2xl border-none md:border border-gray-100 z-[9999] overflow-y-auto p-4 md:mt-2 md:rounded-2xl md:max-h-[450px]">
      
      {/* MOBİL YUXARI HİSSƏ */}
      <div className="flex md:hidden items-center gap-3 pb-3 mb-3 border-b border-gray-100 relative z-50">
        <button 
          type="button"
          onClick={handleClose}
          className="text-gray-700 hover:text-black shrink-0 p-2 -ml-2 cursor-pointer active:scale-95 transition-transform"
        >
          <IoCloseOutline className="text-3xl pointer-events-none" />
        </button>

        <div className="flex-1 flex items-center relative border border-[#ff4d77] rounded-xl overflow-hidden h-[42px]">
          <input 
            type="text" 
            autoFocus
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Axtarış..."
            className="w-full h-full pl-3 pr-12 text-[14px] outline-none bg-white text-gray-800 font-[Montserrat,_sans-serif]"
          />
          <div className="absolute right-0 top-0 bottom-0 w-[42px] bg-[#ff4d77] flex items-center justify-center rounded-r-xl cursor-pointer">
            <FaMagnifyingGlass className="text-white text-[16px]" />
          </div>
        </div>
      </div>

      {searchQuery.trim() ? (
        filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pb-16 md:pb-0">
            {filteredProducts.map((product) => (
              <div 
                key={product.id || product._id} 
                className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-xl transition-colors cursor-pointer border border-gray-100 w-full bg-white"
                onClick={() => handleCardClick(product)}
              >
                <img 
                  src={getProductImage(product)} 
                  alt={product.title} 
                  className="w-16 h-16 object-contain shrink-0 bg-white p-1 rounded-lg border border-gray-100"
                  onError={(e) => {
                    e.target.onerror = null; 
                    e.target.src = 'https://via.placeholder.com/150';
                  }}
                />
                <div className="flex flex-col flex-1 min-w-0">
                  <h4 className="text-[14px] font-medium text-gray-800 truncate font-[Montserrat,_sans-serif]">
                    {product.title}
                  </h4>
                  <div className="flex items-center gap-2 mt-1">
                    <p className="text-[#ff003c] font-bold text-[15px] font-[Montserrat,_sans-serif]">
                      {product.price} ₼
                    </p>
                    {product.discount && (
                      <span className="bg-[#ff003c] text-[#fff] text-[11px] font-bold px-1.5 py-0.5 rounded">
                        -{product.discount}%
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-8 text-center text-gray-500 font-[Montserrat,_sans-serif] text-[14px]">
            Axtarışa uyğun məhsul tapılmadı
          </div>
        )
      ) : (
        <div className="p-6 text-center text-gray-400 font-[Montserrat,_sans-serif] text-[13px] md:hidden">
          Məhsul adı daxil edin...
        </div>
      )}
    </div>
  );
}

export default SearchModal;