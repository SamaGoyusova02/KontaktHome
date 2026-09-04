import { useEffect } from "react";
import error404 from "../assets/404.png"
import { Link } from "react-router";

function Error() {
 useEffect(() => { 
   document.title = "404 Not Found";
 }, []);
  return (
    <section className='bg-white mx-3 lg:mx-9 mt-[166px] rounded-[10px] py-20'>
        <div className="flex justify-center items-center gap-3">
            <img  src={error404} alt="error404" className="w-[45px]" />
            <p className="font-[700] lg:text-[60px] text-[#323232] md:text-[50px] text-[40px]">404</p>
        </div>
        <div className="flex flex-col justify-center items-center">
            <p className="text-[#323232] lg:text-[21px] font-[600] mt-4">Sorğuna əsasən məlumat tapılmadı.</p>
            <p className="text-[#777777] mt-2">Axtarış ifadəsini daha dəqiq qeyd et.</p>
        </div>
        <div className="flex justify-center items-center mt-7">
         <button className="border w-[240px] py-3 rounded-[10px] font-[550] hover:underline text-[#323232]"><Link to="/" >Əsas səhifə</Link></button>
        </div>
    </section>
  )
}

export default Error