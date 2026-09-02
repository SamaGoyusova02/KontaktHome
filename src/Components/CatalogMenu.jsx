import React, { useState } from 'react';
import { IoIosArrowForward } from "react-icons/io";
import Menu from './Menu';

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

function CatalogMenu() {
  const [activeMenuId, setActiveMenuId] = useState(1);

  return (
    <div 
      className="w-full h-full bg-white  grid grid-cols-[250px_minmax(0,1fr)] overflow-hidden"
      onMouseLeave={() => setActiveMenuId(1)}
    >
      {/* Sol Menu */}
      <ul className="flex flex-col bg-white overflow-y-auto [&::-webkit-scrollbar]:w-[2px] [&::-webkit-scrollbar-thumb]:bg-[#2d2d2d] bg-white  h-full py-2">
        {menuItems.map((item) => (
          <li 
            key={item.id} 
            onMouseEnter={() => setActiveMenuId(item.id)}
            className={`menu-item cursor-pointer group py-[7px] px-4 flex justify-between items-center transition-colors ${
              activeMenuId === item.id ? 'text-[#ff003c]' : 'bg-white text-black'
            }`}
          >
            <div className='flex justify-center items-center gap-2.5'>
              <img src={item.icon} alt={item.name} className="w-5 h-5 object-contain" />
              <p className={`text-sm font-[Montserrat,_sans-serif] font-[500] ${activeMenuId === item.id ? 'text-[#ff003c]' : 'text-[#323232]'} group-hover:text-[#ff003c]`}>
                {item.name}
              </p>
            </div>
            <IoIosArrowForward className={`text-[#dcd3d3] group-hover:text-[#ff003c] ${activeMenuId === item.id ? 'text-[#ff003c]' : ''}`} />
          </li>
        ))}
      </ul>

      {/* Sağ Hissəsi */}
      <div className="bg-white overflow-y-auto overflow-x-hidden [&::-webkit-scrollbar]:w-[2px] [&::-webkit-scrollbar-thumb]:bg-[#2d2d2d] h-full px-6 py-6">
        {activeMenuId ? (
          <Menu activeMenuId={activeMenuId} />
        ) : (
          <div className="flex items-center justify-center h-full text-gray-400 text-sm">
            Zəhmət olmasa soldan kateqoriya seçin
          </div>
        )}
      </div>
    </div>
  );
}

export default CatalogMenu;