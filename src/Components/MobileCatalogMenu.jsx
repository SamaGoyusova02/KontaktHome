import { useState } from "react";
import { MdChevronRight, MdKeyboardArrowLeft } from "react-icons/md";
import { IoCloseOutline } from "react-icons/io5";
import icon1 from "../assets/icon1.svg";
import icon2 from "../assets/icon2.svg";
import icon3 from "../assets/icon3.svg";
import icon4 from "../assets/icon4.svg";
import icon5 from "../assets/icon5.svg";
import icon6 from "../assets/icon6.svg";
import icon7 from "../assets/icon7.svg";
import icon8 from "../assets/icon8.svg";
import icon9 from "../assets/icon9.svg";
import icon10 from "../assets/icon10.svg";
import icon11 from "../assets/icon11.svg";
import icon12 from "../assets/icon12.svg";
import icon13 from "../assets/icon13.svg";
import icon14 from "../assets/icon14.svg";
import icon15 from "../assets/icon15.svg";
import icon16 from "../assets/icon16.svg";

const catalogData = [
  {
    id: 1,
    title: "Yay Sərinliyi",
    icon: icon1,
    subCategories: [
      {
        id: 11,
        title: "Kondisionerin brendi",
        items: ["HOFFMANN", "LG", "Hisense", "Gree", "TCL", "Bosch", "Samsung", "Beko", "Mitsubishi", "Electrolux", "Sharp", "Panasonic", "AUX", "Midea", "Ardesto"]
      },
      {
        id: 12,
        title: "Tövsiyə olunan otaq sahəsi",
        items: ["25-45 m²", "45-100 m²", "100-180 m²"]
      },
      {
        id: 13,
        title: "Kondisionerin növü",
        items: ["Split sistemləri", "Daxili bloklar", "Xarici bloklar", "Kolon tiplilər"]
      },
      {
        id: 14,
        title: "Ventilyatorlar",
        items: ["Döşəməüstü", "Masaüstü", "Qüllə", "Universal"]
      },
      {
        id: 15,
        title: "Hava təmizləyicilər və nəmləndiricilər",
        items: ["Hava nəmləndirici", "Hava təmizləyici", "Hava təravətləndirici", "İqlim kompleksi"]
      }
    ]
  },
  {
    id: 2,
    title: "Gamer zona",
    icon: icon2,
    subCategories: [
      { id: 21, title: "Oyun konsolları", items: ["Nintendo", "Anbernic", "Microsoft", "Miyoo", "Lenovo", "Ayaneo"] },
      { id: 22, title: "Oyun monitorları", items: ["Porodo", "Xiaomi", "Samsung", "Asus", "Dell"] },
      { id: 23, title: "Videooyun avadanlıqları", items: ["Konsol", "Oyun manipulyatorları", "Oyun diskləri"] }
    ]
  },
  {
    id: 3,
    title: "First Coffee",
    icon: icon3,
    subCategories: [
      { id: 31, title: "Qəhvə texnikası", items: ["Qəhvəbişirənlər", "Kapsullu qəhvəbişirənlər", "Qəhvədəmləyən espresso", "Damcılı qəhvəbişirənlər", "Turka", "Qəhvəüyüdənlər", "Süd köpükləndiricilər"] },
      { id: 32, title: "Qəhvə hazırlanması", items: ["Qəhvə", "Qəhvəbişirən üçün kapsul"] }
    ]
  },
  {
    id: 4,
    title: "Apple",
    icon: icon4,
    subCategories: [
      { id: 41, title: "Apple smartfonları", items: ["iPhone 17 Pro Max", "iPhone 17 Pro", "iPhone 17e", "iPhone 15"] },
      { id: 42, title: "Apple qulaqlıqları", items: ["AirPods", "AirPods Max 2"] }
    ]
  },
  {
    id: 5,
    title: "Smartfonlar və aksesuarlar",
    icon: icon5,
    subCategories: [
      { id: 51, title: "Smartfonlar", items: ["Apple", "Samsung", "OPPO", "Xiaomi", "Realme", "HONOR", "Vertu", "Oscal", "Cubot", "Infinix", "Motorola"] },
      { id: 52, title: "Planşetlər", items: ["Apple", "Samsung", "Xiaomi", "HUAWEI", "OPPO", "HONOR"] }
    ]
  },
  {
    id: 6,
    title: "Smart qadjetlər",
    icon: icon6,
    subCategories: [
      { id: 61, title: "Smart saatlar", items: ["Apple", "HUAWEI", "Xiaomi", "Samsung", "Kieslect", "Vertu"] },
      { id: 62, title: "Qol saatları", items: ["Edifice", "Orient", "Daniel Klein", "Santa Barbara Polo Racquet Club", "Swiss Military by Chrono", "Ingersoll", "CURREN"] }
    ]
  },
  {
    id: 7,
    title: "Notbuklar , PK , planşetlər",
    icon: icon7,
    subCategories: [
      { id: 71, title: "Notbuklar", items: ["Apple", "Asus", "Acer", "Dell", "HP", "HUAWEI", "Lenovo"] },
      { id: 72, title: "Notbuk çantaları", items: ["Bel çantaları", "Çantalar", "Kisə bel çantaları", "Mini bel çantası"] }
    ]
  },
  {
    id: 8,
    title: "TV , audio və foto",
    icon: icon8,
    subCategories: [
      { id: 81, title: "TV brend üzrə", items: ["Hisense", "Toshiba", "Xiaomi", "LG", "Samsung", "HOFFMANN"] },
      { id: 82, title: "Audio texnika", items: ["Soundbar", "Musiqi mərkəzləri", "Portativ akustika", "Smart akustika", "Vinil oxuyucu aksesuarları", "Blogger mikrоfonları"] }
    ]
  },
  {
    id: 9,
    title: "Ev texnikası",
    icon: icon9,
    subCategories: [
      { id: 91, title: "İqlim texnikası", items: ["Kondisionerlər", "Ventilyatorlar", "Kombi sistemləri", "Hava təmizləyicilər və nəmləndiricilər", "Qaz kolonkaları", "Elektrikli su qızdırıcıları", "Qızdırıcı ventilyatorlar"] },
      { id: 92, title: "Ev üçün kiçik texnika", items: ["Tozsoranlar", "Robot tozsoranlar", "Vertikal tozsoranlar", "Yuyucu tozsoranlar", "Tiftik təmizləyən", "Ütülər", "Buxarlı generatorlar", "Şaquli buxarlı ütülər", "Buxarlı təmizləyicilər", "Tikiş maşınları", "Robot pəncərə təmizləyənlər"] }
    ]
  },
  {
    id: 10,
    title: "Mətbəx texnikası",
    icon: icon10,
    subCategories: [
      { id: 101, title: "Quraşdırılan texnika", items: ["Quraşdırılan sobalar", "Quraşdırılan plitələr", "Aspiratorlar", "Quraşdırılan soyuducular", "Quraşdırılan qabyuyan maşınlar", "Quraşdırılan paltaryuyan maşınlar", "Quraşdırılan mikrodalğalı sobalar", "Quraşdırılan qəhvəbişirənlər", "Qida tullantıları üçün üyüdücülər"] },
      { id: 102, title: "Peşəkar avadanlıq", items: ["Vitrin soyuducuları", "Vitrin dondurucuları"] }
    ]
  },
  {
    id: 11,
    title: "Qab-qacaq",
    icon: icon11,
    subCategories: [
      { id: 111, title: "Yemək hazırlanması üçün qab-qacaq", items: ["Qazan dəsti", "Qazanlar", "Tavalar", "Qapaqlar", "Bişirmə üçün formalar"] },
      { id: 112, title: "Süfrə qab-qacağı", items: ["Serviz dəstləri", "Boşqablar", "Fincanlar və stəkanlar", "Güldanlar", "Kasa və çərəz qabları", "Çəngəl-bıçaq dəsti", "Sinilər"] }
    ]
  },
  {
    id: 12,
    title: "Gözəllik və sağlamlıq texnikası",
    icon: icon12,
    subCategories: [
      { id: 121, title: "Dyson", items: ["Dyson multistayler", "Dyson fen ütülər", "Dyson hava fenləri", "Dyson saç aksesuarları və daraqlar"] },
      { id: 122, title: "Ətriyyat", items: ["Qadın ətirləri", "Kişi ətirləri", "Uniseks ətirləri", "Ətir dəstləri"] }
    ]
  },
  {
    id: 13,
    title: "Mebel və tekstil",
    icon: icon13,
    subCategories: [
      { id: 131, title: "Yataq otağı", items: ["Yataq otağı dəstləri", "Yataq otağı dolabları", "Çarpayılar", "Trümolar", "Tumbalar", "Boy aynaları"] },
      { id: 132, title: "Ofis mebeli", items: ["Kürsülər", "Ofis üçün masa", "Ofis üçün dolab"] }
    ]
  },
  {
    id: 14,
    title: "Nəqliyyat",
    icon: icon14,
    subCategories: [
      { id: 141, title: "Avtoelektronika", items: ["Avtomobil monitorları", "Maqnitofonlar", "Avtomobil üçün dinamiklər", "Gücləndiricilər", "Subwoofer", "Enerji toplama cihazları", "Avtomobil üçün şarj stansiyası"] },
      { id: 142, title: "Avtomobil aksesuarları", items: ["Sükan örtükləri", "Avtomobil ayaqaltıları", "Telefon tutacaqlar"] }
    ]
  } ,
   {
    id: 15,
    title: "İdman və Əyləncэ",
    icon: icon15,
    subCategories: [
      { id: 151, title: "Musiqi alətləri", items: ["Gitaralar", "Gitara aksesuarları" , "Gitara gücləndiricilər" , "MIDI-kontrollerlər" , "Skripkalar" , "Nəfəs alətləri" , "Pianolar" , "Audio interfeysləri" , "Sintezatorlar" , "Musiqi alət aksesuarları" , "Zərb alətləri" , "Dinamiklər" , "İşıqlandırma avadanlığı"] },
      { id: 152, title: "Avtomobil aksesuarları", items: ["Sükan örtükləri", "Avtomobil ayaqaltıları", "Telefon tutacaqlar"] }
    ]
  },
   {
    id: 16,
    title: "Uşaq aləmi",
    icon: icon16,
    subCategories: [
      { id: 161, title: "Uşaq üçün sağlamlıq, qulluq", items: ["Uşaq üçün şampun" , "Uşaq üçün salfetlər", "Uşaq üçün diş məcunu" , "Uşaq üçün diş fırçaları" , "Termometrlər" , "Uşaq üçün duş geli" , "Vannalar" ] },
      { id: 162, title: "Oyunlar və oyuncaqlar", items: ["Yumşaq oyuncaqlar" , "Hamam oyuncaqları" , "Musiqili oyuncaqlar" , "İnteraktiv oyuncaqlar" ] }
    ]
  }
];

