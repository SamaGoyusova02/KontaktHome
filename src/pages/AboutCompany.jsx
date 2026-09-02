import React, { useEffect } from 'react'

function AboutCompany() {
     useEffect(() => {
        document.title = "Şirkət haqqında";
      }, []);
  return (
   <section className='lg:mt-[166px] mt-[160px]'>
         <div className="bg-white h-[80px] lg:mx-10 flex items-center pl-4">
          <h2 className="font-[Montserrat,_sans-serif] text-[20px] font-[600] text-[#323232]">
            Şirkət haqqında
          </h2>
        </div>
        <div className='bg-white mt-2 font-[Montserrat,_sans-serif]  rounded-[10px] lg:mx-10 py-7 px-5'>
            <h2 className='text-[20px] font-[600] text-black'>Biz kimik?</h2>
            <ul className='mt-2 text-[#323232] space-y-4'>
                <li><span className='font-[600]'>Kontakt</span> – texnologiyalar və pərakəndə ticarət sahəsində etibarlı və dayanıqlı oyunçu kimi tanınan aparıcı Azərbaycan şirkəti <span className='font-[600]'>ABC-Telecom</span>-un tərkibinə daxildir. Belə güclü bir strukturun dəstəyi inkişaf strategiyamızın, xidmət keyfiyyətimizin və müştərilərimizlə partnyorlarımızın bizə göstərdiyi yüksək etimadın əsasını təşkil edir. Hər bir böyük biznes hekayəsi kimi bizim hekayəmiz də müştəridən, yəni səndən başlayır. Sənin istək və ehtiyacların bizim üçün çox vacibdir. Əsas məqsədimiz ən yaxşı xidmət göstərməklə səni sevindirmək, büdcənə və istəyinə uyğun düzgün məhsul seçimi etməkdə sənə yardımçı olmaqdır. "Kontakt – Sevindirir" ifadəsini də məhz bunun üçün özümüzə sloqan olaraq seçmişik. Rəqəmsal və məişət texnikası, mebel və tekstil satışı üzrə ölkənin ən böyük mağazalar şəbəkəsindən biri kimi səni sevindirmək üçün nələr edirik?</li>
                <li>
                    <p className='font-[600]'>Sevilən brendləri sənə daha yaxın gətiririk:</p>
                    <p>Biz Samsung, LG, Bosch, Tefal, Huawei, Sony, Panasonic, Delonghi Group, Electrolux, Thomas, Beurer, Bang & Olufsen, Karcher, Beko, H Gala, Cassore, Schafer, TAÇ, Simge mobilya kimi 40-dan çox beynəlxalq brendin rəsmi distribütoru; Oppo, Toshiba, Intel, Black&Decker, Hoffmann, Blackview, Kieslect, Etias, Viper, Dark Project, Blizzard, SBS, Energy Sistem, Defunc və Urbanista kimi beynəlxalq brendlərin Azərbaycanda eksklüziv distribütoru; Apple brendinin isə rəsmi satış mərkəziyik. Brend portfoliomuz durmadan böyüyür, odur ki, sevdiyin dünya brendlərinin məhsullarını rahatlıqla "Kontakt" mağazalarından əldə edə bilərsən.</p>
                </li>
                <li>
                    <p className='font-[600]'>Axtardığın hər şeyi bir məkana toplamışıq:</p>
                    <p>İş, dərs, ev, əyləncə və istirahət üçün arzuladığın məhsulların 30 000-dən çeşidini eyni məkanda – "Kontakt" mağazalarımızda tapa bilərsən. Ünvanlarla buradan tanış ol. </p>
                </li>
                <li>
                    <p className='font-[600]'>Sərfəli təkliflər ilə üzünü güldürürük:</p>
                    <p>İstər nağd, istərsə də hissəli alış şərtlərini uyğun etməklə, istədiyin məhsulları daha rahat əldə etməyinə şərait yaradırıq. "Axşam bazarı", "Şeş Qoşa", "Ən yaxşı qiymətə zəmanət" kimi kampaniyalar isə artıq hamının ən sevimli kampaniyalarına çevrilib.</p>
                </li>
                <li>
                    <p className='font-[600]'>Sənin məmnunluğun üçün əlavə xidmətlər təklif edirik:</p>
                    <p>Məhsullarımıza 3 ilədək rəsmi zəmanət təqdim edirik. Bütün zəmanət müddətində məhsulla bağlı hər hansı çətinliyin yaranarsa, partnyor servis mərkəzləri ilə çətinliyini qısa müddətdə aradan qaldırırıq. Bundan başqa, rahatlığını düşünərək məhsulun təmirdə olduğu müddətdə sənə əvəzləyici məhsul təklif edirik. İşdir, məhsulunun təmiri partnyor servis mərkəzlərində 14 gün ərzində yekunlaşmazsa, biz o məhsulu sənin üçün tamamilə yenisi ilə əvəz edəcəyik. Bəli, bu qədər iddialıyıq.</p>
                </li>
                <li>
                    <p className='font-[600]'>Sosial öhdəliyimizi yerinə yetiririk:</p>
                    <p>Həyata keçirdiyimiz və dəstək olduğumuz sosial məsuliyyət layihələri ilə cəmiyyətdə yeni müsbət dəyərlər yaratmağa çalışırıq.</p>
                </li>
                <li>
                    <p className='font-[600]'>Həmişə əlçatanıq:</p>
                    <p>Sənə bir zəng qədər yaxınıq. *6060 Çağrı Mərkəzinə zəng edərək məhsul və xidmətlərimizlə bağlı bütün suallarını ünvanlaya bilərsən. Bizi həmçinin sosial şəbəkələrdə də asanlıqla tapa bilərsən.</p>
                </li>
                <li>
                    <p className='font-[600]'>Tariximiz:</p>
                    <p>Kiçik mağazadan ölkənin ən böyük pərakəndə satış şəbəkələrindən birinə çevrildik. İlk gündən bu yana inkişaf tempimiz sürətlə artdı. Məqsədimiz həmişə artan məhsul və xidmətlərimizlə sənə daha çox sevinc yaşatmaqdır.</p>
                </li>
            </ul>

            <ul className='list-disc space-y-4 lg:pl-4 mt-4'>
                <li>2006-cı ildə mobil telefon, aksessuar və mobil nömrələrin satışını həyata keçirən ilk kiçik mağaza ilə fəaliyyətə başladıq. Eyni ildə daha 3 mağazamızı istifadəyə verdik. İlk mağazalarımızın adı "Kontakt Mobile" idi.</li>
                <li>2010-cu ildə məhsul kateqoriyaları siyahısına kompüter və kamera kateqoriyasını, 2011-ci ildə isə məişət texnikasını əlavə etdik və şəbəkəmizin adını "Kontakt Electronics" adına dəyişdik.</li>
                <li>2013-cü ildə mebel kateqoriyasını da əlavə etdik. Nəticədə "Ev" konsepsiyası tamamlandı və şəbəkəmiz "Kontakt Home" adlandırıldı.</li>
                <li>2020-ci ildə rebrendinq prosesi ərəfəsində şəbəkənin adı "Kontakt Home"dan "Kontakt"a dəyişdirildi. "Home" və "Smart" hissəcikləri yalnız mağaza konsepti olaraq saxlanıldı.</li>
                <li>2021-ci ildən ölkə sərhədlərini aşaraq Gürcüstanda fəaliyyət göstərməyə başladıq.</li>
            </ul>
            <p className='mt-4'>Hazırda 40-dan çox beynəlxalq brendin rəsmi distribüteri olaraq Azərbaycan üzrə ümumilikdə 38 mağaza, Gürcüstanda 3, eləcə də  kontakt.az və kontakt.ge onlayn mağazası ilə xidmət etməyə davam edirik. </p>
        </div>
   </section>
  )
}


export default AboutCompany