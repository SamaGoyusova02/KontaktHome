import React, { useState } from 'react';
import { FiInfo } from 'react-icons/fi';

function DetailProperties({ product, selectedVariant, selectedStorage }) {
  const [showAll, setShowAll] = useState(false);

  if (!product) return null;

  const currentProduct = Array.isArray(product) ? product[0] : product;
  let rawList = currentProduct?.propertiesList || [];

  if (rawList.length === 0 && currentProduct?.properties && typeof currentProduct.properties === 'object') {
    rawList = Object.entries(currentProduct.properties).map(([key, val]) => ({
      key: key,
      label: key,
      value: val,
      hasInfo: false
    }));
  }

  
  const processedProperties = rawList.map((item) => {
    let finalValue = item.value;

    if (item.key === 'ROM') {
      finalValue = selectedStorage || item.value;
    } else if (item.key === 'color') {
      finalValue = selectedVariant?.colorName || item.value;
    }

    return {
      label: item.label,
      value: finalValue,
      hasInfo: item.hasInfo || false
    };
  });

  const validPropertiesList = processedProperties.filter(
    (item) => item.value !== undefined && item.value !== null && item.value !== ''
  );

  const displayedProperties = showAll ? validPropertiesList : validPropertiesList.slice(0, 16);
  const halfLength = Math.ceil(displayedProperties.length / 2);
  const leftColumn = displayedProperties.slice(0, halfLength);
  const rightColumn = displayedProperties.slice(halfLength);

  
  const rawDescription = currentProduct?.description || [];
  
  const currentColor = selectedVariant?.colorName || '';
  const currentStorage = selectedStorage || '';
  const productTitle = currentProduct?.title?.trim() || '';

  
  const allColorNames = currentProduct?.variants
    ? currentProduct.variants.map((v) => v.colorName).filter(Boolean)
    : [];

  const processedDescription = rawDescription.map((item) => {
    let title = item.title || '';
    let text = item.text || '';
    let image = item.image || item.img || null; 

   
    if (title.includes('Məhsulun təsviri')) {
      title = `Məhsulun təsviri - ${productTitle} ${currentStorage} ${currentColor}`.trim();
    }


    if (currentStorage) {
      const storageRegex = /\b\d+\s*GB\b/gi;
      title = title.replace(storageRegex, currentStorage);
      text = text.replace(storageRegex, currentStorage);
    }

    
    if (currentColor && allColorNames.length > 0) {
      const escapedColors = allColorNames.map((c) => c.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'));
      const dynamicColorRegex = new RegExp(`\\b(${escapedColors.join('|')})\\b`, 'gi');
      
      title = title.replace(dynamicColorRegex, currentColor);
      text = text.replace(dynamicColorRegex, currentColor);
    }

    return { title, text, image }; 
  });

  return (
    <div className="bg-white p-7 rounded-[12px] font-[Montserrat,_sans-serif] max-w-[1480px] mx-5 flex flex-col gap-8">
      
      {/* 1. XÜSUSİYYƏTLƏR BÖLMƏSİ */}
      {validPropertiesList.length > 0 && (
        <div>
          <div className="flex items-center justify-between mb-6 flex-wrap">
            <h2 className="text-[20px] font-bold text-[#323232] font-[Montserrat,_sans-serif]">Xüsusiyyətlər</h2>
            <a className="text-[14px] font-[500] font-[Montserrat,_sans-serif] text-[#777777] transition-colors cursor-pointer">
              Uyğunsuzluq aşkar etmisən? <span className="text-[#005bff]">Bizə yaz</span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-1">
            {/* Sol Sütun */}
            <div className="flex flex-col">
              {leftColumn.map((item, index) => (
                <div key={index} className="flex items-center justify-between py-2.5 border-b border-gray-100 text-[13px]">
                  <span className="text-[#777777] flex items-center gap-1 font-[Montserrat,_sans-serif] text-[14px] font-[500]">
                    {item.label}
                    {item.hasInfo && <FiInfo className="text-[#524f4f] text-[14px]" />}
                  </span>
                  <span className="font-medium text-[#111] text-right font-[Montserrat,_sans-serif]">{String(item.value)}</span>
                </div>
              ))}
            </div>

            {/* Sağ Sütun */}
            <div className="flex flex-col">
              {rightColumn.map((item, index) => (
                <div key={index} className="flex items-center justify-between py-2.5 border-b border-gray-100 text-[13px]">
                  <span className="text-[#777777] flex items-center gap-1 font-[Montserrat,_sans-serif] text-[14px] font-[500]">
                    {item.label}
                    {item.hasInfo && <FiInfo className="text-[#524f4f] text-[14px]" />}
                  </span>
                  <span className="font-medium text-[#111] text-right font-[Montserrat,_sans-serif]">{String(item.value)}</span>
                </div>
              ))}
            </div>
          </div>

          {validPropertiesList.length > 16 && (
            <div className="mt-6">
              <button
                onClick={() => setShowAll(!showAll)}
                className="w-full py-3 bg-[#f2f2f5] hover:bg-[#e6e6eb] text-[#333] font-medium text-[14px] rounded-[10px] transition-colors cursor-pointer text-center"
              >
                {showAll ? "Daha az göstər ..." : "Hamısını göstər ..."}
              </button>
            </div>
          )}
        </div>
      )}

  
      {validPropertiesList.length > 0 && processedDescription.length > 0 && (
        <div className="-mx-7 border-t border-[#f3f3f3]" />
      )}

      {/* 2. MƏHSULUN TƏSVİRİ BÖLMƏSİ */}
      {processedDescription.length > 0 && (
        <div className="flex flex-col gap-6">
          {processedDescription.map((item, index) => (
            <div key={index} className="flex flex-col gap-2">
              {item.title && (
                <h3 className="text-[18px] font-[Montserrat,_sans-serif] font-[500] text-[#111827]">
                  {item.title}
                </h3>
              )}
           
              {item.text && (
                <p className="text-[14px] text-[#323232] font-[Montserrat,_sans-serif] leading-relaxed">
                  {item.text}
                </p>
              )}
              
              {item.image && (
                <div className="flex justify-center items-center my-3 max-w-[550px] mx-auto">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-auto max-h-[380px] object-contain rounded-lg"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default DetailProperties;