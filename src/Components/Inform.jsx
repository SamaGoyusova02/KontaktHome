import React, { useState } from 'react';
import { IoCloseOutline } from 'react-icons/io5';
import { FiInfo, FiCheck } from 'react-icons/fi';

function Inform({ isOpen, onClose }) {
  const [email, setEmail] = useState('');
  const [touched, setTouched] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  if (!isOpen) return null;

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const isValidEmail = emailRegex.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched(true);

    if (!isValidEmail) return;


    console.log("Göndərilən email:", email);
    setIsSuccessModalOpen(true);
  };

  const handleCloseAll = () => {
    setEmail('');
    setTouched(false);
    setIsSuccessModalOpen(false);
    onClose();
  };

  return (
    <>
  
      {!isSuccessModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 transition-opacity"
          onClick={handleCloseAll}
        >
          <div 
            className="bg-white rounded-[10px] w-full max-w-[420px] p-4 relative shadow-xl font-[Montserrat,_sans-serif]"
            onClick={(e) => e.stopPropagation()}
          >
           
            <div className="flex items-center justify-between pb-2 border-b border-gray-100">
              <h3 className="text-[14px] font-semibold text-[#111]">
                Mövcud olanda bildirək
              </h3>
              <button 
                type="button"
                onClick={handleCloseAll}
                className="text-gray-500 hover:text-black transition-colors p-1 rounded-lg cursor-pointer"
              >
                <IoCloseOutline size={26} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="pt-3">
              <label className="block text-[13px] font-medium text-[#323232] mb-2">
                <span className="text-[#ff003c] mr-1">*</span>
                E-poçt ünvanını daxil et:
              </label>

              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (!touched) setTouched(true);
                  }}
                  placeholder="nümunə@gmail.com"
                  className={`w-full h-[48px] px-4 pr-10 rounded-xl border text-[14px] outline-none transition-all ${
                    touched && !isValidEmail && email.length > 0
                      ? 'border-[#ff003c] focus:border-[#ff003c]' 
                      : 'border-gray-300 focus:border-gray-400'
                  }`}
                />
                <FiInfo 
                  size={20} 
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" 
                />
              </div>

          
              {touched && !isValidEmail && (
                <p className="text-[#ff003c] text-[12px] mt-2">
                  {email.length === 0 
                    ? 'Bu xananı doldurmaq vacibdir' 
                    : 'Düzgün e-poçt ünvanı daxil edin'}
                </p>
              )}

           
              <div className="pt-6 border-t border-gray-100 mt-6">
                <button
                  type="submit"
                  disabled={!isValidEmail}
                  className={`w-full h-[50px] font-medium rounded-xl transition-all text-[15px] ${
                    isValidEmail
                      ? 'bg-[#ff003c] hover:bg-[#e00035] text-white cursor-pointer shadow-md' 
                      : 'bg-[#ff7f9d] text-white cursor-not-allowed opacity-80'
                  }`}
                >
                  Bildirmək
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {isSuccessModalOpen && (
        <div 
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 p-4 transition-opacity font-[Montserrat,_sans-serif]"
          onClick={handleCloseAll}
        >
          <div 
            className="bg-white rounded-[16px] w-full max-w-[440px] p-5 relative shadow-2xl text-center"
            onClick={(e) => e.stopPropagation()}
          >
           
            <button 
              type="button"
              onClick={handleCloseAll}
              className="absolute top-4 right-4  p-0.5 hover:bg-gray-100 transition-colors cursor-pointer"
            >
              <IoCloseOutline size={20} />
            </button>

            <h3 className="text-[16px] font-bold text-[#222] text-left border-b border-gray-100 pb-3 -mt-1 -mx-2 px-2">
              Mövcudluğunu bildirmək
            </h3>

            <div className="py-6 flex flex-col items-center">
            
              <div className="w-[40px] h-[40px] bg-[#17a539] rounded-full flex items-center justify-center mb-4">
                <FiCheck className="text-white text-[20px] stroke-[3]" />
              </div>
              <p className="text-[14px] sm:text-[15px] text-[#222] font-medium leading-relaxed max-w-[340px]">
                Müraciətin üçün təşəkkür edirik. Məhsul satışa daxil olanda qeyd etdiyin e-poçt ünvanına bildiriş göndərəcəyik!
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Inform;