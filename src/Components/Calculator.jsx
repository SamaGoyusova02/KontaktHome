import React, { useState } from 'react';
import info from "../assets/info.svg";
import birbank from "../assets/birbank.svg";
import leo from "../assets/leo.svg";

const Calculator = ({ 
  price = 1999.99, 
  discount = 200, 
  isAvailable = true 
}) => {
  const monthsData = [
    { month: 6, percent: '0%' },
    { month: 9, percent: '0%' },
    { month: 12, percent: '0%' },
    { month: 15, percent: null },
    { month: 18, percent: null },
    { month: 24, percent: null },
  ];

  const [selectedMonth, setSelectedMonth] = useState(12);

  const parseNumber = (val) => {
    if (typeof val === 'number') return val;
    if (typeof val === 'string') {
      return Number(val.replace(/\./g, '').replace(',', '.')) || 0;
    }
    return 0;
  };

  const originalPrice = parseNumber(price);
  const discountVal = parseNumber(discount);
  
  const discountAmount = discountVal < 100 ? originalPrice * (discountVal / 100) : discountVal;
  const finalPrice = originalPrice > discountAmount ? originalPrice - discountAmount : originalPrice;

  const monthlyPayment = isAvailable 
    ? (selectedMonth > 0 ? Math.trunc(finalPrice / selectedMonth) : 0)
    : "------";

  const payment12Month = Math.trunc(finalPrice / 12);

  return (
    <div className="w-full font-[Montserrat,_sans-serif] select-none">
      <div className="mb-3">
        <h3 className="text-[15px] font-[600] text-[#323232] tracking-tight">
          Hissəli alış kalkulyatoru
        </h3>
        <p className="text-[10px] text-[#777777] mt-0.5">
          Şərtlər ilk dəfə olaraq endirimli qiymətə tətbiq olunur
        </p>
      </div>

      <div className="border border-[#eaeaea] rounded-[10px] p-2 sm:p-3 md:p-2 flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4 bg-white">
        <div className="flex md:hidden items-center justify-center gap-2 text-[#323232] pb-2 border-b border-[#f3f3f3] w-full">
          <span className="text-xs font-medium text-[#666]">Aylıq</span>
          <span className="text-lg font-bold text-[#111]">
            {monthlyPayment} <span className="font-normal">₼</span>
          </span>
        </div>
        <div className="flex-1 flex items-end justify-center w-full md:w-auto gap-1.5 sm:gap-5 py-1 no-scrollbar">
          {monthsData.map((item) => {
            const isSelected = selectedMonth === item.month;
            return (
              <div key={item.month} className="flex flex-col items-center gap-1 flex-1 md:flex-initial">
                <span className="h-3.5 text-[10px] sm:text-[9px] font-bold text-[#ff003c]">
                  {item.percent ? item.percent : ''}
                </span>

                <button
                  type="button"
                  onClick={() => setSelectedMonth(item.month)}
                  className={`w-9 h-9 sm:w-9 sm:h-9 rounded-full flex items-center justify-center text-[7px] sm:text-[10px] font-semibold transition-all duration-200 whitespace-nowrap shrink-0 ${
                    isSelected
                      ? 'bg-[#2b2b2b] text-white shadow-md scale-105'
                      : 'bg-[#f4f4f4] text-[#323232] hover:bg-[#eaeaea]'
                  }`}
                >
                  {item.month} ay
                </button>
              </div>
            );
          })}
        </div>

        <div className="hidden md:flex flex-col items-center justify-center border-l border-[#eaeaea] pl-6 md:pl-8 min-w-[130px]">
          <span className="text-[12px] text-[#323232] font-medium mb-1">Aylıq</span>
          <span className="font-[600] font-[Montserrat,_sans-serif] text-[#323232] text-[16px]">
            {monthlyPayment} <span className="font-normal">₼</span>
          </span>
        </div>
      </div>

      <div className="flex items-center gap-1 mt-2">
        <img className="w-[13px] shrink-0" src={info} alt="info" />
        <p className="text-[10px] text-[#777777] font-[500] font-[Montserrat,_sans-serif]">
          Sifarişin rəsmiləşdirilməsi zamanı komissiya əlavə oluna bilər
        </p>
      </div>

      {isAvailable && (
        <>
          <hr className="text-[#f3f3f3] my-3" />

          <div className="mt-2">
            <p className="text-[#323232] font-[600] text-[14px]">Taksitlə al</p>
            <div className="flex items-center gap-3 flex-wrap">
              <div className="flex items-center gap-2 mt-2 border border-[#e8e8e8] rounded-[8px] px-3 py-2 w-full sm:w-[220px]">
                <img className="rounded-[7px] shrink-0" src={birbank} alt="birbank" />
                <p className="flex flex-col">
                  <span className="text-[#323232] font-[Montserrat,_sans-serif] font-[550] text-[13px]">
                    12 ay {payment12Month} ₼
                  </span>
                  <span className="font-[Montserrat,_sans-serif] text-[#777777] font-[500] text-[10px]">
                    Birbank ilə faizsiz ödə!
                  </span>
                </p>
              </div>

              <div className="flex items-center gap-2 mt-2 border border-[#e8e8e8] rounded-[8px] px-3 py-2 w-full sm:w-[220px]">
                <img className="rounded-[7px] shrink-0" src={leo} alt="leo" />
                <p className="flex flex-col">
                  <span className="text-[#323232] font-[Montserrat,_sans-serif] font-[550] text-[13px]">
                    12 ay {payment12Month} ₼
                  </span>
                  <span className="font-[Montserrat,_sans-serif] text-[#777777] font-[500] text-[10px]">
                    LeoBank ilə faizsiz ödə!
                  </span>
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Calculator;