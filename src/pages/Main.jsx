import React, { useContext, useEffect, useState } from 'react';
import { IoIosArrowForward } from "react-icons/io";
import { DATA } from '../Context/DataContext';
import Slider from '../Components/Slider';
import SliderSmall from '../Components/SliderSmall';
import Time from '../Components/Time';
import Card from '../Components/Card';
import CategoryList from '../Components/CategoryList';
import Menu from '../Components/Menu'; 

import icon1 from '../assets/icon1.svg';
import icon2 from '../assets/icon2.svg';
import icon3 from '../assets/icon3.svg';
import icon4 from '../assets/icon4.svg';
import icon5 from '../assets/icon5.svg';
import icon6 from '../assets/icon6.svg';
import icon7 from '../assets/icon7.svg';
import icon8 from '../assets/icon8.svg';
import icon9 from '../assets/icon9.svg';
import icon10 from '../assets/icon10.svg';
import icon11 from '../assets/icon11.svg';
import icon12 from '../assets/icon12.svg';
import icon13 from '../assets/icon13.svg';
import icon14 from '../assets/icon14.svg';
import icon15 from '../assets/icon15.svg';
import icon16 from '../assets/icon16.svg';
import icon17 from '../assets/icon17.svg';
import icon18 from '../assets/icon18.svg';
import icon19 from '../assets/icon19.svg';
import icon22 from '../assets/icon22.svg';

import Logos from '../Components/Logos';
import Perks from '../Components/Perks';
import SuperOffer from '../Components/SuperOffer';
import HappyNews from '../Components/HappyNews';
import SeasonOffer from '../Components/SeasonOffer';
import MobileWeeklyOffer from '../Components/MobileWeeklyOffer';

const menuItems = [
  { id: 1, name: 'Yay sərinliyi', icon: icon1 },
  { id: 2, name: 'Gamer zona', icon: icon2 },
  { id: 3, name: 'First Coffee', icon: icon3 },
  { id: 4, name: 'Apple', icon: icon4 },
  { id: 5, name: 'Smartfonlar və aksesuarlar', icon: icon5 },
  { id: 6, name: 'Smart qadjetlər', icon: icon6 },
  { id: 7, name: 'Notbuklar , PK , planşetlər', icon: icon7 },
  { id: 8, name: 'TV , audio və foto', icon: icon8 },
  { id: 9, name: 'Ev texnikası', icon: icon9 },
  { id: 10, name: 'Mətbəx texnikası', icon: icon10 },
  { id: 11, name: 'Qab-qacaq', icon: icon11 },
  { id: 12, name: 'Gözəllik və sağlamlıq texnikası', icon: icon12 },
  { id: 13, name: 'Mebel və tekstil', icon: icon13 },
  { id: 14, name: 'Nəqliyyat', icon: icon14 },
  { id: 15, name: 'İdman və Əyləncə', icon: icon15 },
  { id: 16, name: 'Uşaq aləmi', icon: icon16 },
  { id: 17, name: 'Ev heyvanları üçün məhsullar', icon: icon17 },
  { id: 18, name: 'Təmir tikinti', icon: icon18 },
  { id: 19, name: 'Ev və bağ', icon: icon19 },
  { id: 20, name: 'Hədiyyə sertifikartlar', icon: icon22 },
];

