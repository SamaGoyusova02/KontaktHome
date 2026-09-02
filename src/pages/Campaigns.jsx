import React, { useContext, useEffect, useState } from 'react'
import CamImg1 from "../assets/CamImg1.jpeg"
import CamImg2 from "../assets/CamImg2.jpeg"
import CamImg3 from "../assets/CamImg3.jpeg"
import CategoryList from '../Components/CategoryList';
import Card from '../Components/Card';
import { DATA } from '../Context/DataContext';


function Campaigns() {
    const { category, products } = useContext(DATA);
      const [selectedCategory, setSelectedCategory] = useState(null);
     const filteredProducts = selectedCategory
    ? products?.filter(
        (product) =>
          product.category?.trim().toLowerCase() ===
          selectedCategory?.trim().toLowerCase()
      )
    : products;
  
  useEffect(() => {
    document.title = "Kampaniyalar";
  }, []);

  const campaignsData = [
    {
      id: 1,
      image: CamImg1,
      title: "Fürsət dalğasına qoşul",
      timeLabel: "Bitmə vaxtı",
      timeLeft: "7 gün",
      isUnlimited: false
    },
    {
      id: 2,
      image: CamImg2,
      title: "Axşam Bazarına hazır ol",
      timeLabel: "Başlama vaxtı",
      timeLeft: "1 gün",
      isUnlimited: false
    },
    {
      id: 3,
      image: CamImg3,
      title: "Abunə ol, iPhone-u hər il yenilə",
      timeLabel: "Bitmə vaxtı",
      timeLeft: "Müddətsiz",
      isUnlimited: true
    }
  ];

  return (
   
    <section className="mt-[166px] ">
    <div className='lg:mx-9 mx-3'>
        <div className="bg-white rounded-[10px] h-[70px] flex items-center pl-4 shadow-sm mb-4">
        <h2 className="font-[Montserrat,_sans-serif] text-[20px] font-[600] text-[#323232]">
          Kampaniyalar
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {campaignsData.map((item) => (
          <div 
            key={item.id} 
            className="bg-white rounded-2xl overflow-hidden relative font-[Montserrat,_sans-serif]  flex flex-col justify-between"
          >
            <div className="w-full h-[200px] overflow-hidden">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-4 bg-white flex-grow">
              <h3 className="text-[#2B2B2B] font-semibold text-[15px] leading-tight hover:text-[#ff003c] transition-colors duration-300 cursor-pointer">
                {item.title}
              </h3>
            </div>

            <div className="relative flex items-center justify-between px-4">
              <div className="w-4 h-4 bg-[#f3f3f3] rounded-full absolute -left-2 top-1/2 -translate-y-1/2 shadow-inner"></div>
              <div className="w-full border-t-2 border-dashed border-gray-200 my-1"></div>
              <div className="w-4 h-4 bg-[#f3f3f3] rounded-full absolute -right-2 top-1/2 -translate-y-1/2 shadow-inner"></div>
            </div>
          
           <div className="p-4 pt-2 flex justify-between items-center text-sm">
              <span className="text-gray-400 font-medium text-[12px]">{item.timeLabel}</span>
              <span 
                className={`font-bold text-[14px] ${
                  item.isUnlimited ? "text-[#17a539]" : "text-[#ff003c]"
                }`}
              >
                {item.timeLeft}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>

        <section className=' mx-3 mx-auto mt-14'>
       
        <h2 className='text-[#323232] font-[600] text-[20px] pl-9 mb-2'>Satış liderləri</h2>
        <CategoryList 
          categories={category} 
          selectedCategory={selectedCategory} 
          onSelectCategory={(catName) => setSelectedCategory(catName)} 
        />
        <div className="overflow-x-auto mx-3 lg:mx-9 custom-scrollbar min-h-[300px] snap-x snap-mandatory scroll-smooth">
          {filteredProducts && filteredProducts.length > 0 ? (
            <Card products={filteredProducts} />
          ) : (
            <div className="p-5 text-gray-500 font-sans">
              Bu kateqoriyaya uyğun məhsul tapılmadı.
            </div>
          )}
        </div>
      </section>
    </section>
  );
}

export default Campaigns;