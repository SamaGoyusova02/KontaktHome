import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { IoCloseOutline } from 'react-icons/io5';
import { FiInfo, FiChevronDown, FiChevronUp, FiCheck } from 'react-icons/fi';

import passport1 from "../assets/passport1.svg";
import passport2 from "../assets/passport2.svg";
import passport3 from "../assets/passport3.svg";
import passport4 from "../assets/passport4.svg";

import fin1 from "../assets/fin1.svg";
import fin2 from "../assets/fin2.svg";
import fin3 from "../assets/fin3.svg";
import fin4 from "../assets/fin4.svg";

const OneClick = ({ isOpen, onClose, price = 0 }) => {
  const navigate = useNavigate();

  const [paymentType, setPaymentType] = useState('installment');
  const [phoneDigits, setPhoneDigits] = useState('');
  const [phoneError, setPhoneError] = useState(false);
  const [promoCode, setPromoCode] = useState('');
  const [idSeries, setIdSeries] = useState('AZE');
  const [idNumber, setIdNumber] = useState('');
  const [idNumberError, setIdNumberError] = useState(false);
  const [finCode, setFinCode] = useState('');
  const [finCodeError, setFinCodeError] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
 
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [modalType, setModalType] = useState('passport'); 
  
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const dropdownRef = useRef(null);
  const allSeries = ['AZE', 'AA', 'MYI', 'DYI'];

  const basePrice = typeof price === 'number' ? price : Number(String(price).replace(/\./g, '').replace(',', '.')) || 0;

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handlePhoneChange = (e) => {
    let rawDigits = e.target.value.replace(/\D/g, '');
    if (rawDigits.startsWith('994')) rawDigits = rawDigits.slice(3);
    const trimmed = rawDigits.slice(0, 9);
    setPhoneDigits(trimmed);
    if (trimmed.length > 0) setPhoneError(false);
  };

  const getFormattedPhone = () => {
    if (!phoneDigits) return '+994 ';
    const d = phoneDigits;
    let formatted = '+994 ';
    if (d.length <= 2) formatted += `(${d}`;
    else if (d.length <= 5) formatted += `(${d.slice(0, 2)}) ${d.slice(2)}`;
    else if (d.length <= 7) formatted += `(${d.slice(0, 2)}) ${d.slice(2, 5)}-${d.slice(5)}`;
    else formatted += `(${d.slice(0, 2)}) ${d.slice(2, 5)}-${d.slice(5, 7)}-${d.slice(7, 9)}`;
    return formatted;
  };

  const handleIdNumberChange = (e) => {
    const cleanDigits = e.target.value.replace(/\D/g, '');
    const maxLen = idSeries === 'AZE' ? 9 : 7;
    if (cleanDigits.length <= maxLen) setIdNumber(cleanDigits);
    if (cleanDigits.length > 0) setIdNumberError(false);
  };

  const handleSelectSeries = (series) => {
    setIdSeries(series);
    setIsDropdownOpen(false);
    const maxLen = series === 'AZE' ? 9 : 7;
    if (idNumber.length > maxLen) setIdNumber(idNumber.slice(0, maxLen));
  };

  const handleFinCodeChange = (e) => {
    const cleanAlphaNumeric = e.target.value.replace(/[^a-zA-Z0-9]/g, '');
    if (cleanAlphaNumeric.length <= 7) setFinCode(cleanAlphaNumeric.toUpperCase());
    if (cleanAlphaNumeric.length > 0) setFinCodeError(false);
  };

  const handlePromoCodeChange = (e) => {
    setPromoCode(e.target.value.replace(/[^a-zA-Z0-9]/g, '').toUpperCase());
  };

  const handleOpenInfoModal = (type) => {
    setModalType(type);
    setIsImageModalOpen(true);
  };

  const handleSubmitOrder = (e) => {
    e.preventDefault();
    let hasError = false;
    
    if (!phoneDigits || phoneDigits.length < 9) {
      setPhoneError(true);
      hasError = true;
    }

    if (paymentType === 'installment') {
      const requiredIdLen = idSeries === 'AZE' ? 9 : 7;
      if (!idNumber || idNumber.length < requiredIdLen) {
        setIdNumberError(true);
        hasError = true;
      }
      if (!finCode || finCode.length < 7) {
        setFinCodeError(true);
        hasError = true;
      }
    }

    if (hasError) return;
    setIsSuccessModalOpen(true);
  };

  const handleCloseAll = () => {
    setIsSuccessModalOpen(false);
    setPhoneDigits('');
    setPhoneError(false);
    setIdNumber('');
    setIdNumberError(false);
    setFinCode('');
    setFinCodeError(false);
    setPromoCode('');
    onClose();
    navigate('/');
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 font-[Montserrat,_sans-serif]">
        <div className="relative w-full max-w-[400px] bg-white rounded-[10px] shadow-xl overflow-hidden text-[#323232] max-h-[90vh] flex flex-col">
          
          <div className="flex items-center justify-between p-3 border-b border-[#f0f0f0]">
            <h2 className="text-[14px] font-[600] text-[#323232]">Bir kliklə al</h2>
            <button 
              type="button"
              onClick={onClose} 
              className="text-[#323232] transition-colors p-1 rounded-lg cursor-pointer"
            >
              <IoCloseOutline size={24} />
            </button>
          </div>

          <div className="p-5 space-y-3  flex-1 ">
            <div className="flex items-center gap-6 text-[14px] ">
              <label className="flex items-center gap-2 cursor-pointer">
                <input 
                  type="radio" 
                  name="paymentType" 
                  checked={paymentType === 'cash'} 
                  onChange={() => {
                    setPaymentType('cash');
                    setIdNumberError(false);
                    setFinCodeError(false);
                  }}
                  className="w-4 h-4 accent-[#17a539] cursor-pointer"
                />
                <span className='font-[550] font-[Montserrat,_sans-serif] text-[13px] '>Nağd al</span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input 
                  type="radio" 
                  name="paymentType" 
                  checked={paymentType === 'installment'} 
                  onChange={() => setPaymentType('installment')}
                  className="w-4 h-4 accent-[#17a539] cursor-pointer"
                />
                <span className='font-[550] font-[Montserrat,_sans-serif] text-[13px] '>Hissə-hissə al</span>
              </label>
            </div>

            <div>
              <label className="block text-[13px] text-[#555] font-medium mb-1.5">
                <span className="text-red-500 mr-0.5">*</span> Nömrə
              </label>
              <input 
                type="text" 
                value={getFormattedPhone()}
                onChange={handlePhoneChange}
                className={`w-full border rounded-[14px] px-4 py-3 text-[15px] outline-none font-medium text-[#323232] transition-all ${
                  phoneError ? 'border-red-500 bg-red-50/20' : 'border-[#eaeaea] focus:border-black'
                }`}
              />
              {phoneError && (
                <p className="text-red-500 text-[12px] mt-1.5 font-medium pl-1">
                  Zəhmət olmasa nömrənizi daxil edin.
                </p>
              )}
            </div>

            {paymentType === 'installment' && (
              <>
                <div className="bg-[#e6f5fa] text-[#323232] font-[500] p-3.5 rounded-[12px] text-[12px] leading-relaxed">
                  Hissəli ödənişi tez rəsmiləşdirmək üçün FİN və şəxsiyyət vəsiqəsinin seriyasını daxil et.
                </div>

                <div>
                  <label className="block text-[13px] text-[#555] font-medium mb-1.5">
                    ŞV-nin seriyası və nömrəsi
                  </label>
                  <div className={`flex border rounded-[14px] bg-white relative ${
                    idNumberError ? 'border-red-500 bg-red-50/20' : 'border-[#eaeaea] focus-within:border-black'
                  }`}>
                    <div className="relative border-r border-[#eaeaea]" ref={dropdownRef}>
                      <button
                        type="button"
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="flex items-center gap-2 px-3.5 py-3 text-[14px]  text-[#323232] h-full cursor-pointer select-none"
                      >
                        <span>{idSeries}</span>
                        {isDropdownOpen ? <FiChevronUp size={14} /> : <FiChevronDown size={14} />}
                      </button>

                      {isDropdownOpen && (
                        <div className="absolute top-full left-0 mt-1 w-[80px] bg-white border border-[#eaeaea] rounded-[12px] shadow-xl z-30 overflow-hidden py-1">
                          {allSeries
                            .filter((item) => item !== idSeries)
                            .map((opt) => (
                              <div
                                key={opt}
                                onClick={() => handleSelectSeries(opt)}
                                className="px-3.5 py-2 text-[13px] hover:bg-gray-100 cursor-pointer font-medium text-[#323232] border-b border-[#eaeaea] last:border-none"
                              >
                                {opt}
                              </div>
                            ))}
                        </div>
                      )}
                    </div>

                    <div className="flex-1 flex items-center justify-between pr-3.5">
                      <input 
                        type="text" 
                        placeholder="Daxil et"
                        value={idNumber}
                        onChange={handleIdNumberChange}
                        maxLength={idSeries === 'AZE' ? 9 : 7}
                        className="w-full px-3.5 py-3 text-[14px] outline-none bg-transparent"
                      />
                      <button 
                        type="button" 
                        onClick={() => handleOpenInfoModal('passport')}
                        className="text-gray-400 hover:text-black shrink-0 transition-colors cursor-pointer p-1"
                      >
                        <FiInfo size={18} />
                      </button>
                    </div>
                  </div>
                  {idNumberError && (
                    <p className="text-red-500 text-[12px] mt-1.5 font-medium pl-1">
                      Zəhmət olmasa şəxsiyyət vəsiqəsinin seriya nömrəsini daxil edin.
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-[13px] text-[#555] font-medium mb-1.5">
                    FİN kod
                  </label>
                  <div className={`flex items-center justify-between border rounded-[14px] px-3.5 bg-white ${
                    finCodeError ? 'border-red-500 bg-red-50/20' : 'border-[#eaeaea] focus-within:border-black'
                  }`}>
                    <input 
                      type="text" 
                      placeholder="Fin kodu daxil et"
                      value={finCode}
                      onChange={handleFinCodeChange}
                      maxLength={7}
                      className="w-full py-3 text-[14px] outline-none  bg-transparent"
                    />
                    <button 
                      type="button" 
                      onClick={() => handleOpenInfoModal('fin')}
                      className="text-gray-400 hover:text-black shrink-0 transition-colors cursor-pointer p-1 ml-2"
                    >
                      <FiInfo size={18} />
                    </button>
                  </div>
                  {finCodeError && (
                    <p className="text-red-500 text-[12px] mt-1.5 font-medium pl-1">
                      Zəhmət olmasa FİN kodu daxil edin.
                    </p>
                  )}
                </div>
              </>
            )}

            <div>
              <label className="block text-[13px] text-[#555] font-medium mb-1.5">
                Promokod
              </label>
              <div className="flex border border-[#eaeaea] rounded-[14px] overflow-hidden focus-within:border-black transition-all">
                <input 
                  type="text" 
                  placeholder="Kodu daxil et"
                  value={promoCode}
                  onChange={handlePromoCodeChange}
                  className="w-full px-3.5 py-2.5 text-[14px] outline-none"
                />
                <button 
                  type="button" 
                  className="border-l border-[#eaeaea] px-4 text-[#17a539]  text-[13px] transition-colors shrink-0 cursor-pointer"
                >
                  Tətbiq et
                </button>
              </div>
            </div>

          </div>

          <div className="p-5 border-t border-[#eaeaea] bg-white space-y-2.5">
            <div className="flex items-center justify-between text-[16px]">
              <span className="font-[600] text-[#323232]">Yekun məbləğ:</span>
              <span className="font-[600] text-[#323232]">{basePrice} ₼</span>
            </div>

            <button 
              type="button" 
              onClick={handleSubmitOrder}
              className="w-full border-2 border-[#eaeaea] font-[500] text-[#323232]  py-3 rounded-[12px] transition-all duration-200 text-[15px] cursor-pointer  mt-2"
            >
              Bir kliklə al
            </button>
          </div>

        </div>
      </div>

      {isImageModalOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 p-4 font-[Montserrat,_sans-serif]">
          <div className="relative w-full max-w-[650px] bg-white rounded-2xl shadow-2xl overflow-hidden text-[#323232] max-h-[90vh] flex flex-col">
            <div className="flex items-center justify-between p-4 sm:p-5 border-b border-[#f0f0f0]">
              <h3 className="text-[16px] sm:text-[17px] font-bold text-[#111]">
                {modalType === 'passport' 
                  ? 'Şəxsiyyət vəsiqəsinin seriya nömrəsi' 
                  : 'FİN kod nədir və harada yerləşir?'}
              </h3>
              <button 
                type="button"
                onClick={() => setIsImageModalOpen(false)} 
                className="text-gray-400 hover:text-black transition-colors p-1 rounded-lg cursor-pointer"
              >
                <IoCloseOutline size={24} />
              </button>
            </div>

            <div className="p-2 sm:p-6 overflow-y-auto no-scrollbar">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {modalType === 'passport' ? (
                  <>
                    <div className="border border-gray-100 rounded-xl p-2 flex items-center justify-center bg-white shadow-sm">
                      <img src={passport1} alt="Passport 1" className="w-full h-auto object-contain rounded-lg" />
                    </div>
                    <div className="border border-gray-100 rounded-xl p-2 flex items-center justify-center bg-white shadow-sm">
                      <img src={passport2} alt="Passport 2" className="w-full h-auto object-contain rounded-lg" />
                    </div>
                    <div className="border border-gray-100 rounded-xl p-2 flex items-center justify-center bg-white shadow-sm">
                      <img src={passport3} alt="Passport 3" className="w-full h-auto object-contain rounded-lg" />
                    </div>
                    <div className="border border-gray-100 rounded-xl p-2 flex items-center justify-center bg-white shadow-sm">
                      <img src={passport4} alt="Passport 4" className="w-full h-auto object-contain rounded-lg" />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="border border-gray-100 rounded-xl p-2 flex items-center justify-center bg-white shadow-sm">
                      <img src={fin1} alt="FIN 1" className="w-full h-auto object-contain rounded-lg" />
                    </div>
                    <div className="border border-gray-100 rounded-xl p-2 flex items-center justify-center bg-white shadow-sm">
                      <img src={fin2} alt="FIN 2" className="w-full h-auto object-contain rounded-lg" />
                    </div>
                    <div className="border border-gray-100 rounded-xl p-2 flex items-center justify-center bg-white shadow-sm">
                      <img src={fin3} alt="FIN 3" className="w-full h-auto object-contain rounded-lg" />
                    </div>
                    <div className="border border-gray-100 rounded-xl p-2 flex items-center justify-center bg-white shadow-sm">
                      <img src={fin4} alt="FIN 4" className="w-full h-auto object-contain rounded-lg" />
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {isSuccessModalOpen && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/60 p-4 font-[Montserrat,_sans-serif]">
          <div className="relative w-full max-w-[420px] bg-white rounded-2xl shadow-2xl p-6 sm:p-8 text-center text-[#323232]">
            <button 
              type="button"
              onClick={handleCloseAll}
              className="absolute top-4 right-4 text-gray-500 hover:text-black transition-colors cursor-pointer p-1"
            >
              <IoCloseOutline size={24} />
            </button>

            <div className="flex items-center justify-center gap-2 mb-3 mt-2">
              <FiCheck className="text-[#17a539] stroke-[3]" size={30} />
              <h2 className="text-[22px] sm:text-[20px] font-bold text-[#222]">
                Təşəkkür edirik!
              </h2>
            </div>

            <p className="text-[14px] sm:text-[15px] text-[#555] font-normal leading-relaxed mb-6 px-2">
              Sorğun uğurla tamamlandı. Səninlə qısa zamanda əlaqə saxlanılacaq.
            </p>

            <button
              type="button"
              onClick={handleCloseAll}
              className="w-full border border-[#323232] text-[#323232]  py-3 px-6 rounded-[14px]  transition-all duration-200 text-[14px] cursor-pointer"
            >
              Əsas səhifəyə qayıt
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default OneClick;