export default function MobileCatalogMenu({ isOpen, onClose }) {
  const [menuLevel, setMenuLevel] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);

  if (!isOpen) return null;

  const handleBack = () => {
    if (menuLevel === 2) {
      setMenuLevel(1);
      setSelectedSubCategory(null);
    } else if (menuLevel === 1) {
      setMenuLevel(0);
      setSelectedCategory(null);
    }
  };

  return (
    <div className="fixed inset-0 top-0 left-0 w-full h-full bg-white z-[99999] flex flex-col font-[Montserrat,_sans-serif]">
      <div className="flex items-center justify-between p-4 border-b border-gray-100">
        {menuLevel > 0 ? (
          <button onClick={handleBack} className="flex items-center gap-2 font-medium text-gray-700">
            <MdKeyboardArrowLeft size={24} /> Geri
          </button>
        ) : (
          <span className="font-[550] text-[#323232] text-[14px]">Kataloq</span>
        )}
        <button onClick={onClose} className="text-gray-500 hover:text-black">
          <IoCloseOutline size={28} />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto">
        {menuLevel === 0 && (
          <ul>
            {catalogData.map((cat) => (
              <li 
                key={cat.id}
                onClick={() => {
                  setSelectedCategory(cat);
                  setMenuLevel(1);
                }}
                className="flex items-center justify-between p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer text-gray-800 font-medium text-[13px]"
              >
                <div className="flex items-center gap-2">
                  <img className="w-[20px]" src={cat.icon} alt="" />
                  <span>{cat.title}</span>
                </div>
                <MdChevronRight size={20} className="text-gray-400" />
              </li>
            ))}
          </ul>
        )}

        {menuLevel === 1 && selectedCategory && (
          <ul>
            <li className="p-4 text-[14px] font-[500] bg-gray-50 border-b border-gray-100">
              {selectedCategory.title}
            </li>
            {selectedCategory.subCategories.map((sub) => (
              <li 
                key={sub.id}
                onClick={() => {
                  setSelectedSubCategory(sub);
                  setMenuLevel(2);
                }}
                className="flex items-center justify-between p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer text-gray-700 text-[14px]"
              >
                <span>{sub.title}</span>
                <MdChevronRight size={20} className="text-gray-400" />
              </li>
            ))}
          </ul>
        )}

        {menuLevel === 2 && selectedSubCategory && (
          <ul>
            <li className="p-4 text-[14px] font-[500] bg-gray-50 border-b border-gray-100">
              {selectedSubCategory.title}
            </li>
            {selectedSubCategory.items.map((item, idx) => (
              <li 
                key={idx}
                className="p-4 border-b border-gray-100 hover:text-[#ff003c] cursor-pointer text-gray-600 text-[14px]"
              >
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}