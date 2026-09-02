import { Link } from "react-router";
import yay1 from "../assets/yay1.webp";
import yay2 from "../assets/yay2.webp";
import gamerImg1 from "../assets/gamerImg1.webp"
import gamerImg2 from "../assets/gamerImg2.webp"
import coffeeImg from "../assets/coffeeImg.webp"
import NotbukImg1 from "../assets/NotbukImg1.webp"
import NotbukImg2 from "../assets/NotbukImg2.webp"
import tvImg1 from "../assets/tvImg1.webp"
import tvImg2 from "../assets/tvImg2.webp"
import evTexImg from "../assets/evTexImg.webp"
import KitImg1 from "../assets/KitImg1.webp"
import KitImg2 from "../assets/KitImg2.webp"
import PotImg from "../assets/PotImg.webp"
import beautyImg1 from "../assets/beautyImg1.webp"
import beautyImg2 from "../assets/beautyImg2.webp"
import teksImg1 from "../assets/teksImg1.webp"
import teksImg2 from "../assets/teksImg2.webp"
import neqImg1 from "../assets/neqImg1.webp"
import neqImg2 from "../assets/neqImg2.webp"
import gymImg from "../assets/gymImg.webp"
import babyImg from "../assets/babyImg.webp"
import HomeAniImg from "../assets/HomeAniImg.webp"
import fixImg1 from "../assets/fixImg1.webp"
import fixImg2 from "../assets/fixImg2.webp"
import gardenImg1 from "../assets/gardenImg1.webp"
import gardenImg2 from "../assets/gardenImg2.webp"