function Main() {
  useEffect(() => {
    document.title = "Kontakt - Sevindirir | Online Mağaza";
  }, []);

  const { category, products } = useContext(DATA);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [activeMenuId, setActiveMenuId] = useState(null);

  const filteredProducts = selectedCategory
    ? products?.filter(
        (product) =>
          product.category?.trim().toLowerCase() ===
          selectedCategory?.trim().toLowerCase()
      )
    : products;

  return (
    <>
      <div className='max-w-[1450px] mx-auto mt-[160px] md:mt-[160px] z-20 flex relative h-auto md:h-[540px]'>
        
        <div 
          className='hidden md:flex w-full relative'
          onMouseLeave={() => setActiveMenuId(null)}
        >
          <ul className='h-[516px] w-[22%] lg:w-[18%] flex flex-col overflow-y-scroll rounded-[10px] py-2 max-h-[516px] mt-3 [&::-webkit-scrollbar]:w-[2px] [&::-webkit-scrollbar-thumb]:bg-[#2d2d2d] bg-white shrink-0 border-r border-[#f3f3f3] z-30'>
            {menuItems.map((item) => (
              <li 
                key={item.id} 
                onMouseEnter={() => setActiveMenuId(item.id)}
                className={`menu-item cursor-pointer group py-[7px] px-3 flex justify-between items-center transition-colors ${
                  activeMenuId === item.id ? ' text-[#ff003c]' : 'bg-white text-black'
                }`}
              >
                <div className='flex justify-center items-center space-y-1 group-hover:text-[#ff003c] gap-2'>
                  <img src={item.icon} alt={item.name} />
                  <p className="text-sm font-[Montserrat,_sans-serif] font-[500] text-[#323232] group-hover:text-[#ff003c]">{item.name}</p>
                </div>
                <IoIosArrowForward className={`text-[#dcd3d3] group-hover:text-[#ff003c] ${activeMenuId === item.id ? 'text-[#ff003c]' : ''}`} />
              </li>
            ))}
          </ul>

        
          {activeMenuId && <Menu activeMenuId={activeMenuId} />}

          <div className='w-[78%] lg:w-[82%] bg-[#f3f3f3] h-[540px] rounded-r-[10px] flex items-center py-3 pl-2 pr-0'>
            <div className='flex flex-col md:flex-row justify-center items-stretch gap-2 w-full h-full'>
              <div className="w-full md:flex-1 min-w-0">
                <Slider />
              </div>
              <div className='hidden md:flex flex-col gap-[1px] w-[270px] shrink-0 h-full justify-between'>
                <div className='w-full h-[100px] bg-white flex flex-col items-center justify-center  shadow-sm'>
                  <h2 className='text-center text-[#111827] font-[600] text-[.9em]'>Həftənin təklifləri</h2>
                  <Time />
                </div>
                <div className="flex-1 min-h-0 bg-white  overflow-hidden">
                  <SliderSmall />
                </div>
              </div>
            </div>
          </div>

        </div>

     
        <div className='md:hidden w-full'>
          <Slider />
        </div>

      </div> 

    
      <section><Logos/></section>
      <section className='mx-3 lg:mx-0'><Perks/></section>
      <section className='md:hidden lg:hidden mx-3'><MobileWeeklyOffer/></section>

      <section className='mx-3 mx-auto mt-6'>
        <h2 className='text-[#323232] font-[600] text-[22px] lg:pl-9 mb-2 mx-3 lg:mx-0'>Satış liderləri</h2>
       <div className='mx-3 lg:mx-0'>
         <CategoryList 
          categories={category} 
          selectedCategory={selectedCategory} 
          onSelectCategory={(catName) => setSelectedCategory(catName)} 
        />
       </div>
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

      <section className='overflow-x-scroll [&::-webkit-scrollbar]:hidden lg:mx-9 mt-12 mx-3'>
        <h2 className='text-[#323232] font-[600] text-[20px] mb-2'>Super Təkliflər </h2>
        <SuperOffer/>
      </section>
      <section className='overflow-x-scroll [&::-webkit-scrollbar]:hidden lg:mx-9 mt-4 mx-3'>
        <h2 className='text-[#323232] font-[600] text-[20px] mb-2'>Sevindirən təkliflər </h2>
        <HappyNews/>
      </section>
       <section className='overflow-x-scroll [&::-webkit-scrollbar]:hidden lg:mx-9 mt-4 mx-3'>
        <h2 className='text-[#323232] font-[600] text-[20px] mb-2'>Mövsüm təklifləri </h2>
          <SeasonOffer/>
      </section>
    </>
  );
}

export default Main;