import { useEffect } from "react";

function BestWarranty() {
    useEffect(() => {
    document.title = "Ən yaxşı qiymətə zəmanət";
  }, []);

  return (
    <section className="mt-[166px] lg:mx-10 mx-3"> 
    <div className="bg-white h-[80px]  flex items-center pl-6">
       <h2 className="font-[Montserrat,_sans-serif] text-[20px] font-[600] text-[#323232]">Ən yaxşı qiymətə zəmanət!</h2>
   </div>

    <div className="bg-white rounded-[10px] mt-2 p-6">
        <div className="text-[#323232] space-y-3">
            <p>İstər smartfon, istər televizor, məişət texnikası, mebel və digər məhsullar – fərq etməz, ən yaxşı qiymət bizdədir! Biz qiymətə 100% yox, 120% zəmanət veririk!</p>
            <p>Bəli, istənilən məhsulu digər rəsmi şəbəkələrdə daha ucuz tap, bizdən qiymət fərqinin 120%-nə endirim eldə et! Əgər mağazalarımızdan alış-veriş etməyi planlayırsansa və digər rəsmi şəbəkələrin birində – pərakəndə və ya onlayn mağazada həmin məhsulu daha ucuz qiymətə tapmısansa, aradakı fərqin 120%-i qədər endirim əldə edəcəksən.</p>
            <p>Kampaniya həm nağd, həm də taksit kartları ilə alınan bütün məhsullara şamil olunur. Hissə-hissə ödənişlə alınan məhsullar rəqib mağazada qüvvədə olan qiymət və şərtlərlə təqdim edilir.</p>
            <p>Onlayn şəkildə endirim almaq üçün "Əlavə Qeyd" bölməsində digər rəsmi şəbəkələrdə gördüyün məhsulun linkini bizə göndər.</p>
            <p>Aşağıdakı şərtlər yerinə yetirildiyi təqdirdə məhsulları digər rəsmi şəbəkələrin təklif etdiyi qiymətə əldə olunması mümkündür:</p>
        </div>

        <ul className="text-[#323232] space-y-2 mt-5 list-disc lg:pl-4" >
            <li>Daha ucuz qiymət, rəsmi satış və xidmət lisenziyasına malik olan digər rəsmi elektronika, məişət texnikası və mebel satışı ilə məşğul mağazalar şəbəkələrində qeydə alınıbsa.</li>
            <li>"Kontakt" və digər rəsmi şəbəkələrin təklif etdiyi məhsul tamamilə eynidirsə (məhsulun adı, modeli, əsas texniki xüsusiyyətləri, komplektasiya, rəng və eyni taksit kartları ilə aylara bölünmə aralığı).</li>
            <li>Müqayisə oflayn və onlayn qiymətlərdədirsə, digər rəsmi şəbəkə qiyməti belə təsdiqlənir: şəbəkənin rəsmi veb saytındakı məhsulu göstərdikdə, orijinal reklam materialı göstərdikdə, mağazada çəkilmiş məhsulun fotoşəkilini göstərdikdə.</li>
            <li>Müqayisə zamanı aşağıdakılar nəzərə alınır: digər rəsmi şəbəkələrdə daha ucuz olduğu iddia edilən məhsul "Kontakt" mağazalarında təklif olunan məhsulla tamamilə eynilik təşkil etməlidir; məhsul yeni olmalıdır (qablaşdırma qüsursuz, tam komplektasiya olmalıdır); "Vitrin nümunəsi" və "Tükənməkdə olan" məhsul olmamalıdır; digər rəsmi şəbəkələrdə olan qiymət təklifi səhv və saytın texniki nasazlığ səbəbilə ilə əlaqəli olmamalıdır.</li>
            <li>Şirkət müvafiq bir təsdiq olmadıqda və ya digər rəsmi şəbəkələrin qiymət təklifinin uyğunluğunu yoxlamaq mümkün olmadıqda və ya məhsul olmadıqda endirim etməkdən imtina etmək hüququna malikdir.</li>
            <li>Kampaniyada yalnız fiziki şəxslər iştirak edir</li>
            <li>Kampaniya qaydaları əvvəlcədən xəbərdarlıq edilmədən dəyişdirilə bilər.</li>
            <li>Kampaniya müddətsizdir.</li>
        </ul>
    </div>
    </section>
  )
}

export default BestWarranty