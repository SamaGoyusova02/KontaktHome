import { TiLocation } from "react-icons/ti";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoYoutube } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaTelegram } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";
import { SiVisa } from "react-icons/si";
import { SiMastercard } from "react-icons/si";
import footerIcon from "../assets/footerIcon.svg"
import { Link } from "react-router";

function Footer() {
  return (
    <footer className='bg-white mt-10 px-4 md:px-10 lg:px-16 py-9 mx-auto font-[Montserrat,sans-serif]'>
      <div className="flex flex-col lg:flex-row lg:justify-between lg:gap-8">
        <div className="order-1 lg:order-4 pb-6 border-b border-gray-100 lg:border-none">
          <div className="hidden lg:block">
            <h3 className='text-[#323232] font-[600]'>Əlaqə</h3>
            <div className="flex items-center gap-2 mt-2">
              <p className="text-[25px] font-[600] text-[#323232]">
                <span className="text-[#ff003c]">*</span>6060
              </p>
              <p className="flex items-center text-[#323232] bg-[#f7f5f5] px-3 py-1 gap-1 rounded-[5px] cursor-pointer">
                <TiLocation className="text-[20px]" /> <span className="font-[550]"><Link to="Mağazalar">Xəritə</Link></span>
              </p>
            </div>
          </div>
          <h3 className='text-[#323232] font-[600] lg:mt-4'>Biz sosial şəbəkələrdə</h3>
          <ul className="flex items-center gap-3 mt-3">
            <li className="text-[#323232] text-[26px] cursor-pointer"><a href="https://www.facebook.com/Kontakthome/" target="_blank"><FaFacebook /></a></li>
            <li className="text-[#323232] text-[26px] cursor-pointer"><a href="https://www.instagram.com/kontakt_home/?hl=en%2F" target="_blank"><RiInstagramFill /></a></li>
            <li className="text-[#323232] text-[26px] cursor-pointer"><a href="https://www.youtube.com/channel/UCf8uNO6TqBobRSWzBl9HPAA" target="_blank"><IoLogoYoutube /></a></li>
            <li className="text-[#323232] text-[26px] cursor-pointer"><a href="https://api.whatsapp.com/send/?phone=994508286060&text&type=phone_number&app_absent=0" target="_blank"><IoLogoWhatsapp /></a></li>
            <li className="text-[#323232] text-[26px] cursor-pointer"><a href="https://t.me/kontakt_az" target="_blank"><FaTelegram /></a></li>
            <li className="text-[#323232] text-[26px] cursor-pointer"><a href="https://www.tiktok.com/@kontakt_home"><AiFillTikTok /></a></li>
          </ul>
          <h3 className='text-[#323232] font-[600] mt-6'>Təhlükəsiz alış-veriş</h3>
          <div className="flex items-center gap-2 mt-3">
            <p className="bg-[#f7f5f5] px-2 py-0.5 rounded-[5px]"><SiVisa className="text-[#323232] text-[34px]" /></p>
            <p className="bg-[#f7f5f5] px-2 py-0.5 rounded-[5px]"><SiMastercard className="text-[#323232] text-[34px]" /></p>
          </div>
          <div className="lg:hidden mt-6">
            <h3 className='text-[#323232] font-[600]'>Əlaqə</h3>
            <div className="flex items-center gap-2 mt-2">
              <p className="text-[25px] font-[600] text-[#323232]">
                <span className="text-[#ff003c]">*</span>6060
              </p>
              <p className="flex items-center text-[#323232] bg-[#f7f5f5] px-3 py-1 gap-2 rounded-[5px] cursor-pointer">
                <TiLocation className="text-[18px]" /> <span className="font-[550]">Xəritə</span>
              </p>
            </div>
          </div>
        </div>
        <div className="order-2 lg:order-1 py-6 border-b border-gray-100 lg:border-none lg:py-0">
          <h3 className='text-[#323232] font-[600] mb-3'>Kontakt</h3>
          <ul className='text-[#777777] font-[500] text-[12px] lg:text-[14px] md:text-[14px] flex flex-wrap lg:flex-col gap-y-2.5'>
            <li className='w-1/2 lg:w-full pr-2 hover:underline duration-300 cursor-pointer'><Link to="Şirkət haqqında">Şirkət haqqında</Link></li>
            <li className='w-1/2 lg:w-full pr-2 hover:underline duration-300 cursor-pointer'><a href="https://jobs.glorri.com/companies/abc-telecom" target="_blank">Karyera</a></li>
            <li className='w-1/2 lg:w-full pr-2 hover:underline duration-300 cursor-pointer'><Link to="Qarabağ proqramı">Qarabağ proqramı</Link></li>
            <li className='w-1/2 lg:w-full pr-2 hover:underline duration-300 cursor-pointer'><a href="https://www.youtube.com/c/KontaktHome-TV" target="_blank">Kontakt Video</a></li>
            <li className='w-1/2 lg:w-full pr-2 hover:underline duration-300 cursor-pointer'>Bloq</li>
          </ul>
        </div>
        <div className="order-3 lg:order-2 py-6 border-b border-gray-100 lg:border-none lg:py-0">
          <h3 className='text-[#323232] font-[600] mb-3'>Müştəriyə dəstək</h3>
          <ul className='text-[#777777] font-[500] text-[12px] lg:text-[14px] md:text-[14px] flex flex-wrap lg:flex-col gap-y-2.5'>
            <li className='w-1/2 lg:w-full pr-2 hover:underline duration-300 cursor-pointer'><Link to="catdirilma-ve-odeme">Çatdırılma və ödəmə</Link></li>
            <li className='w-1/2 lg:w-full pr-2 hover:underline duration-300 cursor-pointer'>Geri qaytarma</li>
            <li className='w-1/2 lg:w-full pr-2 hover:underline duration-300 cursor-pointer'>Hissə-hissə ödəniş</li>
            <li className='w-1/2 lg:w-full pr-2 hover:underline duration-300 cursor-pointer'>Saytdan istifadə şərtləri</li>
            <li className='w-1/2 lg:w-full pr-2 hover:underline duration-300 cursor-pointer'>Konfidensiallıq siyasəti</li>
            <li className='w-1/2 lg:w-full pr-2 hover:underline duration-300 cursor-pointer'>Zəmanətlər</li>
            <li className='w-1/2 lg:w-full pr-2 hover:underline duration-300 cursor-pointer'>Tez-tez verilən suallar</li>
          </ul>
        </div>
        <div className="order-4 lg:order-3 pt-6 lg:pt-0">
          <h3 className='text-[#323232] font-[600] mb-3'>Xidmət və servislər</h3>
          <ul className='text-[#777777] font-[500] text-[12px] lg:text-[14px] md:text-[14px] flex flex-wrap lg:flex-col gap-y-2.5'>
            <li className='w-1/2 lg:w-full pr-2 hover:underline duration-300 cursor-pointer'>İki saata qapında</li>
            <li className='w-1/2 lg:w-full pr-2 hover:underline duration-300 cursor-pointer'>Promokodlar</li>
            <li className='w-1/2 lg:w-full pr-2 hover:underline duration-300 cursor-pointer'>Trade-in</li>
            <li className='w-1/2 lg:w-full pr-2 hover:underline duration-300 cursor-pointer'>Ən yaxşı qiymətə zəmanət!</li>
            <li className='w-1/2 lg:w-full pr-2 hover:underline duration-300 cursor-pointer lg:block hidden'>Korporativ satışlar</li>
          </ul>
        </div>
      </div>
      <div className="bg-[#f7f5f5] flex justify-center items-center gap-2 py-4 -mx-4 md:-mx-10 lg:-mx-16 -mb-9 mt-4">
        <p className="font-[Montserrat,_sans-serif] font-[500] text-[14px] "> © Kontak {new Date().getFullYear()}</p>
        <img src={footerIcon} alt="footerIcon" />
      </div>
    </footer>
  );
}

export default Footer;