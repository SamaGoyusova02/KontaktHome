import { useContext, useEffect, useState } from "react";
import { DATA } from "../Context/DataContext";

function Stores() {
  const { address } = useContext(DATA);
  const [selectedCategory, setSelectedCategory] = useState("Bakı");
  const categories = ["Bakı", "Regionlar", "Gürcüstan"];
  const filteredAddress = address?.filter(
    (item) => item.StoresCategory === selectedCategory
  );
  useEffect(() => {
    document.title = "Mağazalar";
  }, []);
  
  return (
    <>
      <section className="mt-[166px]">
        <div className="bg-white h-[80px] lg:mx-10 flex items-center pl-4">
          <h2 className="font-[Montserrat,_sans-serif] text-[20px] font-[600] text-[#323232]">
            Mağazalarımız
          </h2>
        </div>

        <div className="bg-white h-[650px] lg:mx-10 rounded-[10px] overflow-hidden mt-2 shadow-lg border border-gray-200">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d777195.7719560295!2d49.4079965150123!3d40.454885800000014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4030873df9684fcd%3A0x44c7e8d98597a6f!2sKontakt%20Azadl%C4%B1q%20metrosu!5e0!3m2!1saz!2saz!4v1786563895904!5m2!1saz!2saz"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            className="lg:p-8 md:p-6 p-4 rounded-[10px]"
          ></iframe>
        </div>
      </section>
      <section className="mt-8 lg:mx-10 mx-4 flex items-center gap-3">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`lg:px-6 px-4 py-2.5 rounded-full cursor-pointer font-[Montserrat,_sans-serif] text-[10px] md:text-[11px] lg:text-[13px] font-[500] whitespace-nowrap shrink-0  transition-all duration-300 ${
              selectedCategory === cat
                ? "bg-[#323232] text-white shadow-md"
                : "bg-[#eaeaea] text-[#4b5563] hover:bg-[#323232] hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </section>
      <section className="my-6 lg:mx-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-4">
        {filteredAddress && filteredAddress.length > 0 ? (
          filteredAddress.map((item, i) => (
            <div
              key={item.id || i}
              className="bg-white rounded-[12px] p-5 flex flex-col justify-between shadow-sm border border-gray-100 min-h-[170px]"
            >
              <div>
                <h2 className="font-[Montserrat,_sans-serif] text-[15px] font-bold text-[#323232] mb-2">
                  Kontakt "{item.title}"
                </h2>
                <p className="font-[Montserrat,_sans-serif] font-[500] text-[14px] text-[#777777] leading-relaxed">
                  {item.address}
                </p>
              </div>
              <div className="mt-6 flex items-center gap-1.5 text-[14px] font-[Montserrat,_sans-serif]">
                <span className="text-[#17a539] font-semibold">
                  İş saatları:
                </span>
                <span className="text-[#777777] font-[600]">
                  {item.hours}
                </span>
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500 py-10 font-[Montserrat]">
            Bu kateqoriyada mağaza tapılmadı.
          </p>
        )}
      </section>
    </>
  );
}

export default Stores;