function Menu({ activeMenuId }) {
  const renderSubMenuContent = () => {
    switch (activeMenuId) {
      case 1:
        return (
          <section className='flex justify-between items-start pt-5 px-8 bg-white h-full'>
            <div className='flex gap-12 lg:gap-16 items-start flex-1'>
              <div>
                <h4 className='text-[#222222] font-semibold text-[14px] mb-2 hover:text-[#ff003c] cursor-pointer transition-colors'>
                  Kondisionerin brendi
                </h4>
                <ul className='font-[Montserrat,_sans-serif] space-y-1 text-[#666666] text-[13px]'>
                  <li className='hover:text-[#ff003c] cursor-pointer transition-colors'><Link to="kondisionerler">HOFFMANN</Link></li>
                  <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>LG</li>
                  <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Hisense</li>
                  <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Gree</li>
                  <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>TCL</li>
                  <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Bosch</li>
                  <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Samsung</li>
                  <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Beko</li>
                  <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Mitsubishi</li>
                  <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Electrolux</li>
                  <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Sharp</li>
                  <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Panasonic</li>
                  <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>AUX</li>
                  <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Midea</li>
                  <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Ardesto</li>
                </ul>
              </div>
              <div className='space-y-6'>
                <div>
                  <h4 className='text-[#222222] font-semibold text-[14px] mb-2 hover:text-[#ff003c] cursor-pointer transition-colors'>
                    Tövsiyə olunan otaq sahəsi
                  </h4>
                  <ul className='font-[Montserrat,_sans-serif] space-y-1 text-[#666666] text-[13px]'>
                    <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>25-45 m²</li>
                    <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>45-100 m²</li>
                    <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>100-180 m²</li>
                  </ul>
                </div>

                <div>
                  <h4 className='text-[#222222] font-semibold text-[14px] mb-2 transition-colors hover:text-[#ff003c] cursor-pointer'>
                    Ventilyatorlar
                  </h4>
                  <ul className='font-[Montserrat,_sans-serif] space-y-1 text-[#666666] text-[13px]'>
                    <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Döşəməüstü</li>
                    <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Masaüstü</li>
                    <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Qüllə</li>
                    <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Universal</li>
                  </ul>
                </div>
              </div>
              <div>
                <h4 className='text-[#222222] font-semibold text-[14px] mb-2 hover:text-[#ff003c] cursor-pointer transition-colors'>
                  Kondisionerin növü
                </h4>
                <ul className='font-[Montserrat,_sans-serif] space-y-1 text-[#666666] text-[13px]'>
                  <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Split sistemləri</li>
                  <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Daxili bloklar</li>
                  <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Xarici bloklar</li>
                  <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Kolon tiplilər</li>
                </ul>
              </div>
              <div className='space-y-6 max-w-[220px]'>
                <div>
                  <h4 className='text-[#222222] font-semibold text-[14px] mb-2 transition-colors cursor-pointer hover:text-[#ff003c]'>
                    Uşaq üçün hava nəmləndiriciləri
                  </h4>
                </div>

                <div>
                  <h4 className='text-[#222222] font-semibold text-[14px] mb-2 transition-colors hover:text-[#ff003c] cursor-pointer'>
                    Hava təmizləyicilər və nəmləndiricilər
                  </h4>
                  <ul className='font-[Montserrat,_sans-serif] space-y-1 text-[#666666] text-[13px]'>
                    <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Hava nəmləndirici</li>
                    <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Hava təmizləyici</li>
                    <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Hava təravətləndirici</li>
                    <li className='hover:text-[#ff003c] cursor-pointer leading-snug transition-colors'>
                      İqlim kompleksi (Hava təmizləyici və nəmləndirici)
                    </li>
                  </ul>
                </div>
              </div>

            </div>

            <div className='flex flex-col gap-4 w-[220px] shrink-0 pl-4'>
              <img src={yay1} alt="yay1" className='cursor-pointer' />
              <img src={yay2} alt="yay2" className='cursor-pointer' />
            </div>
          </section>
        );

      case 2:
        return (
          <section className='flex justify-between items-start pt-5 px-8 bg-white h-full'>
             <ul className="space-y-1 text-[#666666] text-[13px]">
              <li className="text-[#222222] font-semibold text-[14px] mb-7 hover:text-[#ff003c] cursor-pointer transition-colors">Gaming TV</li>
              <li className='hover:text-[#ff003c] cursor-pointer text-[14px] text-[#323232] font-semibold transition-colors'>Oyun konsolları</li>
              <li className='hover:text-[#ff003c] cursor-pointer mt-2 transition-colors'>Nintendo</li>
              <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Anbernic</li>
              <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Microsoft</li>
              <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Miyoo</li>
              <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Lenovo</li>
              <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Ayaneo</li>
              <li className="hover:text-[#ff003c] cursor-pointer text-[14px] text-[#323232] font-semibold mt-7 transition-colors">Oyun routerləri</li>
            </ul>
            <ul className="space-y-1 text-[#666666] text-[13px]">
              <li className="text-[#222222] font-semibold text-[14px] mb-7 hover:text-[#ff003c] cursor-pointer transition-colors">Oyun smartfonları</li>
              <li className="text-[#222222] font-semibold text-[14px]  hover:text-[#ff003c] cursor-pointer transition-colors">Oyun monitorları</li>
              <li className='hover:text-[#ff003c] cursor-pointer mt-2 transition-colors'>Porodo</li>
              <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Xiaomi</li>
              <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Samsung</li>
              <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Asus</li>
              <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Dell</li>
              <li className="text-[#222222] font-semibold text-[14px] mt-7 hover:text-[#ff003c] cursor-pointer transition-colors">Oyun periferiyası</li>
              <li className='hover:text-[#ff003c] cursor-pointer mt-2 transition-colors'>Oyun üçün Mouse</li>
              <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Oyun üçün Mouse Pad</li>
              <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Oyun kresloları</li>
              <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Oyun qulaqlıqları</li>
              <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Geymerlər üçün router</li>
              <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Mikrofonlar</li>
            </ul>
            <ul className="space-y-1 text-[#666666] text-[13px]">
              <li className="text-[#222222] font-semibold text-[14px]  hover:text-[#ff003c] cursor-pointer transition-colors">Videooyun avadanlıqları</li>
              <li className='hover:text-[#ff003c] cursor-pointer mt-2 transition-colors' >Konsol</li>
              <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Oyun manipulyatorları</li>
              <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Oyun diskləri</li>
              <li className="text-[#222222] font-semibold text-[14px]  hover:text-[#ff003c] cursor-pointer mt-7 transition-colors">Oyun notbukları</li>
              <li className='hover:text-[#ff003c] cursor-pointer mt-2 transition-colors' >Asus</li>
              <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Acer</li>
              <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>MSI</li>
              <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>HP</li>
              <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Lenovo</li>
            </ul>
            <ul className="space-y-1 text-[#666666] text-[13px]">
              <li className="text-[#222222] font-semibold text-[14px]  hover:text-[#ff003c] cursor-pointer transition-colors">PlayStation</li>
              <li className='hover:text-[#ff003c] cursor-pointer mt-2 transition-colors'>PlayStation 5 oyunları</li>
              <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>PlayStation 4 oyunları</li>
              <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>PlayStation qulaqlıqları</li>
              <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>PlayStation manipulyatorları</li>
              <li className="text-[#222222] font-semibold text-[14px]  hover:text-[#ff003c] cursor-pointer mt-7 transition-colors">Kompüter hissələri</li>
              <li className='hover:text-[#ff003c] cursor-pointer mt-2 transition-colors'>Ana plata</li>
              <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Operativ yaddaş</li>
              <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Sistem blokları</li>
            </ul>
            <div className='flex flex-col gap-4 w-[220px] shrink-0 pl-4'>
              <img src={gamerImg1} alt="gamerImg1" className='cursor-pointer' />
              <img src={gamerImg2} alt="gamerImg2" className='cursor-pointer' />
            </div>
          </section>
        );

      case 3:
        return (
         <section  className='flex justify-between items-start pt-5 px-8 bg-white h-full '>
          <div className="flex justify-between gap-10">
            <ul  className="space-y-1 text-[#666666] text-[13px] -">
              <li className="text-[#222222] font-semibold text-[14px]  hover:text-[#ff003c] cursor-pointer transition-colors">Qəhvə texnikası</li>
              <li className='hover:text-[#ff003c] cursor-pointer mt-2 transition-colors'>Qəhvəbişirənlər</li>
              <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Kapsullu qəhvəbişirənlər</li>
              <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Qəhvədəmləyən espresso</li>
              <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Damcılı qəhvəbişirənlər</li>
              <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Turka</li>
              <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Qəhvəüyüdənlər</li>
              <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Süd köpükləndiricilər</li>
            </ul>
            <ul  className="space-y-1 text-[#666666] text-[13px]">
              <li className="text-[#222222] font-semibold text-[14px]  hover:text-[#ff003c] cursor-pointer transition-colors">Qəhvə hazırlanması</li>
              <li className='hover:text-[#ff003c] cursor-pointer mt-2 transition-colors'>Qəhvə</li>
              <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Qəhvəbişirən üçün kapsul</li>
            </ul>
            <ul className="space-y-1 text-[#666666] text-[13px]">
              <li  className="text-[#222222] font-semibold text-[14px]  hover:text-[#ff003c] cursor-pointer transition-colors">Qəhvə üçün qab-qacaq</li>
              <li className='hover:text-[#ff003c] cursor-pointer mt-2 transition-colors'>Qəhvə üçün fincanlar</li>
              <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Qəhvə üçün stəkanlar</li>
            </ul>
          </div>
          <div className="w-[220px] shrink-0">
            <img src={coffeeImg} alt="coffeeImg" className="cursor-pointer" />
          </div>
         </section>
        );

      case 4:
        return (
          <section className='flex gap-20 items-start pt-5 px-8 bg-white h-full'> 
            <ul className="space-y-1 text-[#666666] text-[13px]">
              <li className="text-[#222222] font-semibold text-[14px]  hover:text-[#ff003c] cursor-pointer transition-colors">Apple smartfonları</li>
              <li className='hover:text-[#ff003c] cursor-pointer transition-colors mt-2'>iPhone 17 Pro Max</li>
              <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>iPhone 17 Pro</li>
              <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>iPhone 17e</li>
              <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>iPhone 15</li>
            </ul>
            <ul className="space-y-1 text-[#666666] text-[13px]">
              <li className="text-[#222222] font-semibold text-[14px]  hover:text-[#ff003c] cursor-pointer transition-colors">Apple qulaqlıqları</li>
              <li className='hover:text-[#ff003c] cursor-pointer transition-colors mt-2'>AirPods</li>
              <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>AirPods Max 2</li>
              <li className="text-[#222222] font-semibold text-[14px]  hover:text-[#ff003c] cursor-pointer transition-colors mt-7">Apple notbukları</li>
              <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>MacBook Neo</li>
              <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>MacBook Air</li>
              <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>MacBook Pro</li>
            </ul>
            <ul className="space-y-1 text-[#666666] text-[13px]">
              <li className="text-[#222222] font-semibold text-[14px]  hover:text-[#ff003c] cursor-pointer transition-colors">Apple planşetləri</li>
              <li className='hover:text-[#ff003c] cursor-pointer transition-colors mt-2'>iPad 10.9-inch</li>
              <li className="text-[#222222] font-semibold text-[14px]  hover:text-[#ff003c] cursor-pointer transition-colors mt-7">Apple smart saatları</li>
              <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Apple Watch Series 11</li>
              <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Apple Watch Ultra 3</li>
              <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Apple Watch SE 3</li>
            </ul>
            <ul className="space-y-1 text-[#666666] text-[13px]">
              <li className="text-[#222222] font-semibold text-[14px] hover:text-[#ff003c] cursor-pointer transition-colors">Apple qoruyucu örtükləri</li>
              <li className='hover:text-[#ff003c] cursor-pointer transition-colors mt-2'>iPhone 15 seriyası</li>
              <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>iPhone 16 seriyası</li>
              <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>iPhone 17 seriyası</li>
              <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>iPhone Air</li>
            </ul>
          </section>
        );

      case 5:
        return(
        <section className='flex gap-20 items-start pt-5 px-8 bg-white h-full'>
            <ul className="space-y-1 text-[#666666] text-[13px]">
              <li className="text-[#222222] font-semibold text-[14px] hover:text-[#ff003c] cursor-pointer transition-colors">Smartfonlar</li>
              <li className='hover:text-[#ff003c] cursor-pointer transition-colors mt-2'>Apple</li>
              <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Samsung</li>
              <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>OPPO</li>
              <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Xiaomi</li>
              <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Realme</li>
              <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>HONOR</li>
              <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Vertu</li>
              <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Oscal</li>
              <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Cubot</li>
              <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Infinix</li>
              <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Motorola</li>
            </ul>
            <ul className="space-y-1 text-[#666666] text-[13px]">
              <li className="text-[#222222] font-semibold text-[14px] hover:text-[#ff003c] cursor-pointer transition-colors">Planşetlər</li>
              <li className='hover:text-[#ff003c] cursor-pointer transition-colors mt-2'>Apple</li>
              <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Samsung</li>
              <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Xiaomi</li>
              <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>HUAWEI</li>
              <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>OPPO</li>
              <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>HONOR</li>
              <li className="text-[#222222] font-semibold text-[14px] hover:text-[#ff003c] cursor-pointer transition-colors mt-7">Düyməli telefonlar</li>
              <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Nokia</li>
              <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Panasonic</li>
              <li className="text-[#222222] font-semibold text-[14px] hover:text-[#ff003c] cursor-pointer transition-colors mt-7">Ev və ofis telefonları</li>
            </ul>
            <ul className="space-y-1 text-[#666666] text-[13px] lg:w-[15%]">
              <li className="text-[#222222] font-semibold text-[14px] hover:text-[#ff003c] cursor-pointer transition-colors">Smartfon xidmətləri</li>
              <li className='hover:text-[#ff003c] cursor-pointer transition-colors mt-2'>Əməliyyat sisteminin yenilənməsi</li>
              <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Kontaktların köçürülməsi</li>
              <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Antivirusun quraşdırılması</li>
              <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Tətbiqlərin yüklənməsi (5 dək)</li>
              <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Smartfonda məlumatın köçürülməsi (-50 GB)</li>
              <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Smartfonda məlumatın köçürülməsi (50GB+)</li>
            </ul>
            <ul className="space-y-1 text-[#666666] text-[13px]">
              <li className="text-[#222222] font-semibold text-[14px] hover:text-[#ff003c] cursor-pointer transition-colors">Planşet aksesuarları</li>
              <li className="text-[#222222] font-semibold text-[14px] hover:text-[#ff003c] cursor-pointer transition-colors mt-7">Portativ akustika</li>
              <li className="text-[#222222] font-semibold text-[14px] hover:text-[#ff003c] cursor-pointer transition-colors mt-7">Qulaqlıqlar</li>
              <li className='hover:text-[#ff003c] cursor-pointer transition-colors mt-2'>Bluetooth simsiz qulaqlıqlar</li>
              <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>TWS simsiz qulaqlıqlar</li>
              <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Simli qulaqlıqlar</li>
              <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Oyun qulaqlıqları</li>
              <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Studiya qulaqlıqları</li>
              <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Qulaqlıq aksesuarları</li>
            </ul>
        </section>
      )
      case 6:
        return(
        <section className='flex gap-20 items-start pt-5 px-8 bg-white h-full'>
          <ul className="space-y-1 text-[#666666] text-[13px]">
            <li className="text-[#222222] font-semibold text-[14px] hover:text-[#ff003c] cursor-pointer transition-colors">Smart saatlar</li>
            <li className='hover:text-[#ff003c] cursor-pointer transition-colors mt-2'>Apple</li>
            <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>HUAWEI</li>
            <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Xiaomi</li>
            <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Samsung</li>
            <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Kieslect</li>
            <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Vertu</li>
            <li className="text-[#222222] font-semibold text-[14px] hover:text-[#ff003c] cursor-pointer transition-colors mt-7">Qol saatları</li>
            <li className='hover:text-[#ff003c] cursor-pointer transition-colors mt-2'>Edifice</li>
            <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Orient</li>
            <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Daniel Klein</li>
            <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Santa Barbara Polo Racquet Club</li>
            <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Swiss Military by Chrono</li>
            <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Ingersoll</li>
            <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>CURREN</li>
          </ul>
          <ul className="space-y-1 text-[#666666] text-[13px]">
            <li className="text-[#222222] font-semibold text-[14px] hover:text-[#ff003c] cursor-pointer transition-colors">Smart eynəklər</li>
            <li className="text-[#222222] font-semibold text-[14px] hover:text-[#ff003c] cursor-pointer transition-colors mt-7">Qulaqlıqlar</li>
            <li className='hover:text-[#ff003c] cursor-pointer transition-colors mt-2'>Bluetooth simsiz qulaqlıqlar</li>
            <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>TWS simsiz qulaqlıqlar</li>
            <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Simli qulaqlıqlar</li>
            <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Studiya qulaqlıqları</li>
            <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Oyun qulaqlıqları</li>
            <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Qulaqlıq aksesuarları</li>
            <li className="text-[#222222] font-semibold text-[14px] hover:text-[#ff003c] cursor-pointer transition-colors mt-7">PlayStation</li>
            <li className='hover:text-[#ff003c] cursor-pointer transition-colors mt-2'>PlayStation 5 oyunları</li>
            <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>PlayStation 4 oyunları</li>
            <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>PlayStation qulaqlıqları</li>
            <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>PlayStation manipulyatorları</li>
          </ul>
          <ul className="space-y-1 text-[#666666] text-[13px]">
            <li className="text-[#222222] font-semibold text-[14px] hover:text-[#ff003c] cursor-pointer transition-colors">Smart qolbaqlar</li>
            <li className='hover:text-[#ff003c] cursor-pointer transition-colors mt-2'>HUAWEI</li>
            <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Xiaomi</li>
            <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Vertu</li>
            <li className="text-[#222222] font-semibold text-[14px] hover:text-[#ff003c] cursor-pointer transition-colors mt-7">Smart saat kəmərləri</li>
            <li className='hover:text-[#ff003c] cursor-pointer transition-colors mt-2'>Apple</li>
            <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Xiaomi</li>
            <li className="text-[#222222] font-semibold text-[14px] hover:text-[#ff003c] cursor-pointer transition-colors mt-7">Videooyun avadanlıqları</li>
            <li className='hover:text-[#ff003c] cursor-pointer transition-colors mt-2'>Konsol</li>
            <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Oyun manipulyatorları</li>
            <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Oyun diskləri</li>
          </ul>
          <ul className="space-y-1 text-[#666666] text-[13px]">
            <li className="text-[#222222] font-semibold text-[14px] hover:text-[#ff003c] cursor-pointer transition-colors">Smart avadanlıqlar</li>
            <li className='hover:text-[#ff003c] cursor-pointer transition-colors mt-2'>Sensorlar</li>
            <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>İşıqlandırma</li>
            <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>IP videomüşahidə kameraları</li>
            <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Smart kilidlər</li>
            <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Smart yuvalar</li>
            <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Domofonlar</li>
            <li className="text-[#222222] font-semibold text-[14px] hover:text-[#ff003c] cursor-pointer transition-colors mt-7">Smart akustika</li>
            <li className='hover:text-[#ff003c] cursor-pointer transition-colors mt-2'>Yandex</li>
            <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Loewe</li>
          </ul>
        </section>
      )
      case 7:
        return(
          <section className='flex justify-between items-start pt-5 px-8 bg-white h-full'>
              <ul className="space-y-1 text-[#666666] text-[13px]">
                <li className="text-[#222222] font-semibold text-[14px] hover:text-[#ff003c] cursor-pointer transition-colors ">Notbuklar</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors mt-2'>Apple</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Asus</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Acer</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Dell</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>HP</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>HUAWEI</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Lenovo</li>
                <li className="text-[#222222] font-semibold text-[14px] hover:text-[#ff003c] cursor-pointer transition-colors mt-7">Notbuk çantaları</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors mt-2'>Bel çantaları</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Çantalar</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Kisə bel çantaları</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Mini bel çantası</li>
                <li className="text-[#222222] font-semibold text-[14px] hover:text-[#ff003c] cursor-pointer transition-colors mt-7">Planşet aksesuarları</li>
              </ul>
              <ul className="space-y-1 text-[#666666] text-[13px]">
                <li className="text-[#222222] font-semibold text-[14px] hover:text-[#ff003c] cursor-pointer transition-colors">Kompüterlər</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors mt-2'>Sistem blokları</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Monobloklar</li>
                <li className="text-[#222222] font-semibold text-[14px] hover:text-[#ff003c] cursor-pointer transition-colors mt-7">Pereferiya avadanlığı</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors mt-2'>Klaviaturalar</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Mikrofonlar</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Mouse</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Oyun klaviaturaları</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Oyun qulaqlıqları</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Oyun üçün Mouse</li>
                <li className="text-[#222222] font-semibold text-[14px] hover:text-[#ff003c] cursor-pointer transition-colors mt-7">Şəbəkə avadanlığı</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors mt-2'>Routerlər</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Wi-Fi gücləndiricilər</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Wi-Fi adapterlər</li>
              </ul>
              <ul className="space-y-1 text-[#666666] text-[13px]">
                <li className="text-[#222222] font-semibold text-[14px] hover:text-[#ff003c] cursor-pointer transition-colors">Monitorlar</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors mt-2'>Asus</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Dahua</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Philips</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>LG</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>2E</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>ViewSonic</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Dizayn monitorları</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Oyun monitorları</li>
                <li className="text-[#222222] font-semibold text-[14px] hover:text-[#ff003c] cursor-pointer transition-colors mt-7">Ofis avadanlığı</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors mt-2'>Printerlər və çfq</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>İstehlak məhsulları</li>
                <li className="text-[#222222] font-semibold text-[14px] hover:text-[#ff003c] cursor-pointer transition-colors mt-7">Videooyun avadanlıqları</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors mt-2'>Konsol</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Oyun manipulyatorları</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Oyun diskləri</li>
              </ul>
              <ul className="space-y-1 text-[#666666] text-[13px]">
                <li className="text-[#222222] font-semibold text-[14px] hover:text-[#ff003c] cursor-pointer transition-colors">Kompüter hissələri</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors mt-2'>Ana plata</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Operativ yaddaş</li>
                <li className="text-[#222222] font-semibold text-[14px] hover:text-[#ff003c] cursor-pointer transition-colors mt-7">Kompüter aksesuarları</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors mt-2'>Fleş kartlar</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>SSD və HDD kartlar</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Mousepad</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Kompüter masaları</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Kompüter adapterləri</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Oyun kresloları</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Ötürücülər</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Şəbəkə uzadıcıları</li>
                <li className="text-[#222222] font-semibold text-[14px] hover:text-[#ff003c] cursor-pointer transition-colors mt-7">Planşetlər</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors mt-2'>HONOR</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Lenovo</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Oukitel</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>HUAWEI</li>
              </ul>
              <div className='flex flex-col gap-4 w-[220px] shrink-0 pl-4'>
                <img src={NotbukImg1} alt="NotbukImg1" className="cursor-pointer" />
                <img src={NotbukImg2} alt="NotbukImg2" className="cursor-pointer" />
              </div>
          </section>
        )
      case 8 :
        return(
          <section className='flex justify-between items-start pt-5 px-8 bg-white h-full'>
              <ul className="space-y-1 text-[#666666] text-[13px]">
                <li className="text-[#222222] font-semibold text-[14px] hover:text-[#ff003c] cursor-pointer transition-colors">TV brend üzrə</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors mt-2'>Hisense</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Toshiba</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Xiaomi</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>LG</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Samsung</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>HOFFMANN</li>
                <li className="text-[#222222] font-semibold text-[14px] hover:text-[#ff003c] cursor-pointer transition-colors mt-7">Ekran tezliyi</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors mt-2'>120 Hz</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>144 Hz</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>165 Hz</li>
              </ul>
              <ul className="space-y-1 text-[#666666] text-[13px]">
                <li className="text-[#222222] font-semibold text-[14px] hover:text-[#ff003c] cursor-pointer transition-colors">TV texnologiyası</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors mt-2'>OLED</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>QLED</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Mini-LED</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>RGB</li>
                <li className="text-[#222222] font-semibold text-[14px] hover:text-[#ff003c] cursor-pointer transition-colors mt-7">Audio texnika</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors mt-2'>Soundbar</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Musiqi mərkəzləri</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Portativ akustika</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Smart akustika</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Vinil oxuyucu aksesuarları</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Blogger mikrоfonları</li>
              </ul>
              <ul className="space-y-1 text-[#666666] text-[13px]">
                <li className="text-[#222222] font-semibold text-[14px] hover:text-[#ff003c] cursor-pointer transition-colors">TV diaqonal üzrə</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors mt-2'>20"- 32" (51sm- 81sm)</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>40"- 43" (101sm- 109sm)</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>47"- 50" (119sm- 127sm)</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>55"- 60" (140sm- 152sm)</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>65"- 70" (165sm- 178sm)</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>75"- 100" (190sm- 254sm)</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>98"- 120" (248sm- 304sm)</li>
                <li className="text-[#222222] font-semibold text-[14px] hover:text-[#ff003c] cursor-pointer transition-colors mt-7">Gaming TV</li>
                <li className="text-[#222222] font-semibold text-[14px] hover:text-[#ff003c] cursor-pointer transition-colors mt-7">Televizor aksesuarları</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors mt-2'>Smart box</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>HDMI naqillər</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Ötürücülər</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Kronşteynlər</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Şəbəkə uzadıcıları</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>TV altlığı</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Batareyalar</li>
              </ul>
              <ul className="space-y-1 text-[#666666] text-[13px]">
                <li className="text-[#222222] font-semibold text-[14px] hover:text-[#ff003c] cursor-pointer transition-colors">İnteraktiv avadanlıqlar</li>
                <li className="text-[#222222] font-semibold text-[14px] hover:text-[#ff003c] cursor-pointer transition-colors mt-7">Linzalar, fleşlər, aksesuarlar</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors mt-2'>Obyektivlər, ştativlər və çantalar</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Fotostabilizatorlar</li>
                <li className="text-[#222222] font-semibold text-[14px] hover:text-[#ff003c] cursor-pointer transition-colors mt-7">Proyeksiya avadanlığı</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors mt-2'>Proyektorlar</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Proyektor ekranları</li>
                <li className="text-[#222222] font-semibold text-[14px] hover:text-[#ff003c] cursor-pointer transition-colors mt-7">Kamera və fotoaparatlar</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors mt-2'>Ani çap fotoaparatları</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Ekşn kameralar</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Fotoaparatlar</li>
              </ul>
              <div className='flex flex-col gap-4 w-[220px] shrink-0 pl-4'>
                <img src={tvImg1} alt="tvImg1" className="cursor-pointer" />
                <img src={tvImg2} alt="tvImg2" className="cursor-pointer" />
              </div>
          </section>
        )
      case 9 :
        return(
          <section className='flex justify-between items-start pt-5 px-8 bg-white h-full'>
              <ul className="space-y-1 text-[#666666] text-[13px]">
                <li className="text-[#222222] font-semibold text-[14px] hover:text-[#ff003c] cursor-pointer transition-colors">Ev üçün böyük texnika</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors mt-2'>Paltaryuyan maşınlar</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Quruducu maşınlar</li>
                <li className="text-[#222222] font-semibold text-[14px] hover:text-[#ff003c] cursor-pointer transition-colors mt-7">İqlim texnikası</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors mt-2'>Kondisionerlər</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Ventilyatorlar</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Kombi sistemləri</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Hava təmizləyicilər və nəmləndiricilər</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Qaz kolonkaları</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Elektrikli su qızdırıcıları</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Qızdırıcı ventilyatorlar</li>
              </ul>
              <ul className="space-y-1 text-[#666666] text-[13px]">
                <li className="text-[#222222] font-semibold text-[14px] hover:text-[#ff003c] cursor-pointer transition-colors">Ev üçün kiçik texnika</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors mt-2'>Tozsoranlar</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Robot tozsoranlar</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Vertikal tozsoranlar</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Yuyucu tozsoranlar</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Tiftik təmizləyən</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Ütülər</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Buxarlı generatorlar</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Şaquli buxarlı ütülər</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Buxarlı təmizləyicilər</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Tikiş maşınları</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Robot pəncərə təmizləyənlər</li>
              </ul>
              <ul className="space-y-1 text-[#666666] text-[13px]">
                <li className="text-[#222222] font-semibold text-[14px] hover:text-[#ff003c] cursor-pointer transition-colors">Ev təmizliyi</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors mt-2'>Tozsoranlar</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Robot tozsoranlar</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Vertikal tozsoranlar</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Yuyucu tozsoranlar</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Buxarlı təmizləyicilər</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Robot pəncərə təmizləyənlər</li>
                <li className="text-[#222222] font-semibold text-[14px] hover:text-[#ff003c] cursor-pointer transition-colors mt-7">Məişət məhsulları</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors mt-2'>Paltar üçün quruducu</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Ütü masaları</li>
                <li className="text-[#222222] font-semibold text-[14px] hover:text-[#ff003c] cursor-pointer transition-colors mt-7">İqlim aksesuarları</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors mt-2'>Seksiyalı radiatorlar</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Panel radiatorlar</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>İsti döşəmə</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Hava təmizləyicisi filtri</li>
              </ul>
              <ul className="space-y-1 text-[#666666] text-[13px]">
                <li className="text-[#222222] font-semibold text-[14px] hover:text-[#ff003c] cursor-pointer transition-colors">Geyimə qulluq</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors mt-2'>Paltar üçün quruducu</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Ütü masaları</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Tiftik təmizləyən</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Ütülər</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Şaquli buxarlı ütülər</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Buxarlı generatorlar</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Tikiş maşınları</li>
                <li className="text-[#222222] font-semibold text-[14px] hover:text-[#ff003c] cursor-pointer transition-colors mt-7">Ev texnikası üçün məhsullar</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors mt-2'>Tozsoran üçün başlıq</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Tozsoran üçün filtr</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Buxarlı təmizləyici üçün başlıq</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Tozsoran üçün torba</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Ütü üçün aksesuarlar</li>
              </ul>
            <div className="w-[220px] shrink-0">
              <img src={evTexImg} alt="evTexImg" className="cursor-pointer" />
            </div>
          </section>
        )
      case 10 :
        return(
          <section  className='flex justify-between items-start pt-5 px-8 bg-white h-full'>
              <ul className="space-y-1 text-[#666666] text-[13px]">
                <li className="text-[#222222] font-semibold text-[14px] hover:text-[#ff003c] cursor-pointer transition-colors">Böyük texnika</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors mt-2'>Soyuducular</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Dondurucular</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Paltaryuyan maşınlar</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Quruducu maşınlar</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Aspiratorlar</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Solo sobalar</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Qabyuyan maşınlar</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Şərab soyuducuları</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>İçki soyuducuları</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Dispenserlər</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Tibbi soyuducular</li>
                <li className="text-[#222222] font-semibold text-[14px] hover:text-[#ff003c] cursor-pointer transition-colors mt-7">Peşəkar avadanlıq</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors mt-2'>Vitrin soyuducuları</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Vitrin dondurucuları</li>
              </ul>
              <ul className="space-y-1 text-[#666666] text-[13px]">
                <li className="text-[#222222] font-semibold text-[14px] hover:text-[#ff003c] cursor-pointer transition-colors">Yemək hazırlanması</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors mt-2'>Mikrodalğalı sobalar</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Stasionar blenderlər</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Əl blenderləri</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Ətçəkən maşınlar</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Mikserlər</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>İzqara</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Multibişiricilər</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Tosterlər</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Mini sobalar</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Fritoz</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Mətbəx tərəziləri</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Sendviç və vafli hazırlayan</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Doğrayıcı</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Meyvə və tərəvəz qurudan</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Mətbəx kombaynları</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>İnduksiya plitələri</li>
              </ul>
              <ul className="space-y-1 text-[#666666] text-[13px]">
                <li className="text-[#222222] font-semibold text-[14px] hover:text-[#ff003c] cursor-pointer transition-colors">İçki hazırlanması</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors mt-2'>Elektrikli çaydanlar</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Çaydanlar və French press</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Stasionar blenderlər</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Sitrus press</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Şirəçəkənlər</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Termopotlar</li>
                <li className="text-[#222222] font-semibold text-[14px] hover:text-[#ff003c] cursor-pointer transition-colors mt-7">Quraşdırılan texnika</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors mt-2'>Quraşdırılan sobalar</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Quraşdırılan plitələr</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Aspiratorlar</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Quraşdırılan soyuducular</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Quraşdırılan qabyuyan maşınlar</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Quraşdırılan paltaryuyan maşınlar</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Quraşdırılan mikrodalğalı sobalar</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Quraşdırılan qəhvəbişirənlər</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Qida tullantıları üçün üyüdücülər</li>
              </ul>
              <ul className="space-y-1 text-[#666666] text-[13px]">
                <li className="text-[#222222] font-semibold text-[14px] hover:text-[#ff003c] cursor-pointer transition-colors ">Qəhvə hazırlanması</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors mt-2'>Qəhvəbişirənlər</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Kapsullu qəhvəbişirənlər</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Damcılı qəhvəbişirənlər</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Turka</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Qəhvəüyüdənlər</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Qəhvə</li>
                <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Qəhvəbişirən üçün kapsul</li>
                <li className="text-[#222222] font-semibold text-[14px] hover:text-[#ff003c] cursor-pointer transition-colors mt-7">Mətbəx texnikası aksesuarları</li>
                <li className="text-[#222222] font-semibold text-[14px] hover:text-[#ff003c] cursor-pointer transition-colors mt-7">Su təmizləmə filtri</li>
              </ul>
              <div className='flex flex-col gap-4 w-[220px] shrink-0 pl-4'>
                <img src={KitImg1} alt="KitImg1" className="cursor-pointer" />
                <img src={KitImg2} alt="KitImg2" className="cursor-pointer" />
              </div>
          </section>
        )
        case 11 :
          return(
            <section className='flex justify-between items-start pt-5 px-8 bg-white h-full'>
              <div className="flex gap-15">
                <ul className="space-y-1 text-[#666666] text-[13px]">
                  <li className="text-[#222222] font-semibold text-[14px] hover:text-[#ff003c] cursor-pointer transition-colors ">Yemək hazırlanması üçün qab-qacaq</li>
                  <li className='hover:text-[#ff003c] cursor-pointer transition-colors mt-2'>Qazan dəsti</li>
                  <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Qazanlar</li>
                  <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Tavalar</li>
                  <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Qapaqlar</li>
                  <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Bişirmə üçün formalar</li>
                </ul>
                <ul className="space-y-1 text-[#666666] text-[13px]">
                  <li className="text-[#222222] font-semibold text-[14px] hover:text-[#ff003c] cursor-pointer transition-colors ">Süfrə qab-qacağı</li>
                  <li className='hover:text-[#ff003c] cursor-pointer transition-colors mt-2'>Serviz dəstləri</li>
                  <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Boşqablar</li>
                  <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Fincanlar və stəkanlar</li>
                  <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Güldanlar</li>
                  <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Kasa və çərəz qabları</li>
                  <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Çəngəl-bıçaq dəsti</li>
                  <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Sinilər</li>
                </ul>
                <ul className="space-y-1 text-[#666666] text-[13px]">
                  <li className="text-[#222222] font-semibold text-[14px] hover:text-[#ff003c] cursor-pointer transition-colors ">Mətbəx üçün ləvazimatlar</li>
                  <li className='hover:text-[#ff003c] cursor-pointer transition-colors mt-2'>Çaydanlar və French press</li>
                  <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Termoslar</li>
                  <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Mətbəx ləvazimatları</li>
                  <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Saxlama qabları</li>
                  <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Bıçaqlar</li>
                  <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Şüşə məhsullar</li>
                </ul>
              </div>
              <div className="w-[220px] shrink-0">
                <img src={PotImg} alt="PotImg" className="cursor-pointer" />
              </div>
            </section>
          )
          case 12:
            return(
              <section  className='flex justify-between items-start pt-5 px-8 bg-white h-full'>
                <ul className="space-y-1 text-[#666666] text-[13px]">
                  <li className="text-[#222222] font-semibold text-[14px] hover:text-[#ff003c] cursor-pointer transition-colors ">Dyson</li>
                  <li className='hover:text-[#ff003c] cursor-pointer transition-colors mt-2'>Dyson multistayler</li>
                  <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Dyson fen ütülər</li>
                  <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Dyson hava fenləri</li>
                  <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Dyson saç aksesuarları və daraqlar</li>
                  <li className="text-[#222222] font-semibold text-[14px] hover:text-[#ff003c] cursor-pointer transition-colors mt-7 ">Ətriyyat</li>
                  <li className='hover:text-[#ff003c] cursor-pointer transition-colors mt-2'>Qadın ətirləri</li>
                  <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Kişi ətirləri</li>
                  <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Uniseks ətirləri</li>
                  <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Ətir dəstləri</li>
                </ul>
                <ul className="space-y-1 text-[#666666] text-[13px]">
                  <li className="text-[#222222] font-semibold text-[14px] hover:text-[#ff003c] cursor-pointer transition-colors ">Saç düzümü</li>
                  <li className='hover:text-[#ff003c] cursor-pointer transition-colors mt-2'>Hava fenləri</li>
                  <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Fen daraqlar</li>
                  <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Fen maşalar</li>
                  <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Fen ütülər</li>
                  <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Multistaylerlər</li>
                  <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Saçlara qulluq aksesuarları</li>
                  <li className="text-[#222222] font-semibold text-[14px] hover:text-[#ff003c] cursor-pointer transition-colors mt-7">Yeniliklər</li>
                </ul>
                <ul className="space-y-1 text-[#666666] text-[13px]">
                  <li className="text-[#222222] font-semibold text-[14px] hover:text-[#ff003c] cursor-pointer transition-colors ">Təraş və saç kəsilməsi</li>
                  <li className='hover:text-[#ff003c] cursor-pointer transition-colors mt-2'>Üzqırxanlar</li>
                  <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Saçqırxanlar</li>
                  <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Trimmerlər</li>
                  <li className="text-[#222222] font-semibold text-[14px] hover:text-[#ff003c] cursor-pointer transition-colors mt-7 ">Baxım cihazları</li>
                  <li className='hover:text-[#ff003c] cursor-pointer transition-colors mt-2'>Epilyatorlar</li>
                  <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Fotoepilyatorlar</li>
                </ul>
                <ul className="space-y-1 text-[#666666] text-[13px]">
                  <li className="text-[#222222] font-semibold text-[14px] hover:text-[#ff003c] cursor-pointer transition-colors ">Premium brendlər</li>
                  <li className='hover:text-[#ff003c] cursor-pointer transition-colors mt-2'>BORK</li>
                  <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Dyson</li>
                  <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Dreame</li>
                  <li className="text-[#222222] font-semibold text-[14px] hover:text-[#ff003c] cursor-pointer transition-colors mt-7">Sağlamlıq</li>
                  <li className='hover:text-[#ff003c] cursor-pointer transition-colors mt-2'>Elektrik diş fırçaları</li>
                  <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>İrriqatorlar</li>
                  <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Masajorlar</li>
                  <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Termometrlər</li>
                </ul>
              <div  className='flex flex-col gap-4 w-[220px] shrink-0 pl-4'>
                <img src={beautyImg1} alt="beautyImg1" className="cursor-pointer" />
                <img src={beautyImg2} alt="beautyImg2" className="cursor-pointer" />
              </div>
              </section>
            )
            case 13 :
              return(
                <section className='flex justify-between items-start pt-5 px-8 bg-white h-full'>
                    <ul className="space-y-1 text-[#666666] text-[13px]">
                      <li className="text-[#222222] font-semibold text-[14px] hover:text-[#ff003c] cursor-pointer transition-colors ">Yataq otağı</li>
                      <li className='hover:text-[#ff003c] cursor-pointer transition-colors mt-2'>Yataq otağı dəstləri</li>
                      <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Yataq otağı dolabları</li>
                      <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Çarpayılar</li>
                      <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Trümolar</li>
                      <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Tumbalar</li>
                      <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Boy aynaları</li>
                      <li className="text-[#222222] font-semibold text-[14px] hover:text-[#ff003c] cursor-pointer transition-colors mt-7 ">Oturacaqlar</li>
                      <li className='hover:text-[#ff003c] cursor-pointer transition-colors mt-2'>Mətbəx oturacaqları</li>
                      <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Qonaq otağı oturacaqlar</li>
                      <li className="text-[#222222] font-semibold text-[14px] hover:text-[#ff003c] cursor-pointer transition-colors mt-7 ">Ofis mebeli</li>
                      <li className='hover:text-[#ff003c] cursor-pointer transition-colors mt-2'>Kürsülər</li>
                      <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Ofis üçün masa</li>
                      <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Ofis üçün dolab</li>
                    </ul>
                    <ul className="space-y-1 text-[#666666] text-[13px]">
                      <li className="text-[#222222] font-semibold text-[14px] hover:text-[#ff003c] cursor-pointer transition-colors ">Qonaq otağı</li>
                      <li className='hover:text-[#ff003c] cursor-pointer transition-colors mt-2'>Qonaq otağı dəstləri</li>
                      <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Divan və kreslo</li>
                      <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Masalar</li>
                      <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Kamodlar</li>
                      <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Jurnal masaları</li>
                      <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Vitrinlər</li>
                      <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Kitab rəfləri və dolabları</li>
                      <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Oturacaqlar</li>
                      <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>TV altlığı</li>
                      <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Puflar</li>
                      <li className="text-[#222222] font-semibold text-[14px] hover:text-[#ff003c] cursor-pointer transition-colors mt-7 ">Mebel sifarişlə</li>
                      <li className='hover:text-[#ff003c] cursor-pointer transition-colors mt-2'>Mətbəx mebel dəstləri sifarişlə</li>
                      <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Qonaq otağı sifarişlə</li>
                      <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Yataq otağı sifarişlə</li>
                      <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Gənc otağı sifarişlə</li>
                      <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Dolablar sifarişlə</li>
                    </ul>
                    <ul className="space-y-1 text-[#666666] text-[13px]">
                      <li className="text-[#222222] font-semibold text-[14px] hover:text-[#ff003c] cursor-pointer transition-colors ">Mətbəx mebeli</li>
                      <li className='hover:text-[#ff003c] cursor-pointer transition-colors mt-2'>Alman mətbəxləri</li>
                      <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Mətbəx mebel dəstləri sifarişlə</li>
                      <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Mətbəx masaları</li>
                      <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Mətbəx oturacaqları</li>
                      <li className="text-[#222222] font-semibold text-[14px] hover:text-[#ff003c] cursor-pointer transition-colors mt-7 ">Yumşaq mebellər</li>
                      <li className='hover:text-[#ff003c] cursor-pointer transition-colors mt-2'>Divan və kreslolar</li>
                      <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Künc divanlar</li>
                      <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Üç yerli divanlar</li>
                      <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Kreslolar</li>
                      <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Puflar</li>
                    </ul>
                    <ul className="space-y-1 text-[#666666] text-[13px]">
                      <li className="text-[#222222] font-semibold text-[14px] hover:text-[#ff003c] cursor-pointer transition-colors ">Gənc otağı</li>
                      <li className='hover:text-[#ff003c] cursor-pointer transition-colors mt-2'>Gənc otağı dəstləri</li>
                      <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Beşiklər və uşaq çarpayıları</li>
                      <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Çalışma masaları</li>
                      <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Gənc çarpayılar</li>
                      <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Dolablar</li>
                      <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Tumbalar</li>
                      <li className="text-[#222222] font-semibold text-[14px] hover:text-[#ff003c] cursor-pointer transition-colors mt-7">Dəhliz mebelləri</li>
                      <li className='hover:text-[#ff003c] cursor-pointer transition-colors mt-2'>Dəhliz dolabları</li>
                      <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Sürgülü dolablar</li>
                      <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Ayaqqabı rəfləri</li>
                    </ul>
                  <div className='flex flex-col gap-4 w-[220px] shrink-0 pl-4'>
                    <img src={teksImg1} alt="teksImg1" className="cursor-pointer" />
                    <img src={teksImg2} alt="teksImg2" className="cursor-pointer" />
                  </div>
                </section>
              ) 
             case 14 :
                return(
                  <section className='flex justify-between items-start pt-5 px-8 bg-white h-full'>
                    <ul className="space-y-1 text-[#666666] text-[13px]">
                      <li className="text-[#222222] font-semibold text-[14px] hover:text-[#ff003c] cursor-pointer transition-colors ">Nəqliyyat</li>
                      <li className='hover:text-[#ff003c] cursor-pointer transition-colors mt-2'>Velosipedlər</li>
                      <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Velosiped aksesuarları</li>
                      <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Mopedlər</li>
                      <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Uşaq üçün skuterlər</li>
                      <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Motosikletlər</li>
                      <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Kvadrosikllar</li>
                      <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Baqqi</li>
                      <li className="text-[#222222] font-semibold text-[14px] hover:text-[#ff003c] cursor-pointer transition-colors mt-7 ">Termo çanta</li>
                      <li className="text-[#222222] font-semibold text-[14px] hover:text-[#ff003c] cursor-pointer transition-colors mt-7 ">Avtoelektronika</li>
                      <li className='hover:text-[#ff003c] cursor-pointer transition-colors mt-2'>Avtomobil monitorları</li>
                      <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Maqnitofonlar</li>
                      <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Avtomobil üçün dinamiklər</li>
                      <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Gücləndiricilər</li>
                      <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Subwoofer</li>
                      <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Enerji toplama cihazları</li>
                      <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Avtomobil üçün şarj stansiyası</li>
                    </ul>
                    <ul className="space-y-1 text-[#666666] text-[13px]">
                      <li className="text-[#222222] font-semibold text-[14px] hover:text-[#ff003c] cursor-pointer transition-colors ">Elektronəqliyyat</li>
                      <li className='hover:text-[#ff003c] cursor-pointer transition-colors mt-2'>Elektromobillər</li>
                      <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Elektrosamokatlar</li>
                      <li className="text-[#222222] font-semibold text-[14px] hover:text-[#ff003c] cursor-pointer transition-colors mt-7 ">Ehtiyat hissələri</li>
                      <li className='hover:text-[#ff003c] cursor-pointer transition-colors mt-2'>Akkumulyatorlar</li>
                      <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>İşıqlandırma avadanlıqları</li>
                      <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Əyləc bəndləri</li>
                      <li className="text-[#222222] font-semibold text-[14px] hover:text-[#ff003c] cursor-pointer transition-colors mt-7">Avtomobil aksesuarları</li>
                      <li className='hover:text-[#ff003c] cursor-pointer transition-colors mt-2'>Sükan örtükləri</li>
                      <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Avtomobil ayaqaltıları</li>
                      <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Telefon tutacaqlar</li>
                    </ul>
                    <ul className="space-y-1 text-[#666666] text-[13px]">
                      <li className="text-[#222222] font-semibold text-[14px] hover:text-[#ff003c] cursor-pointer transition-colors ">Yağlar və mayelər</li>
                      <li className='hover:text-[#ff003c] cursor-pointer transition-colors mt-2'>Mühərrik yağları</li>
                      <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Hidravlik yağlar</li>
                      <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Sürət qutusu yağları</li>
                      <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Antifrizlər</li>
                      <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Yanacaq qatqıları</li>
                      <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Əyləc mayeləri</li>
                      <li className="text-[#222222] font-semibold text-[14px] hover:text-[#ff003c] cursor-pointer transition-colors mt-7">Texniki dəstək</li>
                      <li className="text-[#222222] font-semibold text-[14px] hover:text-[#ff003c] cursor-pointer transition-colors mt-7">Qulluq vasitələri</li>
                      <li className='hover:text-[#ff003c] cursor-pointer transition-colors mt-2'> Qulluq və təmizlik vasitələri</li>
                    </ul>
                    <ul className="space-y-1 text-[#666666] text-[13px]">
                      <li className="text-[#222222] font-semibold text-[14px] hover:text-[#ff003c] cursor-pointer transition-colors ">Təkərlər</li>
                      <li className='hover:text-[#ff003c] cursor-pointer transition-colors mt-2'>Avtomobil təkərləri</li>
                      <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Motosikl təkərləri</li>
                      <li className="text-[#222222] font-semibold text-[14px] hover:text-[#ff003c] cursor-pointer transition-colors mt-7">Yüksək təzyiqli yuyucular</li>
                      <li className='hover:text-[#ff003c] cursor-pointer transition-colors mt-2'>Fieldmann</li>
                      <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Karcher</li>
                      <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Keman</li>
                      <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>P.I.T.</li>
                      <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Pamer</li>
                      <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Stihl</li>
                      <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>WOKIN</li>
                      <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Total</li>
                    </ul>
                    <div  className='flex flex-col gap-4 w-[220px] shrink-0 pl-4'>
                      <img src={neqImg1} alt="neqImg1" className="cursor-pointer" />
                      <img src={neqImg2} alt="neqImg2" className="cursor-pointer" />
                    </div>
                  </section>
                )
            case 15 :
              return(
                <section className='flex justify-between items-start pt-5 px-8 bg-white h-full'>
                  <ul className="space-y-1 text-[#666666] text-[13px]">
                    <li className="text-[#222222] font-semibold text-[14px] hover:text-[#ff003c] cursor-pointer transition-colors ">Geymerlər üçün məhsullar</li>
                    <li className='hover:text-[#ff003c] cursor-pointer transition-colors mt-2'>Oyun periferiyası</li>
                    <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Oyun smartfonları</li>
                    <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Oyun monitorları</li>
                    <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Videooyunlar</li>
                    <li className="text-[#222222] font-semibold text-[14px] hover:text-[#ff003c] cursor-pointer transition-colors mt-7">Musiqi alətləri</li>
                    <li className='hover:text-[#ff003c] cursor-pointer transition-colors mt-2'>Gitaralar</li>
                    <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Gitara aksesuarları</li>
                    <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Gitara gücləndiricilər</li>
                    <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>MIDI-kontrollerlər</li>
                    <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Skripkalar</li>
                    <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Nəfəs alətləri</li>
                    <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Pianolar</li>
                    <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Audio interfeysləri</li>
                    <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Sintezatorlar</li>
                    <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Musiqi alət aksesuarları</li>
                    <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Zərb alətləri</li>
                    <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Dinamiklər</li>
                    <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>İşıqlandırma avadanlığı</li>
                  </ul>
                  <ul className="space-y-1 text-[#666666] text-[13px]">
                    <li className="text-[#222222] font-semibold text-[14px] hover:text-[#ff003c] cursor-pointer transition-colors ">Kolleksiya fiqurları</li>
                    <li className="text-[#222222] font-semibold text-[14px] hover:text-[#ff003c] cursor-pointer transition-colors mt-7">Nintendo</li>
                    <li className="text-[#222222] font-semibold text-[14px] hover:text-[#ff003c] cursor-pointer transition-colors mt-7">Studiya aksesuarları</li>
                    <li className='hover:text-[#ff003c] cursor-pointer transition-colors mt-2'>Studiya monitorları</li>
                    <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Studiya qulaqlıqları</li>
                  </ul>
                  <ul className="space-y-1 text-[#666666] text-[13px]">
                    <li className="text-[#222222] font-semibold text-[14px] hover:text-[#ff003c] cursor-pointer transition-colors ">İdman məhsulları</li>
                    <li className='hover:text-[#ff003c] cursor-pointer transition-colors mt-2'>Universal trenajorlar</li>
                    <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Velotrenajorlar</li>
                    <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Qaçış trenajorları</li>
                    <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Fitnes üçün avadanlıq</li>
                    <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Futbol üçün avadanlıq</li>
                    <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Boks üçün avadanlıq</li>
                    <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Rollerlər və dayaqlar</li>
                    <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Qantellər və çəki daşları</li>
                    <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Tennis üçün avadanlıq</li>
                    <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Basketbol üçün avadanlıq</li>
                  </ul>
                  <ul className="space-y-1 text-[#666666] text-[13px]">
                    <li className="text-[#222222] font-semibold text-[14px] hover:text-[#ff003c] cursor-pointer transition-colors ">Ev heyvanları üçün məhsullar</li>
                    <li className="text-[#222222] font-semibold text-[14px] hover:text-[#ff003c] cursor-pointer transition-colors mt-7">Oyunlar</li>
                    <li className='hover:text-[#ff003c] cursor-pointer transition-colors mt-2'>Pazllar</li>
                    <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Masaüstü oyunlar</li>
                    <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>İdman oyunları</li>
                    <li className="text-[#222222] font-semibold text-[14px] hover:text-[#ff003c] cursor-pointer transition-colors mt-7">LEGO</li>
                  </ul>
                    <div className="w-[220px] shrink-0">
                        <img src={gymImg} alt="gymImg" className="cursor-pointer" />
                    </div>
                </section>
              )
            case 16:
              return(
                <section className='flex justify-between items-start pt-5 px-8 bg-white h-full'>
                  <ul className="space-y-1 text-[#666666] text-[13px]">
                    <li className="text-[#222222] font-semibold text-[14px] hover:text-[#ff003c] cursor-pointer transition-colors ">Uşaq yedirilməsi</li>
                    <li className='hover:text-[#ff003c] cursor-pointer transition-colors mt-2'>Yedirilmə üçün oturacaqlar</li>
                    <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Qidalandırıcılar</li>
                    <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Uşaq qab-qacaqları</li>
                    <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Əmziklər</li>
                    <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Qidalandırıcı üçün isidicilər</li>
                    <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Su qabları</li>
                    <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Əmzik aksesuarları</li>
                    <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Uşaq üçün termoslar</li>
                    <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Termo çantalar</li>
                    <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Önlüklər</li>
                    <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Qidalandırıcılar üçün aksesuarlar</li>
                  </ul>
                  <ul className="space-y-1 text-[#666666] text-[13px]">
                    <li className="text-[#222222] font-semibold text-[14px] hover:text-[#ff003c] cursor-pointer transition-colors">Uşaq üçün sağlamlıq, qulluq</li>
                    <li className='hover:text-[#ff003c] cursor-pointer transition-colors mt-2'>Uşaq üçün şampun</li>
                    <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Uşaq üçün salfetlər</li>
                    <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Uşaq üçün diş məcunu</li>
                    <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Uşaq üçün diş fırçaları</li>
                    <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Termometrlər</li>
                    <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Uşaq üçün duş geli</li>
                    <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Vannalar</li>
                    <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Vanna oturacaqları</li>
                    <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Güvəclər</li>
                    <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Süngərlər</li>
                    <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Dırnaq qayçıları</li>
                    <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Bezlər</li>
                    <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Uşaq üçün daraqlar</li>
                    <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Bələmə masaları</li>
                    <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Uşaq kremləri</li>
                    <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Uşaq üçün bədən yağı</li>
                    <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Dişlər üçün oyuncaqlar</li>
                  </ul>
                  <ul className="space-y-1 text-[#666666] text-[13px]">
                    <li className="text-[#222222] font-semibold text-[14px] hover:text-[#ff003c] cursor-pointer transition-colors">Oyunlar və oyuncaqlar</li>
                    <li className='hover:text-[#ff003c] cursor-pointer transition-colors mt-2'>Yumşaq oyuncaqlar</li>
                    <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Hamam oyuncaqları</li>
                    <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Musiqili oyuncaqlar</li>
                    <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>İnteraktiv oyuncaqlar</li>
                    <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Oyun xalçaları</li>
                    <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Uşaq arabası oyuncaqları</li>
                    <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Oyuncaq avtomobillər</li>
                    <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Yataq üçün mobillər</li>
                    <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Şax-şax oyuncaqlar</li>
                    <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Oyuncaq silahlar</li>
                    <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Uşaq çantaları</li>
                    <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Kuklalar</li>
                    <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Hava döşəkləri</li>
                  </ul>
                  <ul className="space-y-1 text-[#666666] text-[13px]">
                    <li className="text-[#222222] font-semibold text-[14px] hover:text-[#ff003c] cursor-pointer transition-colors">Uşaq otağı</li>
                    <li className='hover:text-[#ff003c] cursor-pointer transition-colors mt-2'>Beşiklər və uşaq çarpayıları</li>
                    <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Manejlər</li>
                    <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Bələmə masaları</li>
                    <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Yastıqlar</li>
                    <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Uşaq təhlükəsizliyi</li>
                    <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Uşaqlar üçün matraslar</li>
                    <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Döşək üzləri</li>
                    <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Yorğanlar</li>
                    <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Yelləncək və şezloqlar</li>
                    <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Uşaq yataq dəstləri</li>
                    <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Yedirmə üçün yastıq</li>
                  </ul>
                  <div className="w-[220px] shrink-0">
                    <img src={babyImg} alt="babyImg" className="cursor-pointer" />
                  </div>
                </section>
              )
              case 17:
                return(
                  <section className='flex justify-between items-start pt-5 px-8 bg-white h-full'>
                    <ul className="space-y-1 text-[#666666] text-[13px]">
                      <li className="text-[#222222] font-semibold text-[14px] hover:text-[#ff003c] cursor-pointer transition-colors">Ümumi baxım</li>
                      <li className='hover:text-[#ff003c] cursor-pointer transition-colors mt-2'>Trimmerlər</li>
                      <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Daraqlar</li>
                      <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Dırnaq qayçıları</li>
                      <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Qurulama cihazları</li>
                    </ul>
                    <ul className="space-y-1 text-[#666666] text-[13px]">
                      <li className="text-[#222222] font-semibold text-[14px] hover:text-[#ff003c] cursor-pointer transition-colors">Yataq və daşıma çantaları</li>
                      <li className='hover:text-[#ff003c] cursor-pointer transition-colors mt-2'>Yataqlar</li>
                      <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Daşıma çantaları</li>
                    </ul>
                    <ul className="space-y-1 text-[#666666] text-[13px]">
                      <li className="text-[#222222] font-semibold text-[14px] hover:text-[#ff003c] cursor-pointer transition-colors">Təmizlik və gigiyena</li>
                      <li className='hover:text-[#ff003c] cursor-pointer transition-colors mt-2'>Biotualetlər</li>
                      <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Qoxu neytrallaşdırıcılar</li>
                      <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Zibil torbaları</li>
                    </ul>
                    <ul className="space-y-1 text-[#666666] text-[13px]">
                      <li className="text-[#222222] font-semibold text-[14px] hover:text-[#ff003c] cursor-pointer transition-colors">Su və qida qabları</li>
                      <li className='hover:text-[#ff003c] cursor-pointer transition-colors mt-2'>Portativ su qabları</li>
                      <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Avtomatik qidalandırıcı</li>
                    </ul>
                      <div className="w-[220px] shrink-0">
                        <img src={HomeAniImg} alt="HomeAniImg" className="cursor-pointer" />
                      </div>
                  </section>
                )
                case 18:
                  return(
                    <section className='flex justify-between items-start pt-5 px-8 bg-white h-full'>
                      <ul className="space-y-1 text-[#666666] text-[13px]">
                        <li className="text-[#222222] font-semibold text-[14px] hover:text-[#ff003c] cursor-pointer transition-colors">Elektrik alətlər</li>
                        <li className='hover:text-[#ff003c] cursor-pointer transition-colors mt-2'>Drel-şurup bağlayanlar</li>
                        <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Drel-mikserlər</li>
                        <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Perforatorlar</li>
                        <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Dağıdıcı çəkiclər</li>
                        <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Qaykaburanlar</li>
                        <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Cilalayıcılar</li>
                        <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Lagondalar</li>
                        <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Freyzerlər</li>
                        <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Lobziklər</li>
                        <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Dairəvi mişarlar</li>
                        <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Künc kəsən mişarlar</li>
                        <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Rəndələr</li>
                        <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Texniki fenlər</li>
                        <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Yapışqan tapancalar</li>
                        <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Bülov</li>
                      </ul>
                      <ul className="space-y-1 text-[#666666] text-[13px]">
                        <li className="text-[#222222] font-semibold text-[14px] hover:text-[#ff003c] cursor-pointer transition-colors">Ölçmə və işarələmə alətləri</li>
                        <li className='hover:text-[#ff003c] cursor-pointer transition-colors mt-2'>Metrə</li>
                        <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Ştanger</li>
                        <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Səviyyə ölçənlər</li>
                        <li className="text-[#222222] font-semibold text-[14px] hover:text-[#ff003c] cursor-pointer transition-colors mt-7">Tikinti avadanlıqları</li>
                        <li className='hover:text-[#ff003c] cursor-pointer transition-colors mt-2'>Qaynaq avadanlıqları</li>
                        <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Generatorlar</li>
                        <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Kompressorlar</li>
                        <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Döyəcləmə alətləri</li>
                        <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Yüksək təzyiqli yuyucular</li>
                        <li className="text-[#222222] font-semibold text-[14px] hover:text-[#ff003c] cursor-pointer transition-colors mt-7">İnşaat materialları</li>
                        <li className='hover:text-[#ff003c] cursor-pointer transition-colors mt-2'>Laminat</li>
                      </ul>
                      <ul className="space-y-1 text-[#666666] text-[13px]">
                        <li className="text-[#222222] font-semibold text-[14px] hover:text-[#ff003c] cursor-pointer transition-colors">İnşaat geyimləri və aksesuarları</li>
                        <li className="text-[#222222] font-semibold text-[14px] hover:text-[#ff003c] cursor-pointer transition-colors mt-7">Sərfiyyat məhsulları</li>
                        <li className='hover:text-[#ff003c] cursor-pointer transition-colors mt-2'>Burğular</li>
                        <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Kəsici alətlər üçün disklər</li>
                        <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Lobzik üçün ülgüclər</li>
                        <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Ülgüclər</li>
                      </ul>
                      <ul className="space-y-1 text-[#666666] text-[13px]">
                        <li className="text-[#222222] font-semibold text-[14px] hover:text-[#ff003c] cursor-pointer transition-colors">Əl alətlər</li>
                        <li className='hover:text-[#ff003c] cursor-pointer transition-colors mt-2'>Qısqaçlar</li>
                        <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Kəlbətinlər</li>
                        <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Kəsici kəlbətinlər</li>
                        <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Stripperlər</li>
                        <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Armatur kəsənlər</li>
                        <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Çilingər və dülgərlər</li>
                        <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Boya fırçaları</li>
                        <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Mala</li>
                        <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Şpatellər</li>
                        <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Boya çəkən rollerlər</li>
                        <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Pnevmatik boya çiləyiciləri</li>
                        <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Çəkiclər</li>
                        <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Tikinti bıçaqları</li>
                        <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Açarlar</li>
                        <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Mismarçıxaranlar</li>
                        <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Hermetik tapançalar</li>
                      </ul>
                      <div  className='flex flex-col gap-4 w-[220px] shrink-0 pl-4'>
                        <img src={fixImg1} alt="fixImg1" className="cursor-pointer" />
                        <img src={fixImg2} alt="fixImg2" className="cursor-pointer" />
                      </div>
                    </section>
                  )
          case 19:
            return(
              <section  className='flex justify-between items-start pt-5 px-8 bg-white h-full'>
                <ul className="space-y-1 text-[#666666] text-[13px]">
                  <li className="text-[#222222] font-semibold text-[14px] hover:text-[#ff003c] cursor-pointer transition-colors">Suvarma  sistemləri</li>
                  <li className='hover:text-[#ff003c] cursor-pointer transition-colors mt-2'>Su nasosları</li>
                  <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Bağ şlanqları</li>
                  <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Şlanq hissələri</li>
                  <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Suvarma və çiləmə sistemləri</li>
                  <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Suvarma və çiləmə hissələri</li>
                  <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Dərmansəpənlər</li>
                </ul>
                <ul className="space-y-1 text-[#666666] text-[13px]">
                  <li className="text-[#222222] font-semibold text-[14px] hover:text-[#ff003c] cursor-pointer transition-colors">Qazon və bitkilərə baxım</li>
                  <li className='hover:text-[#ff003c] cursor-pointer transition-colors mt-2'>Otbiçənlər</li>
                  <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Bağ alətləri və avadanlıqlar</li>
                  <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Əkinçilik alətləri</li>
                  <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Bağ mişarları</li>
                  <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Nərdivanlar</li>
                  <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Kolkəsənlər və bağ qayçıları</li>
                  <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Bağ baltaları</li>
                  <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Alaq otu kəsənlər</li>
                </ul>
                <ul className="space-y-1 text-[#666666] text-[13px]">
                  <li className="text-[#222222] font-semibold text-[14px] hover:text-[#ff003c] cursor-pointer transition-colors">Hovuz və avadanlıqlar</li>
                  <li className='hover:text-[#ff003c] cursor-pointer transition-colors mt-2'>Karkas hovuzlar</li>
                  <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Şişmə hovuzlar</li>
                  <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Üzgüçülük aksesuarları</li>
                  <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Hovuz üçün avadanlıqlar</li>
                  <li className="text-[#222222] font-semibold text-[14px] hover:text-[#ff003c] cursor-pointer transition-colors mt-7">Təmir tikinti</li>
                  <li className='hover:text-[#ff003c] cursor-pointer transition-colors mt-2'>Elektrik alətlər</li>
                  <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Ölçmə və işarələmə alətləri</li>
                  <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>İnşaat geyimləri və aksesuarları</li>
                  <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Əl alətlər</li>
                  <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Sərfiyyat məhsulları</li>
                  <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Tikinti avadanlıqları</li>
                  <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Santexnika</li>
                  <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Batareyalar</li>
                  <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>İnşaat materialları</li>
                </ul>
                <ul className="space-y-1 text-[#666666] text-[13px]">
                  <li className="text-[#222222] font-semibold text-[14px] hover:text-[#ff003c] cursor-pointer transition-colors">Bağ mebelləri</li>
                  <li className="text-[#222222] font-semibold text-[14px] hover:text-[#ff003c] cursor-pointer transition-colors mt-7">Yüksək təzyiqli yuyucular</li>
                  <li className="text-[#222222] font-semibold text-[14px] hover:text-[#ff003c] cursor-pointer transition-colors mt-7">Ağıllı ev</li>
                  <li className='hover:text-[#ff003c] cursor-pointer transition-colors mt-2'>Sensorlar</li>
                  <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>İşıqlandırma</li>
                  <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>IP videomüşahidə kameraları</li>
                  <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Smart kilidlər</li>
                  <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Smart yuvalar</li>
                  <li className='hover:text-[#ff003c] cursor-pointer transition-colors'>Domofonlar</li>
                </ul>
                  <div className='flex flex-col gap-4 w-[220px] shrink-0 pl-4'>
                     <img src={gardenImg1} alt="gardenImg1" className="cursor-pointer" />
                     <img src={gardenImg2} alt="gardenImg2" className="cursor-pointer" />
                  </div>
              </section>
            )
          case 20:
            return(
              <section className="flex gap-15 pt-5 px-8 bg-white h-full"> 
                <ul >
                  <li  className="text-[#222222] font-semibold text-[14px] hover:text-[#ff003c] cursor-pointer transition-colors">Sevindirən kart 50 AZN</li>
                  <li  className="text-[#222222] font-semibold text-[14px] hover:text-[#ff003c] cursor-pointer transition-colors mt-7">Sevindirən kart 1000 AZN</li>
                </ul>
                <ul>
                  <li className="text-[#222222] font-semibold text-[14px] hover:text-[#ff003c] cursor-pointer transition-colors">Sevindirən kart 100 AZN</li>
                </ul>
                 <ul>
                  <li className="text-[#222222] font-semibold text-[14px] hover:text-[#ff003c] cursor-pointer transition-colors">Sevindirən kart 300 AZN</li>
                </ul>
                 <ul>
                  <li className="text-[#222222] font-semibold text-[14px] hover:text-[#ff003c] cursor-pointer transition-colors">Sevindirən kart 500 AZN</li>
                </ul>
              </section>
            )
      default:
        return null;
    }
  };

  return (
    <div className="absolute left-[22%] lg:left-[18%] top-3 w-[78%] lg:w-[82%] h-[516px] bg-white rounded-r-[10px] z-40 overflow-hidden ">
      {renderSubMenuContent()}
    </div>
  );
}

export default Menu;