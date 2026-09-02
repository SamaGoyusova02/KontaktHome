import React, { useState, useEffect } from 'react';
import SalesImg1 from "../assets/SalesImg1.webp";
import SalesImg2 from "../assets/SalesImg2.webp";
import PartnyorImg1 from "../assets/PartnyorImg1.webp";
import PartnyorImg2 from "../assets/PartnyorImg2.webp";
import PartnyorImg3 from "../assets/PartnyorImg3.webp";
import PartnyorImg4 from "../assets/PartnyorImg4.webp";
import PartnyorImg5 from "../assets/PartnyorImg5.webp";
import PartnyorImg6 from "../assets/PartnyorImg6.webp";
import PartnyorImg7 from "../assets/PartnyorImg7.webp";
import PartnyorImg8 from "../assets/PartnyorImg8.webp";
import PartnyorImg9 from "../assets/PartnyorImg9.webp";
import PartnyorImg10 from "../assets/PartnyorImg10.webp";
import PartnyorImg11 from "../assets/PartnyorImg11.webp";
import PartnyorImg12 from "../assets/PartnyorImg12.webp";
import PartnyorImg13 from "../assets/PartnyorImg13.webp";
import PartnyorImg14 from "../assets/PartnyorImg14.webp";
import PartnyorImg15 from "../assets/PartnyorImg15.webp";
import PartnyorImg16 from "../assets/PartnyorImg16.webp";
import PartnyorImg17 from "../assets/PartnyorImg17.webp";
import PartnyorImg18 from "../assets/PartnyorImg18.webp";
import PartnyorImg19 from "../assets/PartnyorImg19.webp";
import PartnyorImg20 from "../assets/PartnyorImg20.webp";
import PartnyorImg21 from "../assets/PartnyorImg21.webp";
import PartnyorImg22 from "../assets/PartnyorImg22.webp";
import PartnyorImg23 from "../assets/PartnyorImg23.webp";
import PartnyorImg24 from "../assets/PartnyorImg24.webp";
import PartnyorImg25 from "../assets/PartnyorImg25.webp";
import PartnyorImg26 from "../assets/PartnyorImg26.webp";
import PartnyorImg27 from "../assets/PartnyorImg27.webp";
import PartnyorImg28 from "../assets/PartnyorImg28.webp";
import PartnyorImg29 from "../assets/PartnyorImg29.webp";

function CorporateSales() {
    useEffect(() => {
        document.title = "Korporativ satışlar";
    }, []);

    const images = [SalesImg1, SalesImg2];

    const partners = [
        PartnyorImg1, PartnyorImg2, PartnyorImg3, PartnyorImg4, PartnyorImg5,
        PartnyorImg6, PartnyorImg7, PartnyorImg8, PartnyorImg9, PartnyorImg10,
        PartnyorImg11, PartnyorImg12, PartnyorImg13, PartnyorImg14, PartnyorImg15,
        PartnyorImg16, PartnyorImg17, PartnyorImg18, PartnyorImg19, PartnyorImg20,
        PartnyorImg21, PartnyorImg22, PartnyorImg23, PartnyorImg24, PartnyorImg25,
        PartnyorImg26, PartnyorImg27, PartnyorImg28, PartnyorImg29
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000);

        return () => clearInterval(timer);
    }, [images.length]);

    return (
        <>
            <section className="mt-[166px]">
                <div className="bg-white h-[80px] lg:mx-10 flex items-center pl-4">
                    <h2 className="font-[Montserrat,_sans-serif] text-[20px] font-[600] text-[#323232]">
                        Korporativ satışlar
                    </h2>
                </div>

                <section className="bg-white rounded-[10px] lg:mx-10  p-2  lg:p-6 shadow-sm mt-2 font-[Montserrat,_sans-serif]">
                    <div className="w-full overflow-hidden mb-8">
                        <div
                            className="flex transition-transform duration-700 ease-in-out"
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        >
                            {images.map((img, index) => (
                                <div key={index} className="w-full flex-shrink-0">
                                    <img
                                        src={img}
                                        alt={`Slide ${index + 1}`}
                                        className="w-full h-auto max-h-[160px] sm:max-h-[300px] md:h-[450px] lg:h-[260px] object-cover  block mt-2 lg:mt-0 md:mt-0"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="text-[#323232] space-y-1   font-[Montserrat,_sans-serif]">
                        <p>Biz müxtəlif növ yüksək keyfiyyətli rəqəmsal və məişət texnikasının, həmçinin mebellərin pərakəndə satışını həyata keçirməklə yanaşı korporativ müştərilərlə əməkdaşlığa xüsusi diqqət yetiririk.</p>
                        <p >Hal-hazırda 2000-dən çox korporativ müştəri sayı ilə nəinki Azərbaycan bazarında, hətta Qafqazda da qısa müddət ərzində lider mövqelərdən birini tutmağı bacarmışıq.</p>
                        <p className='mt-3'>Korporativ sahədə fərdi yanaşma prinsipi ilə hərəkət edirik və partnyor şirkətlər üçün eksklüziv şərtlərlə əməkdaşlıq təkliflərimiz aşağıdakı kimidir:</p>

                        <ul className="list-disc pl-5 space-y-2 text-gray-700 mt-3">
                            <li>Əməkdaşlıq etdiyimiz şirkətlər üçün xüsusi endirimli qiymətlər;</li>
                            <li>Korporativ müştərilərə kreditlə satış xidməti;</li>
                            <li>Əməkdaşlıq müddətində ödənişlərini köçürmə yolu ilə edə bilmək imkanı;</li>
                            <li>Telefon, notbuk, kondisioner, mikrodalğalı soba və bu kimi digər elektrotexnika vasitələrinin təmini;</li>
                            <li>Dispenser, printer və bu kimi ofis avadanlıqlarını əldə etmək imkanı;</li>
                            <li>Saytımızda əks olunan məhsullarla yanaşı, orada mövcud olmayan məhsulları belə öncədən sifarişlə əldə edə bilmə imkanı.</li>
                        </ul>

                        <p className="mt-3">Bizimlə əməkdaşlıq etmək üçün aşağıdakı əlaqə vasitələrindən sizə uyğun olanını seçə bilərsiniz:</p>

                        <ul className=" p-4 rounded-lg space-y-2 list-disc">
                            <li className='space-y-2'>
                                <p className="text-[#323232] font-[Montserrat,_sans-serif] ">Aşağıdaki nömrə ilə əlaqə saxlamaqla:</p>
                                <a href="tel:+994102607432">+994102607432</a>
                            </li>
                            <li>
                                <span className='text-[#323232] font-[Montserrat,_sans-serif]'>Poçt ünvanımıza yazmaqla : </span>
                                <a href="mailto:corporate-sales@abc-telecom.az" className="text-[#5278e1] hover:underline duration-500">
                                    corporate-sales@abc-telecom.az
                                </a>
                            </li>
                        </ul>
                    </div>


                    <section className="mt-3 pt-6 border-t border-gray-100">
                        <h2 className="text-[20px] font-bold text-[#323232] mb-6">Partnyorlarımız:</h2>

                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
                            {partners.map((logo, index) => (
                                <div
                                    key={index}
                                    className="flex justify-center items-center h-[140px] sm:h-[170px] bg-white overflow-hidden"
                                >
                                    <img
                                        src={logo}
                                        alt={`Partnyor ${index + 1}`}
                                        className="w-full h-full object-contain scale-110"
                                    />
                                </div>
                            ))}
                        </div>
                    </section>
                </section>
            </section>
        </>
    );
}

export default CorporateSales;