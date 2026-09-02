import { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import QR from '../assets/QR.webp'
import Shexsiyyet from '../assets/Shexsiyyet.jpg'
function DoorClearance() {
  useEffect(() => {
    document.title = "Çatdırılma və ödəmə";
  }, []);

  const [activeTab, setActiveTab] = useState('kuryer');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  
  const getActiveTitle = () => {
    switch (activeTab) {
      case 'kuryer': return 'Kuryerlə çatdırılma';
      case 'kargomat': return 'Kargomatla çatdırılma';
      case 'pickup': return 'Pick Up çatdırılma';
      case 'ayliq': return 'Aylıq ödənişlər';
      default: return 'Bölmələr';
    }
  };

  const handleSelectTab = (tabId) => {
    setActiveTab(tabId);
    setIsMobileMenuOpen(false); 
  };

  return (
    <section className="mt-[166px] lg:mx-10 md:mx-3 font-[Montserrat,_sans-serif]">
     
      <div className="bg-white h-[80px] flex items-center pl-6 rounded-[10px] mb-4">
        <h2 className="text-[20px] font-[600] text-[#323232]">Çatdırılma və ödəmə</h2>
      </div>

      <div className="bg-white p-4 lg:p-6 rounded-[10px] shadow-sm flex flex-col md:flex-row gap-4 lg:gap-6">
        
        {/* MOBİL MENU */}
        <div className="block md:hidden relative">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="w-full bg-[#f8f9fa] border border-[#e7e7e9] py-3 px-4 rounded-xl flex justify-between items-center text-[14px] font-[500] text-[#323232]"
          >
            <span>{getActiveTitle()}</span>
            <IoIosArrowDown className={`transition-transform duration-200 ${isMobileMenuOpen ? 'rotate-180' : ''}`} />
          </button>

          {isMobileMenuOpen && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-[#e7e7e9] rounded-xl shadow-lg z-30 flex flex-col p-1">
              <button
                onClick={() => handleSelectTab('kuryer')}
                className={`text-left py-2.5 px-4 rounded-lg text-[14px] font-[500] ${activeTab === 'kuryer' ? 'text-[#ff003c] bg-gray-50' : 'text-[#323232]'}`}
              >
                Kuryerlə çatdırılma
              </button>
              <button
                onClick={() => handleSelectTab('kargomat')}
                className={`text-left py-2.5 px-4 rounded-lg text-[14px] font-[500] ${activeTab === 'kargomat' ? 'text-[#ff003c] bg-gray-50' : 'text-[#323232]'}`}
              >
                Kargomatla çatdırılma
              </button>
              <button
                onClick={() => handleSelectTab('pickup')}
                className={`text-left py-2.5 px-4 rounded-lg text-[14px] font-[500] ${activeTab === 'pickup' ? 'text-[#ff003c] bg-gray-50' : 'text-[#323232]'}`}
              >
                Pick Up çatdırılma
              </button>
              <button
                onClick={() => handleSelectTab('ayliq')}
                className={`text-left py-2.5 px-4 rounded-lg text-[14px] font-[500] ${activeTab === 'ayliq' ? 'text-[#ff003c] bg-gray-50' : 'text-[#323232]'}`}
              >
                Aylıq ödənişlər
              </button>
            </div>
          )}
        </div>

        {/* MASAÜSTÜ  SOL MENU */}
        <div className="hidden md:flex w-[230px] flex-col shrink-0 border-r border-[#e7e7e9] pr-4 pl-1">
          <button
            onClick={() => setActiveTab('kuryer')}
            className={`text-left py-1.5 px-3 rounded-lg text-[14px] whitespace-nowrap transition-all font-[500] cursor-pointer ${
              activeTab === 'kuryer' ? 'text-[#ff003c] font-[600]' : 'text-[#323232] hover:text-[#000]'
            }`}
          >
            Kuryerlə çatdırılma
          </button>

          <button
            onClick={() => setActiveTab('kargomat')}
            className={`text-left py-1.5 px-3 rounded-lg text-[14px] whitespace-nowrap transition-all font-[500] cursor-pointer ${
              activeTab === 'kargomat' ? 'text-[#ff003c] font-[600]' : 'text-[#323232] hover:text-[#000] '
            }`}
          >
            Kargomatla çatdırılma
          </button>

          <button
            onClick={() => setActiveTab('pickup')}
            className={`text-left py-1.5 px-3 rounded-lg text-[14px] whitespace-nowrap transition-all font-[500] cursor-pointer ${
              activeTab === 'pickup' ? 'text-[#ff003c] font-[600]' : 'text-[#323232] hover:text-[#000]'
            }`}
          >
            Pick Up çatdırılma
          </button>

          <button
            onClick={() => setActiveTab('ayliq')}
            className={`text-left py-1.5 px-3 rounded-lg text-[14px] whitespace-nowrap transition-all font-[500] cursor-pointer ${
              activeTab === 'ayliq' ? 'text-[#ff003c] font-[600]' : 'text-[#323232] hover:text-[#000] '
            }`}
          >
            Aylıq ödənişlər
          </button>
        </div>

    
        <div className="flex-1 pt-1 md:pt-0 ">
          
          {/* 1. Kuryer bölməsi */}
          {activeTab === 'kuryer' && (
            <section className="text-[#323232]">
             <div>
                <h3 className="text-[20px] md:text-[20px] font-[600] mb-3">Çatdırılma</h3>
                <ul className="space-y-3 list-disc pl-5">
                  <li>Çatdırılma göstərilən ünvana saat 10:00-18:00 aralığında həyata keçirilir.</li>
                  <li>Çatdırılma üçün razılaşdırılmış vaxtda göstərilən ünvanda olmağınız vacibdir.</li>
                  <li>Kuryer yola düşməzdən təxminən 1 saat əvvəl müştəriyə məlumat verir.</li>
                  <li>Onlayn sifariş təsdiqləndikdən sonra çatdırılma vaxtı üçün müştəri ilə əlavə əlaqə qurulacaq.</li>
                  <li>Müştəri təklif edilən gündə məhsulu qəbul edə bilməzsə, məhsul 7 gün ərzində saxlanılır. Bu müddət bitdikdən sonra sifariş ləğv edilir.*</li>
                </ul>
                <p className="my-4">*Bu qayda yalnız ödəniş edilməmiş sifarişlərə və bütün çatdırılma növlərinə aiddir.</p>
             </div>
             <div>
                <h3 className="text-[20px] md:text-[20px] font-[600] mb-3">Sifarişin Təhvil Verilməsi</h3>
                <ul className="space-y-3 list-disc pl-5">
                  <li>Çatdırılma, dəhlizlərdə və keçidlərdə maneə olmadığı halda ünvan daxilində yerinə yetirilir.</li>
                  <li>Keçidlərin, qapıların, dəhlizlərin ölçüləri məhsulun qablaşdırmasından ən azı 5 sm böyük olmalıdır.</li>
                  <li>Əgər şərait məhsulun daşınmasına imkan vermirsə, məhsul ünvanın ən yaxın nöqtəsinə təhvil verilir.</li>
                  <li>
                    Kuryer:
                    <div className="space-y-2 mt-3">
                      <p>- Ərazi təmizliyi və obyektlərin yer dəyişməsi ilə məşğul olmur.</p>
                      <p>- Məhsulların istifadə qaydaları, quraşdırılması və tənzimlənməsi barədə məsləhət vermir.</p>
                    </div>
                  </li>
                  <li>
                    Sifarişin qəbul zamanı:
                    <div className="space-y-2 mt-3">
                        <p>- Məhsulun xarici görünüşünü və qablaşdırmasını,</p>
                        <p>- Məhsul sayını,</p>
                        <p>- Komplektasiyanı və sənədlərin mövcudluğunu yoxlamaq hüququnuz var.</p>
                    </div>
                  </li>
                  <li>Çatdırılma zamanı sifariş yalnız müvafiq şəxsə və ya onun adından məlumat verən şəxsə təhvil verilir.</li>
                  <li>Sifariş sənədlərin imzalanması ilə tamamlanmış sayılır. Sənədlər həmçinin elektron formada təqdim edilə bilər.</li>
                  <li className="font-[600]">Azərbaycan Respublikasının hüdudlarından kənara çatdırılma həyata keçirilmir.</li>
                </ul>
             </div>
              <div>
                <h3 className="text-[20px] md:text-[20px] font-[600] mb-3 my-3">Çatdırılma Müddəti</h3>
                <p className="mb-3">Bakı, Sumqayıt, Xırdalan:</p>
                <ul className="space-y-3 list-disc pl-5">
                  <li>Bakı şəhəri üzrə - Kiçik ölçülü sifarişlər (anbarda mövcuddursa) və 14:30-a qədər verilmiş sifarişlər həmin gün çatdırılır.</li>
                  <li>Sumqayıt, Xırdalan - Kiçik ölçülü sifarişlər (anbarda mövcuddursa) növbəti gün çatdırılır.</li>
                  <li>Böyük ölçülü sifarişlər mərkəzi anbardadırsa 2 gün ərzində çatdırılır, digər anbarlardan çatdırılma müddəti uzana bilər.</li>
                </ul>
                 <p className="my-3" >Regionlar:</p>
                 <ul className="space-y-3 list-disc pl-5">
                    <li>Məhsulun regional mağazada  və anbarda mövcudluğundan aslı olaraq 5 gün ərzində.</li>
                    <li>Digər mağaza və anbarlardan satış edilərsə müddət uzana bilər.</li>
                 </ul>
              </div>
              <div>
                <h3 className="text-[20px] md:text-[20px] font-[600] mb-3 my-3">Çatdırılma Qiyməti</h3>
                  <ul className="space-y-3 list-disc pl-5">
                    <li>Sifariş məbləği 50 AZN-ə qədər olduqda çatdırılma 3 AZN təşkil edir.</li>
                    <li>50 AZN-dən yuxarı sifarişlərdə çatdırılma ödənişsizdir.</li>
                    <li>Dəqiq ünvanı olmayan və ya təhvil şərtləri uyğun olmayan sifarişlər üçün çatdırılma həyata keçirilmir.</li>
                    <li>Əlavə olaraq paket üçün ödəniş tutula bilər - ölçüsündən asılı olaraq 0.10-dan 0.50 AZN-ə qədər. Məbləğ ümumi hesab-fakturaya daxil edilir.</li>
                    <li>Sifarişi rəsmiləşdirən istifadəçi göstərilən çatdırılma şərtləri ilə avtomatik olaraq razılaşmış sayılır.</li>
                  </ul>
              </div>
              <div>
                <h3 className="text-[20px] md:text-[20px] font-[600] mb-3 my-3">Ekspres Çatdırılma</h3>
                <p className="my-3 font-[600]">Rəqəmsal və Kiçik Məişət Texnikası</p>
                <ul  className="space-y-3 list-disc pl-5">
                  <li>Qiymət: 20 AZN</li>
                  <li>
                    Bakı, Sumqayıt, Xırdalan:
                    <div className="space-y-2 mt-3">
                        <p>- 17:00-a qədər sifarişlər həmin gün,</p>
                        <p>- 17:00-dan sonra verilən sifarişlər növbəti gün çatdırılır.</p>
                    </div>
                  </li>
                  <li>Quba, Gəncə, Masallı, Bərdə, Qəbələ, Naxçıvan, Saatlı:</li>
                </ul>
                <p className="my-3">Məhsullar ərazi üzrə mağaza və ya anbardadırsa növbəti gün çatdırılır. Digər mağaza və anbarlardan ekspres çatdırılma mümkün olmur.</p>
                <p className="my-3 font-[600]">Böyük Məişət Texnikası</p>
                <ul  className="space-y-3 list-disc pl-5">
                  <li>Qiymət: 20 AZN</li>
                  <li>Bakı, Sumqayıt, Xırdalan: Növbəti gün.</li>
                  <li>Quba, Gəncə, Masallı, Bərdə, Qəbələ, Naxçıvan, Saatlı</li>
                </ul>
                <p className="my-3 font-[600]">Məhsullar ərazi üzrə mağaza və ya anbardadırsa növbəti gün çatdırılır. Digər mağaza və anbarlardan ekspres çatdırılma mümkün olmur.</p>
                <p className="my-3 font-[600]">Mebel</p>
                <ul className="space-y-3 list-disc pl-5">
                  <li>
                    Bakı, Sumqayıt, Gəncə üçün:
                    <div className="space-y-2 mt-3">
                        <p>- Quraşdırılmayan məhsullar: Ekspres çatdırılma qiyməti 49.99 AZN.</p>
                        <p>- Quraşdırılması tələb olunan məhsullar: Çatdırılma və quraşdırılma birlikdə 109.99 AZN.</p>
                    </div>
                  </li>
                  <li>Sifarişlə hazırlanan mebel məhsulları istehsalı tamamlandıqdan sonra standart müddətdə çatdırılır.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-[20px] md:text-[20px] font-[600] mb-3 my-3">Ödəniş Üsulları</h3>
                <ul className="space-y-3 list-disc pl-5">
                  <li>Bank kartı ilə onlayn ödəniş</li>
                  <li>"Kontakt"dan hissə-hissə ödəniş</li>
                  <li>KapitalBank (BirBank) taksit kartı</li>
                  <li>Unibank (UCard) taksit kartı</li>
                  <li>Leobank taksit kartı</li>
                  <li>ABB (TamKart) taksit kartı</li>
                  <li>Bank of Baku (BolKart) taksit kartı</li>
                  <li>Yapı Kredi Bank (WorldCard) taksit kartı</li>
                  <li>Sifarişi təhvil alarkən bank kartı ilə və ya nağd ödəniş</li>
                  <li>Apple Pay və Google Pay</li>
                </ul>
              </div>
            </section>
          )}

          {/* 2. Kargomat bölməsi */}
          {activeTab === 'kargomat' && (
            <section className="text-[#323232]">
              <h3 className="text-[20px] md:text-[20px] font-[600] text-[#323232] mb-3">Sifarişin Kargomatla çatdırılma ilə rəsmiləşdirilməsi prosesi</h3>
              <p className="my-3">“Kargomat” çatdırılma üsulu aşağıdakı şərtlər yerinə yetirildikdə aktiv olur:</p>
              <ul className="space-y-3 list-disc pl-5">
                <li>səbətdəki məhsullar Kargomatla çatdırılmanı dəstəkləyən kateqoriyalara* aiddirsə.</li>
                <li>ödəmə üsulu kimi onlayn kartla ödəniş və ya Birbank və Leobank taksit kartları ilə ödəniş seçilibsə.</li>
              </ul>
              <p className="my-3 italic text-[15px] font-[500]">*Kargomatla çatdırılmanı dəstəkləyən kateqoriyalar</p>
             <div className="max-w-[750px] border border-[#e7e7e9] bg-white">
            <table className="w-full border-collapse text-left text-[14px] text-[#323232]">
              <tbody className="text-[18px]">
                <tr className="border-b border-[#e7e7e9]">
                  <td className="w-1/3 py-4 px-3 border-r border-[#e7e7e9] align-top">Telefonlar</td>
                  <td className="w-2/3 py-4 px-3  align-top">Smartfonlar / Oyun smartfonları / Düyməli telefonlar / Stasionar telefonlar</td>
                </tr>
                <tr className="border-b border-[#e7e7e9]">
                  <td className="w-1/3 py-4 px-3 border-r border-[#e7e7e9] align-top">Smart qadjetlər</td>
                  <td className="w-2/3 py-4 px-3 align-top">Smart saatlar / Smart qolbaqlar / Qol saatları / Uşaq smart saatları / Saat aksesuarları</td>
                </tr>
                <tr className="border-b border-[#e7e7e9]">
                  <td className="w-1/3 py-4 px-3 border-r border-[#e7e7e9] align-top">Planşetlər və el. kitablar</td>
                  <td className="w-2/3 py-4 px-3 align-top">Planşetlər / Elektron kitablar / Qrafik planşetlər / Planşet aksesuarları</td>
                </tr>
                <tr className="border-b border-[#e7e7e9]">
                  <td className="w-1/3 py-4 px-3  border-r border-[#e7e7e9] align-top">Kompüterlər</td>
                  <td className="w-2/3 py-4 px-3  align-top">Noutbuklar / Stolüstü kompüterlər / Monobloklar / Çanta və aksesuarlar</td>
                </tr>
                <tr className="border-b border-[#e7e7e9]">
                  <td className="w-1/3 py-4 px-3 border-r border-[#e7e7e9] align-top">Televizorlar</td>
                  <td className="w-2/3 py-4 px-3  align-top">Smart TV / LED televizorlar / TV altlıqları və kronşteynlər</td>
                </tr>
                <tr className="border-b border-[#e7e7e9]">
                  <td className="w-1/3 py-4 px-3 border-r border-[#e7e7e9] align-top">Məişət texnikası</td>
                  <td className="w-2/3 py-4 px-3  align-top">Soyuducular / Paltaryuyanlar / Qabyuyanlar / Qurutma maşınları</td>
                </tr>
                <tr className="border-b border-[#e7e7e9]">
                  <td className="w-1/3 py-4 px-3  border-r border-[#e7e7e9] align-top">Mətbəx texnikası</td>
                  <td className="w-2/3 py-4 px-3  align-top">Blenderlər / Mikserlər / Tosterlər / Qəhvə maşınları</td>
                </tr>
                <tr className="border-b border-[#e7e7e9]">
                  <td className="w-1/3 py-4 px-3 border-r border-[#e7e7e9] align-top">İqlim texnikası</td>
                  <td className="w-2/3 py-4 px-3  align-top">Kondisionerlər / İstilidicilər / Vintilyatorlar / Hava təmizləyicilər</td>
                </tr>
                <tr className="border-b border-[#e7e7e9]">
                  <td className="w-1/3 py-4 px-3  border-r border-[#e7e7e9] align-top">Foto və Video</td>
                  <td className="w-2/3 py-4 px-3  align-top">Fotoaparatlar / Videokameralar / Ekşn kameralar / Linza və obyektivlər</td>
                </tr>
                <tr className="border-b border-[#e7e7e9]">
                  <td className="w-1/3 py-4 px-3  border-r border-[#e7e7e9] align-top">Audio texnika</td>
                  <td className="w-2/3 py-4 px-3 align-top">Qulaqlıqlar / Musiqi mərkəzləri / Soundbarlar / Portativ kalonkalar</td>
                </tr>
                <tr className="border-b border-[#e7e7e9]">
                  <td className="w-1/3 py-4 px-3  border-r border-[#e7e7e9] align-top">Oyunlar və Konsollar</td>
                  <td className="w-2/3 py-4 px-3  align-top">PlayStation / Xbox / Nintendo / Oyun diskləri və aksesuarlar</td>
                </tr>
                <tr>
                  <td className="w-1/3 py-4 px-3 border-r border-[#e7e7e9] align-top">Avtomobil avadanlıqları</td>
                  <td className="w-2/3 py-4 px-3  align-top">Videoregistratorlar / Park radarları / Avtomobil tozsoranları</td>
                </tr>
              </tbody>
            </table>
         </div>
          <div>
              <h3 className="text-[20px] md:text-[20px] font-[600] text-[#323232] my-3">Sifarişi necə rəsmiləşdirmək olar:</h3>
              <ul className="space-y-3 list-decimal pl-5">
                <li>Kargomatla çatdırılma üçün uyğun kateqoriyadan məhsulu səbətə əlavə et.</li>
                <li>Sifarişin rəsmiləşdirilməsi mərhələsinə keç və əlaqə məlumatlarını daxil et.</li>
                <li>“Çatdırılma üsulları” bölməsində “Kargomat” seçimini et.</li>
                <li>Açılan pəncərədə göstərilən siyahıdan özünə ən yaxın və rahat postamat nöqtəsini seç.</li>
                <li>Seçilmiş məntəqə avtomatik olaraq “Çatdırılma üsulları” bölməsində görünəcək.</li>
                <li>Ödəniş üsulu kimi saytda kartla ödəniş seç (Kargomat çatdırılmasında yalnız kartla ödəniş və ya Birbank və Leobank taksit kartları ilə onlayn ödəniş mümkündür).</li>
                <li>Ödəniş üçün tələb olunan məlumatları daxil et və sifarişi təsdiqlə.</li>
              </ul>
              <p className="my-3">Ödəniş uğurla tamamlandıqdan sonra operator sifarişi təsdiqləmək üçün səninlə əlaqə saxlayacaq.</p>
          </div>
          <div>
              <h3 className="text-[20px] md:text-[20px] font-[600] text-[#323232] my-3">Sifarişi necə əldə etmək olar:</h3>
              <ul  className="space-y-3 list-decimal pl-5" >
                <li>Məhsul seçdiyin postamata çatdırıldıqdan sonra sənə SMS bildirişi göndəriləcək. Bildirişdə sifarişi almaq üçün unikal kod (şifrə) göstəriləcək.</li>
                <li>SMS bildirişi aldıqdan sonra 24 saat ərzində seçdiyin postamata yaxınlaş.</li>
                <li>Postamat ekranında SMS-lə göndərilən kodu daxil et.</li>
                <li>Sənin sifarişin olduğu hücrə (göz) avtomatik açılacaq və məhsulu götürə biləcəksən.</li>
              </ul>
              <p className="my-3">Vacib qeyd! Əgər sifariş 24 saat ərzində götürülməzsə, o, avtomatik olaraq anbara geri qaytarılacaq.</p>

          </div>
            </section>
          )}

          {/* 3. Pick Up bölməsi */}
          {activeTab === 'pickup' && (
            <section className="text-[#323232]">
              <h3 className="text-[20px] md:text-[20px] font-[600] text-[#323232] mb-3">Pick Up çatdırılma üsulu</h3>
              <div className="space-y-3">
                <p>Pick Up çatdırılma üsulu səbətdəki məhsul Pick Up xidmətini dəstəkləyən kateqoriyalara aiddirsə aktiv olur.</p>
                <p>Xidmət tamamilə pulsuzdur.</p>
              </div>
             <p className="my-3 italic text-[15px] font-[500]">*Pick Up çatdırılmanı dəstəkləyən kateqoriyalar</p>
             <div className="max-w-[750px] border border-[#e7e7e9] bg-white">
            <table className="w-full border-collapse text-left text-[14px] text-[#323232]">
              <tbody className="text-[18px]">
                <tr className="border-b border-[#e7e7e9]">
                  <td className="w-1/3 py-4 px-3 border-r border-[#e7e7e9] align-top">Telefonlar</td>
                  <td className="w-2/3 py-4 px-3  align-top">Smartfonlar / Oyun smartfonları / Düyməli telefonlar / Stasionar telefonlar</td>
                </tr>
                <tr className="border-b border-[#e7e7e9]">
                  <td className="w-1/3 py-4 px-3 border-r border-[#e7e7e9] align-top">Smart qadjetlər</td>
                  <td className="w-2/3 py-4 px-3 align-top">Smart saatlar / Smart qolbaqlar / Qol saatları / Uşaq smart saatları / Saat aksesuarları</td>
                </tr>
                <tr className="border-b border-[#e7e7e9]">
                  <td className="w-1/3 py-4 px-3 border-r border-[#e7e7e9] align-top">Planşetlər və el. kitablar</td>
                  <td className="w-2/3 py-4 px-3 align-top">Planşetlər / Elektron kitablar / Qrafik planşetlər / Planşet aksesuarları</td>
                </tr>
                <tr className="border-b border-[#e7e7e9]">
                  <td className="w-1/3 py-4 px-3  border-r border-[#e7e7e9] align-top">Kompüterlər</td>
                  <td className="w-2/3 py-4 px-3  align-top">Noutbuklar / Stolüstü kompüterlər / Monobloklar / Çanta və aksesuarlar</td>
                </tr>
                <tr className="border-b border-[#e7e7e9]">
                  <td className="w-1/3 py-4 px-3 border-r border-[#e7e7e9] align-top">Televizorlar</td>
                  <td className="w-2/3 py-4 px-3  align-top">Smart TV / LED televizorlar / TV altlıqları və kronşteynlər</td>
                </tr>
                <tr className="border-b border-[#e7e7e9]">
                  <td className="w-1/3 py-4 px-3 border-r border-[#e7e7e9] align-top">Məişət texnikası</td>
                  <td className="w-2/3 py-4 px-3  align-top">Soyuducular / Paltaryuyanlar / Qabyuyanlar / Qurutma maşınları</td>
                </tr>
                <tr className="border-b border-[#e7e7e9]">
                  <td className="w-1/3 py-4 px-3  border-r border-[#e7e7e9] align-top">Mətbəx texnikası</td>
                  <td className="w-2/3 py-4 px-3  align-top">Blenderlər / Mikserlər / Tosterlər / Qəhvə maşınları</td>
                </tr>
                <tr className="border-b border-[#e7e7e9]">
                  <td className="w-1/3 py-4 px-3 border-r border-[#e7e7e9] align-top">İqlim texnikası</td>
                  <td className="w-2/3 py-4 px-3  align-top">Kondisionerlər / İstilidicilər / Vintilyatorlar / Hava təmizləyicilər</td>
                </tr>
                <tr className="border-b border-[#e7e7e9]">
                  <td className="w-1/3 py-4 px-3  border-r border-[#e7e7e9] align-top">Foto və Video</td>
                  <td className="w-2/3 py-4 px-3  align-top">Fotoaparatlar / Videokameralar / Ekşn kameralar / Linza və obyektivlər</td>
                </tr>
                <tr className="border-b border-[#e7e7e9]">
                  <td className="w-1/3 py-4 px-3  border-r border-[#e7e7e9] align-top">Audio texnika</td>
                  <td className="w-2/3 py-4 px-3 align-top">Qulaqlıqlar / Musiqi mərkəzləri / Soundbarlar / Portativ kalonkalar</td>
                </tr>
                <tr className="border-b border-[#e7e7e9]">
                  <td className="w-1/3 py-4 px-3  border-r border-[#e7e7e9] align-top">Oyunlar və Konsollar</td>
                  <td className="w-2/3 py-4 px-3  align-top">PlayStation / Xbox / Nintendo / Oyun diskləri və aksesuarlar</td>
                </tr>
                <tr>
                  <td className="w-1/3 py-4 px-3 border-r border-[#e7e7e9] align-top">Avtomobil avadanlıqları</td>
                  <td className="w-2/3 py-4 px-3  align-top">Videoregistratorlar / Park radarları / Avtomobil tozsoranları</td>
                </tr>
              </tbody>
            </table>
         </div>
         <div>
              <h3 className="text-[20px] md:text-[20px] font-[600] text-[#323232] my-3">Sifarişi necə rəsmiləşdirmək olar</h3>
              <ul className="space-y-3 list-decimal pl-5" >
                <li>Pick Up ilə çatdırılma üçün uyğun olan kateqoriyadan məhsulu səbətə əlavə et və sifarişin rəsmiləşdirilməsi mərhələsinə keç.</li>
                <li>Əlaqə məlumatlarını daxil et və “Çatdırılma üsulu” bölməsində “Mağazadan götür” (Pick Up) bəndini seç.</li>
                <li>“Mağaza seç” bölməsindən sənə yaxın olan filialı əlavə et. Filialı mövcud siyahıdan və ya xəritə üzərindən seçə bilərsən.</li>
                <li>Ödəniş üsulunu kimi “Onlayn ödəniş” və ya “Mağazada ödəniş” seçib “Təsdiqlə” düyməsini bas.</li>
              </ul>
             <p className="my-3">Sifarişi təsdiqlədikdən sonra operator səninlə əlaqə saxlayaraq sifarişi rəsmiləşdirəcək və filial seçimini yoxlayacaq. Əgər seçdiyin filialda məhsul mövcud deyilsə, o, ən yaxın digər filialdan çatdırılacaq.</p>
             <p className="my-3 font-[600]">Pick up çatdırılma üsulu üçün mövcud filiallar:</p>
              <ul  className="space-y-3 list-disc pl-5">
                <li>Kontakt “Metro Azadlıq”</li>
                <li>Kontakt “Metro İnşaatçılar”</li>
                <li>Kontakt “Ukrayna dairəsi”</li>
              </ul>
             <p className="my-3">Sifarişin rəsmiləşdirilməsi zamanı fililalı seçim etdikdə ünvan, iş saatları və məhsulun həmin mağazada mövcudluğu görə biləcəksən.</p>

         </div>
            </section>
          )}

          {/* 4. Aylıq ödənişlər bölməsi */}
          {activeTab === 'ayliq' && (
            <section className="text-[#323232]">
              <h3 className="text-[20px] md:text-[20px] font-[600] text-[#323232] mb-3">Aylıq ödənişlərin həyata keçməsi</h3>
             <p className="my-3 font-[600]">Aylıq ödənişlərimi necə həyata keçirə bilərəm ?</p>
              <ul className="space-y-3 list-disc pl-5 font-[600]">
                <li>Terminal vasitəsilə</li>
              </ul>
               <div className=" mt-3"> 
                    <p>Aylıq ödənişləri şəhərdə mövcud olan MilliÖn terminallarından edə bilərsən.</p>
                    <p>Bunun üçün e-manat və million terminallarının əsas menyunun ikinci səhifəsində olan "Mağazalar şəbəkəsi və E-ticarət" qovluğuna daxil olub, "Kontakt"-ı seçməlisən. Daha sonra öz şəxsiyyət vəsiqənin FIN kodunu və müqavilə nömrəsini daxil edərək ödənişləri edə bilərsən.</p>
                </div>
                 <ul className="space-y-3 list-disc pl-5 font-[600] my-3">
                <li>Onlayn şəkildə</li></ul>
                <p className="my-3">Qeyd olunan linklə daxil olaraq ödəniş üsullardan birini istifadə edərək həyata keçirməyin mümkündür:</p>
              <ul className="space-y-3 list-decimal pl-5"> 
                <li className="text-[#1d4ed8] hover:underline "><a href="https://www.million.az/services/ecommerce/Kontakt">MilliÖn</a></li>
                <li className="text-[#1d4ed8] hover:underline "><a href="https://portmanat.az/project/Kontakt">portmanat</a></li>
                <li className="text-[#1d4ed8] hover:underline "><a href="https://hesab.az/unregistered/#/direct-pay/store/Kontakt/parameters?portalPay=kontakt&lang=az"> HESAB.AZ</a></li>
              </ul>
              <ul className="my-3 list-disc pl-5 font-[600]">
                <li>Tətbiq vasitəsilə</li>
              </ul>
              <ul className="list-decimal pl-5">
                <li>Telefonunda MilliÖn tətbiqi (aplikasiya) mövcuddursa, həmin tətbiqdə "Xidmətlər" bölməsindən "Mağazalar şəbəkəsi və E-ticarət" qovluğuna daxil olaraq "Kontakt"-ı seçib, öz şəxsiyyət vəsiqənin FİN kodunu və müqavilə nömrəsini daxil edərək ödənişləri edə bilərsən.</li>
                <p>Android cihazlar üçün:  <span className="text-[#1d4ed8] hover:underline"><a href="https://play.google.com/store/apps/details?id=com.safaroff.million_android&pli=1">Play market million app</a></span></p>
                <p>İOS cihazlar üçün: <span  className="text-[#1d4ed8] hover:underline"><a href="https://apps.apple.com/az/app/milli%C3%B6n/id1456249791">App store million app</a></span></p>
                <li className="mt-5">
                  Telefonununda ABB mobil tətbiqi (aplikasiya) mövcuddursa, həmin tətbiqdə "Ödənişlər" bölməsinə daxil olaraq – "Kredit" qovluğuna keçid edirsən. Burada "Kontakt"-ı seçib öz şəxsiyyət vəsiqənin FİN kodunu və müqavilə nömrəsini daxil edərək ödənişləri edə bilərsən.
                  <p>Android cihazlar üçün: <span className="text-[#1d4ed8] hover:underline"><a href="https://play.google.com/store/apps/details?id=iba.mobilbank">Play market ABB app  </a></span></p>
                  <p>İOS cihazlar üçün: <span className="text-[#1d4ed8] hover:underline"><a href="https://apps.apple.com/az/app/abb-mobile-bank-tez-kredit/id1251456175">App store ABB app </a></span></p>
                </li>
              </ul>
              <div className="flex flex-col items-center gap-4 justify-center my-4">
                <img className="max-w-[230px]" src={QR} alt="qr" />
                <p className="font-[550] text-[14px]">Tətbiqə keçid üçün QR kodu skan edə bilərsən</p>
              </div>
              <ol className="list-decimal pl-5 " start="3">
                <li>Telefonunda BirBank mobil tətbiqi (aplikasiya) mövcuddursa, həmin tətbiqdə "Ödənişlər və Köçürmələr" bölməsinə daxil olaraq – "Bütün" qovluğuna keçid edirsən. Burada "Kredit" qovluğuna keçid alaraq "Kontakt"-ı seçib öz şəxsiyyət vəsiqənin FİN kodunu və müqavilə nömrəsini daxil edərək ödənişləri edə bilərsən .</li>
                <p>Android cihazlar üçün: <span className="text-[#1d4ed8] hover:underline"><a href="https://play.google.com/store/apps/details?id=az.kapitalbank.mbanking"> Play market BirBank app</a></span></p>
                <p>İOS cihazlar üçün: <span className="text-[#1d4ed8] hover:underline"><a href="https://apps.apple.com/az/app/birbank/id1293207342">App store BirBank app</a></span></p>
              </ol>
             <p className="my-3 font-[600]">FİN kod nədir?</p>
              <p className="mt-3">FİN kod – şəxsiyyət vəsiqənin sağ aşağı küncündəki, axırdan birinci simvolu buraxmaqla, sonrakı 7 simvoldan ibarət koddur.</p>
              <p>Yeni şəxsiyyət vəsiqələrində Fərdi İdentifikasiya Nömrəsi (FİN kod) vəsiqənin üzərində qeyd olunub.</p>
              <div className="flex justify-center items-center my-4">
                <img className="max-w-[230px]" src={Shexsiyyet} alt="Shexsiyyet" />
              </div>
             <p className="my-3 font-[600]">Müqavilə nömrəsi nədir?</p>
             <p>Əldə etdiyin məhsula aid ödəniş cədvəlində qeyd olunan rəqəmlər toplusudur (Bunu izah etmək üçün şəkil yerləşdiriləcək). Əgər ödəniş cədvəli hazırda səndə deyilsə, müqavilə nömrəsini öyrənmək üçün *6060 Çağrı Mərkəzimizə zəng edə, 050 828 60 60 WhatsApp nömrəmizə və ya sosial şəbəkələrdən bizə mesaj yaza bilərsən. https://kontakt.az/catdirilma-ve-odeme</p>
             <p className="mb-3 mt-6 font-[600]">Taksit kartı ilə sizdən məhsul əldə etmişdim, aylıq ödənişimi necə edim?</p>
              <p>Taksit kartı ilə əldə olunan məhsul nağd alış olduğu üçün sən aylıq ödənişi banka edirsən. Bu halda ödənişi həyata keçirmək üçün taksit kartını əldə etdiyin müvafiq banka müraciət etməlisən.</p>
            </section>
          )}

        </div>

      </div>
    </section>
  );
}

export default DoorClearance;